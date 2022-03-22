var heading = document.getElementById('heading-1');
var lorem = $("#lorem");
var color_change;

function start() {
  color_change = setInterval(function() {
    document.body.style.backgroundColor = heading.innerHTML = '#' +
    Math.floor(Math.random() * 16777216).toString(16);
  }, 3000);
  $("#lorem").toggle();
  $(".start_btn").disable();
}

function stop() {
  clearInterval(color_change);
  $(".start_btn").enable();
}

function change() {
  var basic_color = parseInt(Math.random() * (1000 - 100) + 100); //makes sober colors

  var red = Math.floor(Math.random() * 256).toString(16); // red color
  var blue = Math.floor(Math.random() * 256).toString(16); // green color
  var green = Math.floor(Math.random() * 256).toString(16); // blue color
  var color = red + green + blue;
  if (color.toString().length == 5) {
    color += Math.floor(Math.random() * 16).toString(16);
  }

  var color2 = Math.floor(Math.random() * 16777216).toString(16); // generates a color at once

  heading.innerHTML = '#' + color;
  document.body.style.backgroundColor = heading.innerHTML;
  $("#lorem").disable();
}

$("#text-color-change").click(function () {
  var p_color = Math.floor(Math.random() * 16777216).toString(16);
  $("#message-box").css("color", "#" + p_color);
  $("#text-color-change").html("#" + p_color);
});
