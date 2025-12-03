// =========================
// TO-DO LIST
// =========================

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

function addTask() {
    const taskInput = document.getElementById("taskInput");
    if (taskInput.value.trim() === "") return;

    tasks.push({ text: taskInput.value, done: false });
    taskInput.value = "";

    saveTasks();
    renderTasks();
}

function toggleTaskCompleted(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, i) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" ${task.done ? "checked" : ""} onclick="toggleTaskCompleted(${i})">
            ${task.text}
            <button onclick="deleteTask(${i})">X</button>
        `;
        list.appendChild(li);
    });
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// =========================
// TRIP PLANNING
// =========================

function saveTripPlan() {
    const dest = document.getElementById("destInput").value;
    const date = document.getElementById("dateInput").value;
    const transport = document.getElementById("transportInput").value;
    const hotel = document.getElementById("hotelInput").value;
    const budget = document.getElementById("budgetInput").value;

    const plan = { dest, date, transport, hotel, budget };
    localStorage.setItem("tripPlan", JSON.stringify(plan));

    updateMap(dest);
    showTripSummary(plan);
    calculateTotals();
}

function updateMap(destination) {
    const map = document.getElementById("mapFrame");
    const url = `https://www.google.com/maps?q=${encodeURIComponent(destination)}&output=embed`;
    map.src = url;
}

function showTripSummary(plan) {
    const box = document.getElementById("tripSummary");
    box.innerHTML = `
        <p><b>Destination:</b> ${plan.dest}</p>
        <p><b>Date:</b> ${plan.date}</p>
        <p><b>Transport:</b> ${plan.transport}</p>
        <p><b>Hotel:</b> ${plan.hotel}</p>
        <p><b>Budget:</b> $${plan.budget}</p>
    `;
}

// =========================
// FINANCIAL TRACKER
// =========================

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
renderExpenses();
calculateTotals();

function addExpense() {
    const category = document.getElementById("expCategory").value;
    const amount = Number(document.getElementById("expAmount").value);
    const note = document.getElementById("expNote").value;

    if (!amount) return;

    expenses.push({ category, amount, note });
    saveExpenses();
    renderExpenses();
    calculateTotals();
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    saveExpenses();
    renderExpenses();
    calculateTotals();
}

function renderExpenses() {
    const list = document.getElementById("expenseList");
    list.innerHTML = "";

    expenses.forEach((exp, i) => {
        const li = document.createElement("li");
        li.innerHTML = `${exp.category} - $${exp.amount} (${exp.note})
        <button onclick="deleteExpense(${i})">X</button>`;
        list.appendChild(li);
    });
}

function calculateTotals() {
    const plan = JSON.parse(localStorage.getItem("tripPlan")) || {};
    const budget = Number(plan.budget) || 0;

    const spent = expenses.reduce((a, b) => a + b.amount, 0);

    document.getElementById("totalSpent").innerText = spent;
    document.getElementById("remaining").innerText = budget - spent;
}

function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}
