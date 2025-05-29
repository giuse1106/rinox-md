import wallet from './soldi.js';

let handler = async (m, { conn }) => {
  let bet = 100;
  let saldo = wallet.getSaldo(m.sender);
  if (saldo < bet) return conn.reply(m.chat, '❌ Non hai abbastanza soldi per giocare (100 richiesti)', m);

  let symbols = ['🍒','🍋','🍉','🍇'];
  let spin = Array(3).fill().map(() => symbols[Math.floor(Math.random() * symbols.length)]);
  let win = spin.every(v => v === spin[0]);

  if (win) {
    wallet.modificaSaldo(m.sender, bet);
    await conn.reply(m.chat, `🎰 ${spin.join(' | ')}\n✅ Hai vinto 100 coins!\n💰 Nuovo saldo: ${wallet.getSaldo(m.sender)}`, m);
  } else {
    wallet.modificaSaldo(m.sender, -bet);
    await conn.reply(m.chat, `🎰 ${spin.join(' | ')}\n❌ Hai perso 100 coins...\n💰 Saldo rimanente: ${wallet.getSaldo(m.sender)}`, m);
  }
};

handler.command = ['slot'];
handler.help = ['slot'];
handler.tags = ['giochi'];
handler.group = true;

export default handler;