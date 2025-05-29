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
  if (!who) {
    return m.reply('Devi specificare un utente.');
  }
  if (global.prems.includes(who.split`@`[0])) {
    return m.reply(
      `@${who.split`@`[0]} è già un utente premium.`,
      null,
      { mentions: conn.parseMention(`@${who.split`@`[0]}`) }
    );
  }
  global.prems.push(who.split`@`[0]);
  let textaddprem = `@${who.split`@`[0]} ora è un utente premium.`;
  m.reply(textaddprem, null, { mentions: conn.parseMention(textaddprem) });
};

handler.help = ['addprem <@user>'];
handler.tags = ['owner'];
handler.command = /^(add|aggiungi)prem$/i;
handler.group = true;
handler.rowner = true;
export default handler;