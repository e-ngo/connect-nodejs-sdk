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
var V1Money = require('./V1Money');




/**
 * The V1SettlementEntry model module.
 * @module model/V1SettlementEntry
 * @version 2.5.3
 */

/**
 * Constructs a new <code>V1SettlementEntry</code>.
 * @alias module:model/V1SettlementEntry
 * @class
 */
var exports = function() {
  var _this = this;





};

/**
 * Constructs a <code>V1SettlementEntry</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1SettlementEntry} obj Optional instance to populate.
 * @return {module:model/V1SettlementEntry} The populated <code>V1SettlementEntry</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('payment_id')) {
      obj['payment_id'] = ApiClient.convertToType(data['payment_id'], 'String');
    }
      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = V1Money.constructFromObject(data['amount_money']);
    }
      if (data.hasOwnProperty('fee_money')) {
      obj['fee_money'] = V1Money.constructFromObject(data['fee_money']);
    }
    }
  return obj;
}

/**
 * The settlement's unique identifier.
 * @member {String} payment_id
 */
exports.prototype['payment_id'] = undefined;
/**
 * The settlement's current status.
 * @member {module:model/V1SettlementEntry.TypeEnum} type
 */
exports.prototype['type'] = undefined;
/**
 * The total amount of money this entry contributes to the total settlement amount.
 * @member {module:model/V1Money} amount_money
 */
exports.prototype['amount_money'] = undefined;
/**
 * The amount of all Square fees associated with this settlement entry. This value is always negative or zero.
 * @member {module:model/V1Money} fee_money
 */
exports.prototype['fee_money'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "ADJUSTMENT"
     * @const
     */
    "ADJUSTMENT": "ADJUSTMENT",
    /**
     * value: "BALANCE_CHARGE"
     * @const
     */
    "BALANCE_CHARGE": "BALANCE_CHARGE",
    /**
     * value: "CHARGE"
     * @const
     */
    "CHARGE": "CHARGE",
    /**
     * value: "FREE_PROCESSING"
     * @const
     */
    "FREE_PROCESSING": "FREE_PROCESSING",
    /**
     * value: "HOLD_ADJUSTMENT"
     * @const
     */
    "HOLD_ADJUSTMENT": "HOLD_ADJUSTMENT",
    /**
     * value: "PAID_SERVICE_FEE"
     * @const
     */
    "PAID_SERVICE_FEE": "PAID_SERVICE_FEE",
    /**
     * value: "PAID_SERVICE_FEE_REFUND"
     * @const
     */
    "PAID_SERVICE_FEE_REFUND": "PAID_SERVICE_FEE_REFUND",
    /**
     * value: "REDEMPTION_CODE"
     * @const
     */
    "REDEMPTION_CODE": "REDEMPTION_CODE",
    /**
     * value: "REFUND"
     * @const
     */
    "REFUND": "REFUND",
    /**
     * value: "RETURNED_PAYOUT"
     * @const
     */
    "RETURNED_PAYOUT": "RETURNED_PAYOUT",
    /**
     * value: "SQUARE_CAPITAL_ADVANCE"
     * @const
     */
    "SQUARE_CAPITAL_ADVANCE": "SQUARE_CAPITAL_ADVANCE",
    /**
     * value: "SQUARE_CAPITAL_PAYMENT"
     * @const
     */
    "SQUARE_CAPITAL_PAYMENT": "SQUARE_CAPITAL_PAYMENT",
    /**
     * value: "SQUARE_CAPITAL_REVERSED_PAYMENT"
     * @const
     */
    "SQUARE_CAPITAL_REVERSED_PAYMENT": "SQUARE_CAPITAL_REVERSED_PAYMENT",
    /**
     * value: "SUBSCRIPTION_FEE"
     * @const
     */
    "SUBSCRIPTION_FEE": "SUBSCRIPTION_FEE",
    /**
     * value: "SUBSCRIPTION_FEE_REFUND"
     * @const
     */
    "SUBSCRIPTION_FEE_REFUND": "SUBSCRIPTION_FEE_REFUND",
    /**
     * value: "INCENTED_PAYMENT"
     * @const
     */
    "INCENTED_PAYMENT": "INCENTED_PAYMENT",
    /**
     * value: "RETURNED_ACH_ENTRY"
     * @const
     */
    "RETURNED_ACH_ENTRY": "RETURNED_ACH_ENTRY",
    /**
     * value: "RETURNED_SQUARE_275"
     * @const
     */
    "RETURNED_SQUARE_275": "RETURNED_SQUARE_275",
    /**
     * value: "SQUARE_275"
     * @const
     */
    "SQUARE_275": "SQUARE_275"  };


module.exports = exports;



