const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!m.isGroup)
    return conn.sendMessage(
      m.chat,
      { text: "❌ Questo comando può essere usato solo nei gruppi." },
      { quoted: m }
    );

  const groupMetadata = await conn.groupMetadata(m.chat);
  const participants = groupMetadata.participants;

  const roleImportance = {
    'owner': 5,
    'co owner': 4,
    'moderator': 3,
    'vip': 2,
    'nessuna categoria': 1
  };

  const sortedParticipants = participants.sort((a, b) => {
    const userA = global.db.data.users[a.id] || {};
    const userB = global.db.data.users[b.id] || {};
    const roleA = (userA.categoria || "Nessuna categoria").toLowerCase();
    const roleB = (userB.categoria || "Nessuna categoria").toLowerCase();
    const importanceA = roleImportance[roleA] || 0;
    const importanceB = roleImportance[roleB] || 0;
    return importanceB - importanceA;
  });

  let messageText = "*Lista utenti con rispettive categorie (ordinata per ruoli più importanti):*\n\n";

  sortedParticipants.forEach((p) => {
    const userId = p.id;
    const userData = global.db.data.users[userId] || {};
    const categoria = userData.categoria || "Nessuna categoria";
    messageText += `@${userId.split("@")[0]} - ${categoria}\n`;
  });

  conn.sendMessage(
    m.chat,
    { text: messageText, mentions: sortedParticipants.map((p) => p.id) },
    { quoted: m }
  );
};

handler.command = /^(listacategoria)$/i;
export default handler;