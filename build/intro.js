(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function () {
            return factory();
        });
    } else {
        // Browser globals
        root.MY_PROJECT_GLOBAL = factory();
    }
}(this, function () {