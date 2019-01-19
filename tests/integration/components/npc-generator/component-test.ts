import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | npc-generator', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{npc-generator}}`);
  
    assert.dom('[data-test-npc-generator]').exists();
    assert.dom('[data-test-npc-generator]').doesNotContainText('');

    // Template block usage:
    await render(hbs`
      {{#npc-generator}}
        template block text
      {{/npc-generator}}
    `);

    assert.dom('[data-test-npc-generator]').hasText('template block text');
  });
});
