require('dotenv').config()
const Twitch  = require("twitch-js");

const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();

// Commands
const MAIN_CAMERA_COMMAND = "!hdcam",
      BACKUP_CAMERA_COMMAND = "!sdcam";

// Connect to OBS
obs.connect({ address: process.env.OBS_URL, password: process.env.OBS_PASSWORD })
  .then(() => {
    console.log(`[OBS] (log): Connected to OBS.`);
  })
  .catch(e => console.log(`[OBS] (error): Could not connect to OBS.`));

const client = new Twitch.client({
  channels: [`#${process.env.TWITCH_CHANNEL}`]
});

// Twitch chat listener
client.on('chat', (channel, userstate, message, self) => {

  // Is user that's posting a mod or broadcaster?
  if(userstate.badges != null && userstate.badges.hasOwnProperty("broadcaster") && userstate.badges.broadcaster === '1' || userstate.mod === true) {
    message = message.toLowerCase().split(" ");

    switch(message[0]) {
      case MAIN_CAMERA_COMMAND: // Command name to type in chat
        obs.setCurrentScene({'scene-name': `HD Cam`}); // Scene name in OBS (case-sensitive)
        console.log(`[OBS] (log): Switching to scene: Main Camera, command sent from ${userstate.username}.`);
        break;
      case BACKUP_CAMERA_COMMAND: // Command name to type in chat
        obs.setCurrentScene({'scene-name': `SD Cam`}); // Scene name in OBS (case-sensitive)
        console.log(`[OBS] (log): Switching to scene: Backup camera, command sent from ${userstate.username}.`);
        break;
      default:
        break;
    }

  }
  
});

obs.on('error', err => {
  console.error(`[OBS] (error):`, err);
});

// Connect to twitch chat
client.connect();