const date = new Date();

// Get Year
const year = date.getFullYear();

document.querySelector("#year").innerHTML = year;
document.querySelector(".highlight").innerHTML =
  "Last Modified: " + document.lastModified;
