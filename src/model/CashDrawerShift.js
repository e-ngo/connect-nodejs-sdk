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
var CashDrawerDevice = require('./CashDrawerDevice');
var Money = require('./Money');




/**
 * The CashDrawerShift model module.
 * @module model/CashDrawerShift
 */

/**
 * Constructs a new <code>CashDrawerShift</code>.
 * This model gives the details of a cash drawer shift. The cash_payment_money, cash_refund_money, cash_paid_in_money, and cash_paid_out_money fields are all computed by summing their respective event types.
 * @alias module:model/CashDrawerShift
 * @class
 */
var exports = function() {
  var _this = this;



















};

/**
 * Constructs a <code>CashDrawerShift</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CashDrawerShift} obj Optional instance to populate.
 * @return {module:model/CashDrawerShift} The populated <code>CashDrawerShift</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('state')) {
      obj['state'] = ApiClient.convertToType(data['state'], 'String');
    }
      if (data.hasOwnProperty('opened_at')) {
      obj['opened_at'] = ApiClient.convertToType(data['opened_at'], 'String');
    }
      if (data.hasOwnProperty('ended_at')) {
      obj['ended_at'] = ApiClient.convertToType(data['ended_at'], 'String');
    }
      if (data.hasOwnProperty('closed_at')) {
      obj['closed_at'] = ApiClient.convertToType(data['closed_at'], 'String');
    }
      if (data.hasOwnProperty('employee_ids')) {
      obj['employee_ids'] = ApiClient.convertToType(data['employee_ids'], ['String']);
    }
      if (data.hasOwnProperty('opening_employee_id')) {
      obj['opening_employee_id'] = ApiClient.convertToType(data['opening_employee_id'], 'String');
    }
      if (data.hasOwnProperty('ending_employee_id')) {
      obj['ending_employee_id'] = ApiClient.convertToType(data['ending_employee_id'], 'String');
    }
      if (data.hasOwnProperty('closing_employee_id')) {
      obj['closing_employee_id'] = ApiClient.convertToType(data['closing_employee_id'], 'String');
    }
      if (data.hasOwnProperty('description')) {
      obj['description'] = ApiClient.convertToType(data['description'], 'String');
    }
      if (data.hasOwnProperty('opened_cash_money')) {
      obj['opened_cash_money'] = Money.constructFromObject(data['opened_cash_money']);
    }
      if (data.hasOwnProperty('cash_payment_money')) {
      obj['cash_payment_money'] = Money.constructFromObject(data['cash_payment_money']);
    }
      if (data.hasOwnProperty('cash_refunds_money')) {
      obj['cash_refunds_money'] = Money.constructFromObject(data['cash_refunds_money']);
    }
      if (data.hasOwnProperty('cash_paid_in_money')) {
      obj['cash_paid_in_money'] = Money.constructFromObject(data['cash_paid_in_money']);
    }
      if (data.hasOwnProperty('cash_paid_out_money')) {
      obj['cash_paid_out_money'] = Money.constructFromObject(data['cash_paid_out_money']);
    }
      if (data.hasOwnProperty('expected_cash_money')) {
      obj['expected_cash_money'] = Money.constructFromObject(data['expected_cash_money']);
    }
      if (data.hasOwnProperty('closed_cash_money')) {
      obj['closed_cash_money'] = Money.constructFromObject(data['closed_cash_money']);
    }
      if (data.hasOwnProperty('device')) {
      obj['device'] = CashDrawerDevice.constructFromObject(data['device']);
    }
    }
  return obj;
}

/**
 * The shift unique ID.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The shift current state. See [CashDrawerShiftState](#type-cashdrawershiftstate) for possible values
 * @member {String} state
 */
exports.prototype['state'] = undefined;
/**
 * The time when the shift began, in ISO 8601 format.
 * @member {String} opened_at
 */
exports.prototype['opened_at'] = undefined;
/**
 * The time when the shift ended, in ISO 8601 format.
 * @member {String} ended_at
 */
exports.prototype['ended_at'] = undefined;
/**
 * The time when the shift was closed, in ISO 8601 format.
 * @member {String} closed_at
 */
exports.prototype['closed_at'] = undefined;
/**
 * The IDs of all employees that were logged into Square Point of Sale at any point while the cash drawer shift was open.
 * @member {Array.<String>} employee_ids
 */
exports.prototype['employee_ids'] = undefined;
/**
 * The ID of the employee that started the cash drawer shift.
 * @member {String} opening_employee_id
 */
exports.prototype['opening_employee_id'] = undefined;
/**
 * The ID of the employee that ended the cash drawer shift.
 * @member {String} ending_employee_id
 */
exports.prototype['ending_employee_id'] = undefined;
/**
 * The ID of the employee that closed the cash drawer shift by auditing the cash drawer contents.
 * @member {String} closing_employee_id
 */
exports.prototype['closing_employee_id'] = undefined;
/**
 * The free-form text description of a cash drawer by an employee.
 * @member {String} description
 */
exports.prototype['description'] = undefined;
/**
 * The amount of money in the cash drawer at the start of the shift. The amount must be greater than or equal to zero.
 * @member {module:model/Money} opened_cash_money
 */
exports.prototype['opened_cash_money'] = undefined;
/**
 * The amount of money added to the cash drawer from cash payments. This is computed by summing all events with the types CASH_TENDER_PAYMENT and CASH_TENDER_CANCELED_PAYMENT. The amount is always greater than or equal to zero.
 * @member {module:model/Money} cash_payment_money
 */
exports.prototype['cash_payment_money'] = undefined;
/**
 * The amount of money removed from the cash drawer from cash refunds. It is computed by summing the events of type CASH_TENDER_REFUND. The amount is always greater than or equal to zero.
 * @member {module:model/Money} cash_refunds_money
 */
exports.prototype['cash_refunds_money'] = undefined;
/**
 * The amount of money added to the cash drawer for reasons other than cash payments. It is computed by summing the events of type PAID_IN. The amount is always greater than or equal to zero.
 * @member {module:model/Money} cash_paid_in_money
 */
exports.prototype['cash_paid_in_money'] = undefined;
/**
 * The amount of money removed from the cash drawer for reasons other than cash refunds. It is computed by summing the events of type PAID_OUT. The amount is always greater than or equal to zero.
 * @member {module:model/Money} cash_paid_out_money
 */
exports.prototype['cash_paid_out_money'] = undefined;
/**
 * The amount of money that should be in the cash drawer at the end of the shift, based on the shift's other money amounts. This can be negative if employees have not correctly recorded all the events on the cash drawer. cash_paid_out_money is a summation of amounts from cash_payment_money (zero or positive), cash_refunds_money (zero or negative), cash_paid_in_money (zero or positive), and cash_paid_out_money (zero or negative) event types.
 * @member {module:model/Money} expected_cash_money
 */
exports.prototype['expected_cash_money'] = undefined;
/**
 * The amount of money found in the cash drawer at the end of the shift by an auditing employee. The amount should be positive.
 * @member {module:model/Money} closed_cash_money
 */
exports.prototype['closed_cash_money'] = undefined;
/**
 * The device running Square Point of Sale that was connected to the cash drawer.
 * @member {module:model/CashDrawerDevice} device
 */
exports.prototype['device'] = undefined;



module.exports = exports;



