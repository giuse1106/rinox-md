// 📌 **Attiva/Disattiva Warn**
let toggleHandler = async (m, { conn, args }) => {
    if (!m.isAdmin) return conn.sendMessage(m.chat, { text: "⛔ Solo gli admin possono modificare le funzioni!" }, { quoted: m });

    if (!args[0]) return conn.sendMessage(m.chat, { text: "❌ Usa: `.attiva warn` o `.disattiva warn`" }, { quoted: m });

    let action = args[0].toLowerCase();
    if (action === "warn") {
        let status = m.text.includes("attiva");
        let settings = JSON.parse(fs.readFileSync(pathFunzioni));
        settings["warn"] = status;
        fs.writeFileSync(pathFunzioni, JSON.stringify(settings, null, 2));

        conn.sendMessage(m.chat, { text: `✅ Sistema di WARN ${status ? "attivato" : "disattivato"} con successo!` }, { quoted: m });
    }
};

// 🛠️ **Configura i comandi**
handler.command = /^warn$/i;
toggleHandler.command = /^(attiva|disattiva)$/i;

export default [handler, toggleHandler];