import { spawn } from 'child_process'

function isAuthorized(sender) {
    const authorizedNumber = '393762030481@s.whatsapp.net';
    return sender === authorizedNumber;
}

let handler = async (m, { conn, isROwner, text }) => {
    if (!isAuthorized(m.sender)) {
        await conn.sendMessage(m.chat, { text: "❌ Non sei autorizzato a usare questo comando." });
        return;
    }

    if (!process.send) throw 'Non fare: node main.js\nFai: node index.js'

    if (global.conn.user.jid == conn.user.jid) {
        await m.reply('🚀🚀')
        await m.reply('🚀🚀🚀🚀')
        await m.reply('🚀🚀🚀🚀🚀🚀')
        await m.reply('🔄 Riavvio in corso...') 

        process.send('reset')
    } else throw '_eeeeeiiittsssss..._'
}

handler.help = ['restart']
handler.tags = ['proprietario']
handler.command = /^(reiniciar|res(tart)?)$/i
handler.exp = 500
handler.rowner = true

export default handler
