console.log("Hello, Node !")

//On récupère le paquet express dans notre code. require = indique au js de chercher la dépendance express dans notre dossier. 
const express = require('express') 

//On crée une instance d'une application express grâce à la méthode du même nom. Il s'agit du petit serveur web sur laquelle va fonctionner notre API rest.
const app = express()

//On définit une constante nommé port avec la valeur 3000. Port sr laquelle on va démarrer l'api
const port = 3000

//On définit notre premier point de terminaison (handpoint).
//Méthode : GET. Prend en paramètre deux élé. 1)Chemin de la requête qui va permette de traiter le point de terminaison. 2) Fonction dont le rôle est de fournir une répoonse au client lorsque le point de terminaison est appelé. Cette fonction a elle -même deux arguments en entrée. 1 :req : permet de récupérer un objet request correspondant à la requête reçue en entrée par notre point de terminaison. 2:correspond à la réponse : l'objet que l'on doit renvoyer  à notre client.  
app.get('/', (req,res) => res.send("Hello, Express !" ))

//On démarre l'PI rest sur le port 3000. 
app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))