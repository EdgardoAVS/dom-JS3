const inputName = document.getElementById("input-name");
const buttonCheck = document.getElementById("button-check");
const firstName = "Edgardo";
const firstNameLowerCase = firstName.toLowerCase();
const showData = document.getElementById("show-data");

buttonCheck.addEventListener("click", () => {
  const inputNameLC = inputName.value.toLowerCase();

  if (inputNameLC == firstNameLowerCase) {
    document.getElementById("show-data").innerHTML = `Hello, ${firstName} `;
    showData.insertAdjacentHTML(
      "beforeend",
      `<button id="acceder">Ir a Twitter</button>`
    );
    document.getElementById("acceder").onclick = acceder;
  } else {
    document.getElementById("show-data").innerHTML = "";
    inputName.value = "";
    inputName.focus();
  }
});

function acceder() {
  window.open("https://twitter.com/EdgardoAVS", "_black");
}
