import { getDevice } from '@whiskeysockets/baileys'
import PhoneNumber from 'awesome-phonenumber'

const handler = async (m, { conn }) => {
  try {
    const mention = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;

    if (!global.db.data.users[mention]) {
      global.db.data.users[mention] = { 
        name: "Sconosciuto",
        messaggi: 0,
        warn: 0,
        warnlink: 0,
        muto: false,
        banned: false,
        command: 0,
        age: "👶🏼🍼",
        gender: "Non specificato",
        instagram: "",
        bio: "Nessuna bio impostata.",
        categoria: "Utente",
        lastSeen: null
      };
    }
    const userData = global.db.data.users[mention];

    let bio = "";
    try {
      const status = await conn.fetchStatus(mention);
      bio = status && status.status ? status.status : userData.bio || "Nessuna bio impostata.";
    } catch (e) {
      bio = userData.bio || "Nessuna bio impostata.";
    }

    const nome = userData.name || "Sconosciuto";
    const numero = PhoneNumber(mention.split("@")[0], "IT").getNumber("international");
    const dispositivo = await getDevice(m.key.id) || "Sconosciuto";

    // Recupera la categoria impostata dall'admin con setcategoria
    const categoria = userData.categoria || "Nessuna categoria";
    const stato = userData.muto ? "🔇 Muto" : userData.banned ? "🚫 Bannato" : "✅ Attivo";
    const lastAccess = userData.lastSeen ? new Date(userData.lastSeen).toLocaleString('it-IT') : "Non disponibile";

    let profilo;
    try {
      profilo = await conn.profilePictureUrl(mention, 'image');
    } catch {
      profilo = 'https://telegra.ph/file/560f1667a55ecf09650cd.png';
    }

    const messaggio = `╭───〔 📌 *USER INFO* 📌 〕───╮\n` +
      `📛 *Nome:* ${nome}\n` +
      `🏷️ *Numero:* ${numero}\n` +
      `📱 *Dispositivo:* ${dispositivo}\n` +
      `🏆 *Categoria:* ${categoria}\n` +
      `🛡️ *Stato:* ${stato}\n` +
      `📊 *Messaggi:* ${userData.messaggi}\n` +
      `⚠️ *Warn:* ${userData.warn} / 3\n` +
      `📆 *Età:* ${userData.age}\n` +
      `🚻 *Genere:* ${userData.gender}\n` +
      `📝 *Bio:* ${bio}\n` +
      `⏱️ *Ultimo accesso:* ${lastAccess}\n` +
      (userData.instagram ? `📸 *Instagram:* instagram.com/${userData.instagram}\n` : '') +
      `╰───────────────────────╯`;

    await conn.sendMessage(m.chat, {
      text: messaggio,
      contextInfo: {
        mentionedJid: [mention],
        externalAdReply: {
          title: `${nome} | ${userData.age} | ${userData.gender} | ${categoria}`,
          body: bio || "Nessuna bio impostata.",
          sourceUrl: "https://wa.me/" + mention.split("@")[0],
          thumbnail: await (await fetch(profilo)).buffer()
        }
      }
    }, { quoted: m });

  } catch (error) {
    console.error("Errore in USERINFO:", error);
    await conn.sendMessage(m.chat, { text: "❌ Errore nel recuperare le informazioni dell'utente." }, { quoted: m });
  }
};

handler.command = /^(userinfo|infoutente|profilo)$/i;
export default handler;