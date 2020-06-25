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
var SearchLoyaltyRewardsRequestLoyaltyRewardQuery = require('./SearchLoyaltyRewardsRequestLoyaltyRewardQuery');




/**
 * The SearchLoyaltyRewardsRequest model module.
 * Note: This model is in beta.
 * @module model/SearchLoyaltyRewardsRequest
 */

/**
 * Constructs a new <code>SearchLoyaltyRewardsRequest</code>.
 * A request to search for loyalty rewards.
 * @alias module:model/SearchLoyaltyRewardsRequest
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>SearchLoyaltyRewardsRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchLoyaltyRewardsRequest} obj Optional instance to populate.
 * @return {module:model/SearchLoyaltyRewardsRequest} The populated <code>SearchLoyaltyRewardsRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('query')) {
      obj['query'] = SearchLoyaltyRewardsRequestLoyaltyRewardQuery.constructFromObject(data['query']);
    }
      if (data.hasOwnProperty('limit')) {
      obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
    }
  return obj;
}

/**
 * The search criteria for the request.  If empty, the endpoint retrieves all loyalty rewards in the loyalty program.
 * @member {module:model/SearchLoyaltyRewardsRequestLoyaltyRewardQuery} query
 */
exports.prototype['query'] = undefined;
/**
 * The maximum number of results to return in the response.
 * @member {Number} limit
 */
exports.prototype['limit'] = undefined;
/**
 * A pagination cursor returned by a previous call to  this endpoint. Provide this to retrieve the next set of  results for the original query. For more information,  see [Pagination](https://developer.squareup.com/docs/docs/basics/api101/pagination).
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;


