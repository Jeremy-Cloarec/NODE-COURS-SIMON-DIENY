// console.log("Coucou, Node !")


// On récupère le paquet express dans notre code. On va chercher la dépendance express dans notre module
const express = require('express')

// On crée une instance de l'application exprss. Petit serveur web.
const app = express()

// Port sur laquelle on démarre notre API rest. Petit s
const port = 3000

// Point de terminaison.
// Methode de la requête : 2 élé : 

//1  Le chemin de la requête 
//2 Réponse au client qui a elle même deux arguments en entrée : 
//  - req : permet de recuperer un objet request correspondant à la requête recu en entrée
// -res : correspond à la réponse, l'objet qu'on doit renvoyer depuis express à notre client
// On utilise la methode send de l'objet response pour afficher notre message
app.get('/', (req, res) => res.send('Hello, Express !'))

// On démarre notre appli sur le port 3000 et on affiche message de confirmation grace à la methode listen

app.listen(port, () => console.log(`Notre application est démarrée sur http://localhost:${port}`))
