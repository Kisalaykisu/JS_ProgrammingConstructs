//Q1 - Help user find degF or degC based on their Conversion Selection.
const prompts = require("prompt-sync")();
let option  = parseInt(prompts('Enter 1 to convert degC (0 to 100) to degF and 2 to convert degF (32 to 212) to degC : '));
let temp = parseInt(prompts('Enter the temperature: '))
switch(option){
    case 1 :if(temp>=0 && temp<=100){
                 console.log('The temp in degrees F = ' + degF(temp) + '\n');
            }  
            else console.log('Invalid Range \n');
            break;

    case 2 : if(temp>=32 && temp<=212){
                console.log('The temp in degrees F = ' + degC(temp) + '\n');
            }
            else console.log('Invalid Range \n');
            break;
}

function degF (temp) {
    return ((temp * 9/5) + 32);
}

function degC (temp) {
    return ((temp - 32) * 5/9);
}


//Q2 - Check tww numbers are palindromes
arePalindromes('1234','4321');
function arePalindromes(a,b){
    if(JSON.stringify(a.split('')) == JSON.stringify(b.split('').reverse())){
        console.log('The numbers are Palindromes \n');
    }else console.log('The numbers are not Palindromes \n');
}


//Q3 - Take a number from user and check if the number is a Prime then show that its palindrome is also prime
let num = parseInt(prompts('Enter a number to get palindrome and check if prime : '));
let palindrome = getPalindrome(num);
checkIfPrime(num);
checkIfPrime(palindrome);

function checkIfPrime(num){
    let count = 0;
    for(i=2;i<num;i++){
        if (num%i==0){
            count++;
        }
    }
    if (count==0){
        console.log(num+ " is a prime number \n");
    }else{
        console.log(num + " is not a prime number \n");
    }
}

function getPalindrome(num){
    return parseInt(num.toString().split('').reverse().join(''));
}