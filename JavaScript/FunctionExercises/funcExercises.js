//ex 1
console.log("Ex 1");
function returnHW() {
    var textToReturn = 'Hello World';
    return textToReturn;
}

console.log(returnHW());

//ex 2
console.log("Ex 2");
function quadrupler(number) {
    return(4*number);
}

console.log(quadrupler(5));

//ex 3
console.log("Ex 3");
function welcome(firstName, lastName){
    var message = "Hello " + firstName + " " + lastName + ", how can I help you?";
    return message;
}

console.log(welcome("Mateusz", "Markowski"));

//ex 4
console.log("Ex 4");
function temperatureConverter(Fahrenheit){
    var celcius = (Fahrenheit - 32) * 5/9;
    return celcius;
}
console.log(temperatureConverter(32));

//ex 5
console.log("Ex 5");
function dogYearsConvererter(humanAge){
    tempAge = humanAge;
    dogYears = 0;
    if(tempAge > 0){
        tempAge -= 1;
        dogYears += 15;
        if(tempAge > 0){
            tempAge -= 1;
            dogYears += 9;
        }
    }
    dogYears += tempAge*5;
    return dogYears;
}

console.log(dogYearsConvererter(3));

//ex 6
console.log("Ex 6");
function calculator(num1, operator, num2){
    let operatorsArr = ['+', '-','*','/'];
    if(typeof(num1) != 'number' || typeof(num2) != 'number'){
        console.log("ERROR! Number invalid");
    } else {
        let operatorIndex = operatorsArr.indexOf(operator);
        if(operatorIndex == -1){
            console.log("ERROR! Operator invalid");
        }
        else{
            if(operator == '+'){
                return(num1+num2);
            }
            else if(operator == '-'){
                return(num1-num2);
            }
            else if(operator == '*'){
                return(num1*num2);
            }
            else if(operator == '/'){
                if(num2 == 0){
                    console.log("You can't divide by 0!")
                } else {
                    return(num1/num2);
                }
            }
            else {
                console.log("This operation hasn't been programmed yet! Sorry.")
            }
        }
    }
}
let op = '/';
console.log(calculator(5, '/' ,2));

//ex 7
console.log("Ex 7");
function min(num1, num2){
    if(num2 < num1){
        return num2;
    } else {
        return num1;
    }
}
console.log(min(1,2));
console.log(min(100, 10));
console.log(min(1, 1));

//ex 8
console.log("Ex 8");
function pow(value, power){
    return(value**power);
}
console.log(pow(2,2));
console.log(pow(2,3));
console.log(pow(1,100));