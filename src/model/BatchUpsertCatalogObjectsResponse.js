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
var CatalogIdMapping = require('./CatalogIdMapping');
var CatalogObject = require('./CatalogObject');
var Error = require('./Error');




/**
 * The BatchUpsertCatalogObjectsResponse model module.
 * @module model/BatchUpsertCatalogObjectsResponse
 * @version 2.5.3
 */

/**
 * Constructs a new <code>BatchUpsertCatalogObjectsResponse</code>.
 * 
 * @alias module:model/BatchUpsertCatalogObjectsResponse
 * @class
 */
var exports = function() {
  var _this = this;





};

/**
 * Constructs a <code>BatchUpsertCatalogObjectsResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/BatchUpsertCatalogObjectsResponse} obj Optional instance to populate.
 * @return {module:model/BatchUpsertCatalogObjectsResponse} The populated <code>BatchUpsertCatalogObjectsResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('objects')) {
      obj['objects'] = ApiClient.convertToType(data['objects'], [CatalogObject]);
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
    }
      if (data.hasOwnProperty('id_mappings')) {
      obj['id_mappings'] = ApiClient.convertToType(data['id_mappings'], [CatalogIdMapping]);
    }
    }
  return obj;
}

/**
 * The set of [Error](#type-error)s encountered.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The created [CatalogObject](#type-catalogobject)s
 * @member {Array.<module:model/CatalogObject>} objects
 */
exports.prototype['objects'] = undefined;
/**
 * The database [timestamp](#workingwithdates) of this update in RFC 3339 format, e.g., \"2016-09-04T23:59:33.123Z\".
 * @member {String} updated_at
 */
exports.prototype['updated_at'] = undefined;
/**
 * The mapping between client and server IDs for this Upsert.
 * @member {Array.<module:model/CatalogIdMapping>} id_mappings
 */
exports.prototype['id_mappings'] = undefined;



module.exports = exports;



