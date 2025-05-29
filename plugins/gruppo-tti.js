import fetch from "node-fetch";

let handler = async (m, { conn, args }) => {
    let testo = args.join(" ");
    let user = m.sender;
    let userName = m.pushName || "Utente";

    // 📌 Controllo errori
    if (!testo) return conn.reply(m.chat, "❌ *Impossibile generare, testo non presente*", m);
    if (testo.split(" ").length > 10) return conn.reply(m.chat, "❌ *Impossibile generare, massimo 10 parole*", m);

    // 📌 Scarica l'immagine profilo dell'utente o usa quella standard di WhatsApp
    let userImageURL = await conn.profilePictureUrl(user, "image").catch(() => "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg");

    // 📌 HTML per generare l'immagine
    let htmlContent = `
        <html>
        <head>
            <style>
                body { background-color: black; color: white; font-family: 'Inter', sans-serif; text-align: left; padding: 20px; }
                .container { display: flex; align-items: center; }
                .profile { width: 250px; height: 250px; border-radius: 50%; margin-right: 15px; }
                .text-box { font-size: 80px; }
            </style>
        </head>
        <body>
            <div class="container">
                <img src="${userImageURL}" class="profile">
                <div class="text-box">
                    <strong>${userName}</strong><br>
                    ${testo}
                </div>
            </div>
        </body>
        </html>`;

    // 📌 Invia l'HTML all'API per convertirlo in immagine
    let response = await fetch("https://hcti.io/v1/image", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic " + Buffer.from("5c8e9313-2417-44d5-a813-f4028fde983a:55444939-b52d-4983-9307-ea1d75f124ef").toString("base64"),
        },
        body: JSON.stringify({ html: htmlContent }),
    });

    let json = await response.json();
    if (!json.url) return conn.reply(m.chat, "❌ *Errore nella generazione dell'immagine!*", m);

    // 📌 Scarica e invia l'immagine generata
    let imageBuffer = await fetch(json.url).then(res => res.buffer());
    await conn.sendMessage(m.chat, { 
        image: imageBuffer,
        caption: "" 
    }, { quoted: m });
};

handler.command = /^tti$/i;
handler.group = true;

export default handler;