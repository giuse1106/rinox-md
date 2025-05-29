let handler = async (m, { conn }) => {
    let user = m.sender;
    let name = conn.getName(user);
    let number = user.split("@")[0];
    
    // 📊 Simuliamo alcuni dati (puoi integrarli con il tuo database)
    let device = "Android"; // Puoi rendere dinamico questo dato se il bot lo supporta
    let role = "Admin"; // Imposta il ruolo in base all'utente
    let status = "Attivo"; // Puoi cambiare in base alla presenza dell'utente
    let messages = 11355; // Puoi collegarlo al numero reale di messaggi
    let warnings = "0 / 3"; // Conta gli avvisi dati all'utente
    let age = 16; // Puoi rendere questo dato modificabile dall'utente
    let gender = "Maschio"; // Puoi personalizzarlo
    let bio = "✨⚡ Sono il fondatore di un bot unico nel suo genere! ⚡✨";
    let lastSeen = "Non disponibile"; // Se il bot ha accesso agli ultimi accessi
    let instagram = "https://instagram.com/insta_gqbryy"; // Link personalizzabile
    
    let infoText = `*📌 PROFILO UTENTE 📌*\n\n` +
        `👤 *Nome:* ${name}\n` +
        `📱 *Numero:* wa.me/${number}\n` +
        `📲 *Dispositivo:* ${device}\n` +
        `🏆 *Ruolo:* ${role}\n` +
        `✅ *Stato:* ${status}\n` +
        `💬 *Messaggi inviati:* ${messages}\n` +
        `⚠️ *Avvisi:* ${warnings}\n` +
        `🎂 *Età:* ${age}\n` +
        `🚻 *Genere:* ${gender}\n\n` +
        `📝 *Bio:* ${bio}\n\n` +
        `⏳ *Ultimo accesso:* ${lastSeen}\n` +
        `📸 *Instagram:* [Clicca qui](${instagram})\n`;

    conn.sendMessage(m.chat, { text: infoText }, { quoted: m });
};

handler.command = /^(userinfo|profilo)$/i;
export default handler;