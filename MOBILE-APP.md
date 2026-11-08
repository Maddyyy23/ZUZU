# Page Flip mobile app

The app ships its site and local photos inside the mobile package. It does not need a website or a computer running after it is installed.

## Android APK (Windows)

1. Install Android Studio and its Android SDK.
2. From this folder, run:

   ```bat
   npm run mobile:android:apk
   ```

3. Find the debug APK here:

   ```text
   android\app\build\outputs\apk\debug\app-debug.apk
   ```

Transfer that APK to an Android phone and install it. Android may ask you to allow installs from that file manager.

## iPhone IPA without a Mac

A GitHub-hosted Mac runner builds the iPhone package. Download `ios-build.yml` from the provided outputs, then place it in `.github/workflows/ios-build.yml` in your private GitHub copy.

1. Put this project in a **private GitHub repository** so your photos stay private. This downloaded project is not connected to GitHub yet.
2. On GitHub, open **Actions**, choose **Build iPhone app**, and select **Run workflow**.
3. When the workflow finishes, download the `PageFlip-iPhone-IPA` artifact and extract `PageFlip.ipa`.
4. Install AltServer for Windows from [AltStore's official Windows guide](https://faq.altstore.io/altstore-classic/how-to-install-altstore-windows). Connect your iPhone to the PC, install AltStore, then use AltStore to install the IPA.

With a free Apple account, sideloaded apps need a refresh about every 7 days using AltServer. The PC only needs to be available when installing or refreshing; it does not need to stay on. [AltStore explains this signing limit](https://altstore.io/).

For TestFlight or longer-term distribution, Apple Developer Program membership is the standard route. Apple currently lists it at $99/year; see [Apple's membership page](https://developer.apple.com/programs/).

## Updating the app

After changing app code or images, run `npm run mobile:sync` before building again. The installed app uses its bundled files and works offline.