let handler = async (m, { conn, text }) => {
    // Lista di ricette disponibili
    const ricette = {
        "carbonara": {
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
        "risotto": {
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
    };

    // Se non viene specificata una ricetta, mostra l'elenco
    if (!text) {
        let elencoRicette = "🍽 *Ricette disponibili:*\n\n";
        for (let key in ricette) {
            elencoRicette += `- ${ricette[key].nome} (*${key}*)\n`;
        }
        elencoRicette += "\n📌 *Usa il comando così:* _.cucina [nome]_ \nEsempio: _.cucina carbonara_";
        return m.reply(elencoRicette);
    }

    // Cerca la ricetta richiesta
    let chiaveRicetta = text.toLowerCase();
    if (!ricette[chiaveRicetta]) {
        return m.reply("❌ *Ricetta non trovata!*\nUsa _.cucina_ per vedere l'elenco delle ricette disponibili.");
    }

    let ricetta = ricette[chiaveRicetta];

    // Formatta il messaggio della ricetta
    let messaggio = `🍽 *${ricetta.nome}*\n\n🍏 *Ingredienti:*\n${ricetta.ingredienti.join("\n")}\n\n👨‍🍳 *Preparazione:*\n${ricetta.preparazione}`;

    // Invia la ricetta richiesta
    await conn.sendMessage(m.chat, { text: messaggio }, { quoted: m });
};

// Definizione del comando per Gab
handler.command = ["cucina"];
export default handler;