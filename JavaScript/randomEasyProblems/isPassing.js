/*******************************************************************************
Write a function isPassing(assessments) that takes in an array of assessment objects.
The function should return a true if the average assessment score is at least 70.
It should return false otherwise.

Examples:

var assessments1 = [
  {number: 1, score: 60},
  {number: 2, score: 90},
  {number: 3, score: 80},
  {number: 4, score: 100},
  {number: 5, score: 85}
];

isPassing(assessments1) => true


var assessments2 = [
  {number: 1, score: 60},
  {number: 2, score: 20},
  {number: 3, score: 45}
];

isPassing(assessments2) => false
*******************************************************************************/

// 1. i need to grab total score by adding all scores and dividing by the length of my array
// 2. need to loop through all assessments then grab each score
// 3. return the true if avg score is atleast 70 (avg <= 70)



function isPassing(assessments) {
    var totalScore = 0;

    for (var i = 0; i < assessments.length; i++) {
        var current = assessments[i];

        totalScore += current.score;
    }

    var totalAvg = totalScore / assessments.length;

    return totalAvg >= 70;
}