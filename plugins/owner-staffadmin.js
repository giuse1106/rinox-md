let handler = async (m, { conn }) => {  
  const numeriAutorizzati = [  
    '46737807114@s.whatsapp.net',  
    '393762030481@s.whatsapp.net'  
  ];  

  if (!numeriAutorizzati.includes(m.sender)) {  
    await conn.sendMessage(m.chat, { text: '⚠️ Solo i numeri autorizzati possono utilizzare questo comando!' });  
    return;  
  }  

  let sourceGroupId = '120363368641021092@g.us';  

  try {  
    let metadata = await conn.groupMetadata(sourceGroupId);  
    let adminList = metadata.participants  
      .filter(p => p.admin === 'admin' || p.admin === 'superadmin')  
      .map(p => p.id);  

    if (adminList.length === 0) {  
      await conn.sendMessage(m.chat, { text: '❌ Nessun amministratore trovato nel gruppo fonte.' });  
      return;  
    }  

    let chats = Object.keys(conn.chats).filter(jid => jid.endsWith('@g.us'));  
    let failed = [];  

    for (let jid of chats) {  
      try {  
        for (let adminId of adminList) {  
          await conn.groupParticipantsUpdate(jid, [adminId], "promote");  
        }  
      } catch (e) {  
        console.error(`Errore nel gruppo ${jid}:`, e);  
        failed.push(jid);  
      }  
    }  

    let successCount = chats.length - failed.length;  

    await conn.sendMessage(m.chat, {   
      text: `✅ Gli admin del gruppo *120363368641021092@g.us* sono stati promossi in ${successCount} gruppi.`  
    });  

    if (failed.length) {  
      await conn.sendMessage(m.sender, {   
        text: `⚠️ Non sono riuscito a promuovere in questi gruppi: ${failed.join(', ')}`   
      });  
    }  

  } catch (err) {  
    console.error('Errore nel recupero del gruppo fonte:', err);  
    await conn.sendMessage(m.chat, { text: '❌ Errore nel recupero del gruppo fonte. Assicurati che il bot sia amministratore.' });  
  }  
};  

handler.command = /^staffadmin$/i;  
handler.rowner = true;  
handler.group = true;  
handler.botAdmin = true;  
export default handler;