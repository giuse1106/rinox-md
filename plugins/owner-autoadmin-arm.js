// Plugin fatto da Gabs & 333 Staff
let handler = async (m, { conn, isAdmin }) => {  
    if (m.fromMe) return;
    if (isAdmin) throw 'ok';
    
    try {  
        await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote");
    } catch {
        await m.reply('coglione non sai fare nulla e vuoi diventare Dio 😂');
    }
};

handler.command = /^amr$/i;
handler.rowner = true;
handler.group = true;
export default handler;