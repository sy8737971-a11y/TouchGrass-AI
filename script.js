
import { pipeline, env } from
  "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.7.2";

const $ = (id) => document.getElementById(id);

const missions = [
  {
    title: "🍃 Become a Leaf Detective",
    description: "Find three different leaves. Observe their shapes, colors, and textures without picking or damaging them.",
    duration: 10
  },
  {
    title: "🐦 Listen to Nature",
    description: "Spend a few quiet minutes outdoors. Listen for birds, wind, and other natural sounds.",
    duration: 10
  },
  {
    title: "🌳 Tree Explorer",
    description: "Find a tree in a safe outdoor area. Observe its bark, branches, and leaves.",
    duration: 10
  },
  {
    title: "🌱 Start a Green Habit",
    description: "Water a plant or learn about a native plant that grows in your region.",
    duration: 10
  },
  {
    title: "🚶 Mindful Nature Walk",
    description: "Take a walk in a safe place with permission. Notice the sky, trees, and sounds around you.",
    duration: 15
  }
];

let generator = null;
let currentMission = null;
let completed = 0;
let points = 0;
let loading = false;

function showMission(mission) {
  currentMission = mission;

  $("missionTitle").textContent = mission.title;
  $("missionDescription").textContent = mission.description;
  $("missionDuration").textContent =
    `⏱ ${mission.duration} minutes`;

  $("completeBtn").disabled = false;
}

function randomMission() {
  return missions[Math.floor(Math.random() * missions.length)];
}

async function loadAI() {
  if (generator) return generator;

  if (loading) {
    throw new Error("Model is already loading");
  }

  loading = true;

  try {
    env.allowLocalModels = false;

    generator = await pipeline(
      "text2text-generation",
      "Xenova/flan-t5-small"
    );

    return generator;
  } finally {
    loading = false;
  }
}

$("generateBtn").addEventListener("click", async () => {
  $("generateBtn").disabled = true;
  $("completeBtn").disabled = true;

  try {
    $("status").textContent =
      "Loading open-source AI. The first download may take time...";

    const ai = await loadAI();

    $("status").textContent = "Creating your outdoor mission...";

    const result = await ai(
      "Suggest one simple safe outdoor nature activity for a beginner. " +
      "Write two short sentences. Protect plants and animals.",
      {
        max_new_tokens: 80
      }
    );

    const answer = result[0].generated_text.trim();

    if (!answer || answer.length < 10) {
      throw new Error("Empty AI response");
    }

    showMission({
      title: "🌿 Your AI Nature Mission",
      description: answer,
      duration: 10
    });

    $("status").textContent =
      "Mission created with open-source AI!";
  } catch (error) {
    console.error("AI unavailable:", error);

    showMission(randomMission());

    $("status").textContent =
      "Showing a ready-made mission. Check your internet connection to load AI.";
  } finally {
    $("generateBtn").disabled = false;
  }
});

$("completeBtn").addEventListener("click", () => {
  if (!currentMission) return;

  completed++;
  points += 10;

  $("completed").textContent = completed;
  $("points").textContent = points;

  const progress = (completed % 5) * 20;
  $("bar").style.width =
    completed % 5 === 0 ? "100%" : `${progress}%`;

  $("progressText").textContent =
    `Great job! You completed ${completed} mission(s).`;

  $("missionTitle").textContent = "🎉 Adventure Completed!";
  $("missionDescription").textContent =
    "Well done! Enjoy your time outdoors. Come back when you need another idea.";

  $("completeBtn").disabled = true;
});

