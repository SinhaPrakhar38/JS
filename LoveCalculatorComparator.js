var name1 = prompt("Enter name1");
var name2 = prompt("Enter name2");

var n = Math.random();
n = n*100;
n = Math.floor(n)+1;

if (n<50){
    alert("Your love score percent is "+n+ " % which is very low, sad to hear that");    
}
else if(n>50 && n<90){
    alert("Your love score percent is decent "+n+" %, have a great love life");
}
else{
    alert("jabadiya jodi h ji");
}
