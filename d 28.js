const players = [];

document.getElementById('playerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const country = document.getElementById('country').value;
  const playerScore = document.getElementById('playerScore').value;

  if (firstName === '' || lastName === '' || country === '' || playerScore === '') {
    document.getElementById('formMessage').textContent = 'All fields are required';
  } else {
    addPlayer(firstName, lastName, country, parseInt(playerScore));
    document.getElementById('playerForm').reset();
  }
});

function addPlayer(firstName, lastName, country, score) {
  const newPlayer = { firstName, lastName, country, score };
  players.push(newPlayer);
  updateLeaderboard();
}

function updateLeaderboard() {
  const leaderboardList = document.getElementById('leaderboardList');
  leaderboardList.innerHTML = '';

  players.forEach((player, index) => {
    const playerCard = document.createElement('div');
    playerCard.className = 'playerCard';

    playerCard.innerHTML = `
      <div class="playerInfo">
        <span>${player.firstName} ${player.lastName}</span>
        <span>${player.country}</span>
        <span>${player.score}</span>
      </div>
      <div class="scoreControls">
        <button class="scoreButton" onclick="increaseScore(${index})">+5</button>
        <button class="scoreButton" onclick="decreaseScore(${index})">-5</button>
      </div>
    `;

    leaderboardList.appendChild(playerCard);
  });
}

function increaseScore(index) {
  players[index].score += 5;
  updateLeaderboard();
}

function decreaseScore(index) {
  players[index].score -= 5;
  updateLeaderboard();
}
