// Select input field
const input = document.querySelector("#input");

// Select unit selections
const unit = document.querySelector("#unit");

const convert = () => {

  // Get value of user input and units
  const value = input.value;
  const unitValue = unit.value;
  const output = document.querySelector("#output");

  // Show output when there is a value
  (value !== "") ? output.style.display = "block" : output.style.display = "none";

  // Check unit type and perform conversion
  switch (unitValue) {
    case "lbs":
      convertLbs(value);
      break;
    case "grams":
      convertGrams(value);
      break;
    case "kilograms":
      convertKilograms(value);
      break;
    case "ounces":
      convertOunces(value);
      break;
    case "meters":
      convertMeters(value);
      break;
    case "miles":
      convertMiles(value);
      break;
    case "inches":
      convertInches(value);
      break;
  }
}

const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");

const convertLbs = (value) => {
  card1.querySelector("h4").textContent = "Grams:";
  card2.querySelector("h4").textContent = "Kilograms:";
  card3.querySelector("h4").textContent = "Ounces:";

  card1.querySelector("div").textContent = value * 453.592;
  card2.querySelector("div").textContent = value * 0.453592;
  card3.querySelector("div").textContent = value * 16;
};

const convertGrams = (value) => {
  card1.querySelector("h4").textContent = "Kilograms:";
  card2.querySelector("h4").textContent = "Ounces:";
  card3.querySelector("h4").textContent = "Pounds:";

  card1.querySelector("div").textContent = value * 0.001;
  card2.querySelector("div").textContent = value * 0.035274;
  card3.querySelector("div").textContent = value * 0.00220462;
};

const convertKilograms = (value) => {
  card1.querySelector("h4").textContent = "Grams:";
  card2.querySelector("h4").textContent = "Pounds:";
  card3.querySelector("h4").textContent = "Ounces:";

  card1.querySelector("div").textContent = value * 1000;
  card2.querySelector("div").textContent = value * 2.20462;
  card3.querySelector("div").textContent = value * 35.274;
};

const convertOunces = (value) => {
  card1.querySelector("h4").textContent = "Grams:";
  card2.querySelector("h4").textContent = "Pounds:";
  card3.querySelector("h4").textContent = "Kilograms:";

  card1.querySelector("div").textContent = value * 28.3495;
  card2.querySelector("div").textContent = value * 0.0625;
  card3.querySelector("div").textContent = value * 0.0283495;
};

const convertMeters = (value) => {
  card1.querySelector("h4").textContent = "Kilometers:";
  card2.querySelector("h4").textContent = "Miles:";
  card3.querySelector("h4").textContent = "Inches:";

  card1.querySelector("div").textContent = value * 0.001;
  card2.querySelector("div").textContent = value * 0.000621371;
  card3.querySelector("div").textContent = value * 39.3701;
  };
  
  const convertMiles = (value) => {
  card1.querySelector("h4").textContent = "Kilometers:";
  card2.querySelector("h4").textContent = "Meters:";
  card3.querySelector("h4").textContent = "Feet:";
  
  card1.querySelector("div").textContent = value * 1.60934;
  card2.querySelector("div").textContent = value * 1609.34;
  card3.querySelector("div").textContent = value * 5280;
  };
  
  const convertInches = (value) => {
  card1.querySelector("h4").textContent = "Feet:";
  card2.querySelector("h4").textContent = "Centimeters:";
  card3.querySelector("h4").textContent = "Meters:";
  
  card1.querySelector("div").textContent = value * 0.0833333;
  card2.querySelector("div").textContent = value * 2.54;
  card3.querySelector("div").textContent = value * 0.0254;
  };
  
  // Convert on user input change
  input.addEventListener("input", convert);
  unit.addEventListener("change", convert);
