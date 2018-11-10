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
COMMAND="!scene" // <-- What to call the scene switcher command

OBS_URL="localhost:4444" // <-- OBS Plugin url. "localhost:4444" is the default url:port if connecting to OBS locally and using default port in plugin
OBS_PASSWORD="" // <-- OBS Plugin password
```

Run npm start to start the script
```
npm start
```
