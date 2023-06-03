function main(){
   putBeeperOnRight();
   moveLeft();
   putBeeperOnLeft();
   moveRight();
    putBeeperOnRight();
   moveLeft();
   putBeeperOnLeft();
   moveRight();
    putBeeperOnRight();
   moveLeft();
   putBeeperOnLeft();
   moveRight();
}

function moveRight(){
   move();
   turnRight();
   move();
   turnRight();
}

function putBeeperOnRight(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
}

function moveLeft(){
   turnLeft();
   move();
   turnLeft();
}

function putBeeperOnLeft(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}
