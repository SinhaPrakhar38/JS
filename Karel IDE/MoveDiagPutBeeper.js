function main(){
   putBeeper();
   moveDiagPutBeeper();
   moveDiagPutBeeper();
   moveDiagPutBeeper();
   moveDiagPutBeeper();
}

function moveDiagPutBeeper(){
   move();
   turnLeft();
   move();
   putBeeper();
   turnRight();
}
   
