var random1=Math.floor(Math.random()*6+1);
document.getElementsByClassName("dice1")[0].setAttribute("src","images/dice"+random1+".png");
var random2=Math.floor(Math.random()*6+1);
document.getElementsByClassName("dice2")[0].setAttribute("src","images/dice"+random2+".png");
if (random1>random2){
  document.getElementById("winner").innerHTML="❤"+localStorage.getItem("name1")+"❤ 🏆wins🏆";
}else if(random2>random1){
  document.getElementById("winner").innerHTML="❤"+localStorage.getItem("name2")+"❤ 🏆wins🏆";
}else{
  document.getElementById("winner").innerHTML="🤝DRAW🤝";

}
do{
var name1=prompt("enter player1 name");
localStorage.setItem("name1",name1);
document.getElementById("player1").innerHTML=name1;
}while(name1==="")
do{
var name2=prompt("enter player2 name");
localStorage.setItem("name2",name2);
document.getElementById("player2").innerHTML=name2;
}while(name2==="")
