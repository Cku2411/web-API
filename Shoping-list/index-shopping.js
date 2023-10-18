// test event listener

addEventListener("click", async () => {
  console.log("information");
  const navigator = window.navigator;
  window.postMessage("helloooo");

  console.log(window.alert("hihi"));
});

console.log(`This is original`);
// create Variables that hold reference to the lsit
const ulList = document.querySelector("ul");
const input = document.querySelector("input");
const AddItemButton = document.querySelector("button");

// do something
console.log(input.value);
// listen to the event

AddItemButton.addEventListener("click", () => {
  clickHandle();
});

const clickHandle = () => {
  const currentValue = input.value;
  input.value = "";
  //   creat three new varibales
  const li = document.createElement("li");
  const span = document.createElement("span");
  const newButton = document.createElement("button");

  span.textContent = currentValue;
  newButton.textContent = "Delete";

  newButton.addEventListener("click", () => {
    li.parentNode.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(newButton);

  ulList.appendChild(li);
  //   add focus to input
  input.focus();
};
