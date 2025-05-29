let db = {}; // Simulazione database soldi, sostituiscilo con il tuo sistema economico

let handler = async (m, { conn, args, text }) => {
    if (!args[0] || !args[1] || isNaN(args[1])) {
        return m.reply("❌ *Formato errato!*\n📌 *Esempio:* _.scommessa Milan-Inter 500_ (Scommetti 500$ su Milan-Inter)");
    }

    let partita = args[0]; // Nome della partita
    let importo = parseInt(args[1]); // Soldi scommessi
    let utente = m.sender;

    // Controlla se l'utente ha abbastanza soldi
    if (!db[utente]) db[utente] = 1000; // Saldo iniziale se l'utente è nuovo
    if (db[utente] < importo) {
        return m.reply("💰 *Non hai abbastanza soldi per scommettere!*");
    }

    // Simula l'esito della partita (vince o perde)
    let risultato = Math.random() < 0.5 ? "vittoria" : "sconfitta";
    let guadagno = risultato === "vittoria" ? importo * 2 : -importo;

    // Aggiorna il saldo dell'utente
    db[utente] += guadagno;

    // Messaggio di esito
    let messaggio = `⚽ *Scommessa su ${partita}* ⚽\n\n💸 *Importo scommesso:* ${importo}$\n🎲 *Risultato:* ${risultato === "vittoria" ? "✅ Hai vinto!" : "❌ Hai perso!"}\n💵 *Nuovo saldo:* ${db[utente]}$`;

    await conn.sendMessage(m.chat, { text: messaggio }, { quoted: m });
};

// Configurazione del comando per Gab
handler.command = ["scommessa", "bet"];
handler.category = "economia";
handler.desc = "Scommetti soldi virtuali su partite di calcio ⚽💰";

export default handler;