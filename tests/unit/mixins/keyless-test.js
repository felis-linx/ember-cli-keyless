import Ember from 'ember';
import KeylessMixin from 'ember-cli-keyless/mixins/keyless';
import { module, test } from 'qunit';

module('Unit | Mixin | keyless');

// Replace this with your real tests.
test('it works', function(assert) {
  let KeylessObject = Ember.Object.extend(KeylessMixin);
  let subject = KeylessObject.create();
  assert.ok(subject);
});
