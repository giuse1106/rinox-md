let handler = async (m, { text }) => {
    const ricette = [
        {
            nome: "Pasta alla Carbonara",
            ingredienti: [
                "200g di spaghetti",
                "100g di guanciale",
                "2 tuorli d'uovo",
                "50g di pecorino romano",
                "Pepe nero q.b.",
                "Sale q.b."
            ],
            preparazione: "Cuoci la pasta al dente. Rosola il guanciale in padella. Mescola tuorli e pecorino, poi aggiungi la pasta scolata con un po' di acqua di cottura. Unisci il guanciale e amalgama bene. Servi con pepe nero."
        },
        {
            nome: "Risotto ai Funghi",
            ingredienti: [
                "200g di riso Carnaroli",
                "100g di funghi porcini",
                "1 scalogno",
                "Brodo vegetale q.b.",
                "50g di parmigiano grattugiato",
                "Olio d'oliva q.b.",
                "Sale e pepe q.b."
            ],
            preparazione: "Soffriggi lo scalogno, aggiungi i funghi e il riso. Sfuma con vino bianco e aggiungi brodo gradualmente. Manteca con burro e parmigiano prima di servire."
        }
    ];

    // Scegli una ricetta casuale
    const ricettaCasuale = ricette[Math.floor(Math.random() * ricette.length)];
    
    // Formatta il messaggio
    let messaggio = `🍽 *${ricettaCasuale.nome}*\n\n🍏 *Ingredienti:*\n${ricettaCasuale.ingredienti.join("\n")}\n\n👨‍🍳 *Preparazione:*\n${ricettaCasuale.preparazione}`;
    
    // Invia il messaggio
    await m.reply(messaggio);
};

// Definizione del comando per Gab
handler.command = ["ricetta"];  
export default handler;