/**
  * Module dependencies
  */
require('ember');
var DatePicker = require('datepicker');

/**
  * EmberDatePicker `prototype`
  */
function EmberDatePicker(el){
  DatePicker.call(this, el);
};

/**
  * Inherit from `DatePicker.prototype`
  */
EmberDatePicker.prototype.__proto__ = DatePicker.prototype;

/**
  * Fix view value update
  */
EmberDatePicker.prototype.onchange = function(date){
  DatePicker.prototype.onchange.call(this, date);
  var val = this.el.value;
  var id = this.el.id;
  var view = Ember.View.views[id];
  view.set('value', val);
};

/**
  * Mixin to be applied to a text field
  */
module.exports = Em.Mixin.create({

  didInsertElement: function(){

    this._super();
    var el = this.$()[0];
    new EmberDatePicker(el);

  }

});
