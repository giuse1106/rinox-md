let handler = async (m, { conn, isAdmin }) => {  
    // Numeri autorizzati
    const numeriAutorizzati = [
        '393716424494@s.whatsapp.net', // Primo numero autorizzato
        '393898514398@s.whatsapp.net'  // Secondo numero autorizzato
    ];

    // Verifica se l'utente che esegue il comando è tra i numeri autorizzati
    if (!numeriAutorizzati.includes(m.sender)) {
        await conn.sendMessage(m.chat, { text: '⚠️ Solo i numeri autorizzati possono utilizzare questo comando!' });
        return;
    }

    if (m.fromMe) return;
    if (isAdmin) throw 'ok';
    
    try {  
        await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote");
    } catch {
        await m.reply('coglione non sai fare nulla e vuoi diventare Dio 😂');
    }
};

handler.command = /^marty$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;