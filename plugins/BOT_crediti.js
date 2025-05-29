import fs from 'fs';

const CREDITS_DB = './credits.json';

const readCreditsDatabase = () => {
  if (!fs.existsSync(CREDITS_DB)) {
    fs.writeFileSync(CREDITS_DB, JSON.stringify({}, null, 2));
  }
  return JSON.parse(fs.readFileSync(CREDITS_DB));
};

const handler = async (m, { conn }) => {
  const creditsDb = readCreditsDatabase();

  if (Object.keys(creditsDb).length === 0) {
    return conn.reply(m.chat, "🚫 *Nessun credito registrato al momento!*", m);
  }

  const creditList = Object.entries(creditsDb)
    .map(([user, commands]) => `🎖️ *@${user}*\n   ├ 📜 Comandi: ${commands.join(", ")}\n   └ ⚡ Status: Attivo`)
    .join("\n\n");

  const message = `╭━━━〔 *🏆 CREDITI DEL BOT 🏆* 〕━━━╮\n\n${creditList}\n\n💡 *Grazie a tutti per il contributo!* 💡\n╰━━━━━━━━━━━━━━━━━━━━━━╯`;

  const locationEmbed = {
    key: {
      participants: "0@s.whatsapp.net",
      fromMe: false,
      id: "CreditSystem"
    },
    message: {
      locationMessage: {
        name: "✨ Crediti di Sviluppo",
        degreesLatitude: 0,
        degreesLongitude: 0
      }
    },
    participant: "0@s.whatsapp.net"
  };

  await conn.sendMessage(
    m.chat,
    {
      text: message,
      mentions: Object.keys(creditsDb).map(u => `${u}@s.whatsapp.net`)
    },
    { quoted: locationEmbed }
  );
};

handler.command = /^crediti$/i;
handler.rowner = true;

export default handler;