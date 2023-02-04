const grid = document.querySelector("#directory-items");
const gridButton = document.querySelector("button > .fa-th");
const listButton = document.querySelector("button > .fa-list");

const buildCard = (data) => {
  const card = document.createElement("div");
  card.classList.add("directory-card");
  card.classList.add(`membership-${data.membershipLevel}`);
  const image = document.createElement("img");
  image.src = data.imgUrl;
  image.alt = data.name;
  card.appendChild(image);
  const name = document.createElement("h3");
  name.textContent = data.name;
  card.appendChild(name);
  const address = document.createElement("p");
  address.innerHTML = data.address;
  card.appendChild(address);
  const phone = document.createElement("p");
  phone.innerHTML = data.phoneNumber;
  card.appendChild(phone);
  const website = document.createElement("a");
  website.href = data.website;
  website.textContent = data.website;
  card.appendChild(website);

  return card;
};

const getDirectory = async () => {
  const response = await fetch("./data/directory.json");
  const data = await response.json();
  return data;
};

const buildGrid = (data) => {
  data.forEach((item) => {
    const card = buildCard(item);
    grid.appendChild(card);
  });
};

const businesses = getDirectory();
businesses.then((data) => {
  buildGrid(data);
});

gridButton.addEventListener("click", () => {
  grid.classList.add("directory-grid");
  grid.classList.remove("directory-list");
});

listButton.addEventListener("click", () => {
  grid.classList.add("directory-list");
  grid.classList.remove("directory-grid");
});
