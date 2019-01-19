import EmberRouter from '@ember/routing/router';
import config from 'rpg/config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL,
});

Router.map(function() { this.route('npc') });

export default Router;
