# Ember CLI Keyless

__Ember CLI Keyless__ is a [Ember.js](http://emberjs.com) addon, that allowed use Ember Data embedded records without id.

## How does it work?

Ember CLI Keyless addon consist two mixins — __keyless__ mixin, and __generate-uuid__.

__Keyless__ mixin used in Ember serializers and provide generating id on model loading,
and clear id attibute from payload on saving.

__Generate-uuid__ mixin need for generate id for new created records.

### Installation

Installing the addon

```bash
ember install ember-simple-auth
```

## Usage

#### Generating serializer and adapter for keyless model
`ember generate keyless <model> [--type=rest|jsonapi] [--skip-adapter] [--adapter=name]`

```js
//app/serializers/model.js
import DS from 'ember-data';
import Keyless from 'ember-cli-keyless/mixins/keyless';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, Keyless, {
  attrs: {
    attribute: { embedded: 'always', keyless: true }
  }
});
```

```js
//app/adapter/model.js
import DS from 'ember-data';
import GenerateUUID from 'ember-cli-keyless/mixins/generate-uuid';

export default DS.RESTAdapter.extend(GenerateUUID, {

  generateIdForRecord() {
    return this.generateUUID();
  }
});
```
