(function () {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------
     Hero crossfade — image 01 -> 02, holds on 02, no loop.
     Replays only on a full page reload.
  --------------------------------------------------------------- */
  function runHeroCrossfade() {
    var imgB = document.querySelector(".hero-img-b");
    var stageLabel = document.getElementById("stageLabel");
    if (!imgB) return;

    var HOLD_BEFORE = reduceMotion ? 200 : 1400; // ms on image 1 before transition starts

    setTimeout(function () {
      imgB.classList.add("show");
      if (stageLabel) {
        stageLabel.style.opacity = "0";
        setTimeout(function () {
          stageLabel.textContent = "PLATE";
          stageLabel.style.opacity = "0.8";
        }, 900);
      }
    }, HOLD_BEFORE);
  }

  /* ---------------------------------------------------------------
     REC timecode readout — ambient detail, ties to on-set genlock/
     timecode sync. Purely decorative; freezes under reduced motion.
  --------------------------------------------------------------- */
  function startTimecode() {
    var el = document.getElementById("recClock");
    if (!el || reduceMotion) return;
    var start = performance.now();
    function pad(n) { return String(n).padStart(2, "0"); }
    function tick(now) {
      var elapsed = now - start;
      var totalFrames = Math.floor(elapsed / (1000 / 24));
      var frames = totalFrames % 24;
      var totalSeconds = Math.floor(totalFrames / 24);
      var seconds = totalSeconds % 60;
      var totalMinutes = Math.floor(totalSeconds / 60);
      var minutes = totalMinutes % 60;
      var hours = Math.floor(totalMinutes / 60);
      el.textContent = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + ":" + pad(frames);
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------------------------------------------------------------
     Viewfinder corner brackets — injected into every .frame element
  --------------------------------------------------------------- */
  function injectCorners() {
    document.querySelectorAll(".frame").forEach(function (el) {
      ["tl", "tr", "bl", "br"].forEach(function (pos) {
        var s = document.createElement("span");
        s.className = "corner " + pos;
        el.appendChild(s);
      });
    });
  }

  /* ---------------------------------------------------------------
     Language switching
  --------------------------------------------------------------- */
  var SUPPORTED = ["en", "es", "de", "fr", "ko", "ja"];
  var LABELS = { en: "EN", es: "ES", de: "DE", fr: "FR", ko: "KO", ja: "JA" };

  function detectLanguage() {
    var stored = localStorage.getItem("db_lang");
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;

    var nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    var code = nav.split("-")[0];
    if (SUPPORTED.indexOf(code) !== -1) return code;
    return "en";
  }

  function applyLanguage(lang) {
    if (!window.TRANSLATIONS || !window.TRANSLATIONS[lang]) lang = "en";
    var dict = window.TRANSLATIONS[lang];

    document.documentElement.lang = lang;
    document.documentElement.dir = "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = dict[key];
      if (value !== undefined) el.innerHTML = value;
    });

    var label = document.getElementById("langButtonLabel");
    if (label) label.textContent = LABELS[lang] || "EN";

    document.querySelectorAll(".lang-menu li").forEach(function (li) {
      li.classList.toggle("active", li.getAttribute("data-lang") === lang);
    });

    localStorage.setItem("db_lang", lang);
  }

  function setupLanguageMenu() {
    var btn = document.getElementById("langButton");
    var menu = document.getElementById("langMenu");
    if (!btn || !menu) return;

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    menu.querySelectorAll("li").forEach(function (li) {
      li.addEventListener("click", function () {
        applyLanguage(li.getAttribute("data-lang"));
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function () {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  }

  /* ---------------------------------------------------------------
     Header background — solid once scrolled past the hero
  --------------------------------------------------------------- */
  function setupHeaderScroll() {
    var header = document.querySelector(".site-header");
    var hero = document.querySelector(".hero");
    if (!header || !hero) return;
    function update() {
      var threshold = hero.offsetHeight - 90;
      header.classList.toggle("scrolled", window.scrollY > threshold);
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ---------------------------------------------------------------
     Init
  --------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    injectCorners();
    runHeroCrossfade();
    startTimecode();
    setupLanguageMenu();
    setupHeaderScroll();
    applyLanguage(detectLanguage());

    var yearEl = document.getElementById("footerYear");
    if (yearEl) yearEl.textContent = "© " + new Date().getFullYear();
  });
})();
