/* ===== TOGGLE BUTTON ===== */
const toggleBtn = document.querySelector(".toggle_nav_btn");

/* ===== CLOSE BUTTON ===== */
const closeBtn = document.querySelector(".close_menu_btn");

/* ===== NAVBAR-MENU ===== */
const menu = document.querySelector(".nav_menu");
/* ===== CLICK EVENT ON ToggleBtn ===== */
toggleBtn.addEventListener("click", () => {
  menu.classList.add("show");

  document.body.classList.add("stop_scroll");
});
/* ===== CLICK EVENT ON CloseBtn ===== */
closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
  document.body.classList.remove("stop_scroll");
});
/* ===== NAV-LINK ===== */
const navLink = document.querySelectorAll(".nav_link");

navLink.forEach((n) => {
  n.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

/* ===== GSAP ANIMATIONS ====== */

/* ===== LOGO, TOGGLE NAV BUTTON ====== */
gsap.from(".logo, .toggle_nav_btn", {
  opacity: 0,
  delay: 1.6,
  duration: 2.5,
  ease: "elastic.out(1,0.3)",
  y: -100,
});
/* ===== NAV MENU LIST ITEM ====== */
gsap.from(".nav_menu_list_item", {
  opacity: 0,
  delay: 1.6,
  duration: 2.8,
  ease: "elastic.out(1,0.3)",
  y: -100,
});
/* ===== HERO-TITLE ====== */
gsap.from(".hero__title", {
  opacity: 0,
  delay: 1.8,
  duration: 2.8,
  ease: "elastic.out(1,0.3)",
  y: -100,
});
/* ===== HERO SUBTITLE ====== */
gsap.from(".hero__subtitle", {
  opacity: 0,
  delay: 2.2,
  duration: 3,
  ease: "elastic.out(1,0.3)",
  y: -100,
});
/* ===== FLOATING-ICONS ====== */
gsap.from(".floating_icons", {
  opacity: 0,
  delay: 1,
  scale: 0.1,
  duration: 2.4,
  ease: "expo.inOut",
  y: 100,
});
/* ===== FEATURED-STUDENTS STUDENT-1 ====== */
gsap.from(".featured_students .student_1", {
  opacity: 0,
  delay: 2.6,
  duration: 3.5,
  ease: "elastic.out(1,0.3)",
  y: -50,
});
/* ===== FEATURED-STUDENTS STUDENT-2 ====== */
gsap.from(".featured_students .student_2", {
  opacity: 0,
  delay: 2.6,
  duration: 3.5,
  ease: "elastic.out(1,0.3)",
  y: -50,
});
/* ===== VECTOR SVG ====== */
gsap.from(".vector_svg", {
  opacity: 0,
  delay: 3,
  duration: 4,
  rotate:60,
  ease: "elastic.out(1,0.3)",
  y: 100,
});
/* ===== HERO-EMAIL ====== */
gsap.from(".hero_email", {
  opacity: 0,
  delay: 3.5,
  scale: 0.1,
  duration: 0.5,
  ease: "expo.In",
  y: 100,
});
/* ===== BRANDS ====== */
gsap.from(".brands", {
  opacity: 0,
  delay: 3.5,
  duration: 0.5,
  ease: "expo.In",
  y: 100,
});
/* ===== BACKED-TEXT ====== */
gsap.from(".backed_text", {
  opacity: 0,
  delay: 4,
  duration: 0.5,
  ease: "expo.In",
  y: 100,
});
/* ===== STATS-WRAPPER ====== */
gsap.from(".stats_wrapper", {
  opacity: 0,
  delay: 4.5,
  duration: 0.5,
  ease: "expo.In",
  y: 100,
});
/* ===== STATS ====== */
gsap.from(".stats", {
  opacity: 0,
  delay: 5,
  duration: 0.5,
  ease: "expo.In",
  y: 100,
});