var oids = {
    "Microsoft":		"1.3.6.1.4.1.311", // dod(6) internet(1) private(4)
    "id-ms-kp-documentSigning":	"1.3.6.1.4.1.311.10.3.12" // extKeyUsage
};

function addon(jsrsasign) {
    jsrsasign.KJUR.asn1.x509.OID.registerOIDs(oids);
}

exports.addon = addon;
