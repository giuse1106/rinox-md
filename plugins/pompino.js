let handler = async (m, { conn, text, participants }) => {
    let utentiMenzionati = m.mentionedJid;
    
    if (!utentiMenzionati.length) {
        return m.reply("😏 *Devi menzionare qualcuno per fargli un pompino!* \nEsempio: _.pompino @utente_");
    }

    let utenteScelto = utentiMenzionati[0];

    let messaggio = `💋 *${await conn.getName(m.sender)} ha fatto un pompino a @${utenteScelto.split("@")[0]}!* 🔥\n\n😏 Speriamo che sia stato di gradimento...`;

    await conn.sendMessage(m.chat, { text: messaggio, mentions: [utenteScelto] }, { quoted: m });
};

// Definizione del comando per Gab
handler.command = ["pompino"];
export default handler;