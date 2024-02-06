const avengers = [
  "Iron Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
  "Hawkeye",
  "Spider-Man",
  "Black Panther",
  "Doctor Strange",
  "Captain Marvel",
  "Scarlet Witch",
  "Falcon",
  "Vision",
  "Ant-Man",
  "Wasp",
  "War Machine",
];

const villains = [
  "Thanos",
  "Loki",
  "Ultron",
  "Green Goblin",
  "Red Skull",
  "Magneto",
  "Doctor Octopus",
  "Venom",
  "Kingpin",
  "Killmonger",
  "Hela",
  "The Mandarin",
  "Ronan the Accuser",
  "Taskmaster",
  "Baron Zemo",
  "Abomination",
];

const powerfulArtifacts = [
  "Infinity Gauntlet",
  "Cosmic Cube",
  "Eye of Agamotto",
  "Mjolnir (Thor's hammer)",
  "Tesseract (Space Stone)",
  "Elders of the Universe artifacts",
  "Ultimate Nullifier",
  "Casket of Ancient Winters",
  "Wand of Watoomb",
  "Crimson Gem of Cyttorak",
  "Phoenix Force",
  "Nega-Bands",
  "Quantum Bands",
  "Darkhold",
  "Mandarin's Rings",
  "Serpent Crown",
];

function selectRandomAvenger() {
  const randomIndex = Math.floor(Math.random() * avengers.length);
  return avengers[randomIndex];
}

const randomAvenger = selectRandomAvenger();

function selectRandomVillain() {
  const randomIndex = Math.floor(Math.random() * villains.length);
  return villains[randomIndex];
}

const randomVillain = selectRandomVillain();

function selectRandomPowerfulArtifact() {
  const randomIndex = Math.floor(Math.random() * powerfulArtifacts.length);
  return powerfulArtifacts[randomIndex];
}

const randomPowerfulArtifact = selectRandomPowerfulArtifact();

function generateScenario() {
  return `${randomAvenger} is in a battle with ${randomVillain}. They are fighting for control of the ${randomPowerfulArtifact}.`;
}

const battleScenario = generateScenario();

console.log(battleScenario);
