import { setApplication } from '@ember/test-helpers';
import config from 'ember-get-config';
import { start } from 'ember-qunit';
import Application from 'rpg/app';
import 'qunit-dom';


setApplication(Application.create(config.APP as any));

start();
