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
var GetPaymentRefundResponse = require('../model/GetPaymentRefundResponse');
var ListPaymentRefundsResponse = require('../model/ListPaymentRefundsResponse');
var RefundPaymentRequest = require('../model/RefundPaymentRequest');
var RefundPaymentResponse = require('../model/RefundPaymentResponse');

/**
 * Refunds service.
 * @module api/RefundsApi
 */

/**
 * Constructs a new RefundsApi. 
 * @alias module:api/RefundsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * GetPaymentRefund
   * Retrieves a specific &#x60;Refund&#x60; using the &#x60;refund_id&#x60;.
   * @param {String} refundId Unique ID for the desired &#x60;PaymentRefund&#x60;.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetPaymentRefundResponse} and HTTP response
   */
  this.getPaymentRefundWithHttpInfo = function(refundId) {
    var postBody = null;

    // verify the required parameter 'refundId' is set
    if (refundId === undefined || refundId === null) {
      throw new Error("Missing the required parameter 'refundId' when calling getPaymentRefund");
    }


    var pathParams = {
      'refund_id': refundId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-01-22';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = GetPaymentRefundResponse;

    return this.apiClient.callApi(
      '/v2/refunds/{refund_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * GetPaymentRefund
   * Retrieves a specific &#x60;Refund&#x60; using the &#x60;refund_id&#x60;.
   * @param {String} refundId Unique ID for the desired &#x60;PaymentRefund&#x60;.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetPaymentRefundResponse}
   */
  this.getPaymentRefund = function(refundId) {
    return this.getPaymentRefundWithHttpInfo(refundId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListPaymentRefunds
   * Retrieves a list of refunds for the account making the request.  Max results per page: 100
   * @param {Object} opts Optional parameters
   * @param {String} opts.beginTime Timestamp for the beginning of the requested reporting period, in RFC 3339 format.  Default: The current time minus one year.
   * @param {String} opts.endTime Timestamp for the end of the requested reporting period, in RFC 3339 format.  Default: The current time.
   * @param {String} opts.sortOrder The order in which results are listed. - &#x60;ASC&#x60; - oldest to newest - &#x60;DESC&#x60; - newest to oldest (default).
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
   * @param {String} opts.locationId ID of location associated with payment.
   * @param {String} opts.status If provided, only refunds with the given status are returned. For a list of refund status values, see &#x60;PaymentRefund&#x60;.  Default: If omitted refunds are returned regardless of status.
   * @param {String} opts.sourceType If provided, only refunds with the given source type are returned. - &#x60;CARD&#x60; - List refunds only for payments where card was specified as payment source.  Default: If omitted refunds are returned regardless of source type.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListPaymentRefundsResponse} and HTTP response
   */
  this.listPaymentRefundsWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
      'begin_time': opts['beginTime'],
      'end_time': opts['endTime'],
      'sort_order': opts['sortOrder'],
      'cursor': opts['cursor'],
      'location_id': opts['locationId'],
      'status': opts['status'],
      'source_type': opts['sourceType']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-01-22';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListPaymentRefundsResponse;

    return this.apiClient.callApi(
      '/v2/refunds', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListPaymentRefunds
   * Retrieves a list of refunds for the account making the request.  Max results per page: 100
   * @param {Object} opts Optional parameters
   * @param {String} opts.beginTime Timestamp for the beginning of the requested reporting period, in RFC 3339 format.  Default: The current time minus one year.
   * @param {String} opts.endTime Timestamp for the end of the requested reporting period, in RFC 3339 format.  Default: The current time.
   * @param {String} opts.sortOrder The order in which results are listed. - &#x60;ASC&#x60; - oldest to newest - &#x60;DESC&#x60; - newest to oldest (default).
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
   * @param {String} opts.locationId ID of location associated with payment.
   * @param {String} opts.status If provided, only refunds with the given status are returned. For a list of refund status values, see &#x60;PaymentRefund&#x60;.  Default: If omitted refunds are returned regardless of status.
   * @param {String} opts.sourceType If provided, only refunds with the given source type are returned. - &#x60;CARD&#x60; - List refunds only for payments where card was specified as payment source.  Default: If omitted refunds are returned regardless of source type.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPaymentRefundsResponse}
   */
  this.listPaymentRefunds = function(opts) {
    return this.listPaymentRefundsWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RefundPayment
   * Refunds a payment. You can refund the entire payment amount or a  portion of it. For more information, see  [Payments and Refunds Overview](/payments-api/overview).
   * @param {module:model/RefundPaymentRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RefundPaymentResponse} and HTTP response
   */
  this.refundPaymentWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling refundPayment");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-01-22';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RefundPaymentResponse;

    return this.apiClient.callApi(
      '/v2/refunds', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RefundPayment
   * Refunds a payment. You can refund the entire payment amount or a  portion of it. For more information, see  [Payments and Refunds Overview](/payments-api/overview).
   * @param {module:model/RefundPaymentRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RefundPaymentResponse}
   */
  this.refundPayment = function(body) {
    return this.refundPaymentWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
