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
    }
}