
function pedInformation() {
  pedSize = prompt("Enter the size of the peds in cm.");
  pedSize = (Number(pedSize)) * 100;
  while (isNaN(pedSize)) {
    alert("Please enter a number.");
    pedSize = prompt("Enter the size of the peds in cm.");
    pedSize = Number(pedSize);
    pedSize = pedSize * 100;
  }
  pedStructure = prompt("Enter the structure of the peds");
  /*<ul>
    <li>platy</li>
    <li>prismatic</li>
    <li>columnar</li>
    <li>granular</li>
    <li>blocky</li>
  </ul>*/
}

function soilDepthInformation() {
  soilDepth = prompt("Enter the depth of the horizon in cm.");
  soilDepth = (Number(soilDepth)) * 100;
  while (isNaN(soilDepth)) {
    alert("Please enter a number.");
    soilDepth = prompt("Enter the depth of the horizon in cm.");
    soilDepth = Number(soilDepth);
    soilDepth = soilDepth * 100;
  }
}

function getLetter(horizonsArray) {
  var horizonLetter = [];
  for (var index = 0, length = horizonsArray.length; index < length; index++){
    horizonLetter.push(horizonsArray[index]["horizonLetter"]);
  }
  return horizonLetter;
}

var horizons = [
  {
    horizonAssignment: horizonO,
    horizonLetter: "O"
  },
  {
    horizonAssignment: horizonA,
    horizonLetter: "A"
  },
  {
    horizonAssignment: horizonE,
    horizonLetter: "E"
  },
  {
    horizonAssignment: horizonB,
    horizonLetter: "B"
  },
  {
    horizonAssignment: horizonC,
    horizonLetter: "C"
  },
  {
    horizonAssignment: parentRock,
    horizonLetter: "Parent Rock"
  },
];

var horizonLayer = "";
var horizonLetter = [];
var horizonO = [];
var horizonA = [];
var horizonE = [];
var horizonB = [];
var horizonC = [];
var parentRock = [];
var peds = "";
var pedSize = 0;
var pedStructure = "";
var profileDepth = 0;

var soilColor = "";
var soilDepth = 0;
var soilType = "";

var output = "";


for (var index = 0; index < horizons.length; index++){
  horizonLetter = getLetter(horizons);
  
  horizonLayer = prompt("Is the " + horizonLetter[index] + " horizon present?\nPlease enter \"yes\" or \"no\".");
  horizonLayer = horizonLayer.toLowerCase();
  if (horizonLayer === "yes" || horizonLetter === "y") {
    soilDepthInformation();
    
    soilType = prompt("Enter the soil type.");
    
    soilColor = prompt("Enter the soil color.");
 
    peds = prompt("Are peds present?\nPlease enter \"yes\" or \"no\"."); 
    peds = peds.toLowerCase();
    if (peds === "yes" || peds === "y") {
      pedInformation();
    }else{
      alert("Thank you. Select \"OK\" to continue.");
      pedSize = 0;
      pedStructure = ("Not present");
    }
    
    profileDepth += soilDepth;
    
    output += (horizonLetter[index] + " Horizon: \n" + 
             "\tHorizon Depth: " + (soilDepth / 100).toFixed(1) + " cm\n" +
             "\tSoil Type: " + soilType + "\n" +
             "\tSoil Color: " + soilColor + "\n" +
             "\tPed Size: " + (pedSize / 100).toFixed(1) + " cm\n" +
             "\tPed Structure: " + pedStructure + "\n\n");

  }else{
    alert("Thank you. Select \"OK\" to continue.");
  }
  

}  
  output += ("\tSoil Profile Depth: " + (profileDepth / 100).toFixed(1));
document.write(output);