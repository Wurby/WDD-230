const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  collapsible.addEventListener("click", () => {
    collapsible
      .querySelector(".collapsible-content")
      .classList.toggle("hidden");
    collapsible.querySelector("span").classList.toggle("fa-plus");
    collapsible.querySelector("span").classList.toggle("fa-minus");
  });
});

const anchors = document.querySelectorAll("a");

// open all external links in a new tab
anchors.forEach((anchor) => {
  if (!anchor.href.endsWith("html")) {
    anchor.setAttribute("target", "_blank");
  }
});

const sunIcon = document.querySelectorAll(".color-mode");

sunIcon.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelectorAll(".color-mode").forEach((item) => {
      item.classList.toggle("fa-sun");
      item.classList.toggle("fa-moon");
    });
    document.body.classList.toggle("dark");
    document.querySelector("main").classList.toggle("darkGrey");
  });
});

const mobileMenu = document.querySelector("#mobile-menu");

mobileMenu.addEventListener("click", () => {
  document.querySelector(".mobile-menu-hider").classList.toggle("hidden");
});

const mobileMenuHider = document.querySelector(".mobile-menu-hider");

document.body.addEventListener("click", (e) => {
  if (e.target !== mobileMenu) {
    if (mobileMenuHider.classList.contains("hidden") === false) {
      document.querySelector(".mobile-menu-hider").classList.toggle("hidden");
    }
  }
});

const addStorage = (key, value) => {
  localStorage.setItem(key, value);
};

const getStorage = (key) => {
  return localStorage.getItem(key);
};

const removeStorage = (key) => {
  localStorage.removeItem(key);
};

const visitCount = () => {
  let count = getStorage("visitCount");
  if (count === null) {
    count = 0;
  }
  count++;
  addStorage("visitCount", count);
  return count;
};

document.querySelector("#visitCount").innerHTML = visitCount();

const verifyUsername = (str) => {
  // must be between 1 and 12 characters
  if (str.length < 5 || str.length > 12) {
    return false;
  }
  // must contain at least one letter and one number
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;

  return regex.test(str);
};

const verifyMatching = (str1, str2) => {
  return str1 === str2;
};

const validateForm = () => {
  const username = document.querySelector("#usernameIdentifier");
  const formMessage = document.querySelector("#formMessage");
  const usernameConfirm = document.querySelector("#confirmUsernameIdentifier");

  if (verifyUsername(username.value) === false) {
    formMessage.innerHTML +=
      "Username must be between 5 and 12 characters and contain at least one letter and one number. ";
    formMessage.style.color = "var(--warn)";
    username.focus();
    return false;
  }

  if (verifyMatching(username.value, usernameConfirm.value) === false) {
    formMessage.innerHTML += "Usernames do not match. ";
    formMessage.style.color = "var(--warn)";
    username.focus();
    return false;
  }

  return true;
};

const addTable = (tableData) => {
  const table = document.querySelector("table");
  const tableRow1 = document.createElement("tr");
  const tableRow2 = document.createElement("tr");
  const tableRow3 = document.createElement("tr");
  const tableRow4 = document.createElement("tr");
  const tableRow5 = document.createElement("tr");

  tableRow1.classList.add("th");
  tableRow1.innerHTML = `
  <td>Field</td>
  <td>Value</td>
  `;
  tableRow2.innerHTML = `
  <td>Name</td>
  <td>${tableData.name}</td>
  `;
  tableRow3.innerHTML = `
  <td>Email</td>
  <td>${tableData.email}</td>
  `;
  tableRow4.innerHTML = `
  <td>Rating</td>
  <td>${tableData.rating}</td>
  `;
  tableRow5.innerHTML = `
  <td>Username</td>
  <td>${tableData.username}</td>
  `;

  table.appendChild(tableRow1);
  table.appendChild(tableRow2);
  table.appendChild(tableRow3);
  table.appendChild(tableRow4);
  table.appendChild(tableRow5);

  const tableWrapper = document.querySelector("#table-wrapper");

  const message = document.createElement("p");
  message.innerHTML =
    "This does not actually submit the form. It's for demonstration purposes only.";
  tableWrapper.appendChild(message);
};

const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateForm()) {
    const tableData = {
      name: document.querySelector("#fullname").value,
      email: document.querySelector("#email").value,
      rating: document.querySelector("#pagerating").value,
      username: document.querySelector("#usernameIdentifier").value,
    };
    addTable(tableData);
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Message Sent";
  }
});
