let nav = document.querySelector("nav");
    window.onscroll = function() {
      if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
      }else {
        nav.classList.remove("sticky");
      }
    }
    document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".nav-links li a");

    navLinks.forEach(function (link) {
        link.addEventListener("mouseenter", function () {
            if (!link.classList.contains("active")) {
                link.style.color = "#fff";
                link.style.backgroundColor = "#4070f4";
            }
        });

        link.addEventListener("mouseleave", function () {
            if (!link.classList.contains("active")) {
                link.style.color = "#0E2431";
                link.style.backgroundColor = "transparent";
            }
        });
    });
});
