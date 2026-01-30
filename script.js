// Change background color randomly when button is clicked
document.getElementById("colorBtn").addEventListener("click", function() {
  const colors = ["#f4f4f4", "#ffeaa7", "#fab1a0", "#81ecec", "#55efc4", "#dfe6e9"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});