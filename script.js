var random =Math.random();
random*=2;
random=Math.ceil(random);

if (random===1){
document.querySelector(".toss-coin").setAttribute("src", "images/heads.jpg");
}
else if(random===2){
  document.querySelector(".toss-coin").setAttribute("src", "images/tails.jpeg");
  document.querySelector(".toss-coin").style.width="50%";


}
