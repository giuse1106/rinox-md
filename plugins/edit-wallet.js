let handler = async (m, { conn, args, mentionedJid, text }) => {
  const OWNER_NUMBER = '393342054978@s.whatsapp.net';

  if (m.sender !== OWNER_NUMBER) {
    return conn.reply(m.chat, '❌ *Non sei autorizzato ad eseguire questa operazione!*', m);
  }

  const target = mentionedJid[0] || m.quoted?.sender;
  if (!target) return conn.reply(m.chat, '❌ *Tagga un utente o rispondi a un suo messaggio!*', m);

  const amount = parseInt(args[1] || args[0]);
  if (isNaN(amount)) return conn.reply(m.chat, '❌ *Inserisci un valore numerico valido per aggiungere o togliere!*', m);

  const user = global.db.data.users[target];
  if (!user) return conn.reply(m.chat, '❌ *Utente non trovato nel database!*', m);

  user.limit = (user.limit || 0) + amount;

  await conn.reply(m.chat, `✅ *Modifica eseguita!*\n👤 ${conn.getName(target)}\n💰 Nuovo saldo: ${user.limit} UC`, m);
};

handler.command = ['modificasoldi', 'aggsoldi', 'remsoldi'];
handler.help = ['modificasoldi @utente 100', 'modificasoldi @utente -100'];
handler.tags = ['owner'];
handler.rowner = true;

export default handler;