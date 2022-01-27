

const player={
  name:'',
  pieza:'',
};
const turno ={
  
  valor: 0,
  
  isPar:"true"
};

let player1= Object.create(player);
player1.pieza="X";
let player2= Object.create(player);
player2.pieza="O";


function chName(id,player){

let nameJug =document.getElementById(id);
player1.name=prompt("Cual es tu nombre");
nameJug.innerHTML="Jugador: " + player1.name;

}
let turnoActual=Object.create(turno);

function cambiaJugada(id, turno){
  if(turnoActual.isPar==false){
    document.getElementById(id).innerHTML="<p>"+player1.pieza+"</p>";
    turnoActual.isPar=true

  }else{
    document.getElementById(id).innerHTML="<p>"+player2.pieza+"</p>";
    turnoActual.isPar=false
  }
  turno++
}

function gana(){
  movReal=[]
  for(i=1;i<10;i++){
   movReal.push(document.getElementById('c'+i).textContent)
  }
/*Evaluar lista movReal, las 9 opciones de gana, pero solo las casillas implicadas no todo el array*/
  console.log(movReal)
/*
  console.log(movReal[0],movReal[1],movReal[2])
  console.log(movReal[3],movReal[4],movReal[5])
  console.log(movReal[6],movReal[7],movReal[8])
  console.log(movReal[0],movReal[3],movReal[6])
  console.log(movReal[1],movReal[4],movReal[7])
  console.log(movReal[2],movReal[5],movReal[8])
  console.log(movReal[0],movReal[4],movReal[8])
  console.log(movReal[6],movReal[4],movReal[2])
*/
  let parte = movReal.slice([0],[3])
  console.log(parte)
  let primeraLinea = [movReal[0],movReal[1],movReal[2]]
  console.log(primeraLinea)

  }


function jugada(id,turno){
  
  if(document.getElementById(id).textContent==(player1.pieza) ){
    window.alert("Jugada invalida")
  }else{
    if(document.getElementById(id).textContent==(player2.pieza)){
      window.alert("Jugada invalida")
    }else{ cambiaJugada(id, turno)
    }
  }
  gana();
}
