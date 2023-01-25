const businessTitle = document.querySelector("#title");

const businessDescription = document.querySelector("#businessDescription");

const verifyTitle = () => {
  const titlePattern = /^[a-zA-Z\s-]{7,}$/;
  if (businessTitle.value.length > 0) {
    businessTitle.setAttribute("required", "required");
    if (titlePattern.test(businessTitle.value)) {
      businessTitle.setCustomValidity("");
      return true;
    } else {
      businessTitle.setCustomValidity("This must be at least 7 characters.");
      return false;
    }
  } else {
    businessTitle.removeAttribute("required");
    businessTitle.setCustomValidity("");
  }
};

const verifyDescription = () => {
  if (businessDescription.value.length > 20) {
    businessDescription.setCustomValidity("");
    return true;
  } else {
    businessDescription.setCustomValidity(
      "This must be at least 20 characters."
    );
    return false;
  }
};

const validate = (e) => {
  const titleValidity = verifyTitle();
  const descriptionValidity = verifyDescription();

  if (!titleValidity) {
    return false;
  }

  if (!descriptionValidity) {
    return false;
  }
};
