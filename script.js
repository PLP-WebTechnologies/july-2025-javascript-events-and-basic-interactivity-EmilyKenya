// Part 1: Event Handling - Counter
let score = 0;
const counterBtn = document.getElementById("counterBtn");
const scoreDisplay = document.getElementById("score");

counterBtn.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});

// Part 2a: Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Part 2b: Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// Part 2c: Dropdown Menu
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("dropdownContent");

dropdownBtn.addEventListener("click", () => {
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});

// Close dropdown when clicking outside
window.addEventListener("click", (event) => {
  if (!event.target.matches("#dropdownBtn")) {
    dropdownContent.style.display = "none";
  }
});

// Part 2d: Tabbed Interface
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons and contents
    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // Add active to clicked button and matching content
    btn.classList.add("active");
    const tabId = btn.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Part 3: Form Validation
const form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  // Clear previous messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formMessage").textContent = "";

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").textContent =
      "Name must be at least 2 characters.";
    valid = false;
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Enter a valid email (e.g. user@example.com).";
    valid = false;
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  const passwordRegex = /^(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be 6+ characters and contain at least one number.";
    valid = false;
  }

  // Success
  if (valid) {
    document.getElementById("formMessage").textContent =
      "✅ Registration successful!";
    form.reset();
  }
});
