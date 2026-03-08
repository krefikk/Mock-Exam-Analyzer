# Mock Exam Analyzer

**Mock Exam Analyzer** is a modern, offline-first Progressive Web App (PWA) designed to help students track their mock exam results, analyze their mistakes by topic, and generate actionable study tasks.

**Live:** [(https://krefikk.github.io/Mock-Exam-Analyzer/)]

## Key Features

* **PWA Support:** Install the app directly to your smartphone's or computer's home screen for a native app-like experience.
* **Offline-First Architecture:** All data is stored locally on your device (`localStorage`). You don't need an internet connection to log exams, analyze topics, or view your stats.
* **Detailed Exam Tracking:** Record your scores, correct/incorrect answers, and completion times for both General and Subject-Specific mock exams.
* **Smart Progress Charts:** Visualize your net score trends with interactive charts powered by Chart.js. General and subject-specific exams are separated automatically for better readability.
* **Topic-Based Analysis:** Automatically identifies your weakest areas ("Hardest Topics") by calculating exactly where you make the most mistakes across all exams.
* **Automated To-Do List:** Generates personalized study tasks and revision suggestions based on your incorrect answers.
* **Highly Customizable:** Add new subjects, manage topics, and reorder them using an intuitive Drag & Drop interface in the settings.
* **Privacy-Focused Data Backup (JSON):** Export your entire progress as a JSON file and import it to any other device. No servers, no databases, 100% data privacy.

## How to Use

1. **Add an Exam:** Go to the "Exams" tab and log your latest mock exam results (type of exam, correct/incorrect counts, and time taken).
2. **Log Mistakes:** On the home screen, select the exam you just added and input how many mistakes you made per specific topic.
3. **Track Progress:** Check the "Progress" and "Hardest Topics" tabs to see which subjects and topics need more attention.
4. **Create Tasks:** Generate a smart study plan from the "To-Do" tab based on the app's customized recommendations.

## Technologies Used

* **HTML5, CSS3, Vanilla JavaScript (ES6+):** Built entirely without heavy frameworks (no React, Vue, etc.) for lightning-fast performance and minimal resource usage.
* **Chart.js:** For rendering responsive and dynamic data charts.
* **Service Workers & Web App Manifest:** Configured for offline caching and PWA installation.
