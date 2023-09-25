// console.log("Coucou, Node !")


// On récupère le paquet express dans notre code. On va chercher la dépendance express dans notre module
const { log } = require('console')
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
app.get('/', (req, res) => res.send('Hello again, Express !'))

// On démarre notre appli sur le port 3000 et on affiche message de confirmation grace à la methode listen

// On ajoute un nouveau chemin
// Avec Express on peut récupérer des paramètres de l'URL directement depuis nos points de terminaison. 

// Il faut récupérer l'identifiant contenu dans l'url

// Express recupere la valeur du param et le transmettre dans le point de terminaison via l'objet req

app.get('/api/pokemon/:id/:name',(req, res) => { 

    // On extrait l'identifaint contenu dans l'URL
    const id = req.params.id
    const name = req.params.id

    res.send(`Vous aves demandé le pokemon n° ${id} dont le nom est ${name}`)
})



app.listen(port, () => console.log(`Notre application est démarrée sur http://localhost:${port}`))


