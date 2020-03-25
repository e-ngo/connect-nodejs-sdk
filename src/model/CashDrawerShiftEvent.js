/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var Money = require('./Money');




/**
 * The CashDrawerShiftEvent model module.
 * @module model/CashDrawerShiftEvent
 */

/**
 * Constructs a new <code>CashDrawerShiftEvent</code>.
 * 
 * @alias module:model/CashDrawerShiftEvent
 * @class
 */
var exports = function() {
  var _this = this;







};

/**
 * Constructs a <code>CashDrawerShiftEvent</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CashDrawerShiftEvent} obj Optional instance to populate.
 * @return {module:model/CashDrawerShiftEvent} The populated <code>CashDrawerShiftEvent</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('employee_id')) {
      obj['employee_id'] = ApiClient.convertToType(data['employee_id'], 'String');
    }
      if (data.hasOwnProperty('event_type')) {
      obj['event_type'] = ApiClient.convertToType(data['event_type'], 'String');
    }
      if (data.hasOwnProperty('event_money')) {
      obj['event_money'] = Money.constructFromObject(data['event_money']);
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('description')) {
      obj['description'] = ApiClient.convertToType(data['description'], 'String');
    }
    }
  return obj;
}

/**
 * The unique ID of the event.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The ID of the employee that created the event.
 * @member {String} employee_id
 */
exports.prototype['employee_id'] = undefined;
/**
 * The type of cash drawer shift event. See [CashDrawerEventType](#type-cashdrawereventtype) for possible values
 * @member {String} event_type
 */
exports.prototype['event_type'] = undefined;
/**
 * The amount of money that was added to or removed from the cash drawer in the event. The amount can be positive (for added money), negative (for removed money), or zero (for other tender type payments).
 * @member {module:model/Money} event_money
 */
exports.prototype['event_money'] = undefined;
/**
 * The event time in ISO 8601 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * An optional description of the event, entered by the employee that created the event.
 * @member {String} description
 */
exports.prototype['description'] = undefined;



module.exports = exports;



