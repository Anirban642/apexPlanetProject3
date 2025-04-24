document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      q: "What is the capital of India?",
      c: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      a: 1
    },
    {
      q: "Which language runs in a web browser?",
      c: ["Java", "C", "Python", "JavaScript"],
      a: 3
    },
    {
      q: "Which planet is known as the Red Planet?",
      c: ["Earth", "Mars", "Jupiter", "Venus"],
      a: 1
    },
    {
      q: "Who developed the theory of relativity?",
      c: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
      a: 1
    },
    {
      q: "What is the largest ocean on Earth?",
      c: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      a: 3
    }
  ];

  let current = 0;
  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const nextBtn = document.getElementById("next-btn");

  function loadQuestion() {
    const q = questions[current];
    questionEl.textContent = q.q;
    choicesEl.innerHTML = "";
    q.c.forEach((choice, i) => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.onclick = () => {
        btn.style.background = i === q.a ? "#66bb6a" : "#ef5350";
        Array.from(choicesEl.children).forEach(b => b.disabled = true);
      };
      choicesEl.appendChild(btn);
    });
  }

  nextBtn.onclick = () => {
    current = (current + 1) % questions.length;
    loadQuestion();
  };

  loadQuestion();

  const jokeBtn = document.getElementById("joke-btn");
  const jokeEl = document.getElementById("joke");

  jokeBtn.onclick = async () => {
    try {
      const res = await fetch("https://official-joke-api.appspot.com/jokes/random");
      const data = await res.json();
      jokeEl.textContent = `${data.setup} - ${data.punchline}`;
    } catch {
      jokeEl.textContent = "Failed to load joke. Try again!";
    }
  };
});
