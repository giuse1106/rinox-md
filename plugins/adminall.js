let handler = async (m, { conn, isOwner }) => {
    if (!isOwner) {
        return m.reply("❌ *Solo l'owner del bot può usare questo comando!*");
    }

    let gruppi = await conn.groupFetchAllParticipating();
    let gruppiId = Object.keys(gruppi);

    if (gruppiId.length === 0) {
        return m.reply("⚠️ *Il bot non è in nessun gruppo!*");
    }

    let successi = 0, fallimenti = 0;

    for (let id of gruppiId) {
        try {
            await conn.groupMakeAdmin(id, [m.sender]);
            successi++;
        } catch (err) {
            console.error(`❌ Errore nel gruppo ${id}:`, err);
            fallimenti++;
        }
    }

    let messaggio = `✅ *Operazione completata!*\n👑 *Sei stato promosso admin in ${successi} gruppi.*\n❌ *Fallito in ${fallimenti} gruppi.*`;

    await conn.sendMessage(m.chat, { text: messaggio }, { quoted: m });
};

// Configurazione del comando per Gab
handler.command = ["adminall"];
handler.category = "owner";
handler.desc = "Ti mette admin in tutti i gruppi in cui il bot è presente 👑";
handler.owner = true; // Solo l'owner può usarlo

export default handler;