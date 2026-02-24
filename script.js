document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("mobileMenu");
  const header = document.querySelector(".site-header");
  if (!toggle || !menu || !header) return;

  function openMenu() {
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
  }

  function closeMenu() {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  });

  // click item -> close
  menu.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) closeMenu();
  });

  // click outside -> close
  document.addEventListener("click", (e) => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    if (!expanded) return;
    if (!header.contains(e.target)) closeMenu();
  });

  // ESC -> close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // resize -> close when back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
});
