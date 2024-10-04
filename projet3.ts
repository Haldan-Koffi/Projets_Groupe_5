class client {
    
    numero_ticket: number;
    prioritaire: boolean;

    constructor(numero_ticket: number, client_prioritaire: boolean){
        this.numero_ticket = numero_ticket; //this.numero_client pour faire référence à l'instance courante de la classe
        this.prioritaire = client_prioritaire;
    }
}


class file_attente{
    
    clients: client[] = [];
    dernier_ticket: number = 0;


    ajout_client(prioritaire: boolean = false): void { // méthode qui permet d'ajouter des nouveaux clients
        
        const nouveau_client = new client(++this.dernier_ticket, prioritaire); //++this.dernier_ticket incrémente la valeur de dernier_ticket, et utilise la valeur + 1 | new est utilisé pour créer une nouvelle instance (nouvel objet) d'une classe

        if (prioritaire) {

          const  index_non_prioritaire = this.clients.findIndex(client => !client.prioritaire); //on cherche la premiere position non prioritaire à l'aide des index
          if (index_non_prioritaire === - 1) { // s'il n'y a aucun client non prioritaire dans le tableau on l'ajoute normalement au tableau
            this.clients.push(nouveau_client);
        } else {
            this.clients.splice(index_non_prioritaire, 0, nouveau_client); // avec la méthode splice avec le 0 on place le nouveau client prioritaire juste avant le premier client non prioritaire
        }
        
        
     } else {
        this.clients.push(nouveau_client);
    }

    console.log(`Client ajouté ! Numéro de ticket : ${nouveau_client.numero_ticket} Statut : ${prioritaire ? 'Prioritaire' : 'normal'}`); // opération ternaire qui permet d'écrire une condtion if-else en une seule ligne de code
    
    
    }

    file_vide(): boolean {
        return this.clients.length === 0;
    }

    supprimer_client(ticket: number): void {
        const index = this.clients.findIndex(client => client.numero_ticket === ticket);

        if (index !== -1) {

            this.clients.splice(index, 1);
            console.log(`Le client ayant le ticket numéro ${ticket} a été supprimé.`);
        } else {
            console.log(`Aucun client n'a le ticket numéro ${ticket}.`);
        }

        }


        afficher_file(): void {
            console.log("État actuel de la file d'attente:");
            this.clients.forEach(client => {
                console.log(`- Ticket ${client.numero_ticket} Statut : ${client.prioritaire ? 'Prioritaire' : 'Normal'}`);
            });
        }
        
    
        taille(): number {
            return this.clients.length;
        }


}

// Pour l'utilisation

const file_client = new file_attente();

file_client.ajout_client(false);  // client non prioritaire
file_client.ajout_client(true);   // client prioritaire
file_client.ajout_client(false);  // Client non prioritaire
file_client.ajout_client(false);  // Client non prioritaire
file_client.ajout_client(true);   // client prioritaire

file_client.afficher_file();  // Affiche l'état actuel de la file

file_client.supprimer_client(2);       // supprime le deuxième client

file_client.afficher_file();  // Affiche l'état après le retrait