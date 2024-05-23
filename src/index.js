import { createStore } from "redux";

const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    console.log("");
  }
  console.log(count);
  return count;
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" });

console.log(countStore.getState());
