function waitForDOM(callback) {
  document.addEventListener("DOMContentLoaded", callback);

  if (document.readyState === "interactive" || document.readyState === "complete") {
    callback();
  }
}

function main() {
  const home = document.getElementById("home");
  const specs = document.getElementById("specifications");
  const about = document.getElementById("about");
  const partners = document.getElementById("partners");
  const contact = document.getElementById("contact");
  const pages = [home, specs, about, partners, contact];

  const homeNavButton = document.getElementById("homeNavButton");
  const homeMoreInfoButton = document.getElementById("homeLearnMoreButton");
  const specsNavButton = document.getElementById("specsNavButton");
  const aboutNavButton = document.getElementById("aboutNavButton");
  const partnersNavButton = document.getElementById("partnersNavButton");
  const contactNavButton = document.getElementById("contactNavButton");
  const navButtons = [homeNavButton, specsNavButton, aboutNavButton, partnersNavButton, contactNavButton];

  let pageDict = {};
  pageDict[homeNavButton.id] = home;
  pageDict[homeMoreInfoButton.id] = home;
  pageDict[specsNavButton.id] = specs;
  pageDict[aboutNavButton.id] = about;
  pageDict[partnersNavButton.id] = partners;
  pageDict[contactNavButton.id] = contact;

  function resetAll() {
    for (let index = 0; index < pages.length; index++) {
      const page = pages[index];
      page.classList.add("d-none"); // adds display:none style
    }

    for (let index = 0; index < navButtons.length; index++) {
      const navButton = navButtons[index];
      navButton.classList.remove("active");
    }
  }

  function clickHandler(event) {
    resetAll();

    const clickedElement = event.target;
    clickedElement.classList.add("active");
    pageDict[clickedElement.id].classList.remove("d-none");
  }

  homeNavButton.addEventListener("click", clickHandler);
  homeMoreInfoButton.addEventListener("click", clickHandler);
  specsNavButton.addEventListener("click", clickHandler);
  aboutNavButton.addEventListener("click", clickHandler);
  partnersNavButton.addEventListener("click", clickHandler);
  contactNavButton.addEventListener("click", clickHandler);
}

waitForDOM((callback = main));
