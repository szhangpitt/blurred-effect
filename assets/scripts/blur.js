angular.module('shaopeng.blur', [])

.directive('fuzzy', [function () {
    return {
        restrict: 'A',
        scope: {
            ftop: '@',
            fleft: '@',
            fwidth: '@',
            fheight: '@'
        },
        link: function (scope, element, attrs) {
            var imgWidth = element.find('img').width(), 
            imgHeight = element.find('img').height();

            var top = parseInt(scope.ftop) || 0,
            left = parseInt(scope.fleft) || 0,
            width = parseInt(scope.fwidth) || imgHeight,
            height = parseInt(scope.fheight) || imgHeight;

            // console.log(top, left, width, height);

            element.find('.fuzzy-blurred').css({'clip': 'rect(' + top + 'px, ' + (left + width) + 'px, ' + (top + height) + 'px, ' + left + 'px)'});
            element.find('.fuzzy-panel').css({'top': top + 'px', 'left': left + 'px', 'width': width + 'px', 'height': height + 'px'});
        }   
    };
}])

.directive('fuzzyFluid', ['$window', function ($window) {
    return {
        restrict: 'A',
        scope: {
            pbottom: '@',
            ptop: '@',
            pleft: '@',
            pwidth: '@',
            pheight: '@'
        },
        link: function (scope, element, attrs) {


            var _window = angular.element($window);
            updateElement();

            _window.on('resize', function(e) {
                // console.log('resize ', element.height());
                updateElement();               

            });

            function updateElement() {
                var imgWidth = element.find('img').width(), 
                imgHeight = element.find('img').height();

                // console.log('img size: ', imgWidth, imgHeight);

                var top = (parseFloat(scope.ptop) || 0 ) * imgHeight,
                left = (parseFloat(scope.pleft) || 0) * imgWidth,
                width = (parseFloat(scope.pwidth) || 1) * imgWidth,
                height = (parseFloat(scope.pheight) || 1) * imgHeight, 
                clipHeight = height,
                clipWidth = width,
                clipTop = top;

                var maxHeight, minHeight;

                if(scope.pbottom && !scope.ptop) {
                    bottom = (parseFloat(scope.pbottom) || 0 ) * imgHeight;
                }

                // console.log(top, left, width, height);

                if(('' + scope.pheight).indexOf('*') !== -1) {
                    maxHeight = parseFloat(height);
                    height = 'auto';
                }
                else if(('' + scope.pheight).indexOf('+') !== -1) {
                    minHeight = parseFloat(height);
                    height = 'auto';
                }

                element.find('.fuzzy-panel')
                .css({'top': scope.ptop? top + 'px' : 'auto', 
                  'bottom': scope.pbottom? bottom + 'px' : 'auto',
                  'left': left + 'px', 
                  'width': width + 'px', 
                  'height': height + 'px',
                  'max-height': maxHeight + 'px',
                  'min-height': minHeight + 'px'
              });
                


                if(('' + scope.pheight).indexOf('*') !== -1) {
                    clipHeight = element.find('.fuzzy-panel').height();                     
                }
                else if(('' + scope.pheight).indexOf('+') !== -1) {
                    minHeight = parseFloat(height);
                    clipHeight = element.find('.fuzzy-panel').height(); 
                }

                if(scope.pbottom && !scope.ptop) {
                    clipTop = imgHeight - clipHeight - bottom;
                }
                
                // console.log('clip: ', top, left, width, clipHeight);

                element.find('.fuzzy-blurred').css({'clip': 'rect(' + clipTop + 'px, ' + (left + clipWidth) + 'px, ' + (clipTop + clipHeight) + 'px, ' + left + 'px)'});


            }
        }   
    };
}])

