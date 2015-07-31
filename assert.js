module.exports  = {
    areEqual: function areEqual(a,b) {
        if (a !== b) {
            throw "failed assert, wanted '"+a+"', got '"+b+"'.";
        }
    }
}