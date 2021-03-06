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
 * The TeamMemberAssignedLocations model module.
 * @module model/TeamMemberAssignedLocations
 */

/**
 * Constructs a new <code>TeamMemberAssignedLocations</code>.
 * An object that represents a team member&#39;s assignment to locations.
 * @alias module:model/TeamMemberAssignedLocations
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>TeamMemberAssignedLocations</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/TeamMemberAssignedLocations} obj Optional instance to populate.
 * @return {module:model/TeamMemberAssignedLocations} The populated <code>TeamMemberAssignedLocations</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('assignment_type')) {
      obj['assignment_type'] = ApiClient.convertToType(data['assignment_type'], 'String');
    }
      if (data.hasOwnProperty('location_ids')) {
      obj['location_ids'] = ApiClient.convertToType(data['location_ids'], ['String']);
    }
    }
  return obj;
}

/**
 * The current assignment type of the team member. See [TeamMemberAssignedLocationsAssignmentType](#type-teammemberassignedlocationsassignmenttype) for possible values
 * @member {String} assignment_type
 */
exports.prototype['assignment_type'] = undefined;
/**
 * The locations that the team member is assigned to.
 * @member {Array.<String>} location_ids
 */
exports.prototype['location_ids'] = undefined;



module.exports = exports;



