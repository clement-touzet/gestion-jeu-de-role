
```
docker-compose up
npm run dev
```

Base de données: 



`npm run db:push` : pour pousser le nouveau schéma sur la bd en local
`npm run db:seed` : exécute le programme pour replir la base de données à partir du fichier seed.ts (cf : voir drizzle config)
`npm run db:studio` : lance le mode studio de drizzle (tableau administraion de la bd) 
`npm run db:migrate` : exécute les nouvelles migrations. a utiliser après avoir exécuté la commande "generate" (en dessous) et fait des modifications sur la bd et que tu veux pousser ces modifs en prod
`npm run db:generate` : génère les modifications des tables effectuées sur les schéma drizzle en base de données. Cette commande génère un fichier avec  des commandes SQL pour effectuer une migration.