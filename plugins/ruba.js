let db = {}; // Database temporaneo per i soldi degli utenti

let handler = async (m, { conn }) => {
    let ladro = m.sender;

    // Estrai le menzioni dal messaggio
    let vittima = m.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || m.mentionedJid?.[0];

    // Controllo se c'è una menzione valida
    if (!vittima) {
        return m.reply("❌ *Devi menzionare qualcuno per rubargli i soldi!*\nEsempio: _.ruba @utente_");
    }

    if (vittima === ladro) {
        return m.reply("🤨 *Non puoi rubare a te stesso!*");
    }
    
    if (!db[ladro]) db[ladro] = 1000;
    if (!db[vittima]) db[vittima] = 1000;

    let percentuale = Math.floor(Math.random() * 100) + 1; // Percentuale casuale tra 1 e 100
    let successo = percentuale <= 50; // 50% di possibilità di successo
    let importo = Math.floor(Math.random() * 500) + 100; // Da 100 a 500$

    if (successo) {
        if (db[vittima] < importo) importo = db[vittima]; // Non può rubare più di quanto la vittima ha
        db[ladro] += importo;
        db[vittima] -= importo;
        await conn.sendMessage(m.chat, { 
            text: `💰 *${await conn.getName(ladro)} ha rubato ${importo}$ a ${await conn.getName(vittima)}!* 🏃‍♂️💨\n📊 *Percentuale di successo:* ${percentuale}%\n\n💸 *Saldo attuale di ${await conn.getName(ladro)}:* ${db[ladro]}$\n💸 *Saldo attuale di ${await conn.getName(vittima)}:* ${db[vittima]}$`, 
            mentions: [vittima] 
        }, { quoted: m });
    } else {
        let multa = Math.floor(importo / 2);
        if (db[ladro] < multa) multa = db[ladro]; // Se ha meno soldi, perde tutto
        db[ladro] -= multa;
        await conn.sendMessage(m.chat, { 
            text: `🚔 *${await conn.getName(ladro)} è stato beccato mentre tentava di rubare!* \n💸 *Multa di ${multa}$ pagata alla banca.*\n📊 *Percentuale di successo:* ${percentuale}%\n\n💰 *Saldo attuale di ${await conn.getName(ladro)}:* ${db[ladro]}$`, 
            mentions: [vittima] 
        }, { quoted: m });
    }
};

handler.command = ["ruba"];
export default handler;