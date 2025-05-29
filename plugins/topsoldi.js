let db = {}; // Simulazione del database dei soldi, assicurati di collegarlo al tuo sistema

let handler = async (m, { conn }) => {
    // Controlla se ci sono dati nel database
    if (Object.keys(db).length === 0) {
        return m.reply("❌ *Non ci sono dati sulla classifica!* Inizia a guadagnare soldi per comparire in classifica.");
    }

    // Ordina gli utenti per soldi, dal più ricco al più povero
    let classifica = Object.entries(db)
        .sort(([, a], [, b]) => b - a) // Ordina dal più ricco al più povero
        .slice(0, 10); // Prende i primi 10

    // Crea il messaggio della classifica
    let messaggio = "🏆 *CLASSIFICA DEI PIÙ RICCHI* 🏆\n\n";
    classifica.forEach(([id, soldi], index) => {
        let nome = id.split("@")[0]; // Mostra il nome senza @s.whatsapp.net
        messaggio += `${index + 1}. 🏅 @${nome} → *${soldi}$*\n`;
    });

    await conn.sendMessage(m.chat, { text: messaggio, mentions: classifica.map(([id]) => id) }, { quoted: m });
};

// Configurazione del comando per Gab
handler.command = ["topsoldi", "classificaricchi", "topmoney"];
handler.category = "economia";
handler.desc = "Mostra la classifica di chi ha più soldi 💰";

export default handler;