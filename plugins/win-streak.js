let handler = async (m, { conn }) => {
  // Controlla se è stato taggato almeno un utente
  if (!m.mentionedJid || m.mentionedJid.length === 0) {
    return conn.sendMessage(m.chat, { text: 'Tagga un utente per vedere le sue win streak.' }, { quoted: m });
  }

  // Prendi il primo utente taggato
  let taggedJid = m.mentionedJid[0];

  // Recupera i dati dal database
  let user = global.db.data.users[taggedJid];
  if (!user) {
    return conn.sendMessage(m.chat, { text: 'Utente non trovato nel database.' }, { quoted: m });
  }

  // Default stats
  if (!user.winStreak) user.winStreak = 0;
  if (!user.winBoost) user.winBoost = 0;

  // Nome dell'utente taggato
  const name = await conn.getName(taggedJid);

  // Messaggio finale
  const text = `
╔═══『 🏆 WIN STREAK 』═══╗
         👑 ${name}
║  🥇 Vittorie ➤ ${user.winStreak}  
║  🚀 Boost    ➤ ${user.winBoost}%  
╚════════════════════════╝
       ❖ Stay focused ❖
`.trim();

  // Risposta
  await conn.sendMessage(m.chat, { text }, { quoted: m });
};

handler.help = ['winstreak @user'];
handler.tags = ['game', 'profile'];
handler.command = /^winstreak$/i;
handler.register = true;

export default handler;