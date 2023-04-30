const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants }) => {
	let q = text
conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id) }, )
}

handler.help = ['hidetag'].map(v => v + ' <teks>')
handler.tags = ['group']
handler.command = /^(pengumuman|announce|hiddentag|hidetag)$/i
handler.limit = true
handler.group = true
handler.admin = true

module.exports = handler