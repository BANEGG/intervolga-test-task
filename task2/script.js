const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    localStorage.setItem(input.name, input.value);
  });
});

window.addEventListener("load", () => {
  inputs.forEach((input) => {
    const value = localStorage.getItem(input.name);
    if (value) {
      input.value = value;
    }
  });
});
