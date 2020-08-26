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
var AccumulateLoyaltyPointsRequest = require('../model/AccumulateLoyaltyPointsRequest');
var AccumulateLoyaltyPointsResponse = require('../model/AccumulateLoyaltyPointsResponse');
var AdjustLoyaltyPointsRequest = require('../model/AdjustLoyaltyPointsRequest');
var AdjustLoyaltyPointsResponse = require('../model/AdjustLoyaltyPointsResponse');
var CalculateLoyaltyPointsRequest = require('../model/CalculateLoyaltyPointsRequest');
var CalculateLoyaltyPointsResponse = require('../model/CalculateLoyaltyPointsResponse');
var CreateLoyaltyAccountRequest = require('../model/CreateLoyaltyAccountRequest');
var CreateLoyaltyAccountResponse = require('../model/CreateLoyaltyAccountResponse');
var CreateLoyaltyRewardRequest = require('../model/CreateLoyaltyRewardRequest');
var CreateLoyaltyRewardResponse = require('../model/CreateLoyaltyRewardResponse');
var DeleteLoyaltyRewardResponse = require('../model/DeleteLoyaltyRewardResponse');
var ListLoyaltyProgramsResponse = require('../model/ListLoyaltyProgramsResponse');
var RedeemLoyaltyRewardRequest = require('../model/RedeemLoyaltyRewardRequest');
var RedeemLoyaltyRewardResponse = require('../model/RedeemLoyaltyRewardResponse');
var RetrieveLoyaltyAccountResponse = require('../model/RetrieveLoyaltyAccountResponse');
var RetrieveLoyaltyRewardResponse = require('../model/RetrieveLoyaltyRewardResponse');
var SearchLoyaltyAccountsRequest = require('../model/SearchLoyaltyAccountsRequest');
var SearchLoyaltyAccountsResponse = require('../model/SearchLoyaltyAccountsResponse');
var SearchLoyaltyEventsRequest = require('../model/SearchLoyaltyEventsRequest');
var SearchLoyaltyEventsResponse = require('../model/SearchLoyaltyEventsResponse');
var SearchLoyaltyRewardsRequest = require('../model/SearchLoyaltyRewardsRequest');
var SearchLoyaltyRewardsResponse = require('../model/SearchLoyaltyRewardsResponse');

/**
 * Loyalty service.
 * @module api/LoyaltyApi
 */

/**
 * Constructs a new LoyaltyApi. 
 * @alias module:api/LoyaltyApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * AccumulateLoyaltyPoints
   * Note: This endpoint is in beta.
   * Adds points to a loyalty account.  - If you are using the Orders API to manage orders, you only provide the &#x60;order_id&#x60;.  The endpoint reads the order to compute points to add to the buyer&#39;s account. - If you are not using the Orders API to manage orders,  you first perform a client-side computation to compute the points.   For spend-based and visit-based programs, you can call  &#x60;CalculateLoyaltyPoints&#x60; to compute the points. For more information,  see [Loyalty Program Overview](/docs/loyalty/overview).  You then provide the points in a request to this endpoint.   For more information, see [Accumulate points](/docs/loyalty-api/overview/#accumulate-points).
   * @param {String} accountId The &#x60;loyalty account&#x60; ID to which to add the points.
   * @param {module:model/AccumulateLoyaltyPointsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccumulateLoyaltyPointsResponse} and HTTP response
   */
  this.accumulateLoyaltyPointsWithHttpInfo = function(accountId, body) {
    var postBody = body;

    // verify the required parameter 'accountId' is set
    if (accountId === undefined || accountId === null) {
      throw new Error("Missing the required parameter 'accountId' when calling accumulateLoyaltyPoints");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling accumulateLoyaltyPoints");
    }


    var pathParams = {
      'account_id': accountId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = AccumulateLoyaltyPointsResponse;

    return this.apiClient.callApi(
      '/v2/loyalty/accounts/{account_id}/accumulate', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * AccumulateLoyaltyPoints
   * Adds points to a loyalty account.  - If you are using the Orders API to manage orders, you only provide the &#x60;order_id&#x60;.  The endpoint reads the order to compute points to add to the buyer&#39;s account. - If you are not using the Orders API to manage orders,  you first perform a client-side computation to compute the points.   For spend-based and visit-based programs, you can call  &#x60;CalculateLoyaltyPoints&#x60; to compute the points. For more information,  see [Loyalty Program Overview](/docs/loyalty/overview).  You then provide the points in a request to this endpoint.   For more information, see [Accumulate points](/docs/loyalty-api/overview/#accumulate-points).
   * @param {String} accountId The &#x60;loyalty account&#x60; ID to which to add the points.
   * @param {module:model/AccumulateLoyaltyPointsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccumulateLoyaltyPointsResponse}
   */
  this.accumulateLoyaltyPoints = function(accountId, body) {
    return this.accumulateLoyaltyPointsWithHttpInfo(accountId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * AdjustLoyaltyPoints
   * Note: This endpoint is in beta.
   * Adds points to or subtracts points from a buyer&#39;s account.   Use this endpoint only when you need to manually adjust points. Otherwise, in your application flow, you call  [AccumulateLoyaltyPoints](/reference/square/loyalty-api/accumulate-loyalty-points)  to add points when a buyer pays for the purchase.
   * @param {String} accountId The ID of the &#x60;loyalty account&#x60; in which to adjust the points.
   * @param {module:model/AdjustLoyaltyPointsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdjustLoyaltyPointsResponse} and HTTP response
   */
  this.adjustLoyaltyPointsWithHttpInfo = function(accountId, body) {
    var postBody = body;

    // verify the required parameter 'accountId' is set
    if (accountId === undefined || accountId === null) {
      throw new Error("Missing the required parameter 'accountId' when calling adjustLoyaltyPoints");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling adjustLoyaltyPoints");
    }


    var pathParams = {
      'account_id': accountId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = AdjustLoyaltyPointsResponse;

    return this.apiClient.callApi(
      '/v2/loyalty/accounts/{account_id}/adjust', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * AdjustLoyaltyPoints
   * Adds points to or subtracts points from a buyer&#39;s account.   Use this endpoint only when you need to manually adjust points. Otherwise, in your application flow, you call  [AccumulateLoyaltyPoints](/reference/square/loyalty-api/accumulate-loyalty-points)  to add points when a buyer pays for the purchase.
   * @param {String} accountId The ID of the &#x60;loyalty account&#x60; in which to adjust the points.
   * @param {module:model/AdjustLoyaltyPointsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdjustLoyaltyPointsResponse}
   */
  this.adjustLoyaltyPoints = function(accountId, body) {
    return this.adjustLoyaltyPointsWithHttpInfo(accountId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * CalculateLoyaltyPoints
   * Note: This endpoint is in beta.
   * Calculates the points a purchase earns.  - If you are using the Orders API to manage orders, you provide &#x60;order_id&#x60; in the request. The  endpoint calculates the points by reading the order. - If you are not using the Orders API to manage orders, you provide the purchase amount in  the request for the endpoint to calculate the points.  An application might call this endpoint to show the points that a buyer can earn with the  specific purchase.
   * @param {String} programId The &#x60;loyalty program&#x60; ID, which defines the rules for accruing points.
   * @param {module:model/CalculateLoyaltyPointsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CalculateLoyaltyPointsResponse} and HTTP response
   */
  this.calculateLoyaltyPointsWithHttpInfo = function(programId, body) {
    var postBody = body;

    // verify the required parameter 'programId' is set
    if (programId === undefined || programId === null) {
      throw new Error("Missing the required parameter 'programId' when calling calculateLoyaltyPoints");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling calculateLoyaltyPoints");
    }


    var pathParams = {
      'program_id': programId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CalculateLoyaltyPointsResponse;

    return this.apiClient.callApi(
      '/v2/loyalty/programs/{program_id}/calculate', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CalculateLoyaltyPoints
   * Calculates the points a purchase earns.  - If you are using the Orders API to manage orders, you provide &#x60;order_id&#x60; in the request. The  endpoint calculates the points by reading the order. - If you are not using the Orders API to manage orders, you provide the purchase amount in  the request for the endpoint to calculate the points.  An application might call this endpoint to show the points that a buyer can earn with the  specific purchase.
   * @param {String} programId The &#x60;loyalty program&#x60; ID, which defines the rules for accruing points.
   * @param {module:model/CalculateLoyaltyPointsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CalculateLoyaltyPointsResponse}
   */
  this.calculateLoyaltyPoints = function(programId, body) {
    return this.calculateLoyaltyPointsWithHttpInfo(programId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * CreateLoyaltyAccount
   * Note: This endpoint is in beta.
   * Creates a loyalty account. For more information, see  [Create a loyalty account](/docs/loyalty-api/overview/#loyalty-overview-create-account).
   * @param {module:model/CreateLoyaltyAccountRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateLoyaltyAccountResponse} and HTTP response
   */
  this.createLoyaltyAccountWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createLoyaltyAccount");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CreateLoyaltyAccountResponse;

    return this.apiClient.callApi(
      '/v2/loyalty/accounts', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateLoyaltyAccount
   * Creates a loyalty account. For more information, see  [Create a loyalty account](/docs/loyalty-api/overview/#loyalty-overview-create-account).
   * @param {module:model/CreateLoyaltyAccountRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateLoyaltyAccountResponse}
   */
  this.createLoyaltyAccount = function(body) {
    return this.createLoyaltyAccountWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * CreateLoyaltyReward
   * Note: This endpoint is in beta.
   * Creates a loyalty reward. In the process, the endpoint does following:  - Uses the &#x60;reward_tier_id&#x60; in the request to determine the number of points  to lock for this reward.  - If the request includes &#x60;order_id&#x60;, it adds the reward and related discount to the order.   After a reward is created, the points are locked and  not available for the buyer to redeem another reward.  For more information, see  [Loyalty rewards](/docs/loyalty-api/overview/#loyalty-overview-loyalty-rewards).
   * @param {module:model/CreateLoyaltyRewardRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateLoyaltyRewardResponse} and HTTP response
   */
  this.createLoyaltyRewardWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createLoyaltyReward");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CreateLoyaltyRewardResponse;

    return this.apiClient.callApi(
      '/v2/loyalty/rewards', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateLoyaltyReward
   * Creates a loyalty reward. In the process, the endpoint does following:  - Uses the &#x60;reward_tier_id&#x60; in the request to determine the number of points  to lock for this reward.  - If the request includes &#x60;order_id&#x60;, it adds the reward and related discount to the order.   After a reward is created, the points are locked and  not available for the buyer to redeem another reward.  For more information, see  [Loyalty rewards](/docs/loyalty-api/overview/#loyalty-overview-loyalty-rewards).
   * @param {module:model/CreateLoyaltyRewardRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateLoyaltyRewardResponse}
   */
  this.createLoyaltyReward = function(body) {
    return this.createLoyaltyRewardWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * DeleteLoyaltyReward
   * Note: This endpoint is in beta.
   * Deletes a loyalty reward by doing the following:  - Returns the loyalty points back to the loyalty account. - If an order ID was specified when the reward was created  (see [CreateLoyaltyReward](/reference/square/loyalty-api/create-loyalty-reward)),  it updates the order by removing the reward and related  discounts.  You cannot delete a reward that has reached the terminal state (REDEEMED).  For more information, see  [Loyalty rewards](/docs/loyalty-api/overview/#loyalty-overview-loyalty-rewards).
   * @param {String} rewardId The ID of the &#x60;loyalty reward&#x60; to delete.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteLoyaltyRewardResponse} and HTTP response
   */
  this.deleteLoyaltyRewardWithHttpInfo = function(rewardId) {
    var postBody = null;

    // verify the required parameter 'rewardId' is set
    if (rewardId === undefined || rewardId === null) {
      throw new Error("Missing the required parameter 'rewardId' when calling deleteLoyaltyReward");
    }


    var pathParams = {
      'reward_id': rewardId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = DeleteLoyaltyRewardResponse;

    return this.apiClient.callApi(
      '/v2/loyalty/rewards/{reward_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * DeleteLoyaltyReward
   * Deletes a loyalty reward by doing the following:  - Returns the loyalty points back to the loyalty account. - If an order ID was specified when the reward was created  (see [CreateLoyaltyReward](/reference/square/loyalty-api/create-loyalty-reward)),  it updates the order by removing the reward and related  discounts.  You cannot delete a reward that has reached the terminal state (REDEEMED).  For more information, see  [Loyalty rewards](/docs/loyalty-api/overview/#loyalty-overview-loyalty-rewards).
   * @param {String} rewardId The ID of the &#x60;loyalty reward&#x60; to delete.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteLoyaltyRewardResponse}
   */
  this.deleteLoyaltyReward = function(rewardId) {
    return this.deleteLoyaltyRewardWithHttpInfo(rewardId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListLoyaltyPrograms
   * Note: This endpoint is in beta.
   * Returns a list of loyalty programs in the seller&#39;s account. Currently, a seller can only have one loyalty program. For more information, see  [Loyalty Overview](/docs/loyalty/overview). .
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListLoyaltyProgramsResponse} and HTTP response
   */
  this.listLoyaltyProgramsWithHttpInfo = function() {
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListLoyaltyProgramsResponse;

    return this.apiClient.callApi(
      '/v2/loyalty/programs', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListLoyaltyPrograms
   * Returns a list of loyalty programs in the seller&#39;s account. Currently, a seller can only have one loyalty program. For more information, see  [Loyalty Overview](/docs/loyalty/overview). .
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListLoyaltyProgramsResponse}
   */
  this.listLoyaltyPrograms = function() {
    return this.listLoyaltyProgramsWithHttpInfo()
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RedeemLoyaltyReward
   * Note: This endpoint is in beta.
   * Redeems a loyalty reward.  The endpoint sets the reward to the terminal state (&#x60;REDEEMED&#x60;).   If you are using your own order processing system (not using the  Orders API), you call this endpoint after the buyer paid for the  purchase.  After the reward reaches the terminal state, it cannot be deleted.  In other words, points used for the reward cannot be returned  to the account.  For more information, see  [Loyalty rewards](/docs/loyalty-api/overview/#loyalty-overview-loyalty-rewards).
   * @param {String} rewardId The ID of the &#x60;loyalty reward&#x60; to redeem.
   * @param {module:model/RedeemLoyaltyRewardRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RedeemLoyaltyRewardResponse} and HTTP response
   */
  this.redeemLoyaltyRewardWithHttpInfo = function(rewardId, body) {
    var postBody = body;

    // verify the required parameter 'rewardId' is set
    if (rewardId === undefined || rewardId === null) {
      throw new Error("Missing the required parameter 'rewardId' when calling redeemLoyaltyReward");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling redeemLoyaltyReward");
    }


    var pathParams = {
      'reward_id': rewardId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RedeemLoyaltyRewardResponse;

    return this.apiClient.callApi(
      '/v2/loyalty/rewards/{reward_id}/redeem', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RedeemLoyaltyReward
   * Redeems a loyalty reward.  The endpoint sets the reward to the terminal state (&#x60;REDEEMED&#x60;).   If you are using your own order processing system (not using the  Orders API), you call this endpoint after the buyer paid for the  purchase.  After the reward reaches the terminal state, it cannot be deleted.  In other words, points used for the reward cannot be returned  to the account.  For more information, see  [Loyalty rewards](/docs/loyalty-api/overview/#loyalty-overview-loyalty-rewards).
   * @param {String} rewardId The ID of the &#x60;loyalty reward&#x60; to redeem.
   * @param {module:model/RedeemLoyaltyRewardRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RedeemLoyaltyRewardResponse}
   */
  this.redeemLoyaltyReward = function(rewardId, body) {
    return this.redeemLoyaltyRewardWithHttpInfo(rewardId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveLoyaltyAccount
   * Note: This endpoint is in beta.
   * Retrieves a loyalty account.
   * @param {String} accountId The ID of the &#x60;loyalty account&#x60; to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveLoyaltyAccountResponse} and HTTP response
   */
  this.retrieveLoyaltyAccountWithHttpInfo = function(accountId) {
    var postBody = null;

    // verify the required parameter 'accountId' is set
    if (accountId === undefined || accountId === null) {
      throw new Error("Missing the required parameter 'accountId' when calling retrieveLoyaltyAccount");
    }


    var pathParams = {
      'account_id': accountId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RetrieveLoyaltyAccountResponse;

    return this.apiClient.callApi(
      '/v2/loyalty/accounts/{account_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveLoyaltyAccount
   * Retrieves a loyalty account.
   * @param {String} accountId The ID of the &#x60;loyalty account&#x60; to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveLoyaltyAccountResponse}
   */
  this.retrieveLoyaltyAccount = function(accountId) {
    return this.retrieveLoyaltyAccountWithHttpInfo(accountId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveLoyaltyReward
   * Note: This endpoint is in beta.
   * Retrieves a loyalty reward.
   * @param {String} rewardId The ID of the &#x60;loyalty reward&#x60; to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveLoyaltyRewardResponse} and HTTP response
   */
  this.retrieveLoyaltyRewardWithHttpInfo = function(rewardId) {
    var postBody = null;

    // verify the required parameter 'rewardId' is set
    if (rewardId === undefined || rewardId === null) {
      throw new Error("Missing the required parameter 'rewardId' when calling retrieveLoyaltyReward");
    }


    var pathParams = {
      'reward_id': rewardId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RetrieveLoyaltyRewardResponse;

    return this.apiClient.callApi(
      '/v2/loyalty/rewards/{reward_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveLoyaltyReward
   * Retrieves a loyalty reward.
   * @param {String} rewardId The ID of the &#x60;loyalty reward&#x60; to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveLoyaltyRewardResponse}
   */
  this.retrieveLoyaltyReward = function(rewardId) {
    return this.retrieveLoyaltyRewardWithHttpInfo(rewardId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * SearchLoyaltyAccounts
   * Note: This endpoint is in beta.
   * Searches for loyalty accounts.  In the current implementation, you can search for a loyalty account using the phone number associated with the account.  If no phone number is provided, all loyalty accounts are returned.
   * @param {module:model/SearchLoyaltyAccountsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchLoyaltyAccountsResponse} and HTTP response
   */
  this.searchLoyaltyAccountsWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling searchLoyaltyAccounts");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = SearchLoyaltyAccountsResponse;

    return this.apiClient.callApi(
      '/v2/loyalty/accounts/search', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * SearchLoyaltyAccounts
   * Searches for loyalty accounts.  In the current implementation, you can search for a loyalty account using the phone number associated with the account.  If no phone number is provided, all loyalty accounts are returned.
   * @param {module:model/SearchLoyaltyAccountsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchLoyaltyAccountsResponse}
   */
  this.searchLoyaltyAccounts = function(body) {
    return this.searchLoyaltyAccountsWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * SearchLoyaltyEvents
   * Note: This endpoint is in beta.
   * Searches for loyalty events.  A Square loyalty program maintains a ledger of events that occur during the lifetime of a  buyer&#39;s loyalty account. Each change in the point balance  (for example, points earned, points redeemed, and points expired) is  recorded in the ledger. Using this endpoint, you can search the ledger for events.  For more information, see  [Loyalty events](/docs/loyalty-api/overview/#loyalty-events).
   * @param {module:model/SearchLoyaltyEventsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchLoyaltyEventsResponse} and HTTP response
   */
  this.searchLoyaltyEventsWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling searchLoyaltyEvents");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = SearchLoyaltyEventsResponse;

    return this.apiClient.callApi(
      '/v2/loyalty/events/search', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * SearchLoyaltyEvents
   * Searches for loyalty events.  A Square loyalty program maintains a ledger of events that occur during the lifetime of a  buyer&#39;s loyalty account. Each change in the point balance  (for example, points earned, points redeemed, and points expired) is  recorded in the ledger. Using this endpoint, you can search the ledger for events.  For more information, see  [Loyalty events](/docs/loyalty-api/overview/#loyalty-events).
   * @param {module:model/SearchLoyaltyEventsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchLoyaltyEventsResponse}
   */
  this.searchLoyaltyEvents = function(body) {
    return this.searchLoyaltyEventsWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * SearchLoyaltyRewards
   * Note: This endpoint is in beta.
   * Searches for loyalty rewards in a loyalty account.   In the current implementation, the endpoint supports search by the reward &#x60;status&#x60;.  If you know a reward ID, use the  [RetrieveLoyaltyReward](/reference/square/loyalty-api/retrieve-loyalty-reward) endpoint.  For more information about loyalty rewards, see  [Loyalty Rewards](/docs/loyalty-api/overview/#loyalty-rewards).
   * @param {module:model/SearchLoyaltyRewardsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchLoyaltyRewardsResponse} and HTTP response
   */
  this.searchLoyaltyRewardsWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling searchLoyaltyRewards");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = SearchLoyaltyRewardsResponse;

    return this.apiClient.callApi(
      '/v2/loyalty/rewards/search', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * SearchLoyaltyRewards
   * Searches for loyalty rewards in a loyalty account.   In the current implementation, the endpoint supports search by the reward &#x60;status&#x60;.  If you know a reward ID, use the  [RetrieveLoyaltyReward](/reference/square/loyalty-api/retrieve-loyalty-reward) endpoint.  For more information about loyalty rewards, see  [Loyalty Rewards](/docs/loyalty-api/overview/#loyalty-rewards).
   * @param {module:model/SearchLoyaltyRewardsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchLoyaltyRewardsResponse}
   */
  this.searchLoyaltyRewards = function(body) {
    return this.searchLoyaltyRewardsWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
