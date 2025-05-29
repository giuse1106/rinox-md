import wallet from './soldi.js';

let handler = async (m, { conn }) => {
  let saldo = wallet.getSaldo(m.sender);
  await conn.reply(m.chat, `💰 *Saldo attuale:* ${saldo} coins`, m);
};

handler.command = ['soldi'];
handler.help = ['soldi'];
handler.tags = ['economia'];

export default handler;