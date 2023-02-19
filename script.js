const button = document.getElementById("color-changer");
const colors = ["#ff6347", "#ffa500", "#ffd700", "#90ee90", "#87cefa", "#9370db"];

function changeColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

button.addEventListener("click", changeColor);
