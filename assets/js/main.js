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

  const navDropDownButton = document.getElementById("navDropdownButton");
  const homeNavButton = document.getElementById("homeNavButton");
  const homeMoreInfoButton = document.getElementById("homeLearnMoreButton");
  const specsNavButton = document.getElementById("specsNavButton");
  const aboutNavButton = document.getElementById("aboutNavButton");
  const partnersNavButton = document.getElementById("partnersNavButton");
  const contactNavButton = document.getElementById("contactNavButton");
  const navButtons = [homeNavButton, specsNavButton, aboutNavButton, partnersNavButton, contactNavButton];

  let pageDict = {};
  pageDict[homeNavButton.id] = home;
  pageDict[homeMoreInfoButton.id] = about;
  pageDict[specsNavButton.id] = specs;
  pageDict[aboutNavButton.id] = about;
  pageDict[partnersNavButton.id] = partners;
  pageDict[contactNavButton.id] = contact;

  function resetAll() {
    if (navDropDownButton.ariaExpanded === "true") {
      // nav bar is expanded
      navDropDownButton.click(); // closes the nav bar
    }

    for (let index = 0; index < pages.length; index++) {
      const page = pages[index];
      page.classList.add("d-none"); // adds display:none style
    }

    for (let index = 0; index < navButtons.length; index++) {
      const navButton = navButtons[index];
      navButton.classList.remove("active");
    }
  }

  function animateTarget(target) {
    target.style.opacity = 0;
    anime({
      targets: target,
      opacity: [{ value: 1, duration: 1000, easing: "easeInOutSine" }],
    });
  }

  function clickHandler(event) {
    resetAll();

    const clickedElement = event.target;
    clickedElement.classList.add("active");
    const page = pageDict[clickedElement.id];
    page.classList.remove("d-none");
    animateTarget(page);
  }

  homeNavButton.addEventListener("click", clickHandler);
  homeMoreInfoButton.addEventListener("click", clickHandler);
  specsNavButton.addEventListener("click", clickHandler);
  aboutNavButton.addEventListener("click", clickHandler);
  partnersNavButton.addEventListener("click", clickHandler);
  contactNavButton.addEventListener("click", clickHandler);

  function initialAnimation() {
    home.style.opacity = 0;
    anime({
      targets: home,
      opacity: [{ value: 1, delay: 3000, duration: 2000, easing: "easeInOutSine" }],
    });
  }

  initialAnimation();
}

waitForDOM((callback = main));
