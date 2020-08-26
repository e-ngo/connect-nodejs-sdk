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
 * The CreateSubscriptionRequest model module.
 * Note: This model is in beta.
 * @module model/CreateSubscriptionRequest
 */

/**
 * Constructs a new <code>CreateSubscriptionRequest</code>.
 * Defines parameters in a  [CreateSubscription](#endpoint-subscriptions-createsubscription) endpoint request.
 * @alias module:model/CreateSubscriptionRequest
 * @class
 * @param idempotencyKey {String} A unique string that identifies this `CreateSubscription` request. If you do not provide a unique string (or provide an empty string as the value), the endpoint treats each request as independent.  For more information, see [Idempotency keys](https://developer.squareup.com/docs/docs/working-with-apis/idempotency).
 * @param locationId {String} The ID of the location the subscription is associated with.
 * @param planId {String} The ID of the subscription plan. For more information, see  [Subscription Plan Overview](https://developer.squareup.com/docs/docs/subscriptions/overview).
 * @param customerId {String} The ID of the `customer` profile.
 */
var exports = function(idempotencyKey, locationId, planId, customerId) {
  var _this = this;

  _this['idempotency_key'] = idempotencyKey;
  _this['location_id'] = locationId;
  _this['plan_id'] = planId;
  _this['customer_id'] = customerId;






};

/**
 * Constructs a <code>CreateSubscriptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateSubscriptionRequest} obj Optional instance to populate.
 * @return {module:model/CreateSubscriptionRequest} The populated <code>CreateSubscriptionRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('plan_id')) {
      obj['plan_id'] = ApiClient.convertToType(data['plan_id'], 'String');
    }
      if (data.hasOwnProperty('customer_id')) {
      obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
    }
      if (data.hasOwnProperty('start_date')) {
      obj['start_date'] = ApiClient.convertToType(data['start_date'], 'String');
    }
      if (data.hasOwnProperty('canceled_date')) {
      obj['canceled_date'] = ApiClient.convertToType(data['canceled_date'], 'String');
    }
      if (data.hasOwnProperty('tax_percentage')) {
      obj['tax_percentage'] = ApiClient.convertToType(data['tax_percentage'], 'String');
    }
      if (data.hasOwnProperty('price_override_money')) {
      obj['price_override_money'] = Money.constructFromObject(data['price_override_money']);
    }
      if (data.hasOwnProperty('card_id')) {
      obj['card_id'] = ApiClient.convertToType(data['card_id'], 'String');
    }
      if (data.hasOwnProperty('timezone')) {
      obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
    }
    }
  return obj;
}

/**
 * A unique string that identifies this `CreateSubscription` request. If you do not provide a unique string (or provide an empty string as the value), the endpoint treats each request as independent.  For more information, see [Idempotency keys](https://developer.squareup.com/docs/docs/working-with-apis/idempotency).
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * The ID of the location the subscription is associated with.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * The ID of the subscription plan. For more information, see  [Subscription Plan Overview](https://developer.squareup.com/docs/docs/subscriptions/overview).
 * @member {String} plan_id
 */
exports.prototype['plan_id'] = undefined;
/**
 * The ID of the `customer` profile.
 * @member {String} customer_id
 */
exports.prototype['customer_id'] = undefined;
/**
 * The start date of the subscription, in YYYY-MM-DD format. For example, 2013-01-15. If the start date is left empty, the subscription begins  immediately.
 * @member {String} start_date
 */
exports.prototype['start_date'] = undefined;
/**
 * The date when the subscription should be canceled, in  YYYY-MM-DD format (for example, 2025-02-29). This overrides the plan configuration  if it comes before the date the subscription would otherwise end.
 * @member {String} canceled_date
 */
exports.prototype['canceled_date'] = undefined;
/**
 * The tax to add when billing the subscription. The percentage is expressed in decimal form, using a `'.'` as the decimal separator and without a `'%'` sign. For example, a value of 7.5 corresponds to 7.5%.
 * @member {String} tax_percentage
 */
exports.prototype['tax_percentage'] = undefined;
/**
 * A custom price to apply for the subscription. If specified,  it overrides the price configured by the subscription plan.
 * @member {module:model/Money} price_override_money
 */
exports.prototype['price_override_money'] = undefined;
/**
 * The ID of the `customer](#type-customer) [card` to charge. If not specified, Square sends an invoice via email. For an example to create a customer and add a card on file, see [Subscriptions Walkthrough](https://developer.squareup.com/docs/docs/subscriptions-api/walkthrough).
 * @member {String} card_id
 */
exports.prototype['card_id'] = undefined;
/**
 * The timezone that is used in date calculations for the subscription. If unset, defaults to the location timezone. If a timezone is not configured for the location, defaults to \"America/New_York\". Format: the IANA Timezone Database identifier for the location timezone. For a list of time zones, see [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
 * @member {String} timezone
 */
exports.prototype['timezone'] = undefined;



module.exports = exports;


