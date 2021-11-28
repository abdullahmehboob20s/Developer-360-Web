let link = document.querySelectorAll(".link");

link.forEach((item) => {
  item.addEventListener("click", (e) => {
    let link_accordion = e.target.nextElementSibling;
    let link_parent = e.target.parentElement;

    link.forEach((item2) => {
      if (item2 !== item) {
        let item2_link_accordion = item2.nextElementSibling;
        let link_parent_2 = item2.parentElement;
        item2_link_accordion.style.height = "";
        link_parent_2.classList.remove("active");
      }
    });

    if (link_accordion.style.height == "") {
      link_accordion.style.height = link_accordion.scrollHeight + "px";
      link_parent.classList.add("active");
    } else {
      link_accordion.style.height = "";
      link_parent.classList.remove("active");
    }

    // item.style.backgroundColor = "red";
  });
});
