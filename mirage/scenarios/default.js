export default function(server) {
  server.create('instruction', {
    id: 1,
    intro: '*Corber wraps the [Cordova](https://cordova.apache.org/) library for use with Javascript libraries. It specifically grew out of the ember-cli-cordova addon.*',
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
    intro: '*Electron bundles a version of the Chromium browser with Node.js to create desktop apps for Windows, MacOS, or Linux from your new or existing web app*',
    steps: [
      '### Making your Ember app an Electron app',
      '1. From inside your ember application, use the `ember install ember-electron` command to add [Electron](https://electronjs.org/) to your project',
      '2. You can now run your application using the `ember electron` command',
      '3. In your Ember application, you will now see an ember-electron subdirectory, in which you can customize your Electron application. `ember-electron` provides enough boilerplate code to get you up and running without any additional customization',
      '### Building an executable file',
      '*`ember-electron` uses [`electron-forge`](https://github.com/electron-userland/electron-forge) to handle its builds*',
      'NOTE: The simplest place to store your Electron Forge config is inside your package.json file',
      '1. At this point, you should be able to build your Electron app using `ember electron:make`, which will store its output in `app-name/electron-out`',
      '2. You can run your built application by navigating to the output directory and finding the `app-name.app` or `app-name.exe` (depending on OS)'

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
      '5. Run your app using the `ember serve` command and go to [http://localhost:4200](http://localhost:4200) in your browser of choice',
      '6. You can run your Ember application while you make changes in your editor. When you save a file, the app will automatically reload with your newest changes',
      '7. Ember automatically generates test files for you as you create routes, components, etc. You can run these tests with the command `ember test`'
    ],
    title: '# Creating Web Apps with Ember'
  });

  server.create('instruction', {
    id: 4,
    intro: '*A short explanation of the Ember.js app architecture*',
    steps: [
      '### Assets',
      'Assets for Ember.js are stored in the `public` directory. The `crossdomain.xml` and `robots.txt` files are auto-generated when the Ember project is created',
      '### Configuration',
      'The configuration files are stored in the `app-name/config` directory',
      '* environment.js - this file contains configuration for app environments, such as development, test, and production',
      '* targets.js - this file tells Babel which browsers your app should be transpiled to run in',
      '### Corber',
      'For the most part, the Corber code is boilerplate that is needed for properly building the application as a mobile app. You should not need to change many of these files, with the possible exception of the `corber/cordova/config.xml` file.',
      'Any new Cordova plugins you need can be added with the `corber plugin add <plugin-name> --save` command',
      'You can give your mobile app a new icon by following these steps:',
      '1. Add an SVG file called `icon.svg` under `app-name/corber`',
      '2. Run the `corber make-icons` command. Note that you can also specify a platform using the `--platform <platform-name>` parameter',
      'You can also create a splash screen for your application using similar steps:',
      '1. Add a file `app-name/corber/splash.svg`',
      '2. Run the `corber make-splashes` command, which also takes the optional `--platform` parameter',
      '### Electron.js',
      'The Electron code creates the desktop application portion of your app. It does so by creating a custom browser based on the Chromium engine and Node.js. All custom Electron code is stored in the `app-name/ember-electron` subdirectory',
      '### Ember.js',
      'All Ember code is stored under the `app-name/app` directory. This is where you will find the code for your actual web app',
      '### Mirage',
      '[Mirage](http://www.ember-cli-mirage.com/) is a library for mocking HTTP requests for development and testing of Ember applications. This app uses Mirage to mock calls for returning these instructions',
      '### QUnit',
      'Ember uses QUnit for its testing suite by default, and generates tests for you as your create pieces of your application. All tests can be found in the `app-name/tests` directory'
    ],
    title: '# Ember Application Architecture'
  });

  server.create('instructions', {
    id: 5,
    intro: '*Electron uses Squirrel to allow automatically pushing updates to client instances of your application*',
    steps: [
      'From [Squirrel\'s Github](https://github.com/Squirrel/Squirrel.Mac):',
      '"*Squirrel is an OS X framework focused on making application updates as safe and transparent as updates to a website.*',
      '*Instead of publishing a feed of versions from which your app must select, Squirrel updates to the version your server tells it to. This allows you to intelligently update your clients based on the request you give to Squirrel. The server can remotely drive behaviors like rolling back or phased rollouts.*',
      '*Your request can include authentication details, custom headers or a request body so that your server has the context it needs in order to supply the most suitable update.*',
      '*The update JSON Squirrel requests should be dynamically generated based on criteria in the request, and whether an update is required. Squirrel relies on server side support for determining whether an update is required, see Server Support.*',
      '*Squirrel\'s installer is also designed to be fault tolerant, and ensure that any updates installed are valid.*"'
    ],
    title: '# Auto-updating an Electron application'
  });
}
