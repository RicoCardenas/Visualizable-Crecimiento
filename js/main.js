document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".main-nav .nav-link[href^='#']");
  var sections = document.querySelectorAll("main section[id]");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = link.getAttribute("href").substring(1);
      var targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.id;
            navLinks.forEach(function (link) {
              var hrefId = link.getAttribute("href").substring(1);
              if (hrefId === id) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -55% 0px",
        threshold: 0.2,
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
});
