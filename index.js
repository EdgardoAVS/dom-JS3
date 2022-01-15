const inputName = document.getElementById("input-name");
const buttonCheck = document.getElementById("button-check");
const firstName = "Edgardo";
const firstNameLowerCase = firstName.toLowerCase();
const showData = document.getElementById("show-data");

buttonCheck.addEventListener("click", () => {
  const inputNameLC = inputName.value.toLowerCase();

  if (inputNameLC == firstNameLowerCase) {
    document.getElementById("show-data").innerHTML = `Hola, ${firstName} `;
    showData.insertAdjacentHTML(
      "beforeend",
      `<button id="acceder">Ir a la web</button>`
    );
    document.getElementById("acceder").onclick = acceder;
  } else {
    document.getElementById("show-data").innerHTML = "";
    inputName.value = "";
    inputName.focus();
  }
});

function acceder() {
  window.open("https://www.google.com", "_black");
}
