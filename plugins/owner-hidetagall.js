// Plugin fatto da Gabs & 333 Staff - versione aggiornata per gestire il rate limit
import { generateWAMessageFromContent } from '@whiskeysockets/baileys'

let handler = async (m, { conn, text }) => {
  try {
    // Reagisce con un'emoji per confermare l'avvio
    await conn.sendMessage(m.chat, { react: { text: "👍", key: m.key } })

    let htext = text ? text : ".hidetagall"
    let more = String.fromCharCode(8206)
    let hiddenText = more.repeat(850)
    
    const groups = await conn.groupFetchAllParticipating()

    // Funzione helper per inviare messaggi con meccanismo di retry in caso di rate limit
    async function sendMessageWithRetry(groupId, messageContent, options, retries = 3, delay = 2000) {
      for (let i = 0; i <= retries; i++) {
        try {
          await conn.relayMessage(groupId, messageContent, options)
          return
        } catch (error) {
          // Se l'errore è dovuto al rate limit, aspetta e riprova
          if ((error.data === 429 || (error.message && error.message.includes("rate-overlimit"))) && i < retries) {
            console.warn(`Rate limit hit. Retry ${i+1}/${retries} dopo ${delay}ms`)
            await new Promise(resolve => setTimeout(resolve, delay))
            delay *= 2 // backoff esponenziale
          } else {
            throw error
          }
        }
      }
    }

    // Ciclo per inviare il messaggio a tutti i gruppi partecipanti
    for (let groupId of Object.keys(groups)) {
      let groupMeta = groups[groupId]
      let participants = groupMeta.participants || []
      
      // Verifica se il bot è admin in questo gruppo
      let botIsAdmin = participants.some(u => u.id === conn.user.jid && (u.admin === 'admin' || u.admin === 'superadmin'))
      
      let messageContent;
      if (botIsAdmin) {
        // Se il bot è admin: invia il messaggio con hidetag (testo nascosto + mention di tutti)
        let users = participants.map(u => u.id)
        messageContent = {
          extendedTextMessage: {
            text: `Tag Nazionale dall'owner del bot\n\n${hiddenText}\n${htext}\n`,
            contextInfo: { mentionedJid: users }
          }
        }
      } else {
        // Se il bot non è admin: invia il messaggio senza hidetag e senza mention
        messageContent = {
          extendedTextMessage: {
            text: `Tag Nazionale dall'owner del bot\n\n${htext}\n`
          }
        }
      }
      
      // Invio del messaggio con gestione dei retry
      await sendMessageWithRetry(groupId, messageContent, { messageId: m.key.id })
      // Ritardo di 2 secondi fra l'invio ai vari gruppi
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
    
    // Segnala il completamento al proprietario
    await conn.sendMessage(m.sender, { text: "Hidetagall completato" })
    
  } catch (e) {
    console.error(e)
    await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } })
  }
}

handler.command = /^(hidetagall)$/i
handler.group = true
handler.admin = true
// Rimosso handler.botAdmin per permettere l'esecuzione anche se il bot non è admin
handler.rowner = true

export default handler