let settings = {
  //height of sphere container
  height: 450,
  //width of sphere container
  width: 450,
  //radius of sphere
  radius: 155,
  //rotation speed
  speed: 0.5,
  //sphere rotations slower
  slower: 0.9,
  //delay between update position
  timer: 5,
  //dependence of a font size on axis Z
  fontMultiplier: 30,
  //tag css stylies on mouse over
  hoverStyle: {
    border: "none",
    color: "black",
  },
  //tag css stylies on mouse out
  mouseOutStyle: {
    border: "",
    color: "",
  },
};

$(document).ready(function () {
  $("#tagcloud").tagoSphere(settings);
});

if (window.innerWidth >= 600) {
  settings.height = 700;
  settings.width = 700;
  settings.radius = 250;
} else {
  settings.height = 400;
  settings.width = 400;
  settings.radius = 155;
}
