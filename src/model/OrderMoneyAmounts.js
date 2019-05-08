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
 * The OrderMoneyAmounts model module.
 * @module model/OrderMoneyAmounts
 */

/**
 * Constructs a new <code>OrderMoneyAmounts</code>.
 * A collection of various money amounts.
 * @alias module:model/OrderMoneyAmounts
 * @class
 */
var exports = function() {
  var _this = this;






};

/**
 * Constructs a <code>OrderMoneyAmounts</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderMoneyAmounts} obj Optional instance to populate.
 * @return {module:model/OrderMoneyAmounts} The populated <code>OrderMoneyAmounts</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('total_money')) {
      obj['total_money'] = Money.constructFromObject(data['total_money']);
    }
      if (data.hasOwnProperty('tax_money')) {
      obj['tax_money'] = Money.constructFromObject(data['tax_money']);
    }
      if (data.hasOwnProperty('discount_money')) {
      obj['discount_money'] = Money.constructFromObject(data['discount_money']);
    }
      if (data.hasOwnProperty('tip_money')) {
      obj['tip_money'] = Money.constructFromObject(data['tip_money']);
    }
      if (data.hasOwnProperty('service_charge_money')) {
      obj['service_charge_money'] = Money.constructFromObject(data['service_charge_money']);
    }
    }
  return obj;
}

/**
 * Total money.
 * @member {module:model/Money} total_money
 */
exports.prototype['total_money'] = undefined;
/**
 * Money associated with taxes.
 * @member {module:model/Money} tax_money
 */
exports.prototype['tax_money'] = undefined;
/**
 * Money associated with discounts.
 * @member {module:model/Money} discount_money
 */
exports.prototype['discount_money'] = undefined;
/**
 * Money associated with tips.
 * @member {module:model/Money} tip_money
 */
exports.prototype['tip_money'] = undefined;
/**
 * Money associated with service charges.
 * @member {module:model/Money} service_charge_money
 */
exports.prototype['service_charge_money'] = undefined;



module.exports = exports;



