const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector(".cards");

const getProphets = async () => {
  const response = fetch(url);

  const data = response.then((response) => response.json());
  //   console.table(await data);
  return await data;
};

displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement("div");
    const h2 = document.createElement("h2");
    const birthdate = document.createElement("p");
    const birthplace = document.createElement("p");
    const img = document.createElement("img");
    const numChildren = document.createElement("p");

    card.classList.add("card");

    // image attributes
    img.src = prophet.imageurl;
    img.setAttribute(
      "alt",
      `${prophet.name} ${prophet.lastname} - ${prophet.order}th President of the Latter-days.`
    );
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "200");
    img.setAttribute("height", "auto");

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    numChildren.textContent = `Number of Children: ${prophet.numofchildren}`;

    card.appendChild(h2);
    card.appendChild(img);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(numChildren);
    cards.appendChild(card);
  });
};

getProphets().then((prophets) => displayProphets(prophets.prophets));
