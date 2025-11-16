<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/lib/supabase";

const isAdmin = ref(false);
const session = ref(null);

const content = ref([]);
const rating = ref("");
const improvement = ref([]);
const comments = ref("");
const contact = ref("");

const msg = ref("");

// Admin table
const feedbackList = ref([]);

async function loadSession() {
  const { data } = await supabase.auth.getSession();
  session.value = data.session;

  if (!session.value) return;

  const userId = session.value.user.id;

  // Fetch role
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .single();

  if (profile?.role?.toLowerCase() === "admin") {
    isAdmin.value = true;
    loadAllFeedback();
  }
}

// Load all feedback for admin
async function loadAllFeedback() {
  const { data, error } = await supabase
    .from("feedback")
    .select("*")
    .order("submittedAt", { ascending: false });

  if (!error) {
    feedbackList.value = data;
  }
}

// Submit feedback
async function submitFeedback() {
  msg.value = "";

  if (!rating.value || rating.value < 1 || rating.value > 5) {
    msg.value = "Rating must be between 1 and 5.";
    return;
  }

  const payload = {
    content: content.value,
    rating: Number(rating.value),
    improvement: improvement.value,
    comments: comments.value,
    contact: contact.value,
    submittedAt: new Date().toISOString(),
  };

  const { error } = await supabase.from("feedback").insert([payload]);

  if (error) {
    msg.value = "Error submitting feedback.";
  } else {
    msg.value = "Thank you! Feedback submitted.";
    content.value = [];
    rating.value = "";
    improvement.value = [];
    comments.value = "";
    contact.value = "";
  }
}

onMounted(() => {
  loadSession();
});

function toArray(value) {
  if (Array.isArray(value)) return value;

  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      return [value]; // fallback for weird strings
    }
  }

  return [];
}

</script>

<template>
  <main>
    <p style="margin:0; background-color:#F5F7FA; text-align:center;">
      <span class="lato-bold" style="font-size:150%;">Feedback</span>
    </p>
    <br />

    <!-- USER FEEDBACK FORM -->
    <div v-if="!isAdmin">
      <form @submit.prevent="submitFeedback" class="feedbackForm">
        <!-- Content -->
        <fieldset>
          <legend>What did you listen to?</legend>
          <label><input type="checkbox" value="News" v-model="content"> News</label>
          <label><input type="checkbox" value="Weather" v-model="content"> Weather</label>
          <label><input type="checkbox" value="Research" v-model="content"> Research</label>
        </fieldset>

        <!-- Rating -->
        <label>Rate the podcast (1–5)</label>
        <input type="number" v-model="rating" min="1" max="5">

        <!-- Improvement -->
        <fieldset>
          <legend>What could be better?</legend>
          <label><input type="checkbox" value="Audio Quality" v-model="improvement"> Audio Quality</label>
          <label><input type="checkbox" value="Content Relevance" v-model="improvement"> Content Relevance</label>
        </fieldset>

        <!-- Comments -->
        <label>Comments</label>
        <textarea v-model="comments" rows="4"></textarea>

        <!-- Contact -->
        <label>Optional Contact Info</label>
        <input type="text" v-model="contact">

        <button type="submit">Submit</button>
        <p>{{ msg }}</p>
      </form>
    </div>

    <!-- ADMIN TABLE -->
    <div v-if="isAdmin" class="adminTable">
      <h2>Submitted Feedback</h2>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Content</th>
            <th>Rating</th>
            <th>Improvement</th>
            <th>Comments</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="fb in feedbackList" :key="fb.id">
            <td>{{ new Date(fb.submittedAt).toLocaleString() }}</td>
            <td>{{ toArray(fb.content).join(", ") }}</td>
            <td>{{ fb.rating }}</td>
            <td>{{ toArray(fb.improvement).join(", ") }}</td>
            <td>{{ fb.comments }}</td>
            <td>{{ fb.contact }}</td>
          </tr>

          <tr v-if="feedbackList.length === 0">
            <td colspan="6" style="text-align:center;">No feedback found.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- FOOTER -->
    <div class="footer">
      <p class="lato-regular">
        <span style="color:#FFFFFF;">© 2025 FAU Engineering rAIdio Station.</span>
        <a href="/privacy">Privacy Policy</a>
      </p>
    </div>
  </main>
</template>

<style scoped>
    /* General Styles */
  .lato-regular {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
}

.lato-bold {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.graphic {
  width: 85%;
}

.logo {
  height: 60%;
}

h1 {
  color: #292A2B; 
  margin-bottom: 5px; 
  line-height: 1.15; 
  font-size: 60px;
  text-align: left;
}

p  {
  color: #292A2B; 
  text-align: left;
  margin: 6%;
  margin-bottom: 0;
  line-height: 1.5; 
  padding: 20px 20px 20px 20px;
  }

body {
  margin: 0; 
  padding: 0; 
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

html {background-color: #FFFFFF; margin: 0; padding: 0; height: 100%;}
    body {
      margin: 0;
      padding: 0;
      font-family: 'Lexend', sans-serif;
      background-color: #ffffff;
      color: #292A2B;
    }

    h1, h2 {
      text-align: center;
      color: #003366;
    }

    p {
      line-height: 1.6;
      margin: 10px 0;
    }

    a {
      text-decoration: none;
      color: #003366;
    }

    a:hover {
      text-decoration: underline;
    }

     .topnav {
  display: flex;
  align-items: center;
  height: 10%;
  text-decoration: none;
  column-gap: 20px;
  overflow: hidden;
  margin: 0;
  padding: 0px 60px 0px 60px;
  background-image: white;
}

.topnav a {
  display: inline-block;
  text-decoration: none;
  color: #292A2B;
  padding: 14px 16px;
  font-size: 15px;
}

.topnav a:hover {
  color: #85B9EB;
}

.topnav a.active {
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 100%;
  color: #85B9EB;
}

.topnav input[type=search] {
  margin-left: auto;
  padding: 6px;
  border-style: solid;
  border-width: 1px;
  border-color: #ccc;
  margin-top: 4px;
  margin-right: 16px;
  font-size: 14px;
  border-radius: 23px;
}

.button {
  background-color: #003366;
  border: none;
  color: white;
  padding: 15px 25px 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px 2px;
  cursor: pointer;
}
.button1 {border-radius: 32px;}

.button1:hover {
  background-color: #85B9EB;
  color: white;
}

    /* ====== Feedback form styles (merged) ====== */
main { padding: 24px; }
form {
  width: 90%;
  max-width: 600px;
  margin: 24px auto;
  background-color: #ada7a7;
  padding: 20px;
  border-radius: 12px;
  font-family: 'Lexend', sans-serif;
  color: #292A2B;
}
fieldset { border: none; padding: 0; margin: 0 0 16px; }
legend { font-weight: bold; margin-bottom: 8px; }
label { font-weight: bold; display: inline-block; margin: 8px 0 6px; }
.form-row { margin-bottom: 14px; }

input[type="text"],
input[type="number"],
textarea {
  width: 95%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
}

.checkbox-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 8px 16px;
  margin-top: 6px;
}

    button[type="submit"] {
  background-color: #005499;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
}
button[type="submit"]:hover { filter: brightness(1.05); }
.help { font-size: 12px; opacity: 0.8; }
.success { color: #0a7a2f; margin-top: 10px; font-weight: 600; }
.error { color: #b00020; margin-top: 10px; }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    table th, table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    table th {
      background-color: #003366;
      color: white;
    }

    .success {
      color: #0a7a2f;
      margin-top: 10px;
      font-weight: 600;
    }

    .error {
      color: #b00020;
      margin-top: 10px;
    }

    /* Footer Section */
    .footer {
      text-align: center;
      background: #003366;
      color: white;
      margin-top: auto;
      padding: 10px;
    }

    .footer a {
      color: #85B9EB;
    }

    .footer a:hover {
      color: #CC0000;
}
</style>
