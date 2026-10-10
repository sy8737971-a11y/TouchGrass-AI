# 🌿 TouchGrass AI — Less Scrolling, More Exploring

**An open-source AI-powered outdoor adventure companion that encourages people to put down their phones and reconnect with nature.**

![Project](https://img.shields.io/badge/Project-TouchGrass%20AI-245c3a)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![CSS](https://img.shields.io/badge/CSS-Responsive-blue)
![AI](https://img.shields.io/badge/AI-Open--Source-green)
![License](https://img.shields.io/badge/License-MIT-brightgreen)

## 🌱 About the Project

TouchGrass AI is a web application built for the **Touch Grass** theme. It uses open-source AI to inspire people to spend less time on screens and more time exploring the natural world.

From discovering leaves and listening to birds to exploring gardens and taking mindful walks, TouchGrass AI turns simple outdoor activities into fun missions.

Our philosophy is simple:

> Technology should inspire us to explore the real world, not keep us trapped behind a screen.

## ✨ Features

- 🌿 **AI-Powered Missions:** Generate outdoor activity ideas using an open-weight AI model.
- 🍃 **Nature Exploration:** Discover simple activities involving plants, trees, birds, and the outdoors.
- 🎯 **Daily Challenges:** Get inspiration for screen-free adventures.
- 🏆 **Nature Points:** Earn points for completing outdoor missions.
- 📊 **Progress Tracking:** Track completed missions and points during your session.
- 📱 **Responsive Design:** Use the application on desktop and mobile browsers.
- 🔄 **Fallback Missions:** Continue exploring with built-in missions if the AI model cannot load.
- 💚 **Screen-Free Philosophy:** Keep app interactions short and prioritize real-world experiences.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Web page structure |
| CSS3 | Responsive design and styling |
| JavaScript | Application logic and interactions |
| Transformers.js | Browser-based AI inference |
| FLAN-T5 Small | Open-weight language model |

## 🧠 How Open-Source AI Powers the Project

TouchGrass AI uses the `Xenova/flan-t5-small` model through Transformers.js to generate outdoor activity suggestions.

The open-weight approach offers several advantages:

- **Greater control:** Developers can inspect the model's documentation and change the AI implementation.
- **Device-based inference:** Model inference can run in the browser rather than requiring a paid AI API for every request.
- **Privacy potential:** User prompts can be processed locally without sending them to a separate AI inference server.
- **Accessibility:** Developers can experiment with open-weight AI without building a model from scratch.

**Current limitation:** The model must initially be downloaded, so an internet connection is needed for first-time setup. Fully offline operation depends on model caching and other assets being available locally.

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Visual Studio Code or another code editor
- An internet connection for loading the AI library and model
- The Live Server extension for VS Code

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/YOUR-USERNAME/touchgrass-ai.git
```

**2. Enter the project directory**

```bash
cd touchgrass-ai
```

**3. Open the project in VS Code**

```bash
code .
```

**4. Run the application**

Install the Live Server extension, right-click `index.html`, and choose **Open with Live Server**.

**5. Generate your first mission**

Click **Generate My Mission** and wait for the AI model to load. If the model is unavailable, the application will display a built-in mission.

## 📂 Project Structure

```text
touchgrass-ai/
├── index.html      # Application structure
├── style.css       # Styling and responsive layout
├── script.js       # AI integration and app logic
└── README.md       # Project documentation
```

## 🎮 How to Use

1. Open TouchGrass AI in your browser.
2. Click **Generate My Mission**.
3. Read your outdoor activity suggestion.
4. Complete the activity safely in the real world.
5. Click **Mark as Completed**.
6. Earn nature points and track your progress.
7. Return for another mission when you need inspiration.

## 🌍 Example Missions

- 🍃 Observe three different kinds of leaves.
- 🐦 Listen to birds and other natural sounds.
- 🌳 Explore the features of a nearby tree.
- 🌱 Learn how to care for a plant.
- 🚶 Take a mindful walk in a safe outdoor area.

Always respect wildlife, private property, and your surroundings. Avoid touching unknown plants or animals.

## 🔮 Future Improvements

- 📸 AI-powered plant and bird identification from photos.
- 📍 Location-aware outdoor activity suggestions.
- 🌦️ Weather-aware missions.
- 💾 Persistent progress using local storage.
- 📡 Improved offline functionality.
- 🗺️ Nature trails and park discovery.
- 🌳 Community challenges and environmental activities.
- 🏅 Achievement badges and weekly goals.

## 💡 Why This Project Matters

Technology has enormous potential, but spending too much time on screens can reduce opportunities to explore and appreciate the outdoors.

TouchGrass AI explores a different approach: use AI as a starting point for real-world experiences.

By building on open-weight AI, developers can experiment with models, improve the experience, and adapt the project without depending entirely on closed AI services.

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository.
2. Create a feature branch.
3. Make your changes.
4. Test your changes.
5. Submit a pull request describing your improvement.

Ideas for contributions include better missions, accessibility improvements, new AI models, and offline support.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

Note: The project license and the AI model's license are separate. Check the selected model's license before redistributing model files or using the model commercially.

## 🌿 Final Thought

**Less scrolling. More exploring. More nature.**

Built with curiosity, JavaScript, and open-source AI.

If you like this project, consider giving the repository a ⭐ on GitHub!
