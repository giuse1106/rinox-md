let handler = async (m, { conn, text, mentionedJid }) => {
    // Se l'utente menziona qualcuno, usa la menzione; altrimenti, usa chi scrive il comando
    let utente = mentionedJid && mentionedJid.length > 0 ? mentionedJid[0] : m.sender;

    // Genera una percentuale casuale di tradimento
    let percentuale = Math.floor(Math.random() * 101);

    // Messaggio da inviare
    let messaggio = `🔪 *Analisi del Tradimento* 🔪\n\n👤 @${utente.split('@')[0]} è traditore al *${percentuale}%*! 😈\n\n💔 Fidarsi è bene, ma... 🤨`;

    // Invia il messaggio con la menzione
    await conn.sendMessage(m.chat, { text: messaggio, mentions: [utente] }, { quoted: m });
};

// Definizione del comando per Gab
handler.command = ["traditore"];
export default handler;