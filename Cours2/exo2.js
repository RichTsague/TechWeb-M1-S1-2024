// Définition d'un étudiant sans type explicite
const Joe = {
    nom: "Doe",
    prenom: "John",
    age: 20,
    scores: [15, 18, 20, 12, 17]
  };
  
  // Fonction pour calculer la moyenne
  function calculerMoyenne(student) {
    const total = student.scores.reduce((accumulateur, note) => accumulateur + note, 0);
    const moyenne = total / student.scores.length;
    return moyenne;
  }
  
 