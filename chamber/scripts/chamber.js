const getDirectory = async () => {
  const response = await fetch("./data/directory.json");
  const data = await response.json();
  return data;
};

// grab a random company and set it as the current company

const buildCard = async () => {
  const companies = await getDirectory();
  const data = companies[Math.floor(Math.random() * companies.length)];

  console.log(data);
  const card = document.createElement("div");
  const image = document.createElement("img");
  image.src = data.imgUrl;
  image.alt = data.name;
  card.appendChild(image);
  const name = document.createElement("h3");
  name.textContent = data.name;
  card.appendChild(name);
  const website = document.createElement("a");
  website.href = data.website;
  website.textContent = data.website;
  card.appendChild(website);

  const companySpotlight = document.querySelector("#company-spotlight");
  companySpotlight.appendChild(card);
};

buildCard();
