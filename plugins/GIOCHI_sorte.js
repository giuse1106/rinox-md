let handler = async (m, { conn, text, command, usedPrefix, args }) => {
  let users = global.db.data.users[m.sender]
let cavalli = ["testa", "croce"];

let partecipante = args[0]?.toLowerCase();

if (!partecipante || !cavalli.includes(partecipante)) {
    return await conn.reply(m.chat, `══════•⊰✦⊱•══════\n𝐈𝐥 𝐬𝐢𝐦𝐛𝐨𝐥𝐨 𝐧𝐨𝐧 è 𝐯𝐚𝐥𝐢𝐝𝐨. 𝐄𝐬𝐞𝐦𝐩𝐢𝐨: ${usedPrefix}𝐬𝐨𝐫𝐭𝐞 𝐭𝐞𝐬𝐭𝐚 𝟏𝟓𝟎\n𝐒𝐜𝐞𝐠𝐥𝐢 𝐭𝐫𝐚: *${cavalli.join(', ')}*\n══════•⊰✦⊱•══════`, m);
}

let scommessa = parseInt(args[1]);

if (isNaN(scommessa) || scommessa <= 0) {
    return await conn.reply(m.chat, `𝐈𝐧𝐬𝐞𝐫𝐢𝐬𝐜𝐢 𝐮𝐧 𝐢𝐦𝐩𝐨𝐫𝐭𝐨 𝐯𝐚𝐥𝐢𝐝𝐨 𝐝𝐚 𝐬𝐜𝐨𝐦𝐦𝐞𝐭𝐭𝐞𝐫𝐞.\n𝐄𝐬𝐞𝐦𝐩𝐢𝐨: ${usedPrefix}𝐬𝐨𝐫𝐭𝐞 𝐭𝐞𝐬𝐭𝐚 𝟏𝟓𝟎`, m);
}

  if (scommessa > users.money) throw `𝐬𝐞𝐢 𝐭𝐫𝐨𝐩𝐩𝐨 𝐩𝐨𝐯𝐞𝐫𝐨 𝐩𝐞𝐫 𝐢 𝐠𝐢𝐨𝐜𝐡𝐢 𝐝'𝐚𝐳𝐳𝐚𝐫𝐝𝐨\n*${scommessa-users.money}* € 𝐦𝐚𝐧𝐜𝐚𝐧𝐭𝐢. `


let risultatoCorsa = cavalli[Math.floor(Math.random() * cavalli.length)];

if (partecipante === risultatoCorsa) {
    let vincita = scommessa * 2;
    users.money += vincita;
    return m.reply(`𝐄' 𝐮𝐬𝐜𝐢𝐭𝐨 *${risultatoCorsa}*\n𝐇𝐚𝐢 𝐯𝐢𝐧𝐭𝐨 *${vincita}* €.\n𝐈𝐥 𝐭𝐮𝐨 𝐬𝐚𝐥𝐝𝐨 𝐚𝐭𝐭𝐮𝐚𝐥𝐞 è 𝐝𝐢 *${users.money}* €.`);
} else {
    users.money -= scommessa;
    return m.reply(`𝐄' 𝐮𝐬𝐜𝐢𝐭𝐨 *${risultatoCorsa}*\n𝐇𝐚𝐢 𝐩𝐞𝐫𝐬𝐨 *${scommessa}* €.\n𝐈𝐥 𝐭𝐮𝐨 𝐬𝐚𝐥𝐝𝐨 𝐚𝐭𝐭𝐮𝐚𝐥𝐞 è 𝐝𝐢 *${users.money}* €.`);
}}
handler.command = /^(sorte)$/i;
export default handler