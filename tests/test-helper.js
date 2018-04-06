import Application from 'multiplatform-demo/app';
import config from 'multiplatform-demo/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
