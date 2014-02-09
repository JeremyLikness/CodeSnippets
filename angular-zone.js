var main = function() {
    zone.marker = "main";
    console.log('getting injector');
    angular.module('myApp', []).run(function($rootScope, $timeout){
        zone.marker = "module run";
        $rootScope.populate = function() {
            zone.marker = "click";
            $rootScope.data = "Initializing...";
            $timeout(function() {
                zone.marker = "timeout";
                $rootScope.data = "Done";
            }, 2000);
        };
    });
    angular.bootstrap(document, ['myApp']);           
};

zone.fork(profilingZone).run(function() {
    zone.reset();
    main();
});

var externalTimeObj = {
    time: new Date()
};
setInterval(function() {
    externalTimeObj.time = new Date();
}, 1000);

