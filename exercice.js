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
console.log(multiplication(5,5))

// Ecrire une fonction qui salue un utilisateur, en prenant son nom en entrée
function salutation(nom = prompt("Entrez votre nom :")){
    return
}