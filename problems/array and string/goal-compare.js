// There are 2 arrays given from team A and team B. The question asks you to return an array containing how many times team A scored equal to or less than team B.A
// Ex. teamA = [3,2,4,7,2];
//     teamB = [5, 3];
//     output = [4, 3];
// this is because 5 is equal to or greater than 4 of the scores from team A;
// this is because 3 is equal to or greater than 3 of the scores from team A;
// thus resulting in the out put[4, 3];

function compare(teamA, teamB) {
    let ans = [];

    let i = 0;
    let j = 0;

    let count = 0;
    while (j < teamB.length) {
        let aScore = teamA[i];
        let bScore = teamB[j];

        if(bScore >= aScore) {
            count++;
        }

        i++;

        if(i > teamA.length-1) {
            j++;
            ans.push(count);
            count = 0;
            i = 0;
        }
    }

    return ans;
}