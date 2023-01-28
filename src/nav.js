import { Home } from "./home";
import { Menu } from "./menu";

const deleteChildNodes = () => {
  let parent = document.querySelector("#content");

  let child = parent.lastElementChild;
  while (child) {
    parent.removeChild(child);
    child = parent.lastElementChild;
  }
};

export const Nav = () => {
  const mainContainer = document.querySelector("#content");
  const navContainer = document.createElement("div");
  const homeLink = document.createElement("a");
  const menuLink = document.createElement("a");
  const contactLink = document.createElement("a");

  homeLink.textContent = "Home";
  menuLink.textContent = "Menu";
  contactLink.textContent = "Contact";

  homeLink.addEventListener("click", () => {
    deleteChildNodes();
    Nav();
    Home();
  });

  menuLink.addEventListener("click", () => {
    deleteChildNodes();
    Nav();
    Menu();
  });

  navContainer.appendChild(homeLink);
  navContainer.appendChild(menuLink);
  navContainer.appendChild(contactLink);
  mainContainer.appendChild(navContainer);
};
