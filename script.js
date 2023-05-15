function envoyerSignalement() {
    var description = document.getElementById("description").value;
    if (description.trim() !== "") {
      alert("Problème signalé : " + description);
      document.getElementById("description").value = "";
    } else {
      alert("Veuillez entrer une description du problème.");
    }
  }
  
  // Exemple de mise à jour des informations de l'usine
  function miseAJourInformationsUsine() {
    var temperature = Math.floor(Math.random() * 100);
    var pression = Math.floor(Math.random() * 100);
    var etat = (temperature > 50 || pression > 80) ? "Anormal" : "Normal";
  
    document.getElementById("temperature-valeur").textContent = temperature + " °C";
    document.getElementById("pression-valeur").textContent = pression + " psi";
    document.getElementById("etat-valeur").textContent = etat;
  }
  
  // Mettre à jour les informations de l'usine toutes les 5 secondes
  setInterval(miseAJourInformationsUsine, 5000);
  