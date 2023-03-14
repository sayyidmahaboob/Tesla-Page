// check
console.log("JavaScript is ready to run");

// functions

const openMenu = () => {
  document.querySelector("aside").className = "active";
};

const closeMenu = () => {
  document.querySelector("aside").className = " ";
};

// buttons
document.getElementById("menuBtn").onclick = (e) => {
  e.preventDefault();
  openMenu();
};

document.querySelector("aside button.close").onclick = (e) => {
  closeMenu();
};
