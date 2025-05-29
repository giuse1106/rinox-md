let handler = async (m, { conn, mentionedJid }) => {
    // Controlla se c'è una menzione, altrimenti usa chi ha inviato il comando
    let destinatario = mentionedJid && mentionedJid.length > 0 ? mentionedJid[0] : m.sender;
    let user = `@${destinatario.split("@")[0]}`;

    let messaggio = `🍝 *SPAGHETTI TIME!* 🍝\n\n🥄 ${user}, ecco un bel piatto di spaghetti per te! Buon appetito! 🤌😋`;

    // Lista di immagini funzionanti di spaghetti
    let immagini = [
        "https://www.giallozafferano.it/images/16-1649/Spaghetti-alla-Carbonara_450x300.jpg",
        "https://www.ricette.com/wp-content/uploads/2013/12/spaghetti-pomodoro.jpg",
        "https://www.cucchiaio.it/content/cucchiaio/it/ricette/2018/06/spaghetti-aglio-olio-e-peperoncino/jcr:content/header-par/image_single.img.jpg/1627917698503.jpg"
    ];

    // Sceglie un'immagine casuale tra quelle disponibili
    let imageUrl = immagini[Math.floor(Math.random() * immagini.length)];

    // Invia il messaggio con immagine e menzione
    await conn.sendMessage(m.chat, { 
        image: { url: imageUrl }, 
        caption: messaggio, 
        mentions: [destinatario] 
    }, { quoted: m });
};

// Configurazione del comando per Gab
handler.command = ["spaghetti", "pasta"];
handler.category = "fun";
handler.desc = "Manda un piatto di spaghetti a qualcuno 🍝";

export default handler;