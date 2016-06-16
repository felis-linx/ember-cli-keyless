import Ember from 'ember';

/**
 * generateUUID mixin — provides functions for generate sequence numeric and 
 * random IDs in model
 *
 * @mixin generateUUID
 * @mixes Duplicator
 */
export default Ember.Mixin.create({
  
/**
 * Generate sequental ID for model type
 * @function
 * @param {DS.Model} model — model for generate ID
 * @returns {Integer}
 * @memberof generateUUID
 */
  generateSeqID: function(model) {
    
    var type = model.constructor.modelName || model.typeKey ,
        models = this.store.peekAll(type),
        ids = models.mapBy('id');
    
    return Math.max(...ids) + 1;
  },
    
/**
 * Generate random UUID xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 * @function
 * @param {Integer} length — length of generated UUID
 * @returns {String}
 * @memberof generateUUID
 */
  generateUUID: function(length) {
    
    var uuid = '',
        uuidTemplate = 'xxxxxxxx-xxxx-xxxx',
        //'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
        //     8      4    4    4    12
        //     8      12   16   20    32
        // Math.random().toString(36).substring(2, 14).length == 12
        i = 0,
        rb = Math.random()*0xffffffff|0,
        uuidLength = (typeof length !== 'undefined') ? length : uuidTemplate.length;
    
    while(i++ < uuidLength) {      
      var c = uuidTemplate[i-1],
          r = rb&0xf,
          v = c === 'x' ? r :(r &0x3|0x8);     
      uuid += (c === '-') ? c : v.toString(16);
      rb = i%8 === 0 ? Math.random()*0xffffffff|0 : rb>>4;
    }    
    return uuid;    
  }
  
});
