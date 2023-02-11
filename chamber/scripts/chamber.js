const getDirectory = async () => {
  const response = await fetch("./data/directory.json");
  const data = await response.json();
  return data;
};

const filterSilverAndGold = async (companies) => {
  const silverAndGold = companies.filter((company) => {
    if (company.membershipLevel === "Silver") {
      return company;
    }
    if (company.membershipLevel === "Gold") {
      return company;
    }
  });

  const randomCompany =
    silverAndGold[Math.floor(Math.random() * silverAndGold.length)];
  return randomCompany;
};

const buildCard = async () => {
  const companies = await getDirectory();
  const data = filterSilverAndGold(companies);

  data.then((data) => {
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

    const spotlightTitle = document.querySelector("#spotlightTitle");

    if (data.membershipLevel === "Silver") {
      spotlightTitle.style.color = "#C0C0C0";
    }
    if (data.membershipLevel === "Gold") {
      spotlightTitle.style.color = "#FFD700";
    }
  });
};

buildCard();
