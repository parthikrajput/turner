//header sticky
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// menu-in-sub-menu
document.querySelectorAll(".menu-open-question").forEach((question) => {
  question.addEventListener("click", function () {
    const faqItem = this.parentNode;

    faqItem.classList.toggle("active");
  });
});

// menu open
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const menuOpen = document.querySelector(".menu-open");

menuIcon.addEventListener("click", function () {
  menuOpen.classList.add("open");
});

closeIcon.addEventListener("click", function () {
  menuOpen.classList.remove("open");
});

// tabing
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".content");

  const isDesktop = window.matchMedia("(min-width: 1100px)");

  function deactivateAllTabs() {
    tabs.forEach((tab) => tab.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));
  }

  function activateTab(tab) {
    const target = tab.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
    tab.classList.add("active");
  }

  deactivateAllTabs();
  activateTab(tabs[0]);

  let hoverTimeout;
  function handleHover(tab) {
    tab.addEventListener("mouseenter", function () {
      if (isDesktop.matches) {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
          deactivateAllTabs();
          activateTab(tab);
        }, 150);
      }
    });
  }

  function handleClick(tab) {
    tab.addEventListener("click", function () {
      deactivateAllTabs();
      activateTab(tab);
    });
  }

  function applyEventListeners() {
    tabs.forEach((tab) => {
      if (isDesktop.matches) {
        handleHover(tab);
      }
      handleClick(tab);
    });
  }

  applyEventListeners();

  isDesktop.addEventListener("change", function () {
    tabs.forEach((tab) => {
      tab.removeEventListener("mouseenter", handleHover);
    });
    applyEventListeners();
  });
});
