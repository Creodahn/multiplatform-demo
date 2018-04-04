export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
  server.create('instruction', {
    id: 1,
    intro: 'Corber wraps the Cordova library for use with Javascript libraries. It specifically grew out of the ember-cli-cordova addon.',
    steps: [
      'Install the Java Developer Kit 1.8',
      'Install Corber globally using Yarn or NPM',
      'Install Android Studio',
      'Make sure to accept the license agreements using <pre class="inline">cd ~/Library/Android/sdk/tools/bin && ./sdkmanager --licenses</pre>',
      'Install Gradle',
      'Add the corber addon to you Ember application using <pre class="inline">ember install corber</pre>',
      'In your environment/config file, change locationType to <pre class="inline">hash</pre>',
      'Also in environment/config, change rootURL to an empty string'
    ],
    title: 'Creating Mobile Apps with Ember and Corber'
  });

  server.create('instruction', {
    id: 2,
    intro: '',
    steps: [
      'From inside your ember application, use the <pre class="inline">ember install ember-electron</pre> command to add Electron to your project',
      'You can now run your application using the <pre class="inline">ember electron</pre> command',
      'In your Ember application, you will now see an ember-electron subdirectory, in which you can customize your Electron application. <pre class="inline">ember-electron</pre> provides enough boilerplate code to get you up and running without any additional customization'
    ],
    title: 'Creating Desktop Apps with Ember and Electron'
  });

  server.create('instruction', {
    id: 3,
    intro: 'Ember.js is a robust Javascript MVC framework built around developer ergonomics',
    steps: [
      'Ensure you have either Yarn or NPM installed on your system',
      'Install ember-cli globally using either <pre class="inline">yarn global add ember-cli</pre> or <pre class="inline">npm install -g ember-cli</pre>',
      'Create a new Ember app using <pre class="inline">ember new project-name</pre>',
      'Use <pre class="inline">cd project-name</pre> to move into your new Ember app',
      'Run your app using the <pre class="inline">ember serve</pre> command and go to <a href="http://localhost:4200">http://localhost:4200</a> in your browser of choice'
    ],
    title: 'Creating Web Apps with Ember'
  });
}
