function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("white");
  fill("#2196F3")
  textSize(64);
  textFont("Chiller")
  textAlign(CENTER, CENTER);
  
  let maximo = width;
  let minimo = 0;
  let palavra = "A + J =♡";
  
  //
  //
let quantidade = map(mouseX, minimo, maximo, 1,palavra.length);
  
  //
  let parcial = palavra.substring(0,quantidade)
  text(parcial, 200, 200)
}
