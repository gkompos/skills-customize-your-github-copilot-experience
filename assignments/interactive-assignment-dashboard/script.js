const searchInput = document.getElementById("search-input");
const topicFilter = document.getElementById("topic-filter");
const sortOrder = document.getElementById("sort-order");
const status = document.getElementById("status");
const assignmentList = document.getElementById("assignment-list");

let assignments = [];

function isOverdue(dueDate) {
  const today = new Date();
  const due = new Date(dueDate);
  return due < new Date(today.getFullYear(), today.getMonth(), today.getDate());
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString();
}

function populateTopicOptions(data) {
  const topics = [...new Set(data.map((item) => item.topic))].sort();

  for (const topic of topics) {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    topicFilter.append(option);
  }
}

function renderCards(data) {
  assignmentList.innerHTML = "";

  if (data.length === 0) {
    status.textContent = "No matching assignments.";
    return;
  }

  status.textContent = `Showing ${data.length} assignment(s).`;

  for (const assignment of data) {
    const card = document.createElement("article");
    card.className = `card ${isOverdue(assignment.dueDate) ? "overdue" : ""}`;

    card.innerHTML = `
      <h3>${assignment.title}</h3>
      <p><strong>Topic:</strong> ${assignment.topic}</p>
      <p><strong>Due:</strong> ${formatDate(assignment.dueDate)}</p>
      <p class="muted">${assignment.description}</p>
    `;

    assignmentList.append(card);
  }
}

function getFilteredAndSortedData() {
  const searchText = searchInput.value.trim().toLowerCase();
  const selectedTopic = topicFilter.value;
  const selectedSort = sortOrder.value;

  const filtered = assignments.filter((item) => {
    const matchesText = item.title.toLowerCase().includes(searchText);
    const matchesTopic = selectedTopic === "all" || item.topic === selectedTopic;
    return matchesText && matchesTopic;
  });

  filtered.sort((a, b) => {
    const left = new Date(a.dueDate).getTime();
    const right = new Date(b.dueDate).getTime();
    return selectedSort === "asc" ? left - right : right - left;
  });

  return filtered;
}

function updateView() {
  renderCards(getFilteredAndSortedData());
}

async function loadAssignments() {
  try {
    const response = await fetch("assignments.json");

    if (!response.ok) {
      throw new Error("Could not load assignment data.");
    }

    assignments = await response.json();

    if (assignments.length === 0) {
      status.textContent = "No assignments available.";
      return;
    }

    populateTopicOptions(assignments);
    updateView();
  } catch (error) {
    status.textContent = `Error: ${error.message}`;
  }
}

searchInput.addEventListener("input", updateView);
topicFilter.addEventListener("change", updateView);
sortOrder.addEventListener("change", updateView);

loadAssignments();
