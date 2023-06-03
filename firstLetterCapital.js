/*In this code file I am practicing if a user is given with a prompt to enter their name 
and accidently they enter the name in a wrong way then how to mend that situation and how 
to still produce workable code, that produces output in the form of
Hello Name, where first letter is capital and the rest are set to lowercase*/

var name = prompt("Give me a name");
var name1= name.slice(0,1);
var name1UP=name1.toUpperCase();
var name2=name.slice(1,name.length);
var name2lower=name2.toLowerCase();
alert("Hello "+name1UP+name2lower);
