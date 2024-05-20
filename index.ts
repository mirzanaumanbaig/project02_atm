import inquirer from "inquirer";

interface ansType{
    userId:string,
    userPin:number,
    accountType : string,
    transactionType:string,
    amount:number,


}
const atmObj:ansType=await inquirer.prompt([
    {
        type:"input",
        name:"userId",
        message:"Kindly Enter your Id: ",
    },
    {
        type:"number",
        name:"userPin",
        message:"Kindly Enter your PIN: ",
    },
    {
        type:"list",
        name:"accountType",
        choices:["Current","Saving"],
        message:"Select your Transaction: ",        
    },
    {
        type:"list",
        name:"transactionType",
        choices:["Fash Cash","Withdraw"],
        message:"Select your Transaction: ",
        when(answers)
        {
            return answers.accountType
        }
    },
    {
        type:"list",
        name:"amount",
        choices:[1000,2000,10000,20000],
        message:"Select your ammount: ",
        when(answers)
        {
            return answers.transactionType == "Fash Cash"
        }
    },
    {
        type:"number",
        name:"amount", 
        message:"Enter your ammount: ",
        when(answers)
        {
            return answers.transactionType == "Withdraw"
        }
    } 
])

if(atmObj.userId=="abc" && atmObj.userPin==123)
{
    const balance=Math.round(Math.random()*1000000);
    console.log(balance); 
    console.log(atmObj.amount); 
    const enteredAmmount = atmObj.amount;

    if( balance >= enteredAmmount)
    {
        const remainingAmmount = balance-atmObj.amount;
        console.log("Your remaining balance is ",remainingAmmount);
    }
    else
    {
        console.log("Insufficent Blance");
    }

}
else{
    console.log("Wrong userId or PIN. ");

}