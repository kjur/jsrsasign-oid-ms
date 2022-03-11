var assert = require('assert');
var rs = require("jsrsasign");
require('../lib/index.js').addon(rs);

var oids = {
    "Microsoft":		"1.3.6.1.4.1.311", // dod(6) internet(1) private(4)
    "id-ms-kp-documentSigning":	"1.3.6.1.4.1.311.10.3.12" // extKeyUsage
};

describe("Microsoft OIDs", function() {
    describe("KJUR.asn1.x509.OID", function() {
	var OID = rs.KJUR.asn1.x509.OID;
	var name2oid = OID.name2oid;
	var equal = assert.equal;

        it('existing sha256', function() {
            equal("2.16.840.1.101.3.4.2.1", name2oid("sha256"));
        });

	for (var name in oids) {
	    it("name2oid " + name,
	       function() {equal(oids[name], OID.name2oid(name));});
	}

	for (var name in oids) {
	    it("oid2name " + name,
	       function() {equal(name, OID.oid2name(oids[name]));});
	}
    });
});
