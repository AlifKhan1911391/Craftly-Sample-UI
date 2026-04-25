(function () {
  "use strict";

  function initHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.getElementById("navLinks");
    const navActions = document.getElementById("navActions");
    if (!hamburger) return;

    hamburger.removeAttribute("onclick");

    function closeMenu() {
      hamburger.classList.remove("is-open");
      if (navLinks) navLinks.classList.remove("open");
      if (navActions) navActions.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }

    function toggleMenu(event) {
      event.stopPropagation();
      const isOpen = hamburger.classList.toggle("is-open");

      if (navLinks) navLinks.classList.toggle("open", isOpen);
      if (navActions) navActions.classList.toggle("open", isOpen);

      hamburger.setAttribute("aria-expanded", String(isOpen));
    }

    hamburger.addEventListener("click", toggleMenu);

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInsideHamburger = hamburger.contains(event.target);
      const isClickInsideNavLinks = navLinks && navLinks.contains(event.target);
      const isClickInsideNavActions = navActions && navActions.contains(event.target);

      if (!isClickInsideHamburger && !isClickInsideNavLinks && !isClickInsideNavActions) {
        closeMenu();
      }
    });
  }

  function injectAnimationStyles() {
    const style = document.createElement("style");
    style.id = "craftly-animation-styles";
    style.textContent = `

      .hamburger span {
        transform-origin: center;
        transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
                    opacity   0.25s ease,
                    top       0.35s cubic-bezier(0.23, 1, 0.32, 1);
      }

      .hamburger.is-open span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }

      .hamburger.is-open span:nth-child(2) {
        opacity: 0;
        transform: scaleX(0);
      }

      .hamburger.is-open span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }

      @media (max-width: 768px) {

        .nav-links,
        .nav-actions {
          display: flex !important;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          pointer-events: none;
          transition: max-height 0.4s cubic-bezier(0.23, 1, 0.32, 1),
                      opacity   0.3s ease,
                      padding   0.3s ease;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          border-top-color: transparent;
        }

        .nav-links.open,
        .nav-actions.open {
          max-height: 400px;
          opacity: 1;
          pointer-events: auto;
          padding-top: 15px !important;
          padding-bottom: 15px !important;
          border-top-color: var(--border-color);
        }
      }

      header {
        transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1),
                    box-shadow 0.3s ease,
                    background 0.3s ease;
        will-change: transform;
      }

      header.nav-hidden {
        transform: translateY(-105%);
      }

      header.nav-scrolled {
        box-shadow: 0 2px 16px rgba(0,0,0,0.08);
        background: rgba(255, 255, 255, 0.98) !important;
      }
    `;
    document.head.appendChild(style);
  }

  function initScrollBehavior() {
    const header = document.querySelector("header");
    if (!header) return;

    let lastScrollY = window.scrollY;
    let ticking = false;
    const SCROLL_THRESHOLD = 10;
    const TOP_THRESHOLD    = 60;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;

      if (currentScrollY < TOP_THRESHOLD) {
        header.classList.remove("nav-hidden");
        header.classList.remove("nav-scrolled");
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      header.classList.add("nav-scrolled");

      if (Math.abs(diff) > SCROLL_THRESHOLD) {
        if (diff > 0) {
          header.classList.add("nav-hidden");

          const hamburger = document.querySelector(".hamburger.is-open");
          if (hamburger) {
            // Manually close instead of clicking to avoid event issues
            hamburger.classList.remove("is-open");
            const navLinks = document.getElementById("navLinks");
            const navActions = document.getElementById("navActions");
            if (navLinks) navLinks.classList.remove("open");
            if (navActions) navActions.classList.remove("open");
            hamburger.setAttribute("aria-expanded", "false");
          }
        } else {
          header.classList.remove("nav-hidden");
        }
        lastScrollY = currentScrollY;
      }

      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    }, { passive: true });
  }

  function init() {
    injectAnimationStyles();
    initHamburger();
    initScrollBehavior();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
