import * as fs from 'fs'
import path from 'path'

let handler = async (m, { conn, args }) => {
  try {
    // Verifica che l'utente abbia fornito una data
    if (!args[0]) {
      return conn.sendMessage(m.chat, { text: "Per favore specifica una data nel formato dd/mm/yyyy, ad esempio: .logs 20/03/2025" })
    }
    const inputDate = args[0]

    // Percorso del file di log (assicurati che il file esista nella cartella corrente)
    const logFilePath = path.join(process.cwd(), 'logs.txt')
    if (!fs.existsSync(logFilePath)) {
      return conn.sendMessage(m.chat, { text: "File di log non trovato." })
    }

    // Lettura e parsing del file di log
    const data = fs.readFileSync(logFilePath, 'utf-8')
    const lines = data.split('\n').filter(line => line.trim())

    // Array per log dei comandi ed errori
    let commandLogs = []
    let errorLogs = []

    // Ogni riga si suppone sia un oggetto JSON
    for (let line of lines) {
      try {
        let logEntry = JSON.parse(line)
        if (logEntry.date === inputDate) {
          // Se il campo error è valorizzato (diverso da "none") lo consideriamo come errore
          if (logEntry.error && logEntry.error !== 'none') {
            errorLogs.push(logEntry)
          } else {
            commandLogs.push(logEntry)
          }
        }
      } catch (e) {
        console.error("Errore nel parsing della linea di log:", line)
      }
    }

    // Preparazione del messaggio per i comandi
    let messageCommands = `*Log dei comandi per il ${inputDate}:*\n`
    if (commandLogs.length === 0) {
      messageCommands += "Nessun comando registrato."
    } else {
      commandLogs.forEach(log => {
        messageCommands += `[${log.time}] ${log.user}: ${log.command}\n`
      })
    }

    // Preparazione del messaggio per gli errori
    let messageErrors = `*Log degli errori per il ${inputDate}:*\n`
    if (errorLogs.length === 0) {
      messageErrors += "Nessun errore registrato."
    } else {
      errorLogs.forEach(log => {
        messageErrors += `[${log.time}] ${log.user}: ${log.error}\n`
      })
    }

    // Invio dei due messaggi in chat
    await conn.sendMessage(m.chat, { text: messageCommands })
    await conn.sendMessage(m.chat, { text: messageErrors })

  } catch (e) {
    console.error(e)
    await conn.sendMessage(m.chat, { text: "Si è verificato un errore durante il recupero dei log." })
  }
}

handler.command = /^(logs)$/i
handler.rowner = true
export default handler