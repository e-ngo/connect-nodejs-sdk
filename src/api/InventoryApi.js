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
var BatchChangeInventoryRequest = require('../model/BatchChangeInventoryRequest');
var BatchChangeInventoryResponse = require('../model/BatchChangeInventoryResponse');
var BatchRetrieveInventoryChangesRequest = require('../model/BatchRetrieveInventoryChangesRequest');
var BatchRetrieveInventoryChangesResponse = require('../model/BatchRetrieveInventoryChangesResponse');
var BatchRetrieveInventoryCountsRequest = require('../model/BatchRetrieveInventoryCountsRequest');
var BatchRetrieveInventoryCountsResponse = require('../model/BatchRetrieveInventoryCountsResponse');
var RetrieveInventoryAdjustmentResponse = require('../model/RetrieveInventoryAdjustmentResponse');
var RetrieveInventoryChangesResponse = require('../model/RetrieveInventoryChangesResponse');
var RetrieveInventoryCountResponse = require('../model/RetrieveInventoryCountResponse');
var RetrieveInventoryPhysicalCountResponse = require('../model/RetrieveInventoryPhysicalCountResponse');

/**
 * Inventory service.
 * @module api/InventoryApi
 */

/**
 * Constructs a new InventoryApi. 
 * @alias module:api/InventoryApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * BatchChangeInventory
   * Applies adjustments and counts to the provided item quantities.  On success: returns the current calculated counts for all objects referenced in the request. On failure: returns a list of related errors.
   * @param {module:model/BatchChangeInventoryRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchChangeInventoryResponse} and HTTP response
   */
  this.batchChangeInventoryWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling batchChangeInventory");
    }


    var pathParams = {
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
    var returnType = BatchChangeInventoryResponse;

    return this.apiClient.callApi(
      '/v2/inventory/batch-change', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * BatchChangeInventory
   * Applies adjustments and counts to the provided item quantities.  On success: returns the current calculated counts for all objects referenced in the request. On failure: returns a list of related errors.
   * @param {module:model/BatchChangeInventoryRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchChangeInventoryResponse}
   */
  this.batchChangeInventory = function(body) {
    return this.batchChangeInventoryWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * BatchRetrieveInventoryChanges
   * Returns historical physical counts and adjustments based on the provided filter criteria.  Results are paginated and sorted in ascending order according their &#x60;occurred_at&#x60; timestamp (oldest first).  BatchRetrieveInventoryChanges is a catch-all query endpoint for queries that cannot be handled by other, simpler endpoints.
   * @param {module:model/BatchRetrieveInventoryChangesRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchRetrieveInventoryChangesResponse} and HTTP response
   */
  this.batchRetrieveInventoryChangesWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling batchRetrieveInventoryChanges");
    }


    var pathParams = {
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
    var returnType = BatchRetrieveInventoryChangesResponse;

    return this.apiClient.callApi(
      '/v2/inventory/batch-retrieve-changes', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * BatchRetrieveInventoryChanges
   * Returns historical physical counts and adjustments based on the provided filter criteria.  Results are paginated and sorted in ascending order according their &#x60;occurred_at&#x60; timestamp (oldest first).  BatchRetrieveInventoryChanges is a catch-all query endpoint for queries that cannot be handled by other, simpler endpoints.
   * @param {module:model/BatchRetrieveInventoryChangesRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchRetrieveInventoryChangesResponse}
   */
  this.batchRetrieveInventoryChanges = function(body) {
    return this.batchRetrieveInventoryChangesWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * BatchRetrieveInventoryCounts
   * Returns current counts for the provided [CatalogObject](#type-catalogobject)s at the requested [Location](#type-location)s.  Results are paginated and sorted in descending order according to their &#x60;calculated_at&#x60; timestamp (newest first).  When &#x60;updated_after&#x60; is specified, only counts that have changed since that time (based on the server timestamp for the most recent change) are returned. This allows clients to perform a \&quot;sync\&quot; operation, for example in response to receiving a Webhook notification.
   * @param {module:model/BatchRetrieveInventoryCountsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchRetrieveInventoryCountsResponse} and HTTP response
   */
  this.batchRetrieveInventoryCountsWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling batchRetrieveInventoryCounts");
    }


    var pathParams = {
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
    var returnType = BatchRetrieveInventoryCountsResponse;

    return this.apiClient.callApi(
      '/v2/inventory/batch-retrieve-counts', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * BatchRetrieveInventoryCounts
   * Returns current counts for the provided [CatalogObject](#type-catalogobject)s at the requested [Location](#type-location)s.  Results are paginated and sorted in descending order according to their &#x60;calculated_at&#x60; timestamp (newest first).  When &#x60;updated_after&#x60; is specified, only counts that have changed since that time (based on the server timestamp for the most recent change) are returned. This allows clients to perform a \&quot;sync\&quot; operation, for example in response to receiving a Webhook notification.
   * @param {module:model/BatchRetrieveInventoryCountsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchRetrieveInventoryCountsResponse}
   */
  this.batchRetrieveInventoryCounts = function(body) {
    return this.batchRetrieveInventoryCountsWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveInventoryAdjustment
   * Returns the [InventoryAdjustment](#type-inventoryadjustment) object with the provided &#x60;adjustment_id&#x60;.
   * @param {String} adjustmentId ID of the &#x60;InventoryAdjustment&#x60; to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveInventoryAdjustmentResponse} and HTTP response
   */
  this.retrieveInventoryAdjustmentWithHttpInfo = function(adjustmentId) {
    var postBody = null;

    // verify the required parameter 'adjustmentId' is set
    if (adjustmentId === undefined || adjustmentId === null) {
      throw new Error("Missing the required parameter 'adjustmentId' when calling retrieveInventoryAdjustment");
    }


    var pathParams = {
      'adjustment_id': adjustmentId
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
    var returnType = RetrieveInventoryAdjustmentResponse;

    return this.apiClient.callApi(
      '/v2/inventory/adjustment/{adjustment_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveInventoryAdjustment
   * Returns the [InventoryAdjustment](#type-inventoryadjustment) object with the provided &#x60;adjustment_id&#x60;.
   * @param {String} adjustmentId ID of the &#x60;InventoryAdjustment&#x60; to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveInventoryAdjustmentResponse}
   */
  this.retrieveInventoryAdjustment = function(adjustmentId) {
    return this.retrieveInventoryAdjustmentWithHttpInfo(adjustmentId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveInventoryChanges
   * Returns a set of physical counts and inventory adjustments for the provided [CatalogObject](#type-catalogobject) at the requested [Location](#type-location)s.  Results are paginated and sorted in descending order according to their &#x60;occurred_at&#x60; timestamp (newest first).  There are no limits on how far back the caller can page. This endpoint is useful when displaying recent changes for a specific item. For more sophisticated queries, use a batch endpoint.
   * @param {String} catalogObjectId ID of the &#x60;CatalogObject&#x60; to retrieve.
   * @param {Object} opts Optional parameters
   * @param {String} opts.locationIds The &#x60;Location&#x60; IDs to look up as a comma-separated list. An empty list queries all locations.
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveInventoryChangesResponse} and HTTP response
   */
  this.retrieveInventoryChangesWithHttpInfo = function(catalogObjectId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'catalogObjectId' is set
    if (catalogObjectId === undefined || catalogObjectId === null) {
      throw new Error("Missing the required parameter 'catalogObjectId' when calling retrieveInventoryChanges");
    }


    var pathParams = {
      'catalog_object_id': catalogObjectId
    };
    var queryParams = {
      'location_ids': opts['locationIds'],
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
    var returnType = RetrieveInventoryChangesResponse;

    return this.apiClient.callApi(
      '/v2/inventory/{catalog_object_id}/changes', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveInventoryChanges
   * Returns a set of physical counts and inventory adjustments for the provided [CatalogObject](#type-catalogobject) at the requested [Location](#type-location)s.  Results are paginated and sorted in descending order according to their &#x60;occurred_at&#x60; timestamp (newest first).  There are no limits on how far back the caller can page. This endpoint is useful when displaying recent changes for a specific item. For more sophisticated queries, use a batch endpoint.
   * @param {String} catalogObjectId ID of the &#x60;CatalogObject&#x60; to retrieve.
   * @param {Object} opts Optional parameters
   * @param {String} opts.locationIds The &#x60;Location&#x60; IDs to look up as a comma-separated list. An empty list queries all locations.
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveInventoryChangesResponse}
   */
  this.retrieveInventoryChanges = function(catalogObjectId, opts) {
    return this.retrieveInventoryChangesWithHttpInfo(catalogObjectId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveInventoryCount
   * Retrieves the current calculated stock count for a given [CatalogObject](#type-catalogobject) at a given set of [Location](#type-location)s. Responses are paginated and unsorted. For more sophisticated queries, use a batch endpoint.
   * @param {String} catalogObjectId ID of the &#x60;CatalogObject&#x60; to retrieve.
   * @param {Object} opts Optional parameters
   * @param {String} opts.locationIds The &#x60;Location&#x60; IDs to look up as a comma-separated list. An empty list queries all locations.
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveInventoryCountResponse} and HTTP response
   */
  this.retrieveInventoryCountWithHttpInfo = function(catalogObjectId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'catalogObjectId' is set
    if (catalogObjectId === undefined || catalogObjectId === null) {
      throw new Error("Missing the required parameter 'catalogObjectId' when calling retrieveInventoryCount");
    }


    var pathParams = {
      'catalog_object_id': catalogObjectId
    };
    var queryParams = {
      'location_ids': opts['locationIds'],
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
    var returnType = RetrieveInventoryCountResponse;

    return this.apiClient.callApi(
      '/v2/inventory/{catalog_object_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveInventoryCount
   * Retrieves the current calculated stock count for a given [CatalogObject](#type-catalogobject) at a given set of [Location](#type-location)s. Responses are paginated and unsorted. For more sophisticated queries, use a batch endpoint.
   * @param {String} catalogObjectId ID of the &#x60;CatalogObject&#x60; to retrieve.
   * @param {Object} opts Optional parameters
   * @param {String} opts.locationIds The &#x60;Location&#x60; IDs to look up as a comma-separated list. An empty list queries all locations.
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveInventoryCountResponse}
   */
  this.retrieveInventoryCount = function(catalogObjectId, opts) {
    return this.retrieveInventoryCountWithHttpInfo(catalogObjectId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveInventoryPhysicalCount
   * Returns the [InventoryPhysicalCount](#type-inventoryphysicalcount) object with the provided &#x60;physical_count_id&#x60;.
   * @param {String} physicalCountId ID of the &#x60;InventoryPhysicalCount&#x60; to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveInventoryPhysicalCountResponse} and HTTP response
   */
  this.retrieveInventoryPhysicalCountWithHttpInfo = function(physicalCountId) {
    var postBody = null;

    // verify the required parameter 'physicalCountId' is set
    if (physicalCountId === undefined || physicalCountId === null) {
      throw new Error("Missing the required parameter 'physicalCountId' when calling retrieveInventoryPhysicalCount");
    }


    var pathParams = {
      'physical_count_id': physicalCountId
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
    var returnType = RetrieveInventoryPhysicalCountResponse;

    return this.apiClient.callApi(
      '/v2/inventory/physical-count/{physical_count_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveInventoryPhysicalCount
   * Returns the [InventoryPhysicalCount](#type-inventoryphysicalcount) object with the provided &#x60;physical_count_id&#x60;.
   * @param {String} physicalCountId ID of the &#x60;InventoryPhysicalCount&#x60; to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveInventoryPhysicalCountResponse}
   */
  this.retrieveInventoryPhysicalCount = function(physicalCountId) {
    return this.retrieveInventoryPhysicalCountWithHttpInfo(physicalCountId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
