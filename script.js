const createNewMethod = () => {
  const preparationMethod = document.getElementById("preparation-method");

  let nextStepCount = preparationMethod.childElementCount;

  const methodInput = document.createElement("input");

  methodInput.className = "method-description";
  methodInput.type = "text";

  const randomId = Math.random().toString(36).substr(2, 9);

  const newMethod = document.createElement("div");

  newMethod.id = randomId;
  newMethod.className = "method-container";

  methodInput.onchange = ({ target: { value } }) => {
    createNewMethod();
  };

  const span = document.createElement("span");
  span.className = "enumeration";
  span.innerHTML = nextStepCount + 1;

  const trashIconWrapper = document.createElement("div");
  trashIconWrapper.className = "trash-icon";

  const trashIcon = document.createElement("i");
  trashIcon.className = "fa fa-trash trash-icon";
  trashIcon.onclick = () => deleteRow(randomId);

  trashIconWrapper.appendChild(trashIcon);

  newMethod.appendChild(span);
  newMethod.appendChild(methodInput);
  newMethod.appendChild(trashIconWrapper);

  preparationMethod.appendChild(newMethod);
};

const deleteRow = (id) => {
  const methodsContainer = document.getElementById("preparation-method");

  const rows = methodsContainer.children;

  if (rows.length > 1) {
    rows[id].remove();

    for (let i = 0; i < rows.length; i++)
      rows[i].getElementsByTagName("span")[0].innerText = i + 1;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  createNewMethod();
});
