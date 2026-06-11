const addGlass = document.getElementById("add-glass");
const subtractGlass = document.getElementById("subtract-glass");
const resetGlass = document.getElementById("reset-glasses");
const glassesDrank = document.getElementById("glasses-drank");
const keepHydrating = document.getElementById("keep-hydrating");

let glasses = 0;

addGlass.addEventListener("click", function() {
    glasses++;
    glassesDrank.textContent = `Glasses Drank Today ${glasses}`;
    if (glasses <= 8) {
        keepHydrating.textContent = "Keep Hydrating!";
    } else {
        keepHydrating.textContent = "Daily Goal Reached!";
    }
});

subtractGlass.addEventListener("click", function() {
    if (glasses === 0) return;
    glasses--;
    glassesDrank.textContent = `Glasses Drank Today ${glasses}`;
    if (glasses <= 8) {
        keepHydrating.textContent = "Keep Hydrating!";
    } else {
        keepHydrating.textContent = "Daily Goal Reached!";
    }
});

resetGlass.addEventListener("click", function() {
    glasses = 0;
    glassesDrank.textContent = `Glasses Drank Today ${glasses}`;
    keepHydrating.textContent = "Keep Hydrating!";
});