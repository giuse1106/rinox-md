let handler = async (m, { conn, command, text }) => {
  if (!text) throw `Tagga chi desideri inculare 🥵🤤`;
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  
  conn.reply(
    m.chat,
    `
*𝐒𝐓𝐀𝐈 𝐈𝐍𝐂𝐔𝐋𝐀𝐍𝐃𝐎 ${text} !*

𝙎𝙚𝙞 𝙨𝙩𝙖𝙩𝙤/𝙖 𝙞𝙣𝙘𝙪𝙡𝙖𝙩𝙤/𝙖 𝙖 𝟗𝟎 𝙚 𝙩𝙞 𝙝𝙖𝙣𝙣𝙤 𝙩𝙧𝙖𝙩𝙩𝙖𝙩𝙤 𝙘𝙤𝙢𝙚 𝙪𝙣𝙖 𝙥𝙪𝙩𝙩𝙖𝙣𝙖 𝙙𝙞 𝙢𝙚𝙧𝙙𝙖 
"𝐀𝐇𝐇𝐇...,𝐀𝐀𝐀𝐀𝐇𝐇𝐇, 𝐬𝐢̀, 𝐜𝐨𝐧𝐭𝐢𝐧𝐮𝐚, 𝐧𝐨𝐧 𝐟𝐞𝐫𝐦𝐚𝐫𝐭𝐢!" 
𝙏𝙞 𝙝𝙖𝙣𝙣𝙤 𝙞𝙣𝙘𝙪𝙡𝙖𝙩𝙤 𝙘𝙤𝙨𝙞̀ 𝙩𝙖𝙣𝙩𝙤 𝙫𝙞𝙤𝙡𝙚𝙣𝙩𝙚𝙢𝙚𝙣𝙩𝙚 𝙘𝙝𝙚 𝙣𝙤𝙣 𝙧𝙞𝙚𝙨𝙘𝙞 𝙖 𝙧𝙚𝙜𝙜𝙚𝙧𝙩𝙞 𝙞𝙣 𝙥𝙞𝙚𝙙𝙞, 𝙨𝙩𝙪𝙥𝙞𝙙𝙖 𝙩𝙧𝙤𝙞𝙖 𝙙𝙞 𝙢𝙚𝙧𝙙𝙖.

*${text}* 
🤤🥵 *¡𝐓𝐈 𝐇𝐀𝐍𝐍𝐎 𝐅𝐎𝐓𝐓𝐔𝐓𝐎 𝐏𝐄𝐑 𝐁𝐄𝐍𝐄!* 🥵🤤
    `,
    null,
    { mentions: [user] }
  );
};

handler.admin = true;
handler.command = ['incula'];
export default handler;