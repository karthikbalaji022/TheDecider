document.getElementById("player1").innerHTML=localStorage.getItem("name1");
document.getElementById("player2").innerHTML=localStorage.getItem("name2");

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
