//Code for Karel(a robot from Harvard) to move along a certain path on a 5*5 world//
//Approach 1, hard coding
function main(){
  move();
  move();
  move();
  move();
  turnLeft();
  move();
  move();
  move();
  move();
}

//Approach 2, using appropriate functions
function main(){
  moveFourTimes();
  turnLeft();
  moveFourTimes();
}

function moveFourTimes(){
  move();
  move();
  move();
  move();
}
