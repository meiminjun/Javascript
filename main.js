(function() {
    'use strict';
    var moduleMap = {};
    window.thin = function() {
        define: function(name,dependencies,factory) {
                if(!moduleMap[name]) {
                    var module = {
                        name: name,
                        dependencies: dependencies,
                        factory: factory
                    };
                    module[name] = module;
                }
                return moduleMap[name];
        }
    };
})();