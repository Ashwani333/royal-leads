function add()
{
var a,b,d,x,e,g,c;
a=Number(document.getElementById("first").value);
b=Number(document.getElementById("second").value);
x=Number(document.getElementById("third").value);
g=Number(document.getElementById("fourth").value);
c=Number(document.getElementById("fifth").value);
d=(a*b)/x;
e=(x*x-b*b)/2*g; 
var value=Math.sqrt((2*g*e)/((a*a)-(d*d)));
var form=(c*a*d)*value;
document.getElementById("solve").value= e;
document.getElementById("answer").value= d;
document.getElementById("require").value= form;
}