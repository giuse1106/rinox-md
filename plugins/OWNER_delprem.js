let handler = async (m, { conn, text }) => {
  let who;
  if (m.isGroup) {
    who = m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.quoted
      ? m.quoted.sender
      : text;
  } else {
    who = m.chat;
  }
  if (!who) return m.reply('Devi specificare un utente.');
  
  if (!global.prems.includes(who.split('@')[0])) {
    return m.reply(
      `@${who.split('@')[0]} non è un utente premium.`,
      null,
      { mentions: conn.parseMention(`@${who.split('@')[0]}`) }
    );
  }
  
  let index = global.prems.findIndex(
    v =>
      (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') ===
      (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  );
  
  if (index !== -1) global.prems.splice(index, 1);
  
  let textdelprem = `@${who.split('@')[0]} non è più utente premium`;
  m.reply(textdelprem, null, { mentions: conn.parseMention(textdelprem) });
};

handler.help = ['delprem <@user>'];
handler.tags = ['owner'];
handler.command = /^(remove|del)prem$/i;
handler.group = true;
handler.rowner = true;
export default handler;