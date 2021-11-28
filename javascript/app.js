const discoverCardBtn = Array.from(
  document.querySelectorAll(".discover-card-btn")
);
const blackScreen = document.querySelector(".black-screen");
const modalWrapper = document.querySelector(".modal-wrapper");
const crossIcon = document.querySelector(".modal-cross-icon");

const abc_register = Array.from(document.querySelectorAll(".abc-register"));
const abc_login = Array.from(document.querySelectorAll(".abc-login"));

const abc_cross_icon = Array.from(document.querySelectorAll(".abc-cross-icon"));
const login_modal_wrapper = document.querySelector(".login-modal-wrapper");
const register_modal_wrapper = document.querySelector(
  ".register-modal-wrapper"
);

abc_register.forEach((btn) => {
  btn.addEventListener("click", () => {
    register_modal_wrapper.classList.add("open");
    document.body.style.overflowY = "hidden";
  });
});

abc_login.forEach((btn) => {
  btn.addEventListener("click", () => {
    login_modal_wrapper.classList.add("open");
    document.body.style.overflowY = "hidden";
  });
});

discoverCardBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    blackScreen.style.display = "block";
    modalWrapper.style.display = "block";
    document.body.style.overflowY = "hidden";
  });
});

crossIcon?.addEventListener("click", () => {
  blackScreen.style.display = "none";
  modalWrapper.style.display = "none";
  document.body.style.overflowY = "scroll";
});

blackScreen?.addEventListener("click", () => {
  blackScreen.style.display = "none";
  modalWrapper.style.display = "none";
  document.body.style.overflowY = "scroll";
});

abc_cross_icon?.forEach((btn) => {
  btn.addEventListener("click", () => {
    register_modal_wrapper.classList.remove("open");
    login_modal_wrapper.classList.remove("open");
    document.body.style.overflowY = "scroll";
  });
});
