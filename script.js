(function () {
  var header = document.querySelector(".site-header");
  var menuButton = document.querySelector(".nav-toggle");
  var menu = document.getElementById("site-menu");
  var yearNodes = document.querySelectorAll("[data-year]");
  var quoteForms = document.querySelectorAll("[data-quote-form]");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  yearNodes.forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });

  if (header) {
    var updateHeaderState = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
  }

  quoteForms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var data = new FormData(form);
      var lines = [
        "Bonjour Ste Hsaina Construction, je souhaite un devis.",
        "Ville: " + (data.get("ville") || "-"),
        "Date souhaitée: " + (data.get("date") || "-"),
        "Charge à lever: " + (data.get("charge") || "-"),
        "Hauteur / portée: " + (data.get("hauteur") || "-"),
        "Type de chantier: " + (data.get("chantier") || "-"),
        "Message: " + (data.get("message") || "-")
      ];

      window.open("https://wa.me/212664319035?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
    });
  });

  var revealNodes = document.querySelectorAll([
    ".section__heading",
    ".service-card",
    ".trust-grid article",
    ".machine-type-card",
    ".machine-card",
    ".sector-card",
    ".rental-card",
    ".article-card",
    ".zones__grid > *",
    ".faq-list details",
    ".contact-section__grid > *",
    ".feature-photo",
    ".spec-strip > div",
    ".steps article"
  ].join(","));

  revealNodes.forEach(function (node, index) {
    node.classList.add("reveal");
    node.style.setProperty("--reveal-delay", (index % 5) * 55 + "ms");
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealNodes.forEach(function (node) {
      node.classList.add("is-visible");
    });
  } else {
    var revealVisibleNodes = function () {
      revealNodes.forEach(function (node) {
        if (node.classList.contains("is-visible")) {
          return;
        }
        var rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
          node.classList.add("is-visible");
        }
      });
    };
    var revealTicking = false;
    var scheduleRevealCheck = function () {
      if (revealTicking) {
        return;
      }
      revealTicking = true;
      window.requestAnimationFrame(function () {
        revealVisibleNodes();
        revealTicking = false;
      });
    };
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12
    });

    revealNodes.forEach(function (node) {
      revealObserver.observe(node);
    });
    window.addEventListener("scroll", scheduleRevealCheck, { passive: true });
    window.addEventListener("resize", scheduleRevealCheck);
    window.setTimeout(revealVisibleNodes, 120);
  }

  if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });

    menu.addEventListener("click", function (event) {
      if (event.target.tagName !== "A") {
        return;
      }
      menu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  }
})();
