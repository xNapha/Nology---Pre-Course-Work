// Client brief...
// Create an application which can be used to keep track
// of a score in a fotoball match

// 1. It's football there's two teams, so lets keep two scores going
let teamScoreOne = 0;
let teamScoreTwo = 0;
let isGameStopped = false;

// 2. When team one button is clicked, increment team1 score
function handleTeamOneClick(){
  teamScoreOne++
}

// 3. when team two button is clicked, increment team2 score
function handleTeamTwoClick(){
  teamScoreTwo++
}

// 4. When do we finish/stop?
function handleStopGame(){
  isGameStopped = true;
}
