const button = document.querySelector("button");
const list = document.querySelector("#list");
const keys = Object.keys(localStorage);

// check to make sure the input is not blank before doing the following remaining tasks in this list using an if block, otherwise provide a message or at least do nothing and return the .focus() to the input field.
// create a li element
// create a delete button
// populate the li elements textContent or innerHTML with the input value
// populate the button textContent with a
// append the li element with the delete button
// append the li element to the unordered list in your HTML
// add an event listener to the delete button that removes the li element when clicked
// send the focus to the input element
// change the input value to nothing or the empty string to clean up the interface for the user

button.addEventListener("click", () => {
  const input = document.querySelector("#favchap").value;
  if (input != "") {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = input;
    deleteButton.textContent = "❌";
    deleteButton.style.float = "right";
    li.append(deleteButton);
    list.append(li);
    storeChapter(input, input);
    deleteButton.addEventListener("click", () => {
      li.remove();
      removeChapter(input);
    });
    document.querySelector("#favchap").value = "";
    document.querySelector("#favchap").focus();
  } else {
    alert("Please enter a chapter");
  }
});

const storeChapter = (key, value) => {
  localStorage.setItem(key, value);
};

const retrieveChapter = (key) => {
  return localStorage.getItem(key);
};

const removeChapter = (key) => {
  localStorage.removeItem(key);
};

// check for all keys and build the list from keys
keys.forEach((key) => {
  const chapter = retrieveChapter(key);
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  li.textContent = chapter;
  deleteButton.textContent = "❌";
  deleteButton.style.float = "right";
  li.append(deleteButton);
  list.append(li);
  deleteButton.addEventListener("click", () => {
    li.remove();
    removeChapter(key);
  });
});
