const dateOfBirth = document.querySelector("#dateOfBirth");
const luckyNumber = document.querySelector("#luckyNumber");
const checkNumber = document.querySelector("#checkNumber");
const outputSection = document.querySelector("#outputBox");

checkNumber.addEventListener("click", function doSomething(){
    checkDateOfBirthIsLucky()
})

function compareValues(sum, inputNumber){
    if(inputNumber <= 0){
        outputSection.innerText = "Lucky number should be greater than zero"
    }else{
        if(sum%inputNumber === 0){
            outputSection.innerText = "Congratulations!! Your birthday is lucky"
        }else{
            outputSection.innerText = "Sorry!! Your birthday is not lucky"
        }
    }
}

function checkDateOfBirthIsLucky(){
    const birthDate = dateOfBirth.value;
    // console.log(typeof birthDate)
    const sum = calculateSum(birthDate);
    const inputNumber = luckyNumber.value;
    if(sum && inputNumber){
        compareValues(sum, inputNumber)
    }else if(birthDate === ''){
        outputSection.innerText = "Please select a Date"
    }else if(!inputNumber && sum){
        outputSection.innerText = "Please enter a Lucky Number"
    }else{
        outputSection.innerText = "Please enter a Date and Lucky Number"
    }
}

function calculateSum(dob){
    dob = dob.replaceAll('-', '')
    let sum = 0
    for(let i=0; i<dob.length; i++){
        sum += Number(dob.charAt(i));
    }
    return sum; 
}