import { downloadMediaMessage } from "@whiskeysockets/baileys";
import axios from "axios";
import fs from "fs";

// Configura Google Vision AI (o un servizio simile)
const API_KEY = "TUO_GOOGLE_VISION_API_KEY";
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

const handler = async (message, bot) => {
    if (!message.mtype || message.mtype !== "stickerMessage") return;

    try {
        // Scarica lo sticker
        const buffer = await downloadMediaMessage(message, "buffer");
        const tempFilePath = "./temp/sticker.jpg";
        fs.writeFileSync(tempFilePath, buffer);

        // Analizza l'immagine con Google Vision AI
        const imageBase64 = buffer.toString("base64");
        const response = await axios.post(API_URL, {
            requests: [{
                image: { content: imageBase64 },
                features: [{ type: "SAFE_SEARCH_DETECTION" }]
            }]
        });

        const annotations = response.data.responses[0].safeSearchAnnotation;
        if (!annotations) return;

        // Controllo dei livelli di contenuto esplicito
        const { adult, racy } = annotations;
        const isExplicit = (adult === "LIKELY" || adult === "VERY_LIKELY" || racy === "VERY_LIKELY");

        if (isExplicit) {
            const chatId = message.key.remoteJid;
            const userId = message.key.participant;

            // Rimuove l'utente dal gruppo
            await bot.groupParticipantsUpdate(chatId, [userId], "remove");
            await bot.sendMessage(chatId, `🚫 Utente @${userId.split("@")[0]} rimosso per contenuti inappropriati.`, {
                mentions: [userId]
            });
        }

        // Elimina il file temporaneo
        fs.unlinkSync(tempFilePath);
    } catch (err) {
        console.error("Errore nel plugin anti-porno:", err);
    }
};

// Esporta il plugin
export default handler;