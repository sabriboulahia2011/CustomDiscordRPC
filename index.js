var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "أي شخص يبي يلعب تفضل على الرابط الأول بعدين إذا تبي تتواصل معاي على الإنسجرام حياك الرابط الثاني",
assets : {
large_image : "quran",
large_text : "لكل شخص يبي يلعب معي حياك سيرفري" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "سيرفر الألعاب" , url : "https://discord.gg/ZgMk9djar8"},{label : "instagram",url : "https://instagram.com/sabriboulahia"}]
}
})
})
client.login({ clientId : "863446497672822784" }).catch(console.error);