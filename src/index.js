import "./styles.css";

const root = document.documentElement;
const header = document.querySelector("header");

document.addEventListener("scroll", () => {
  const viewportHeight = Math.max(root.clientHeight, window.innerHeight ?? 0);
  const scrolled = window.scrollY > viewportHeight * 0.6;

  header.classList.toggle("header--bg", scrolled);
});
