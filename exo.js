//Déclarer 2 variables, et échanger leurs valeurs en utilisant une 3è variable temporaire
var a = 5;
b = 'rich'
temp = a
a = b
b = temp



//Ecrire une fonction de multiplication vérifiant que les 2 entrées sont des nombres

function multiplication(a,b){
    if(typeof(a)=="number" && typeof(a)=="number" ){
        return a*b;
    }else{
        return "mouf";
    }
}


// Ecrire une fonction qui salue un utilisateur, en prenant son nom en entrée
// const readline = require('readline');

// function saluerUtilisateur() {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   rl.question("Entrez votre nom : ", (nom) => {
//     console.log("Bonjour, " + nom + " !");
//     rl.close();
//   });
// }

// saluerUtilisateur();

// Ecrire une fonction qui nous renvoie la parité d’un nombre (true si le nombre est pair,
//   false si le nombre est impair)

function parite(a){
  if(a % 2 == 0){
    return "pair";
  }
  else{
    return "impair";
  }
}

console.log(parite(5))