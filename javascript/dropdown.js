(function () {
  var elements = document.querySelectorAll(".nav-search-dropdown-btn");

  function openDropdown(event) {
    event.target.parentNode.classList.add("open");
  }

  function resetDropdowns() {
    var element = document.querySelector(".dropdown.open");
    if (element) {
      element.classList.remove("open");
    }
  }

  function documentHandler() {
    resetDropdowns();
    document.removeEventListener("click", documentHandler, false); //remove document click listener
  }

  if (elements.length > 0) {
    elements.forEach((el) => {
      el.addEventListener(
        "click",
        function (e) {
          var isActive = e.target.parentNode.classList.contains("open");
          resetDropdowns();
          if (isActive) {
            return;
          }
          e.stopPropagation();
          e.preventDefault();
          openDropdown(e);
          document.addEventListener("click", documentHandler, false); //add document click listener to close dropdown on outside click
        },
        false
      );
    });
  }
})();
