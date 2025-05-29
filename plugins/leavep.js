let handler = async (m, { conn, args }) => {
  let stats = ['strength', 'resistance', 'agility', 'velocità', 'iq', 'energia']
  let stat = (args[0] || '').toLowerCase()
  let value = parseInt(args[1])

  if (!stats.includes(stat)) {
    return m.reply(`❌ Stat non valida.\nScegli tra: ${stats.join(', ')}`)
  }
  if (isNaN(value)) return m.reply('❌ Inserisci un numero valido.')

  let user = global.db.data.users[m.sender]
  if (!user.stats) user.stats = {}

  user.stats[stat] = (user.stats[stat] || 0) - value
  m.reply(`➖ ${value} punti rimossi da *${stat}*.`)
}

handler.command = /^leavep$/i
handler.owner = true
export default handler