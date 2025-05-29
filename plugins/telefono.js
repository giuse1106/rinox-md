import fetch from "node-fetch";

let handler = async (m, { conn, args }) => {
    if (!args[0]) {
        return conn.sendMessage(m.chat, { text: "❌ *Devi inserire il nome del telefono!*\n📌 _Esempio:_ *.telefono iPhone 15 Pro*" }, { quoted: m });
    }

    let query = args.join(" ");
    let apiUrl = `https://api-mobilespecs.azharimm.dev/v2/search?query=${encodeURIComponent(query)}`;

    try {
        let res = await fetch(apiUrl);
        let data = await res.json();

        if (!data || !data.data || data.data.phones.length === 0) {
            return conn.sendMessage(m.chat, { text: "❌ *Telefono non trovato!* Prova con un altro modello." }, { quoted: m });
        }

        let phone = data.data.phones[0]; // Prende il primo risultato trovato
        let phoneDetailsUrl = `https://api-mobilespecs.azharimm.dev/v2/${phone.slug}`;

        let detailsRes = await fetch(phoneDetailsUrl);
        let detailsData = await detailsRes.json();

        if (!detailsData || !detailsData.data) {
            return conn.sendMessage(m.chat, { text: "❌ *Errore nel recupero delle specifiche!*" }, { quoted: m });
        }

        let specs = detailsData.data;
        let rating = (Math.random() * 4 + 6).toFixed(1); // Genera un voto casuale tra 6 e 10

        let message = `📱 *Scheda tecnica di ${specs.phone_name}:*\n\n` +
                      `📌 *Marca:* ${specs.brand}\n` +
                      `📌 *Display:* ${specs.specifications[0]?.specs[0]?.value || "N/A"}\n` +
                      `📌 *Batteria:* ${specs.specifications[3]?.specs[0]?.value || "N/A"}\n` +
                      `📌 *Processore:* ${specs.specifications[1]?.specs[0]?.value || "N/A"}\n` +
                      `📌 *Fotocamera:* ${specs.specifications[2]?.specs[0]?.value || "N/A"}\n` +
                      `📌 *Sistema:* ${specs.os || "N/A"}\n\n` +
                      `⭐ *Voto complessivo:* ${rating}/10\n\n`;

        let image = specs.phone_images.length > 0 ? specs.phone_images[0] : null;

        if (image) {
            await conn.sendMessage(m.chat, { image: { url: image }, caption: message }, { quoted: m });
        } else {
            await conn.sendMessage(m.chat, { text: message }, { quoted: m });
        }

    } catch (err) {
        console.error(err);
        conn.sendMessage(m.chat, { text: "❌ *Errore nel recupero delle informazioni!* Riprova più tardi." }, { quoted: m });
    }
};

handler.command = /^(telefono|phone)$/i;
export default handler;