# twitch-obs-scene-changer
Connects to a Twitch chat and listens to command to switch scene from broadcaster and/or moderators.

### Prerequisites
* [NodeJS](https://nodejs.org/en/) - NodeJS v.10
* [OBS-Websocket Plugin](https://obsproject.com/forum/resources/obs-websocket-remote-control-of-obs-studio-made-easy.466/) 

### Installing
Run npm install to download dependencies.
```
npm install
```

Configure OBS.
```
Tools -> Websocket server settings
Check "Enable Websocket server"
Check "Enable authentication"
Enter a password
```

Configure .env file
```
TWITCH_CHANNEL="" // <-- Your twitch username

OBS_URL="localhost:4444" // <-- OBS Plugin url. "localhost:4444" is the default url:port if connecting to OBS locally and using default port in plugin
OBS_PASSWORD="" // <-- OBS Plugin password
```

Configure line 11 on dynamic.js if you want to use the "!scene <scene name>" command to a different command name
```
const COMMAND_NAME = "!scene"; // Command to type in chat.
```

OR

Configure line 8 & 9 on manual.js if you want to use the "!sdcam" and "!hdcam" commands to different names
```
const MAIN_CAMERA_COMMAND = "!hdcam",
      BACKUP_CAMERA_COMMAND = "!sdcam";
```

If using manual.js also edit lines 31 & 35 to match the scene names in your OBS
[Example](https://i.imgur.com/z2oADDk.png)
```
obs.setCurrentScene({'scene-name': `HD Cam`}); // Scene name in OBS (case-sensitive)
obs.setCurrentScene({'scene-name': `SD Cam`}); // Scene name in OBS (case-sensitive)
```

Run npm start to start the script
```
npm start
```
