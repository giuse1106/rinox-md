let handler = async (m, { conn, usedPrefix, text }) => {
    conn.game = conn.game ? conn.game : {};
    let room = Object.values(conn.game).find(room => room.id.startsWith('chess') && [room.game.white, room.game.black].includes(m.sender));

    if (!room) {
        return m.reply('❌ *NON SEI IN UNA PARTITA DI SCACCHI!*\n📌 _Per iniziare, usa:_ *${usedPrefix}scacchi [nome]*');
    }

    if (!text) {
        return m.reply('📜 *Devi scrivere una mossa!*\nEsempio: _.mossa e2e4_');
    }

    if ((room.game.turn() === 'w' && m.sender !== room.game.white) || (room.game.turn() === 'b' && m.sender !== room.game.black)) {
        return m.reply('❌ *Non è il tuo turno!*');
    }

    let move = room.game.move(text, { sloppy: true });

    if (!move) {
        return m.reply('❌ *Mossa non valida!*\n📜 _Esempio: .mossa e2e4_');
    }

    let status = '';
    if (room.game.in_checkmate()) {
        status = `♟️ *SCACCO MATTO!* ${room.game.turn() === 'w' ? '⚫ Nero' : '⚪ Bianco'} ha vinto!`;
        delete conn.game[room.id];
    } else if (room.game.in_draw()) {
        status = '⚖️ *PAREGGIO!* La partita è terminata.';
        delete conn.game[room.id];
    } else if (room.game.in_check()) {
        status = `⚠️ *SCACCO!* ${room.game.turn() === 'w' ? '⚪ Bianco' : '⚫ Nero'} è sotto scacco!`;
    }

    let str = `
♟️ *SCACCHI* ♟️

⚪ Bianco = @${room.game.white.split('@')[0]}
⚫ Nero = @${room.game.black.split('@')[0]}

📜 _Mossa corrente_: ${room.game.turn() === 'w' ? '⚪ Bianco' : '⚫ Nero'}
🔢 *Ultima mossa:* ${text}

${status}
    
🔢 _Digita il comando_ *${usedPrefix}mossa [mossa]* _per continuare!_
    
⛔ _Per abbandonare la partita, digita_ *${usedPrefix}esci*
`.trim();

    await conn.sendMessage(room.white, { text: str, mentions: conn.parseMention(str) }, { quoted: m });
    await conn.sendMessage(room.black, { text: str, mentions: conn.parseMention(str) }, { quoted: m });
};

handler.command = ["mossa"];
export default handler;