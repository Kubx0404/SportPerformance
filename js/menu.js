document.addEventListener("DOMContentLoaded", function () {
  var toggleBtn = document.getElementById("toggleBtn");
  var menu = document.getElementById("menu");

  toggleBtn.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    var isClickInside =
      menu.contains(event.target) || toggleBtn.contains(event.target);

    if (!isClickInside && menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  });
});
