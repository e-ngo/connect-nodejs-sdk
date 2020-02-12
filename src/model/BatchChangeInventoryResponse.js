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
var Error = require('./Error');
var InventoryCount = require('./InventoryCount');




/**
 * The BatchChangeInventoryResponse model module.
 * @module model/BatchChangeInventoryResponse
 */

/**
 * Constructs a new <code>BatchChangeInventoryResponse</code>.
 * 
 * @alias module:model/BatchChangeInventoryResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>BatchChangeInventoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/BatchChangeInventoryResponse} obj Optional instance to populate.
 * @return {module:model/BatchChangeInventoryResponse} The populated <code>BatchChangeInventoryResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('counts')) {
      obj['counts'] = ApiClient.convertToType(data['counts'], [InventoryCount]);
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The current counts for all objects referenced in the request.
 * @member {Array.<module:model/InventoryCount>} counts
 */
exports.prototype['counts'] = undefined;



module.exports = exports;



