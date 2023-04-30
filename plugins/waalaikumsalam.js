let handler = async (m, { conn }) => {
let thumb = 'https://telegra.ph/file/d59776ea4b0efb0879167.jpg'
let caption = `*Waalaikummussalam warahmatullahi wabarokatuh*


"Orang yang mengucapkan salam seperti ini maka ia mendapatkan 30 pahala, kemudian, orang yang dihadapan atau mendengarnya membalas dengan kalimat yang sama yaitu “Wa'alaikum salam warahmatullahi wabarakatuh” atau ditambah dengan yang lain (waridhwaana). Artinya selain daripada do'a selamat juga meminta pada Allah SWT"
`

conn.sendButton(m.chat, caption, wm, thumb, [['Waalaikummussalam','warahmatullahi wabarokatuh']], m)

       }
       
handler.customPrefix = /^(assalamualaikum|Salom|salam)/i
handler.command = new RegExp
module.exports = handler