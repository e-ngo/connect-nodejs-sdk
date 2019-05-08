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
 * Enum class MeasurementUnitLength.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "IMPERIAL_INCH"
   * @const
   */
  "IMPERIAL_INCH": "IMPERIAL_INCH",
  /**
   * value: "IMPERIAL_FOOT"
   * @const
   */
  "IMPERIAL_FOOT": "IMPERIAL_FOOT",
  /**
   * value: "IMPERIAL_YARD"
   * @const
   */
  "IMPERIAL_YARD": "IMPERIAL_YARD",
  /**
   * value: "IMPERIAL_MILE"
   * @const
   */
  "IMPERIAL_MILE": "IMPERIAL_MILE",
  /**
   * value: "METRIC_MILLIMETER"
   * @const
   */
  "METRIC_MILLIMETER": "METRIC_MILLIMETER",
  /**
   * value: "METRIC_CENTIMETER"
   * @const
   */
  "METRIC_CENTIMETER": "METRIC_CENTIMETER",
  /**
   * value: "METRIC_METER"
   * @const
   */
  "METRIC_METER": "METRIC_METER",
  /**
   * value: "METRIC_KILOMETER"
   * @const
   */
  "METRIC_KILOMETER": "METRIC_KILOMETER"};

/**
 * Returns a <code>MeasurementUnitLength</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/MeasurementUnitLength} The enum <code>MeasurementUnitLength</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


