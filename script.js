

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

function pintar(id, player){
    document.getElementById(id).innerHTML="<p>"+player1.pieza+"</p>";
}

function jugada(id,player,turno){

    for(i=document.getElementById(id).innerHTML; i==true; i==false ){
        
    }
   
   
}
