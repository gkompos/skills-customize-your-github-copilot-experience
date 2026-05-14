# 📘 Assignment: Interactive Assignment Dashboard

## 🎯 Objective

Build a small web app that reads assignment data from a JSON file and displays it as interactive cards. You will practice core frontend skills: fetching data, rendering with the DOM, and adding user-friendly filters.

## 📝 Tasks

### 🛠️ Task 1: Load and Render Assignment Cards

#### Description
Use JavaScript to load the provided `assignments.json` file and render each assignment as a card in the page.

#### Requirements
Completed program should:

- Fetch assignment data from `assignments.json`
- Render one card per assignment inside the `#assignment-list` container
- Show each assignment's title, topic, and due date on the card
- Display a clear message when no assignments are available

### 🛠️ Task 2: Add Search and Topic Filtering

#### Description
Make the dashboard interactive by letting users search assignments by title and filter them by topic.

#### Requirements
Completed program should:

- Filter cards as the user types in the search input
- Filter cards when the user selects a topic from the dropdown
- Apply search and topic filters together
- Show a "No matching assignments" message when filters return zero results

### 🛠️ Task 3: Sort by Due Date and Improve UX (Stretch Goal)

#### Description
Add a sorting control for due dates and small UI improvements that make the dashboard easier to use.

#### Requirements
Completed program should:

- Add due-date sorting (nearest first and latest first)
- Keep selected filters active when sorting changes
- Highlight overdue assignments with a visual style
- Add basic responsive layout so cards look good on mobile and desktop
