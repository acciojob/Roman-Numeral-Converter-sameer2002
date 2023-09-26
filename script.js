function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here

	 let romanNumeral = "";

  for (let i = 0; i < obj.length; i++) {
    while (num >= obj[i][1]) {
      romanNumeral += obj[i][0];
      num -= obj[i][1];
    }
  }

  return romanNumeral;

}
console.log(btn)
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));
const inputz=document.getElementById("btn");
inputz.addEventListener("click",function(){
    const gotInput=input.value
     console.log(gotInput)
     const output1 = convertToRoman(gotInput); // Output will be "XIV"

console.log(output1);
let container=document.getElementsByClassName("container");

let roman=document.getElementById("roman")
roman.innerText=output1

})



// do not edit below this line
module.exports = convertToRoman
