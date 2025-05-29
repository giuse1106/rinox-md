let handler = async (m, { conn, text, mentionedJid }) => {
    // Se l'utente menziona qualcuno, usa la menzione; altrimenti, usa chi scrive il comando
    let utente = mentionedJid && mentionedJid.length > 0 ? mentionedJid[0] : m.sender;

    // Genera un livello di potenza casuale
    let potenza = Math.floor(Math.random() * 1000000) + 1; // Da 1 a 1.000.000

    // Determina una reazione in base al livello di potenza
    let reazione = "💪 Sei un combattente normale!";
    if (potenza > 9000) reazione = "🔥 *È OLTRE 9000!!!* 🔥";
    if (potenza > 50000) reazione = "⚡ *Sei un guerriero d'élite!*";
    if (potenza > 100000) reazione = "🌟 *Il tuo potere è incredibile!*";
    if (potenza > 500000) reazione = "👑 *Sei una leggenda vivente!*";

    // Messaggio da inviare
    let messaggio = `⚡ *Analisi del Livello di Potenza* ⚡\n\n👤 @${utente.split('@')[0]} ha un livello di potenza di *${potenza}*! 💥\n\n${reazione}`;

    // Invia il messaggio con la menzione
    await conn.sendMessage(m.chat, { text: messaggio, mentions: [utente] }, { quoted: m });
};

// Definizione del comando per Gab
handler.command = ["potenza", "powerlevel"];
export default handler;