let palavra;

function setup() {
  createCanvas(400, 400);
 palavra = palavraAleatoria();
}

function palavraAleatoria(){
   let palavras = ["Shereke", "barbudo", "gostosão"];
    return random(palavras);
}

function inicializaCores(){
    background("blue");
  fill ( "white");
  textSize ( 64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo){
   let quantidade = map( mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}
function draw() {
 inicializaCores();
 let texto = palavraParcial (0, width);
 
  text(texto, 200, 200);
  /*if (mouseX < 50){
    let palavra = "S";
    text(palavra, 200, 200);
  } else if(mouseX < 100){
    let palavra = "Sh";
    text (palavra, 200, 200);
  } else if(mouseX < 150){
    let palavra = "She";
    text (palavra, 200, 200);
  } else if(mouseX < 200){
    let palavra = "Sher";
    text (palavra, 200, 200);
  }  else if(mouseX < 250){
    let palavra = "Shere";
    text (palavra, 200, 200);
  }  else if(mouseX < 300){
    let palavra = "Sherek";
    text (palavra, 200, 200);
  }  else if(mouseX < 350){
    let palavra = "Shereke";
    text (palavra, 200, 200);
  } */
}