'use strict';

function guessGame() {
    let userName = prompt('What is your Name?');
    confirm('Welcome ' + userName);
    confirm('Let\'s play a Guessing Game!');
    confirm('Please ' + userName + ' answer yes or No');
    let Q1 = prompt('Are you currently working?');
    let grade = 0;
    switch (Q1.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('Good');
            console.log('Are you currently working?', Q1);
            grade += 1;
            break;
        case 'NO':
        case 'N':
            alert('Good luck in a new jop');
            console.log('Are you currently working?', Q1);
            break;
        default:
            console.log('Are you currently working?', Q1);
            break;
    }
    let Q2 = prompt('Do you have a laptop?');
    switch (Q2.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('Good');
            console.log('Do you have a laptop?', Q2);
            grade += 1;
            break;
        case 'N':
        case 'NO':
            alert('you Should bay a new one');
            console.log('Do you have a laptop?', Q2);
            break;
        default:
            console.log('Do you have a laptop?', Q2);
            break;
    }
    let Q3 = prompt('Do you have a software background?');
    switch (Q3.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('Good');
            console.log('Do you have a software background?', Q3);
            grade += 1;
            break;
        case 'N':
        case 'NO':
            alert('It is not necessary');
            console.log('Do you have a software background?', Q3);
            break;
        default:
            console.log('Do you have a software background?', Q3);
            break;
    }
    let Q4 = prompt('Do you have a programming lean?');
    switch (Q4.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('Amazing');
            console.log('Do you have a programming lean?', Q4);
            grade += 1;
            break;
        case 'N':
        case 'NO':
            alert('I do not advise you to complete');
            console.log('Do you have a programming lean?', Q4);
            break;
        default:
            console.log('Do you have a programming lean?', Q4);
            break;
    }
    let Q5 = prompt('Do you have a bachelors degree?');
    switch (Q5.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('It is better');
            console.log('Do you have a bachelors degree?', Q5);
            grade += 1;
            break;
        case 'N':
        case 'NO':
            alert('Good luck');
            console.log('Do you have a bachelors degree?', Q5);
            break;
        default:
            console.log('Do you have a bachelors degree?', Q5);
            break;
    }
    confirm('Welcome ' + userName);
    console.log('userName Answer', userName, Q1, Q2, Q3, Q4, Q5);


    let oppo = 3;
    let guessingAge = prompt('Can you guess my age?');
    while (oppo) {
        oppo -= 1;
        if (guessingAge === '23') {
            alert('Right answer');
            grade += 1;
            break;
        } else if (guessingAge > 23) {
            alert('Too High Guss');
        } else if (guessingAge < 23) {
            alert('Too Low Guss');
        }
        guessingAge = prompt('please try again you have : ' + oppo + ' remaining!');

    }
    confirm('my Age is 23 !');
    console.log('user guessing', guessingAge);



    let mealsList = ['mansaf', 'kabsa', 'pizza', 'kibbeh', 'maqluba'];
    console.log('list length', mealsList.length);
    console.log(mealsList);
    let attempts = 5;
    let userInput = prompt('try to guess the meal');
    let correct = false;
    while (attempts && !correct) {
        for (let i = 0; i < mealsList.length; i++) {
            if (userInput.toLowerCase() === mealsList[i]) {
                alert('correct answer!');
                correct = true;
                grade += 1;
                break;
            }
            attempts -= 1;
            userInput = prompt('please try again you have : ' + attempts + ' remaining!');
        }
    }
    alert('The  meals list are: ' + mealsList);
    alert('Your garde is: ' + grade);

    console.log('userInput', userInput);

}