let handler = async (m, { text, conn }) => {
    if (!text) return conn.sendMessage(m.chat, { text: "❌ *Devi scrivere qualcosa dopo 'Simon dice'!*" }, { quoted: m });

    if (!text.toLowerCase().startsWith("simon dice")) {
        return conn.sendMessage(m.chat, { text: "❌ *Devi iniziare il messaggio con 'Simon dice'!*" }, { quoted: m });
    }

    let response = text.substring(11).trim(); // Rimuove "Simon dice" dal testo
    if (!response) return conn.sendMessage(m.chat, { text: "❌ *Devi scrivere qualcosa dopo 'Simon dice'!*" }, { quoted: m });

    conn.sendMessage(m.chat, { text: response }, { quoted: m });
};

handler.command = /^(simondice)$/i;
export default handler;