let toastsContainer = document.querySelector(".toasts_container");
let successMsg = "<i class='fa-solid fa-circle-check'></i>Success";
let failureMsg = "<i class='fa-solid fa-circle-xmark'></i>Failure";
let alertMsg = "<i class='fa-solid fa-circle-exclamation'></i>Alert!";

const toastNoti = (message, type) => {
  let toast = document.createElement("div");
  toast.innerHTML = message;
  toast.classList.add(type);
  toastsContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 5000);
};
