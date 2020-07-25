# Description

My files from the [Ionic Getting Started](https://app.pluralsight.com/library/courses/ionic-getting-started/table-of-contents) course at Pluralsight

Tags: #ionic #javascript #electron #pwa #android-app

## LawChoice project

Install NPM and Node.JS.

Then install the appropriate npm packages to run ionic:

```bash
npm install -g @ionic/cli native-run cordova-res
```

Then have ionic setup a new project called `lawChoice`:

```bash
ionic start lawChoice blank --type=react --capacitor
```

To run the development web server and view the project, run `ionic serve` from the project directory.

```bash
cd lawChoice
ionic serve
```

## Install Android Studio and setup to work with Ionic and Emulate the App

1. Install from [Android Studio Developer Page](https://developer.android.com/studio)

In Android Studio, in the SDK Manager, make sure the following are installed:

* Android SDK Build-Tools
* Android SDK Command-line Tools
* Android Emulator
* Android Emulator Hypervisor driver for AMD (if you have an AMD)
* Android SDK Platform-Tools

Copy the SDK directory from the top fo the SDK Manager window.

Make sure at least one device is installed as an emulator on the AVD emulator.

Add the following to Environment (User or system):

* ANDROID_SDK_ROOT = {Path to SDK copied above}
* Add the following to path:
  * %ANDROID_SDK_ROOT%\cmdline-tools\latest\bin
  * %ANDROID_SDK_ROOT%\platform-tools
  * %ANDROID_SDK_ROOT%\emulator
  * %ANDROID_SDK_ROOT%\build-tools

To build, cd into ./lawChoice and use: `ionic build`

Then add android as a build target: `ionic cap add android`

After any change to the main ionic project, copy changes to the standalone Android project using: `ionic cap copy`

If you make any changes to the native Android code, need to copy changes back to the main project with: `ionic cap sync`

To launch the app, use: `npx cap open android`. If the emulator doesn't come up directly, click the `Run App` button.
