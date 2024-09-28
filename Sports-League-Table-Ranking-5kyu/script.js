'use strict';

// Parse the Match Results:
// Extract teams and their scores from each match result.

// Calculate Points and Statistics for Each Team:
// Maintain a dictionary to store each team's points, goals scored, and goals conceded.

// Rank the Teams:
// Sort the teams based on the ranking criteria.

// Format the Output:
// Convert the sorted team data into the specified string format.

const number = 6;
const games = [
  [0, 5, 2, 2], // Team 0 - Team 5 => 2:2
  [1, 4, 0, 2], // Team 1 - Team 4 => 0:2
  [2, 3, 1, 2], // Team 2 - Team 3 => 1:2
  [1, 5, 2, 2], // Team 1 - Team 5 => 2:2
  [2, 0, 1, 1], // Team 2 - Team 0 => 1:1
  [3, 4, 1, 1], // Team 3 - Team 4 => 1:1
  [2, 5, 0, 2], // Team 2 - Team 5 => 0:2
  [3, 1, 1, 1], // Team 3 - Team 1 => 1:1
  [4, 0, 2, 0], // Team 4 - Team 0 => 2:0
];

function computeRanks(number, games) {
  const positions = [];

  for (let i = 0; i < games.length; i++) {
    let points1 = 0;
    let points2 = 0;
    positions.push(
      [`Team ${games[i].at(0)}`, ` ${points1}:${points2} `],
      [`Team ${games[i].at(1)}`, ` ${points2}:${points1}`]
    );
  }
  return console.log(positions);
}
computeRanks(number, games);
