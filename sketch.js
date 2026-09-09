//Projeto 2 - Introdução a JavaScript
let corDoFundo;

function setup() {
  createCanvas(600, 600);
  //background(220);
  corDoFundo = color(255, 0, 0);
}

function draw() {
  background(220);
  fill(corDoFundo);
  circle(300, 300, mouseX);
  
}