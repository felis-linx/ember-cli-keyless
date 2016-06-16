/*jshint node:true*/
var EOL = require('os').EOL;
var SilentError = require('silent-error');

module.exports = {
  description: 'Generates an Ember adapter and serializer for keyless model',

  availableOptions: [
    { name: 'type', type: String, values: ['rest', 'jsonapi'], default: 'rest' },
    { name: 'skip-adapter', type: Boolean, values: [true, false], default: false },
    { name: 'adapter', type: String }
  ],
    
  locals: function(options) {
    var name = options.entity.name,
        type = options.type || 'rest',
        baseClass = 'DS.'+type.toUpperCase(),
        skipAdapter = options.skipAdapter || false,
        adapter = options.adapter || false, 
        imports = 'import DS from \'ember-data\';',
        adapterImports, adapterBaseClass;
 
/*
    var variable = this.project.pkg.name;
    for (var key in variable) {
      var type = typeof variable[key];
//      if (type !== 'function') {
        this.ui.writeLine(key + ' -> ' + (type === 'function'? 'function' : variable[key]));
//      }
    }
*/    
    if (skipAdapter) {
      this.ui.writeLine('Skip generating adapter.');
      for (var index in this._files) {
        if (this._files[index].indexOf('adapter') !== -1) {
          this._files.splice(index, 1);
        }
      }
    } else if (adapter) {
      this.ui.writeLine('Override default adapter with `' + this.project.pkg.name + '/adapters/' + adapter + '`');
      adapterBaseClass = adapter[0].toUpperCase() + adapter.slice(1) + 'Adapter'
      adapterImports = EOL + 'import ' + adapterBaseClass + ' from \'' + this.project.pkg.name + '/adapters/' + adapter + '\';';
      //(adapter ? options.adapter : baseClass)
    } else {
      adapterBaseClass = baseClass + 'Adapter'
      adapterImports = '';
    }
    
    return {
      adapterImports: imports + EOL + 'import GenerateUUID from \'ember-cli-keyless/mixins/generate-uuid\';' + adapterImports,
      serializerImports: imports  + EOL + 'import Keyless from \'ember-cli-keyless/mixins/keyless\';',
      adapterBaseClass: adapterBaseClass,
      serializerBaseClass: baseClass + 'Serializer',
      body: ''
    };
  }
};
