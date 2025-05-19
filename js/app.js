var heading = document.getElementById("color-code");
var color_change;
var currentColor = null;

function getHexColor() {
  let color = Math.floor(Math.random() * 16777216).toString(16);
  currentColor = color;
  return "#" + color.padStart(6, "0"); // Ensures 6-digit hex code
}

const getRandomColor = () => {
  var red = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  var green = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  var blue = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  var color = red + green + blue;
  currentColor = color;
  return "#" + color;
};

function change() {
  const color = getHexColor(); // Or however you generate colors
  document.body.style.backgroundColor = color;
  const colorDisplay = document.getElementById("color-code");
  colorDisplay.textContent = color;
  colorDisplay.style.display = "inline-block";
}

function start() {
  interval = setInterval(change, 3000);
  change();
}

function stop() {
  clearInterval(interval);
}

function saveBackgroundColor() {
  if (!currentColor) {
    alert("Please generate a color first!");
    return;
  }
  const savedColors = JSON.parse(localStorage.getItem("savedColors")) || [];
  savedColors.push(currentColor);
  localStorage.setItem("savedColors", JSON.stringify(savedColors));
  console.log("Color saved:", currentColor, savedColors);
}

$("#text-color-change").click(() => {
  let p_color = getHexColor();
  $("#message-box").css("color", p_color);
  $("#text-color-change").html(p_color);
});
