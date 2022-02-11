// You are given an array of jumps (being a positive or negative number) that determines whether you 
// jump up or down a certain amount of stairs. Your goal is to figure out the lowest stair necessary 
// to start from to prevent the jumper from ever jumping below the stairs(which is step 0).

// Example 
// let jumps = [-5, 6, -3, -2];
    // jumpingStairs(jumps) => 6;
    // this is because
    // 6 - 5 = 1;
    // 1 + 6 = 7;
    // 7 - 3 = 4;
    // 4 - 2 = 2;
    // thus 6


let jumpingStairs = (jumps) => {
    let start = 0;
    let currentStep = start;

    let i = 0;
    while(i < jumps.length) {
        let jump = jumps[i];

        currentStep += jump;

        i++;
        if (currentStep < 1) {
            let neededSteps = (currentStep * -1);
            
            start += neededSteps;
            currentStep = start;

            i = 0;
        }

    }

    return start;
}