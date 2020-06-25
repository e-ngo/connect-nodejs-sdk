const SquareConnect = require('../../src/index');
const {
  accounts,
  expect,
  handleUnexpectedError
} = require('../support/setup');

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

describe('LoyaltyApi', function() {
  beforeEach(function() {
    const defaultClient = SquareConnect.ApiClient.instance;
    const oauth2 = defaultClient.authentications['oauth2'];
    // Some APIs do not work with sandbox. Replace `sandbox` with `production` for those test suites.
    oauth2.accessToken = accounts.sandbox.access_token;
    this.api  = new SquareConnect.LoyaltyApi();
  });

  afterEach(function(){
  });

  describe('LoyaltyApi', function() {
    describe('accumulateLoyaltyPoints', function() {
      it('should call accumulateLoyaltyPoints successfully', function(done) {
        //uncomment below and update the code to test accumulateLoyaltyPoints
        //instance.accumulateLoyaltyPoints(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adjustLoyaltyPoints', function() {
      it('should call adjustLoyaltyPoints successfully', function(done) {
        //uncomment below and update the code to test adjustLoyaltyPoints
        //instance.adjustLoyaltyPoints(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('calculateLoyaltyPoints', function() {
      it('should call calculateLoyaltyPoints successfully', function(done) {
        //uncomment below and update the code to test calculateLoyaltyPoints
        //instance.calculateLoyaltyPoints(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createLoyaltyAccount', function() {
      it('should call createLoyaltyAccount successfully', function(done) {
        //uncomment below and update the code to test createLoyaltyAccount
        //instance.createLoyaltyAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createLoyaltyReward', function() {
      it('should call createLoyaltyReward successfully', function(done) {
        //uncomment below and update the code to test createLoyaltyReward
        //instance.createLoyaltyReward(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLoyaltyReward', function() {
      it('should call deleteLoyaltyReward successfully', function(done) {
        //uncomment below and update the code to test deleteLoyaltyReward
        //instance.deleteLoyaltyReward(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listLoyaltyPrograms', function() {
      it('should call listLoyaltyPrograms successfully', function(done) {
        //uncomment below and update the code to test listLoyaltyPrograms
        //instance.listLoyaltyPrograms(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('redeemLoyaltyReward', function() {
      it('should call redeemLoyaltyReward successfully', function(done) {
        //uncomment below and update the code to test redeemLoyaltyReward
        //instance.redeemLoyaltyReward(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveLoyaltyAccount', function() {
      it('should call retrieveLoyaltyAccount successfully', function(done) {
        //uncomment below and update the code to test retrieveLoyaltyAccount
        //instance.retrieveLoyaltyAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveLoyaltyReward', function() {
      it('should call retrieveLoyaltyReward successfully', function(done) {
        //uncomment below and update the code to test retrieveLoyaltyReward
        //instance.retrieveLoyaltyReward(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchLoyaltyAccounts', function() {
      it('should call searchLoyaltyAccounts successfully', function(done) {
        //uncomment below and update the code to test searchLoyaltyAccounts
        //instance.searchLoyaltyAccounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchLoyaltyEvents', function() {
      it('should call searchLoyaltyEvents successfully', function(done) {
        //uncomment below and update the code to test searchLoyaltyEvents
        //instance.searchLoyaltyEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchLoyaltyRewards', function() {
      it('should call searchLoyaltyRewards successfully', function(done) {
        //uncomment below and update the code to test searchLoyaltyRewards
        //instance.searchLoyaltyRewards(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});