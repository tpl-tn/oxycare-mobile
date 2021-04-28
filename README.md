# <img src="/Screenshots/logo.png" height="60"> oxycare-mobile
a mobile android version of oxycare.
<br />
<br />
<img src="screenshots/im1.jpg" alt="drawing" width="200"/>
<img src="screenshots/im2.jpg" alt="drawing" width="200"/>
<img src="screenshots/im3.jpg" alt="drawing" width="200"/>
<br />
Different environments
Save config for different environments in different files: .env.staging, .env.production, etc.

By default react-native-config will read from .env, but you can change it when building or releasing your app.

The simplest approach is to tell it what file to read with an environment variable, like:

$ ENVFILE=.env.staging react-native run-android           # bash
$ SET ENVFILE=.env.staging && react-native run-android    # windows
$ env:ENVFILE=".env.staging"; react-native run-android    # powershell
This also works for run-ios. Alternatively, there are platform-specific options below.

Android
The same environment variable can be used to assemble releases with a different config:
$ cd android && ENVFILE=.env.staging ./gradlew assembleRelease






