// Gravity values for each planet (in m/s²)
const gravity = {
  earth: 9.8,
  mars: 3.7,
  jupiter: 24.8,
  moon: 1.6,
  venus: 8.9,
  saturn: 11.2,
  neptune: 27.9,
  mercury: 3.7,
  uranus: 8.7
};

function calculateWeight() {
  const mass = document.getElementById('mass').value;
  const planet = document.getElementById('planet').value;
  const result = document.getElementById('result');

  if (!mass || !planet) {
      result.textContent = 'Please enter both mass and select a planet.';
      return;
  }

  const planetGravity = gravity[planet];
  const weight = mass * planetGravity;

  result.textContent = `The weight of the object on ${planet.charAt(0).toUpperCase() + planet.slice(1)} is ${weight.toFixed(2)} N (Newtons).`;
}

