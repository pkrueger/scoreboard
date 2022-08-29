let numberOfTeams = 2;
let totalOfScores = 0;
let scores = [
  {
    teamName: 'team1',
    score: 0
  },
  {
    teamName: 'team2',
    score: 0
  }
];

function increaseScore(team, number) {
  findTeam(team).score += number;
  totalOfScores += number;
  drawScore();
}

function findTeam(team) {
  return scores[scores.findIndex(item => item.teamName === `team${team}`)];
}

function addTeam() {
  ++numberOfTeams;
  let teamNameInput = `team${numberOfTeams}`
  // FIXME Figure out prompt
  // prompt('Choose a team name', `Team ${numberOfTeams}`);
  let teamArrayInput = { teamName: teamNameInput, score: 0 }

  let scoreDisplayTemplate = `
    <div class="col-12 col-md-6">
      <h1 class="team mt-5">Team ${numberOfTeams}</h1>
      <div id="team${numberOfTeams}" class="score score-away">
        00
      </div>
    </div>
  `;

  let scoreButtonsTemplate = `
    <div class="col-6 text-center score-controls">
      <div>
        <button class="btn" onclick="increaseScore(${numberOfTeams}, -1)">-1</button>
        Team ${numberOfTeams}
        <button class="btn" onclick="increaseScore(${numberOfTeams}, 1)">+1</button>
      </div>
      <div>
        <button class="btn" onclick="increaseScore(${numberOfTeams}, -2)">-2</button>
        Team ${numberOfTeams}
        <button class="btn" onclick="increaseScore(${numberOfTeams}, 2)">+2</button>
      </div>
      <div>
        <button class="btn" onclick="increaseScore(${numberOfTeams}, -3)">-3</button>
        Team ${numberOfTeams}
        <button class="btn" onclick="increaseScore(${numberOfTeams}, 3)">+3</button>
      </div>
      <div>
        <button class="btn" onclick="increaseScore(${numberOfTeams}, -6)">-6</button>
        Team ${numberOfTeams}
        <button class="btn" onclick="increaseScore(${numberOfTeams}, 6)">+6</button>
      </div>
    </div>
  `;


  scores.push(teamArrayInput)

  document.getElementById('score-display').innerHTML += scoreDisplayTemplate;
  document.getElementById('score-buttons').innerHTML += scoreButtonsTemplate;
}

function reset() {
  for (let item of scores) {
    item.score = 0;
  }
  totalOfScores = 0;
  drawScore();
}

function drawScore() {
  for (let item of scores) {
    if (item.score >= 0 && item.score < 10) {
      document.getElementById(item.teamName).innerText = `0${item.score}`;
    } else {
      document.getElementById(item.teamName).innerText = `${item.score}`;
    }
  }

  document.getElementById('score-total').innerText = `Score Total: ${totalOfScores}`;
}