// =====================================================
//  👋 STUDENTS: Add yourself to this list!
//  1. Copy one of the lines below
//  2. Change the name, emoji and GitHub username
//  3. Don't forget the comma at the end of the line
//  4. Commit, push, and open a Pull Request
// =====================================================
const contributors = [
  { name: "Bishal", emoji: "🧑‍🏫", github: "your-github-username" },
  // { name: "Your Name", emoji: "😎", github: "your-username" },
];


// ----- Show contributor cards on the page -----
const container = document.getElementById("contributors");

contributors.forEach(function (person) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="emoji">${person.emoji}</div>
    <strong>${person.name}</strong><br>
    <a href="https://github.com/${person.github}" target="_blank">@${person.github}</a>
  `;
  container.appendChild(card);
});


// ----- Commit counter button -----
let count = 0;
const countText = document.getElementById("count");
const commitBtn = document.getElementById("commitBtn");

commitBtn.addEventListener("click", function () {
  count = count + 1;
  countText.textContent = count;
});


// ----- Dark mode toggle -----
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeBtn.textContent = isDark ? "☀️ Light mode" : "🌙 Dark mode";
});
