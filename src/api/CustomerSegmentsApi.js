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
var ListCustomerSegmentsResponse = require('../model/ListCustomerSegmentsResponse');
var RetrieveCustomerSegmentResponse = require('../model/RetrieveCustomerSegmentResponse');

/**
 * CustomerSegments service.
 * @module api/CustomerSegmentsApi
 */

/**
 * Constructs a new CustomerSegmentsApi. 
 * @alias module:api/CustomerSegmentsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * ListCustomerSegments
   * Note: This endpoint is in beta.
   * Retrieves the list of customer segments of a business.
   * @param {Object} opts Optional parameters
   * @param {String} opts.cursor A pagination cursor returned by previous calls to __ListCustomerSegments__. Used to retrieve the next set of query results.  See the [Pagination guide](https://developer.squareup.com/docs/docs/working-with-apis/pagination) for more information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListCustomerSegmentsResponse} and HTTP response
   */
  this.listCustomerSegmentsWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
      'cursor': opts['cursor']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListCustomerSegmentsResponse;

    return this.apiClient.callApi(
      '/v2/customers/segments', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListCustomerSegments
   * Retrieves the list of customer segments of a business.
   * @param {Object} opts Optional parameters
   * @param {String} opts.cursor A pagination cursor returned by previous calls to __ListCustomerSegments__. Used to retrieve the next set of query results.  See the [Pagination guide](https://developer.squareup.com/docs/docs/working-with-apis/pagination) for more information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCustomerSegmentsResponse}
   */
  this.listCustomerSegments = function(opts) {
    return this.listCustomerSegmentsWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveCustomerSegment
   * Note: This endpoint is in beta.
   * Retrieves a specific customer segment as identified by the &#x60;segment_id&#x60; value.
   * @param {String} segmentId The Square-issued ID of the customer segment.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveCustomerSegmentResponse} and HTTP response
   */
  this.retrieveCustomerSegmentWithHttpInfo = function(segmentId) {
    var postBody = null;

    // verify the required parameter 'segmentId' is set
    if (segmentId === undefined || segmentId === null) {
      throw new Error("Missing the required parameter 'segmentId' when calling retrieveCustomerSegment");
    }


    var pathParams = {
      'segment_id': segmentId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RetrieveCustomerSegmentResponse;

    return this.apiClient.callApi(
      '/v2/customers/segments/{segment_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveCustomerSegment
   * Retrieves a specific customer segment as identified by the &#x60;segment_id&#x60; value.
   * @param {String} segmentId The Square-issued ID of the customer segment.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveCustomerSegmentResponse}
   */
  this.retrieveCustomerSegment = function(segmentId) {
    return this.retrieveCustomerSegmentWithHttpInfo(segmentId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
