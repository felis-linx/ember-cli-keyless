import Ember from 'ember';
import GenerateUuidMixin from 'ember-cli-keyless/mixins/generate-uuid';
import { module, test } from 'qunit';

module('Unit | Mixin | generate uuid');

// Replace this with your real tests.
test('it works', function(assert) {
  let GenerateUuidObject = Ember.Object.extend(GenerateUuidMixin);
  let subject = GenerateUuidObject.create();
  assert.ok(subject);
});
