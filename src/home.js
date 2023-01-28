export const Home = () => {
  const contentDiv = document.querySelector("#content");
  const mainSectionContainer = document.createElement("div");
  const title = document.createElement("h1");
  const ctaBtn = document.createElement("a");

  mainSectionContainer.className = "main-section";

  title.textContent = "Pete's Pizza";
  ctaBtn.textContent = "See our menu";

  contentDiv.appendChild(mainSectionContainer);
  mainSectionContainer.appendChild(title);
  mainSectionContainer.appendChild(ctaBtn);
};
