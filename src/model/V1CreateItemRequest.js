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
var V1Item = require('./V1Item');




/**
 * @deprecated
 * The V1CreateItemRequest model module.
 * @module model/V1CreateItemRequest
 */

/**
 * Constructs a new <code>V1CreateItemRequest</code>.
 * 
 * @alias module:model/V1CreateItemRequest
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>V1CreateItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1CreateItemRequest} obj Optional instance to populate.
 * @return {module:model/V1CreateItemRequest} The populated <code>V1CreateItemRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('body')) {
      obj['body'] = V1Item.constructFromObject(data['body']);
    }
    }
  return obj;
}

/**
 * An object containing the fields to POST for the request.  See the corresponding object definition for field details.
 * @member {module:model/V1Item} body
 */
exports.prototype['body'] = undefined;



module.exports = exports;



