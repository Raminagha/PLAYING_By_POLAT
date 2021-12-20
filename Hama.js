const Discord = require("discord.js");
const Hama = new Discord.Client();
//////// playing or dnd  streaming ////////
Hama.on("ready", () => {
  console.log(Online In Servers);
  let statuses = [JUST ALLAH];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    Hama.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
Hama.on("ready", () => {
  var join = Hama.channels.get(""); /// id voice
  if (join) join.join();
});
//////////////// tokn lera da bne

Hama.login ();
