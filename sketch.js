//https://youtu.be/6ai8EfTT3z8

var tela = 1;
var largura = 200;
var altura = 50;
var menuX = 100;
var menuY1 = 100;
var menuY2 = 160;
var menuY3 = 220;

var voltarx = 300;
var voltary = 350;
var larguravoltar = 50;
var alturavoltar = 30;

var entrada1;
var cont = 0;

var questao1 = true;
var questao2 = false;
var questao3 = false;
var questao4 = false;
var questao5 = false;

let img;
let img2;

function preload() {
  img = loadImage('programador.jpeg');

  img2 = loadImage('educador.jpeg');
}

function setup() {
  createCanvas(400, 400);
  entrada1 = createInput();
  entrada2 = createInput();
  entrada3 = createInput();
  entrada4 = createInput();
  entrada5 = createInput();
}

function draw() {
  textStyle(NORMAL);
  //MENU
  // INICIAR
  if (tela == 1) {
    background(200, 80, 80);

    textAlign(CENTER);
    textSize(26);

    if (mouseX > menuX && mouseX < menuX + largura && mouseY > menuY1 && mouseY < menuY1 + altura) {
      stroke(210);
      fill(20);
      rect(menuX, menuY1, largura, altura, 35);
      if (mouseIsPressed) {
        tela = 2;
      }

    }

    fill(200);
    noStroke();
    text("Iniciar", 195, 135);

    //INFORMAÇÕES DO GAME
    if (mouseX > menuX && mouseX < menuX + largura && mouseY > menuY2 && mouseY < menuY2 + altura) {
      stroke(210);
      fill(20);
      rect(menuX, menuY2, largura, altura, 35);
      if (mouseIsPressed) {
        tela = 3;
      }
    }

    fill(200);
    noStroke();
    text("Informações", 198, 192);


    //CRÉDITOS
    if (mouseX > menuX && mouseX < menuX + largura && mouseY > menuY3 && mouseY < menuY3 + altura) {
      stroke(210);
      fill(20);
      rect(menuX, menuY3, largura, altura, 35);
      if (mouseIsPressed) {
        tela = 4;
      }
    }

    fill(200);
    noStroke();
    text("Créditos", 201, 255);
  }
  
  
  

  // Play no game
  if (tela == 2) {
    
    
    entrada1.position(100, 155);
  

    entrada2.position(-1000, 155);
    

    entrada3.position(-1000, 155);
   

    entrada4.position(-1000, 155);
    

    entrada5.position(-1000, 155);
   

    
    background(80, 100, 220);
    textSize(14);
    fill(200);


      
      if (questao1 == true){
        text("é herbívoro, tem o corpo coberto por pelos curtos e lisos, são dóceis, comumente criados em sítios e a fêmea da espécie é chamada de égua." ,50,80, 260, 170);
        if(entrada1.value() == "cavalo" || entrada1.value == "Cavalo"){
          cont++;
          entrada1.value('');
          
          questao1 = false;
          questao2 = true;
        
        
        }   
 }

      if (questao2 == true){
        text("é mamífero, tem 4 patas, tem ótimo faro e boa audição, são dóceis e dizem que ele é o melhor amigo do homem.", 50, 80,260, 170);
         if(entrada1.value() == "Cachorro" || entrada1.value() == "cachorro"){
           cont++;
           entrada1.value('');
           
           questao2 = false;
           questao3 = true;
      
      
         }
}

      if (questao3 == true){
        text("é carnívoro, é coberto por escamas e são temidas por causa que algumas delas são peçonhentas e venenosas.", 50, 80, 260, 170);
        if(entrada1.value() == "Cobra" || entrada1.value() == "cobra"){
          cont++;
          entrada1.value('');
          
          questao3 = false;
          questao4 = true;
      
      
        }
      
  }

      if (questao4 == true){
        text("é carnívoro, possui corpo longo, medem cerca de 2,7 a 3 metros, podem pesar entre 170 e 230 Kg e é conhecido como o Rei da selva", 50, 80,260, 170);
       if(entrada1.value() == "Leão" || entrada1.value() == "leão"){
         cont++;
         entrada1.value('');
         
         questao4 = false;
         questao5 = true;
      
      
       }
      
  }

      if (questao5 == true){
        text("tem corpo pequeno e duro, é coberto por pelos, têm asas, são temidas porque algumas tem ferrão e podem picar e são responsáveis pela produção do mel.", 50, 75, 260, 170);
       if(entrada1.value() == "Abelha" || entrada1.value() == "abelha"){
          cont++;
          entrada1.value('');
         
         
 
         questao5 = false;
         
       
         
         
         
         
         
      
      
      
       }
        
      
    }
    
    if(questao1 == false && questao2 == false && questao3 == false && questao4 == false && questao5 == false){
      cont++;
      
         noStroke();
         fill(200);
         textSize(27);
         textAlign(CENTER);
         text("parabéns, vc acertou todas!!!!!", 50, 80, 260, 100);
      
      
        textAlign(LEFT);
    textSize(14);

    if (mouseX > voltarx && mouseX < voltarx  + larguravoltar  && mouseY > voltary  && mouseY < voltary + alturavoltar) {
      stroke(200);
      fill(20);
      rect(voltarx, voltary, larguravoltar, alturavoltar, 35);
      if (mouseIsPressed) {
        tela = 1;
        questao1 = true;
      }

    }

    fill(200);
    noStroke();
    text("Voltar", 308, 367);
    
      
      
    }
        
    
 }
  
    

  //informaçõess
  if (tela == 3) {
    background(10);
    fill(200);
    textSize(14);
    noStroke();
    textAlign(LEFT);
    text(" Este jogo trata da habilidade: (EF02CI04) Descrever características de plantas e animais (tamanho, forma, cor, fase da vida, local onde se desenvolvem etc.) que fazem parte de seu cotidiano e relacioná-las ao ambiente em que eles vivem. Tem como público alvo crianças que estejam cursando a matéria de Ciências do 2 ano do fundamental. O jogo consiste em fornecer características de um  animal e o jogador irá digitar a sua resposta.",20, 20, 260, 260);
    
    
      textAlign(LEFT);
    textSize(14);

    if (mouseX > voltarx && mouseX < voltarx  + larguravoltar  && mouseY > voltary  && mouseY < voltary + alturavoltar) {
      stroke(200);
      fill(20);
      rect(voltarx, voltary, larguravoltar, alturavoltar, 35);
      if (mouseIsPressed) {
        tela = 1;
        questao1 = true;
      }

    }

    fill(200);
    noStroke();
    text("Voltar", 308, 367);
    
    

  }

  //CRÉDITOS
  if (tela == 4) {
    background(10);
    fill(200);
    textSize(12);
    noStroke();
    textAlign(CENTER);
    text("PROGRAMADOR: Alysson Guilherme Lopes da Costa", 198, 190);

    text("EDUCADOR: Felipêncio Júnior", 198, 390);

    image(img, 70, 50, 250, 100);

    image(img2, 70, 250, 250, 100);

    
    
      textAlign(LEFT);
    textSize(14);

    if (mouseX > voltarx && mouseX < voltarx  + larguravoltar  && mouseY > voltary  && mouseY < voltary + alturavoltar) {
      stroke(200);
      fill(20);
      rect(voltarx, voltary, larguravoltar, alturavoltar, 35);
      if (mouseIsPressed) {
        tela = 1;
        questao1 = true;
      }

    }

    fill(200);
    noStroke();
    text("Voltar", 310, 367);
    

  }

}


