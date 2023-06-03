//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
 function bmiCalculator (weight, height){
     var weight = prompt("Give me a weight");
     var height = prompt("Give me a height");
     return weight/(height*height); 
 }

var bmi = bmiCalculator(65,1.8);

alert("Your BMI is "+Math.round(bmi));

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
