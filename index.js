const input = document.querySelector("input");
var html = `<div><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">`
function addItemToList() {
    //if someone press enter check if input is not empty
    if(input.value === "") {
        return
    }

    console.log("Delete")
  const todoItem = document.querySelector("input").value;

  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  li.classList.add(`task`);
  deleteBtn.innerHTML = `remove`;
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentNode.remove();
  });
  li.innerHTML =  html + ` ${todoItem} </div>`;
  li.appendChild(deleteBtn);
  document.querySelector("ul").appendChild(li);
  input.value = "";
}

document.querySelector("button").addEventListener("click", addItemToList);
input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        //ooif someone press enter check if input is not empty
        if (input.value !== "") {
        addItemToList();
        }
    }
}
);


