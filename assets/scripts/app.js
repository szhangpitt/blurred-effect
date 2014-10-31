$(document).ready(function(){
    setTimeout(function(){
        $('html,body').animate({scrollTop: 0}, 800);
    }, 400);

    console.log('Let me know what you think... http://shaopeng.us 8-)');
    console.log('--> Click anywhere on page and press b to toggle blurred effect. ');

    $(document).on('keypress', function(e) {
        if(e.keyCode === 98) {
            $('.fuzzy-blurred').toggle();
        }
    });
    
});
// var SHAOPENG_LINKIEDIN_ID = 'qC72fmJGlB';
angular.module('blurdemo', ['shaopeng.blur'])

.controller('AppController', ['$scope', '$rootScope', 
    function ($scope, $rootScope) {
    

}]);

