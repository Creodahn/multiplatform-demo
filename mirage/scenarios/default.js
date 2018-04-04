export default function(server) {
  server.create('instruction', {
    id: 1,
    intro: '*Corber wraps the Cordova library for use with Javascript libraries. It specifically grew out of the ember-cli-cordova addon.*',
    steps: [
      '1. Install the Java Developer Kit 1.8',
      '2. Install Corber globally using Yarn or NPM',
      '3. Install Cordova globally using Yarn or NPM',
      '3. Add the corber addon to you Ember application using `ember install corber`',
      '4. In your environment/config file, change locationType to `hash`',
      '5. Also in environment/config, change rootURL to an empty string',
      '### Android App Development',
      '1. Install Android Studio',
      '2. Make sure to accept the license agreements using `cd ~/Library/Android/sdk/tools/bin && ./sdkmanager --licenses`',
      '3. Create a virtual Android device by opening Android Studio and going to `Tools > ADV Manager > Create Virtual Device...`',
      '4. Install Gradle',
      '5. Use the command `corber platform add android` to add Android as a build target for Corber',
      '6. Use `corber build --platform=android --environment=production` to build an APK of your app',
      '7. Run your Android virtual device, and navigate to the output folder for your build. You can drag and drop the created APK onto the virtual device to install it',
      '### iOS App Development',
      '1. Make sure your installation of XCode is up to date, and you have accepted the licenses',
      '2. Run `corber platform add ios` to add iOS as a build target',
      '3. Use `corber build --platform=ios --environment=production` to build an install file for your app'
    ],
    title: '# Creating Mobile Apps with Ember and Corber'
  });

  server.create('instruction', {
    id: 2,
    intro: '*Electron bundles a version of the Chromium browser with Node.js to create desktop apps from your new or existing web app*',
    steps: [
      '1. From inside your ember application, use the `ember install ember-electron` command to add Electron to your project',
      '2. You can now run your application using the `ember electron` command',
      '3. In your Ember application, you will now see an ember-electron subdirectory, in which you can customize your Electron application. `ember-electron` provides enough boilerplate code to get you up and running without any additional customization'
    ],
    title: '# Creating Desktop Apps with Ember and Electron'
  });

  server.create('instruction', {
    id: 3,
    intro: '*Ember.js is a robust Javascript MVC framework built around developer ergonomics*',
    steps: [
      '1. Ensure you have either Yarn or NPM installed on your system',
      '2. Install ember-cli globally using either `yarn global add ember-cli` or `npm install -g ember-cli`',
      '3. Create a new Ember app using <pre class="inline">ember new project-name</pre>',
      '4. Use `cd project-name` to move into your new Ember app',
      '5. Run your app using the `ember serve` command and go to [http://localhost:4200](http://localhost:4200) in your browser of choice'
    ],
    title: '# Creating Web Apps with Ember'
  });
}
