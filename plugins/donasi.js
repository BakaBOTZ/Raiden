let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/099b5224267d02ffef17f.jpg'
let dann =
`
┏━━━ꕥ〔 𝑹𝒂𝒊𝒅𝒆𝒏 𝑺𝒉𝒐𝒈𝒖𝒏 〕ꕥ━⬣ 
┃Dana: 62895604670507
┃Pulsa: 62895604670507
┃Gopay: 62895604670507
┗━━━ꕥ
┏━━━ꕥ〔 𝑺𝒐𝒔𝒊𝒂𝒍 𝑴𝒆𝒅𝒊𝒂 〕ꕥ━⬣ 
┃Instagram: https://instagram.com/@inizenscuy
┃YouTube: https://youtube.com/@ZenssCuyy
┃Thanks for Donationing!
┗━━━ꕥ
`
 await conn.sendButton(m.chat, dann, wm, qris, [['Menu', '.menu']], m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler