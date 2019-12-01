import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | post', function(hooks) {
  let store;

  setupTest(hooks);

  hooks.beforeEach(function() {
    store = this.owner.lookup('service:store');
  });

  test('it exists', function(assert) {
    let model = store.createRecord('post', {});

    assert.expect(1);
    assert.ok(model);
  });

  module('computed | firstLine', function() {
    test('it return an empty string when "body" is empty', function(assert) {
      let model = store.createRecord('post', { body: null });

      assert.expect(1);
      assert.equal(model.get('firstLine'), '');
    });

    test('it only returns the first line', function(assert) {
      const body1 = 'First line.';
      const body2 = `${body1}\nSecond line.`;
      let model = store.createRecord('post', { body: body1 });

      assert.expect(3);
      assert.equal(model.get('firstLine'), body1);

      model.set('body', body2);
      
      // Ensure that body has changed.
      assert.equal(model.get('body'), body2);
      assert.equal(model.get('firstLine'), body1);
    });
  });
});
