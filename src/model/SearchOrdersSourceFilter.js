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
 * The SearchOrdersSourceFilter model module.
 * @module model/SearchOrdersSourceFilter
 */

/**
 * Constructs a new <code>SearchOrdersSourceFilter</code>.
 * Filter based on Order &#x60;source&#x60; information.
 * @alias module:model/SearchOrdersSourceFilter
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>SearchOrdersSourceFilter</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchOrdersSourceFilter} obj Optional instance to populate.
 * @return {module:model/SearchOrdersSourceFilter} The populated <code>SearchOrdersSourceFilter</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('source_names')) {
      obj['source_names'] = ApiClient.convertToType(data['source_names'], ['String']);
    }
    }
  return obj;
}

/**
 * Filters by [Source](#type-ordersource) `name`. Will return any orders with with `source.name`s that match any of the listed source names.  Max: 10 `source_names`.
 * @member {Array.<String>} source_names
 */
exports.prototype['source_names'] = undefined;



module.exports = exports;



