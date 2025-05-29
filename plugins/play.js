import { exec } from "child_process";
import fs from "fs";
import path from "path";

const PLAY_FOLDER = "/sdcard/Download";
if (!fs.existsSync(PLAY_FOLDER)) fs.mkdirSync(PLAY_FOLDER, { recursive: true });

let handler = async (m, { conn, args }) => {
  if (!args[0]) {
    return conn.reply(m.chat, "❌ Inserisci un titolo o link YouTube!\n📌 Esempio: *.play Never Gonna Give You Up*", m);
  }

  let query = args.join(" ");
  let isUrl = query.includes("youtube.com") || query.includes("youtu.be");
  let searchTarget = isUrl ? query : `ytsearch1:"${query}"`;

  conn.sendMessage(m.chat, { react: { text: "🎧", key: m.key } });

  // Step 1: Ottieni metadati
  exec(`yt-dlp --dump-json ${searchTarget}`, async (error, stdout) => {
    if (error || !stdout) {
      return conn.reply(m.chat, "❌ Errore nel recuperare informazioni dalla traccia.", m);
    }

    let videoInfo;
    try {
      // Se è una ricerca, il primo risultato è in `entries[0]`
      const parsed = JSON.parse(stdout);
      videoInfo = parsed?.entries?.[0] || parsed;
    } catch (e) {
      return conn.reply(m.chat, "❌ Errore nel parsing del JSON yt-dlp", m);
    }

    const { title, uploader, duration_string, thumbnail, webpage_url } = videoInfo;
    const fileName = title.replace(/[^\w\s]/gi, "_") + ".mp3";
    const outputPath = path.join(PLAY_FOLDER, fileName);

    // Step 2: Invia embed info
    await conn.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption:
        `🎵 *Download in corso...*\n\n` +
        `📌 Titolo: *${title}*\n` +
        `🎤 Artista: *${uploader}*\n` +
        `⏱️ Durata: *${duration_string || "?"}*\n` +
        `🌐 Link: ${webpage_url || "N/A"}`
    }, { quoted: m });

    // Step 3: Scarica MP3
    const cmd = `yt-dlp -f bestaudio --extract-audio --audio-format mp3 -o "${outputPath}" "${webpage_url}"`;
    exec(cmd, async (err) => {
      if (err) {
        return conn.reply(m.chat, "❌ Errore nel download del file audio.", m);
      }

      if (!fs.existsSync(outputPath)) {
        return conn.reply(m.chat, "❌ File audio non trovato dopo il download.", m);
      }

      await conn.sendMessage(m.chat, {
        audio: { url: outputPath },
        mimetype: "audio/mpeg",
        fileName,
        caption: `✅ *Download completato!*\n🎶 ${title}\n📁 Salvato in: /sdcard/Download/`
      }, { quoted: m });
    });
  });
};

handler.command = /^play$/i;
handler.group = true;

export default handler;