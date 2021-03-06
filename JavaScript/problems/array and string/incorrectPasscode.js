// One Very Important User(VIU) has a Very Confidential Document(VCD) stored on his Dropbox account.He doesn't let anyone see the VCD, especially his roommates who often have access to his devices.

// Opening the Dropbox mobile app on the VIU's tablet requires a four-digit passcode. To ensure the confidentiality of the stored information, the device is locked out of Dropbox after 10 consecutive failed passcode attempts. We need to implement a function that, given an array of attempts made throughout the day and the correct passcode, checks to see if the device should be locked, i.e. 10 or more consecutive failed passcode attempts were made.

// Example

// For
// passcode = "1111" and

// attempts = ["1111", "4444",
//     "9999", "3333",
//     "8888", "2222",
//     "7777", "0000",
//     "6666", "7285",
//     "5555", "1111"]
// the output should be
// solution(passcode, attempts) = true.

// The first attempt is correct, so the user must have successfully logged in.However, the next 10 consecutive attempts are incorrect, so the device should be locked.Thus, the output should be true.

//     For
// passcode = "1234" and

// attempts = ["9999", "9999",
//     "9999", "9999",
//     "9999", "9999",
//     "9999", "1234",
//     "9999", "9999",
//     "9999", "9999"]
// the output should be
// solution(passcode, attempts) = false.

// There are only 9 consecutive incorrect attempts, so there's no need to lock the device.


function solution(passcode, attempts) {
    console.log(passcode)
    console.log(attempts)

    //create a loop through the attempts

    //if the amount of attempts reach 10 before a correct code is found return true
    //if the amount of attempts never reach 10 return false
    //if a correct code is found before 10 attempts are found, reset the attempt counter

    let attemptCount = 0;


    for (let i = 0; i < attempts.length; i++) {
        let code = attempts[i];

        attemptCount++; //counts and increments counter of attempts

        if (code === passcode) attemptCount = 0; //check if the current attempt is the same code
        if (attemptCount === 10) return true; // if the previous if statement is never snagged and the counter hits 10 attempts immdediately return true meaning we need to lock the account
    }

    return false; //if it has itterated through the whole attempts array and never reaches the 10 count, then return false meaning it is not yet needed to lock the account
}


//this is space: O(1) as we only key into count variable
//this is time: O(n) as we itterate through the array which is n