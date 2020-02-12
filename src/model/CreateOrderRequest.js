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
var CreateOrderRequestDiscount = require('./CreateOrderRequestDiscount');
var CreateOrderRequestLineItem = require('./CreateOrderRequestLineItem');
var CreateOrderRequestTax = require('./CreateOrderRequestTax');
var Order = require('./Order');




/**
 * The CreateOrderRequest model module.
 * @module model/CreateOrderRequest
 */

/**
 * Constructs a new <code>CreateOrderRequest</code>.
 * 
 * @alias module:model/CreateOrderRequest
 * @class
 */
var exports = function() {
  var _this = this;







};

/**
 * Constructs a <code>CreateOrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateOrderRequest} obj Optional instance to populate.
 * @return {module:model/CreateOrderRequest} The populated <code>CreateOrderRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('order')) {
      obj['order'] = Order.constructFromObject(data['order']);
    }
      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('reference_id')) {
      obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
    }
      if (data.hasOwnProperty('line_items')) {
      obj['line_items'] = ApiClient.convertToType(data['line_items'], [CreateOrderRequestLineItem]);
    }
      if (data.hasOwnProperty('taxes')) {
      obj['taxes'] = ApiClient.convertToType(data['taxes'], [CreateOrderRequestTax]);
    }
      if (data.hasOwnProperty('discounts')) {
      obj['discounts'] = ApiClient.convertToType(data['discounts'], [CreateOrderRequestDiscount]);
    }
    }
  return obj;
}

/**
 * The order to create. If this field is set, then the only other top-level field that can be set is the idempotency_key.
 * @member {module:model/Order} order
 */
exports.prototype['order'] = undefined;
/**
 * A value you specify that uniquely identifies this order among orders you've created.  If you're unsure whether a particular order was created successfully, you can reattempt it with the same idempotency key without worrying about creating duplicate orders.  See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * __Deprecated__: Please set the reference_id on the nested `order` field instead.  An optional ID you can associate with the order for your own purposes (such as to associate the order with an entity ID in your own database).  This value cannot exceed 40 characters.
 * @member {String} reference_id
 */
exports.prototype['reference_id'] = undefined;
/**
 * __Deprecated__: Please set the line_items on the nested `order` field instead.  The line items to associate with this order.  Each line item represents a different product to include in a purchase.
 * @member {Array.<module:model/CreateOrderRequestLineItem>} line_items
 */
exports.prototype['line_items'] = undefined;
/**
 * __Deprecated__: Please set the taxes on the nested `order` field instead.  The taxes to include on the order.
 * @member {Array.<module:model/CreateOrderRequestTax>} taxes
 */
exports.prototype['taxes'] = undefined;
/**
 * __Deprecated__: Please set the discounts on the nested `order` field instead.  The discounts to include on the order.
 * @member {Array.<module:model/CreateOrderRequestDiscount>} discounts
 */
exports.prototype['discounts'] = undefined;



module.exports = exports;



