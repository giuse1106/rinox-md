import ytdl from 'ytdl-core';
import yts from 'yt-search';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const handler = async (m, { conn, text }) => {
    if (!text) {
        return m.reply("❌ *Devi scrivere il titolo del video!*\n📌 *Esempio:* _.play2 Never Gonna Give You Up_");
    }

    try {
        // Cerca il video su YouTube
        const searchResults = await yts(text);

        if (!searchResults || !searchResults.videos || searchResults.videos.length === 0) {
            return m.reply("❌ *Nessun risultato trovato! Prova con un altro titolo.*");
        }

        const video = searchResults.videos[0]; // Prende il primo risultato valido
        const videoUrl = video.url;
        const filePath = `${__dirname}/video.mp4`;

        await conn.sendMessage(m.chat, { text: `🎥 *Scaricando:* ${video.title}...\n\n🔗 ${videoUrl}` }, { quoted: m });

        // Scarica il video
        const stream = ytdl(videoUrl, { filter: "audioandvideo", quality: "lowest" });
        const writeStream = fs.createWriteStream(filePath);
        stream.pipe(writeStream);

        stream.on("finish", async () => {
            await conn.sendMessage(m.chat, { video: { url: filePath }, caption: `🎬 ${video.title}` }, { quoted: m });
            fs.unlinkSync(filePath); // Elimina il file dopo l'invio
        });

        stream.on("error", (err) => {
            console.error("❌ Errore durante il download:", err);
            m.reply("⚠️ *Errore durante il download del video!* Riprova con un altro titolo.");
        });

    } catch (err) {
        console.error("❌ Errore generale:", err);
        m.reply("⚠️ *Errore durante la ricerca o il download!* Riprova più tardi.");
    }
};

// Configurazione del comando per Gab
handler.command = ["play2"];
handler.category = "media";
handler.desc = "Scarica e invia un video da YouTube 📹";

export default handler;