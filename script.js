const oneNames = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const numbericOneNames = [0,1,2,3,4,5,6,7,8,9]

const tenNames = ["ten", "twenty", "thirty", "forty", "fifty",
                 "sixty", "seventy", "eighty", "ninety"];

const numbericTenNames = [10,20,30,40,50,60,70,80,90]

const hundredNames = [ "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"]

const numbericHunderedNames = [100,200,300,400,500,600,700,800,900]

const thousandNames = ["one thousand"]

const numbericThousandNames = [1000]
const container = document.getElementById("results")

function numbersOneThruNineteen(num){
    // let newDiv = document.createElement("div")
    // newDiv.innerHTML = oneNames[num]
    // container.appendChild(newDiv)
return oneNames[num];

}


function numbersTwentyThruNinetyNine(num){
    let index1 = Math.floor(num/10)
    let index2 = num % 10 
    if (num % 10 === 0 ){
        return tenNames[index1-1]
    }
    else{
        return tenNames[index1-1]+ "-" + oneNames[index2]
    }
}

function oneHunThrNn(num){
    let index1 = Math.floor(num/100)
    let remainder = num - index1*100
    let remainderNum = 0
    if(num%100===0){
        return hundredNames[index1-1]
    }
    else if(num%100!==0){
        if (remainder>=1 && remainder <=19){
            remainderNum = numbersOneThruNineteen(remainder)
        }
        else {
            remainderNum = numbersTwentyThruNinetyNine(remainder)
        }
        return hundredNames[index1-1] +"-"+ remainderNum
    }
}

let numbersString = ""
for(i=1;i<=1000;i++){
    if(i>=1 && i<=19){
        
   //document.write(numbersOneThruNineteen(i) + ", ")}
   numbersString += numbersOneThruNineteen(i) + ", "}
    else if(i>=20 && i<=99){
        numbersString += numbersTwentyThruNinetyNine(i) + ", "
       //document.write(numbersTwentyThruNinetyNine(i) + ", ")
    }
    else if(i>=100 && i <=999){
        numbersString += oneHunThrNn(i) + ", "
        //document.write(oneHunThrNn(i) + ", ")
    }
    else {
        numbersString += "one-thousand"
    }
   
}
let newDiv = document.createElement("div")
newDiv.innerHTML = numbersString
container.appendChild(newDiv)   




   