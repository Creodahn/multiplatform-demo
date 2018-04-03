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
      'Make sure to accept the license agreements using `cd ~/Library/Android/sdk/tools/bin && ./sdkmanager --licenses`',
      'Install Gradle',
      'Add the corber addon to you Ember application using `ember install corber`',
      'In your environment/config file, change locationType to `hash`',
      'Also in environment/config, change rootURL to an empty string'
    ],
    title: 'Creating Mobile Apps with Ember and Corber'
  });

  server.create('instruction', {
    id: 2,
    intro: '',
    steps: [],
    title: 'Creating Desktop Apps with Ember and Electron'
  });

  server.create('instruction', {
    id: 3,
    intro: 'Ember.js is a robust Javascript MVC framework built around developer ergonomics',
    steps: [
      'Ensure you have either Yarn or NPM installed on your system',
      'Install ember-cli globally using either `yarn global add ember-cli` or `npm install -g ember-cli`',
      'Create a new Ember app using `ember new project-name`',
      'Use `cd project-name` to move into your new Ember app',
      'Run your app using the `ember serve` command and go to http://localhost:4200 in your browser of choice'
    ],
    title: 'Creating Web Apps with Ember'
  });
}
