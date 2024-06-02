#! /usr/bin/env/node

import inquirer from "inquirer";

const quiz:{
    question_1:string,
    question_2:string,
    question_3:string,
    question_4:string,
    question_5:string,
} = await inquirer.prompt([
    {
        type:"list",
        name:"question_1",
        message:"What is your name?",
        choices:["Fizza","Javeria","Samiya","Safa"] 
    },
    {
        type:"list",
        name:"question_2",
        message:"What is your age?",
        choices:[30,25,20,10]
    },
    {
        type:"input",
        name:"question_3",
        message:"What is your hobby?",
        choices:["Coding","Travel","Reading","Hanging out with friends"]
    },
    {
        type:"input",
        name:"question_4",
        message:"What is your qualification?",
        choices:["B.Com","BSC","BA","Middle"]
    },
    {
        type:"list",
        name:"question_5",
        message:"Which operator in Type Script is used to check if two values are not equal?",
        choices:["!==", "<", ">","*"]
    },
]);

let score: number = 0;

switch(quiz.question_1){
    case "fizza":
        console.log("1. Correct");
        ++score;
        break;
        default:
            console.log("1. Wrong");
}
switch(quiz.question_2){
    case "30":
        console.log("2. Correct");
        ++score;
        break;
        default:
            console.log("2. Wrong");
}
switch(quiz.question_3){
    case "travel":
        console.log("3. Correct");
        ++score;
        break;
        default:
            console.log("3. Wrong");
}
switch(quiz.question_4){
    case "B.Com":
        console.log("4. Correct");
        ++score;
        break;
        default:
            console.log("4. Wrong");
}
switch(quiz.question_5){
    case "!==":
        console.log("5. Correct");
        ++score;
        break;
        default:
            console.log("5. Wrong");
}

console.log(`Score: ${score}`);






