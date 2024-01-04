// console.log("Coucou, Node !")

// On récupère le paquet express dans notre code. On va chercher la dépendance express dans notre module

const express = require('express')

// On importe ici la liste des pokemons, puis on s'en sert dans notre point de terminaison un peu plus bas
let pokemons = require('./mock-pokemon') 

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

app.get('/api/pokemons/:id',(req, res) => { 

    // On extrait l'identifant contenu dans l'URL
    
    // ! le retour d'Express passe les nombres en chaine de caractère. Il faut utiliser parseInt pour le changer en nombre
    const id = parseInt(req.params.id) 

    // On utilise la methode ES6 find pour récupérer le pokemon en fonction d'une certaine condition. Ici on cherche le pokemon qui a le même id que celui de l'url : pokemon.id === id

    const pokemon = pokemons.find(pokemon => pokemon.id === id)

    res.send(`Vous aves demandé le pokemon ${pokemon.name}`)
})


//Nouveau point de terminaisin affichant le nombre total d pokemons
app.get('/api/pokemons/',(req, res) => { 

    let totalPokemon = pokemons.length;  
    res.send(`il y a ${totalPokemon} pokemons dans cette liste`)
})

app.listen(port, () => console.log(`Notre application est démarrée sur http://localhost:${port}`))

