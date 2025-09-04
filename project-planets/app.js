// create array of objects
const planets = [
  { name: "Mercury", moons: 0, habitable: false },
  { name: "Venus", moons: 0, habitable: false },
  { name: "Earth", moons: 1, habitable: true },
  { name: "Mars", moons: 2, habitable: false },
];

// define a function to display the planet names into html list
function displayPlanets() {
  // get the element object from DOM, assing to a variable
  const list = document.getElementById("planetList");
  // clear out the list object
  list.innerHTML = "";

  // loop the array
  for (let i = 0; i < planets.length; i++) {
    // create element method stored into a variable
    const li = document.createElement("li");
    // assign the name to the li variable from the array objects
    li.textContent = planets[i].name;

    // eventlistener on the li to pop up the data
    li.addEventListener("click", function () {
      alert(
        `${planets[i].name} has ${planets[i].moons} moon(s). Habitable? ${planets[i].habitable}`
      );
    });
    // method on the list object(thats a element from DOM tree), adds the li inside the element as a last child. It goes mercury-> venus-> earth-> mars
    list.appendChild(li);
  }
}

// get the highlight button
const highlightBtn = document.getElementById("highlightBtn");

// add an event listener, if clicked the function will run
highlightBtn.addEventListener("click", function () {
  //get all the li-s that have parent #planetList, returns a nodelist (like an array of DOM elements)
  const listItems = document.querySelectorAll("#planetList li");

  //  loop the array again
  for (let i = 0; i < planets.length; i++) {
    // to check where object has more than 1 moon
    if (planets[i].moons > 1) {
      // if true add a CSS class to that element
      listItems[i].classList.add("highlight");
    }
  }
});

// get the add planet button
const addPlanetBtn = document.getElementById("addPlanetBtn");

// add click event listener

addPlanetBtn.addEventListener("click", function () {
  // get user inputs
  const planetName = prompt("Enter planet name:");
  const moonsAmount = parseInt(prompt("How many moons?"));
  const habitable = confirm("Is it habitable? OK = Yes, Cancel = No");

  // create a new object
  const newPlanet = {
    name: planetName,
    moons: moonsAmount,
    habitable: habitable,
  };

  //push the new object into the array
  planets.push(newPlanet);

  // call the  displayPlanets function to re-render the list
  displayPlanets();
});

window.onload = displayPlanets;
