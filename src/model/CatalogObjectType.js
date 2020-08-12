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


/**
 * Enum class CatalogObjectType.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "ITEM"
   * @const
   */
  "ITEM": "ITEM",
  /**
   * value: "IMAGE"
   * @const
   */
  "IMAGE": "IMAGE",
  /**
   * value: "CATEGORY"
   * @const
   */
  "CATEGORY": "CATEGORY",
  /**
   * value: "ITEM_VARIATION"
   * @const
   */
  "ITEM_VARIATION": "ITEM_VARIATION",
  /**
   * value: "TAX"
   * @const
   */
  "TAX": "TAX",
  /**
   * value: "DISCOUNT"
   * @const
   */
  "DISCOUNT": "DISCOUNT",
  /**
   * value: "MODIFIER_LIST"
   * @const
   */
  "MODIFIER_LIST": "MODIFIER_LIST",
  /**
   * value: "MODIFIER"
   * @const
   */
  "MODIFIER": "MODIFIER",
  /**
   * value: "PRICING_RULE"
   * @const
   */
  "PRICING_RULE": "PRICING_RULE",
  /**
   * value: "PRODUCT_SET"
   * @const
   */
  "PRODUCT_SET": "PRODUCT_SET",
  /**
   * value: "TIME_PERIOD"
   * @const
   */
  "TIME_PERIOD": "TIME_PERIOD",
  /**
   * value: "MEASUREMENT_UNIT"
   * @const
   */
  "MEASUREMENT_UNIT": "MEASUREMENT_UNIT",
  /**
   * value: "SUBSCRIPTION_PLAN"
   * @const
   */
  "SUBSCRIPTION_PLAN": "SUBSCRIPTION_PLAN",
  /**
   * value: "ITEM_OPTION"
   * @const
   */
  "ITEM_OPTION": "ITEM_OPTION",
  /**
   * value: "ITEM_OPTION_VAL"
   * @const
   */
  "ITEM_OPTION_VAL": "ITEM_OPTION_VAL",
  /**
   * value: "CUSTOM_ATTRIBUTE_DEFINITION"
   * @const
   */
  "CUSTOM_ATTRIBUTE_DEFINITION": "CUSTOM_ATTRIBUTE_DEFINITION",
  /**
   * value: "QUICK_AMOUNTS_SETTINGS"
   * @const
   */
  "QUICK_AMOUNTS_SETTINGS": "QUICK_AMOUNTS_SETTINGS"};

/**
 * Returns a <code>CatalogObjectType</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/CatalogObjectType} The enum <code>CatalogObjectType</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


