const visitElement = document.querySelector("#pageVisits");
const lastVisited = localStorage.getItem("lastVisited");
const lastVisitedDate = new Date(lastVisited);

const getDaysSinceLastVisit = () => {
  if (!lastVisited) {
    localStorage.setItem("lastVisited", new Date().toString());
    return "First time here!";
  }
  const now = new Date();
  const diffTime = Math.abs(now - lastVisitedDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays - 1;
};

visitElement.innerHTML = `Days since last visit: ${getDaysSinceLastVisit()}`;
