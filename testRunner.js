//test runner
module.exports = {
    run: function(tests) {
        for(var i in tests) {
            if (tests.hasOwnProperty(i)) {
                var fixture = tests[i];
                for(var t in fixture){
                    if (fixture.hasOwnProperty(t)) {
                        try {
                            var res = fixture[t]();
                            if (res === undefined) {
                                console.log(i + ' ' + t + ' ...ok');
                            } else {
                                console.log(i + ' ' + t + ': ' + res + ' ...ok');
                            }
                        } catch (ex) {
                            console.log(i + ' ' + t + ' ...failed!');
                            console.log(ex);
                        }
                    }
                }
            }
        }
    },
    areEqual: function (expected,actual) {
        if (expected !== actual) {
            throw (new Error("failed assert, wanted '"+expected+"', got '"+actual+"'."));
        }
    },
    fail: function(reason) {
        throw (new Error("failed assert, "+reason));
    },
    throws: function (action) {
        try {
            action();
        } catch(ex) {
            return null;
        }
        throw (new Error("failed assert, exception expected."));
    }
};