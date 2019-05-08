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
var OrderFulfillment = require('./OrderFulfillment');
var OrderLineItem = require('./OrderLineItem');
var OrderLineItemDiscount = require('./OrderLineItemDiscount');
var OrderLineItemTax = require('./OrderLineItemTax');
var OrderMoneyAmounts = require('./OrderMoneyAmounts');
var OrderReturn = require('./OrderReturn');
var OrderRoundingAdjustment = require('./OrderRoundingAdjustment');
var OrderSource = require('./OrderSource');
var Refund = require('./Refund');
var Tender = require('./Tender');




/**
 * The Order model module.
 * @module model/Order
 */

/**
 * Constructs a new <code>Order</code>.
 * Contains all information related to a single order to process with Square, including line items that specify the products to purchase. Order objects also include information on any associated tenders, refunds, and returns.  All Connect V2 Transactions have all been converted to Orders including all associated itemization data.
 * @alias module:model/Order
 * @class
 * @param locationId {String} The ID of the merchant location this order is associated with.
 */
var exports = function(locationId) {
  var _this = this;


  _this['location_id'] = locationId;




















};

/**
 * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Order} obj Optional instance to populate.
 * @return {module:model/Order} The populated <code>Order</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('reference_id')) {
      obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
    }
      if (data.hasOwnProperty('source')) {
      obj['source'] = OrderSource.constructFromObject(data['source']);
    }
      if (data.hasOwnProperty('customer_id')) {
      obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
    }
      if (data.hasOwnProperty('line_items')) {
      obj['line_items'] = ApiClient.convertToType(data['line_items'], [OrderLineItem]);
    }
      if (data.hasOwnProperty('taxes')) {
      obj['taxes'] = ApiClient.convertToType(data['taxes'], [OrderLineItemTax]);
    }
      if (data.hasOwnProperty('discounts')) {
      obj['discounts'] = ApiClient.convertToType(data['discounts'], [OrderLineItemDiscount]);
    }
      if (data.hasOwnProperty('fulfillments')) {
      obj['fulfillments'] = ApiClient.convertToType(data['fulfillments'], [OrderFulfillment]);
    }
      if (data.hasOwnProperty('returns')) {
      obj['returns'] = ApiClient.convertToType(data['returns'], [OrderReturn]);
    }
      if (data.hasOwnProperty('return_amounts')) {
      obj['return_amounts'] = OrderMoneyAmounts.constructFromObject(data['return_amounts']);
    }
      if (data.hasOwnProperty('net_amounts')) {
      obj['net_amounts'] = OrderMoneyAmounts.constructFromObject(data['net_amounts']);
    }
      if (data.hasOwnProperty('rounding_adjustment')) {
      obj['rounding_adjustment'] = OrderRoundingAdjustment.constructFromObject(data['rounding_adjustment']);
    }
      if (data.hasOwnProperty('tenders')) {
      obj['tenders'] = ApiClient.convertToType(data['tenders'], [Tender]);
    }
      if (data.hasOwnProperty('refunds')) {
      obj['refunds'] = ApiClient.convertToType(data['refunds'], [Refund]);
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
    }
      if (data.hasOwnProperty('closed_at')) {
      obj['closed_at'] = ApiClient.convertToType(data['closed_at'], 'String');
    }
      if (data.hasOwnProperty('state')) {
      obj['state'] = ApiClient.convertToType(data['state'], 'String');
    }
      if (data.hasOwnProperty('total_money')) {
      obj['total_money'] = Money.constructFromObject(data['total_money']);
    }
      if (data.hasOwnProperty('total_tax_money')) {
      obj['total_tax_money'] = Money.constructFromObject(data['total_tax_money']);
    }
      if (data.hasOwnProperty('total_discount_money')) {
      obj['total_discount_money'] = Money.constructFromObject(data['total_discount_money']);
    }
    }
  return obj;
}

/**
 * The order's unique ID.  This value is only present for Order objects created by the Orders API through the [CreateOrder](#endpoint-orders-createorder) endpoint.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The ID of the merchant location this order is associated with.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * A client specified identifier to associate an entity in another system with this order.
 * @member {String} reference_id
 */
exports.prototype['reference_id'] = undefined;
/**
 * The origination details of the order.
 * @member {module:model/OrderSource} source
 */
exports.prototype['source'] = undefined;
/**
 * The [Customer](#type-customer) ID of the customer associated with the order.
 * @member {String} customer_id
 */
exports.prototype['customer_id'] = undefined;
/**
 * The line items included in the order.
 * @member {Array.<module:model/OrderLineItem>} line_items
 */
exports.prototype['line_items'] = undefined;
/**
 * A list of taxes applied to this order. On read or retrieve, this list includes both order-level and item-level taxes. When creating an Order, set your order-level taxes in this list.
 * @member {Array.<module:model/OrderLineItemTax>} taxes
 */
exports.prototype['taxes'] = undefined;
/**
 * A list of discounts applied to this order. On read or retrieve, this list includes both order-level and item-level discounts. When creating an Order, set your order-level discounts in this list.
 * @member {Array.<module:model/OrderLineItemDiscount>} discounts
 */
exports.prototype['discounts'] = undefined;
/**
 * Details on order fulfillment.  Orders can only be created with at most one fulfillment. However, orders returned by the API may contain multiple fulfillments.
 * @member {Array.<module:model/OrderFulfillment>} fulfillments
 */
exports.prototype['fulfillments'] = undefined;
/**
 * Collection of items from sale Orders being returned in this one. Normally part of an Itemized Return or Exchange.  There will be exactly one `Return` object per sale Order being referenced.
 * @member {Array.<module:model/OrderReturn>} returns
 */
exports.prototype['returns'] = undefined;
/**
 * Rollup of returned money amounts.
 * @member {module:model/OrderMoneyAmounts} return_amounts
 */
exports.prototype['return_amounts'] = undefined;
/**
 * Net money amounts (sale money - return money).
 * @member {module:model/OrderMoneyAmounts} net_amounts
 */
exports.prototype['net_amounts'] = undefined;
/**
 * A positive or negative rounding adjustment to the total of the order, commonly used to apply Cash Rounding when the minimum unit of account is smaller than the lowest physical denomination of currency.
 * @member {module:model/OrderRoundingAdjustment} rounding_adjustment
 */
exports.prototype['rounding_adjustment'] = undefined;
/**
 * The Tenders which were used to pay for the Order. This field is read-only.
 * @member {Array.<module:model/Tender>} tenders
 */
exports.prototype['tenders'] = undefined;
/**
 * The Refunds that are part of this Order. This field is read-only.
 * @member {Array.<module:model/Refund>} refunds
 */
exports.prototype['refunds'] = undefined;
/**
 * Timestamp for when the order was created. In RFC 3339 format, e.g., \"2016-09-04T23:59:33.123Z\".
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * Timestamp for when the order was last updated. In RFC 3339 format, e.g., \"2016-09-04T23:59:33.123Z\".
 * @member {String} updated_at
 */
exports.prototype['updated_at'] = undefined;
/**
 * Timestamp for when the order was closed. In RFC 3339 format, e.g., \"2016-09-04T23:59:33.123Z\".
 * @member {String} closed_at
 */
exports.prototype['closed_at'] = undefined;
/**
 * The current state of the order. `OPEN`,`COMPLETED`,`CANCELED` See [OrderState](#type-orderstate) for possible values
 * @member {module:model/Order.StateEnum} state
 */
exports.prototype['state'] = undefined;
/**
 * The total amount of money to collect for the order.
 * @member {module:model/Money} total_money
 */
exports.prototype['total_money'] = undefined;
/**
 * The total tax amount of money to collect for the order.
 * @member {module:model/Money} total_tax_money
 */
exports.prototype['total_tax_money'] = undefined;
/**
 * The total discount amount of money to collect for the order.
 * @member {module:model/Money} total_discount_money
 */
exports.prototype['total_discount_money'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "OPEN"
     * @const
     */
    "OPEN": "OPEN",
    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED",
    /**
     * value: "CANCELED"
     * @const
     */
    "CANCELED": "CANCELED"  };


module.exports = exports;



