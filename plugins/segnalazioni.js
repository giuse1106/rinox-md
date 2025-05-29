const fs = require("fs");
const path = require("path");

const REPORTS_FILE = path.join(__dirname, "../data/reports.json");

module.exports = {
    name: "report",
    alias: ["segnala", "spam"],
    desc: "Segnala un messaggio sospetto agli admin",
    category: "Moderazione",
    use: "<motivo>",
    async execute(m, { conn, text, quoted }) {
        if (!text) return m.reply("❌ *Errore:* Devi specificare un motivo per la segnalazione!\nEsempio: *!report spam*");

        if (!quoted) return m.reply("❌ *Errore:* Devi rispondere a un messaggio da segnalare.");

        // Dati della segnalazione
        const report = {
            id: quoted.id,
            segnalatore: m.sender,
            segnalato: quoted.sender,
            messaggio: quoted.text || "📎 [Media o messaggio senza testo]",
            motivo: text,
            data: new Date().toLocaleString(),
        };

        // Salva nel file JSON
        let reports = [];
        if (fs.existsSync(REPORTS_FILE)) {
            reports = JSON.parse(fs.readFileSync(REPORTS_FILE, "utf-8"));
        }
        reports.push(report);
        fs.writeFileSync(REPORTS_FILE, JSON.stringify(reports, null, 2));

        // Notifica agli admin
        const adminChat = "1203630XXXXXXXX@g.us"; // ID del gruppo admin (cambia con il tuo)
        const reportMessage = `🚨 *Segnalazione ricevuta!*\n\n👤 *Segnalatore:* @${m.sender.split("@")[0]}\n📌 *Segnalato:* @${quoted.sender.split("@")[0]}\n📝 *Motivo:* ${text}\n💬 *Messaggio:* ${quoted.text || "[Media]"}\n📅 *Data:* ${report.data}`;
        
        await conn.sendMessage(adminChat, { text: reportMessage, mentions: [m.sender, quoted.sender] });

        // Conferma all'utente
        m.reply("✅ Segnalazione inviata con successo agli amministratori.");
    }
};