let tab_header = document.querySelector(".tab-header");
let tab_panes = tab_header.getElementsByTagName("div");
let tab_content = document.querySelector(".tab-content");
let tab_content_div = Array.from(
  tab_content.querySelectorAll(".profile-content")
);

for (let i = 0; i < tab_panes.length; i++) {
  tab_panes[i].addEventListener("click", () => {
    tab_header.querySelector(".active").classList.remove("active");

    tab_panes[i].classList.add("active");

    tab_content.querySelector(".active").classList.remove("active");

    tab_content_div[i].classList.add("active");
  });
}
