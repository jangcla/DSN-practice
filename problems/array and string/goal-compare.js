// There are 2 arrays given from team A and team B. The question asks you to return an array containing how many times team A scored equal to or less than team B.A
// Ex. teamA = [3,2,4,7,2];
//     teamB = [5, 3];
//     output = [4, 3];
// this is because 5 is equal to or greater than 4 of the scores from team A;
// this is because 3 is equal to or greater than 3 of the scores from team A;
// thus resulting in the out put[4, 3];

function compare(teamA, teamB) {
    let ans = []; //this is for the output that asks for an array of number of times teamB scored more or equal to teamA

    let i = 0; //pointer index for team A
    let j = 0; //pointer index for team B

    let count = 0; //counter for the amount of times teamB's score is greater than or equal to teamA's
    while (j < teamB.length) { //will keep looping until all of TeamB's array has been itterated
        let aScore = teamA[i];
        let bScore = teamB[j];

        if(bScore >= aScore) { //if greater than or equal to, then we increment the count
            count++;
        }

        i++; //increments the index for Team A
 
        if(i > teamA.length-1) {  //if i is greater than the length of TeamA array, then we do a couple things
            j++; //incremeant the index for teamB
            ans.push(count); //add in the current count to the answer arr
            count = 0; //restart the count
            i = 0; //increment into the next element in TeamB's array
        }
    }

    return ans; //should return an array of all the counts comparing team A and team B
}