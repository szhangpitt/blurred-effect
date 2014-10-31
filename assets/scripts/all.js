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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImJsdXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDgwMCk7XHJcbiAgICB9LCA0MDApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdMZXQgbWUga25vdyB3aGF0IHlvdSB0aGluay4uLiBodHRwOi8vc2hhb3BlbmcudXMgOC0pJyk7XHJcbiAgICBjb25zb2xlLmxvZygnLS0+IENsaWNrIGFueXdoZXJlIG9uIHBhZ2UgYW5kIHByZXNzIGIgdG8gdG9nZ2xlIGJsdXJyZWQgZWZmZWN0LiAnKTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYoZS5rZXlDb2RlID09PSA5OCkge1xyXG4gICAgICAgICAgICAkKCcuZnV6enktYmx1cnJlZCcpLnRvZ2dsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbn0pO1xyXG4vLyB2YXIgU0hBT1BFTkdfTElOS0lFRElOX0lEID0gJ3FDNzJmbUpHbEInO1xyXG5hbmd1bGFyLm1vZHVsZSgnYmx1cmRlbW8nLCBbJ3NoYW9wZW5nLmJsdXInXSlcclxuXHJcbi5jb250cm9sbGVyKCdBcHBDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHJvb3RTY29wZScsIFxyXG4gICAgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSkge1xyXG4gICAgXHJcblxyXG59XSk7XHJcblxyXG4iLCJhbmd1bGFyLm1vZHVsZSgnc2hhb3BlbmcuYmx1cicsIFtdKVxyXG5cclxuLmRpcmVjdGl2ZSgnZnV6enknLCBbZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIGZ0b3A6ICdAJyxcclxuICAgICAgICAgICAgZmxlZnQ6ICdAJyxcclxuICAgICAgICAgICAgZndpZHRoOiAnQCcsXHJcbiAgICAgICAgICAgIGZoZWlnaHQ6ICdAJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICB2YXIgaW1nV2lkdGggPSBlbGVtZW50LmZpbmQoJ2ltZycpLndpZHRoKCksIFxyXG4gICAgICAgICAgICBpbWdIZWlnaHQgPSBlbGVtZW50LmZpbmQoJ2ltZycpLmhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRvcCA9IHBhcnNlSW50KHNjb3BlLmZ0b3ApIHx8IDAsXHJcbiAgICAgICAgICAgIGxlZnQgPSBwYXJzZUludChzY29wZS5mbGVmdCkgfHwgMCxcclxuICAgICAgICAgICAgd2lkdGggPSBwYXJzZUludChzY29wZS5md2lkdGgpIHx8IGltZ0hlaWdodCxcclxuICAgICAgICAgICAgaGVpZ2h0ID0gcGFyc2VJbnQoc2NvcGUuZmhlaWdodCkgfHwgaW1nSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuZmluZCgnLmZ1enp5LWJsdXJyZWQnKS5jc3MoeydjbGlwJzogJ3JlY3QoJyArIHRvcCArICdweCwgJyArIChsZWZ0ICsgd2lkdGgpICsgJ3B4LCAnICsgKHRvcCArIGhlaWdodCkgKyAncHgsICcgKyBsZWZ0ICsgJ3B4KSd9KTtcclxuICAgICAgICAgICAgZWxlbWVudC5maW5kKCcuZnV6enktcGFuZWwnKS5jc3Moeyd0b3AnOiB0b3AgKyAncHgnLCAnbGVmdCc6IGxlZnQgKyAncHgnLCAnd2lkdGgnOiB3aWR0aCArICdweCcsICdoZWlnaHQnOiBoZWlnaHQgKyAncHgnfSk7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfTtcclxufV0pXHJcblxyXG4uZGlyZWN0aXZlKCdmdXp6eUZsdWlkJywgWyckd2luZG93JywgZnVuY3Rpb24gKCR3aW5kb3cpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICBwYm90dG9tOiAnQCcsXHJcbiAgICAgICAgICAgIHB0b3A6ICdAJyxcclxuICAgICAgICAgICAgcGxlZnQ6ICdAJyxcclxuICAgICAgICAgICAgcHdpZHRoOiAnQCcsXHJcbiAgICAgICAgICAgIHBoZWlnaHQ6ICdAJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfd2luZG93ID0gYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpO1xyXG4gICAgICAgICAgICB1cGRhdGVFbGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICBfd2luZG93Lm9uKCdyZXNpemUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplICcsIGVsZW1lbnQuaGVpZ2h0KCkpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlRWxlbWVudCgpOyAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVFbGVtZW50KCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGltZ1dpZHRoID0gZWxlbWVudC5maW5kKCdpbWcnKS53aWR0aCgpLCBcclxuICAgICAgICAgICAgICAgIGltZ0hlaWdodCA9IGVsZW1lbnQuZmluZCgnaW1nJykuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ltZyBzaXplOiAnLCBpbWdXaWR0aCwgaW1nSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9wID0gKHBhcnNlRmxvYXQoc2NvcGUucHRvcCkgfHwgMCApICogaW1nSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgbGVmdCA9IChwYXJzZUZsb2F0KHNjb3BlLnBsZWZ0KSB8fCAwKSAqIGltZ1dpZHRoLFxyXG4gICAgICAgICAgICAgICAgd2lkdGggPSAocGFyc2VGbG9hdChzY29wZS5wd2lkdGgpIHx8IDEpICogaW1nV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSAocGFyc2VGbG9hdChzY29wZS5waGVpZ2h0KSB8fCAxKSAqIGltZ0hlaWdodCwgXHJcbiAgICAgICAgICAgICAgICBjbGlwSGVpZ2h0ID0gaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgY2xpcFdpZHRoID0gd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBjbGlwVG9wID0gdG9wO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtYXhIZWlnaHQsIG1pbkhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzY29wZS5wYm90dG9tICYmICFzY29wZS5wdG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gKHBhcnNlRmxvYXQoc2NvcGUucGJvdHRvbSkgfHwgMCApICogaW1nSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoKCcnICsgc2NvcGUucGhlaWdodCkuaW5kZXhPZignKicpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IHBhcnNlRmxvYXQoaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSAnYXV0byc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKCgnJyArIHNjb3BlLnBoZWlnaHQpLmluZGV4T2YoJysnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQgPSBwYXJzZUZsb2F0KGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZmluZCgnLmZ1enp5LXBhbmVsJylcclxuICAgICAgICAgICAgICAgIC5jc3Moeyd0b3AnOiBzY29wZS5wdG9wPyB0b3AgKyAncHgnIDogJ2F1dG8nLCBcclxuICAgICAgICAgICAgICAgICAgJ2JvdHRvbSc6IHNjb3BlLnBib3R0b20/IGJvdHRvbSArICdweCcgOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICdsZWZ0JzogbGVmdCArICdweCcsIFxyXG4gICAgICAgICAgICAgICAgICAnd2lkdGgnOiB3aWR0aCArICdweCcsIFxyXG4gICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgICAgJ21heC1oZWlnaHQnOiBtYXhIZWlnaHQgKyAncHgnLFxyXG4gICAgICAgICAgICAgICAgICAnbWluLWhlaWdodCc6IG1pbkhlaWdodCArICdweCdcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZigoJycgKyBzY29wZS5waGVpZ2h0KS5pbmRleE9mKCcqJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcEhlaWdodCA9IGVsZW1lbnQuZmluZCgnLmZ1enp5LXBhbmVsJykuaGVpZ2h0KCk7ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKCgnJyArIHNjb3BlLnBoZWlnaHQpLmluZGV4T2YoJysnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQgPSBwYXJzZUZsb2F0KGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcEhlaWdodCA9IGVsZW1lbnQuZmluZCgnLmZ1enp5LXBhbmVsJykuaGVpZ2h0KCk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNjb3BlLnBib3R0b20gJiYgIXNjb3BlLnB0b3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGlwVG9wID0gaW1nSGVpZ2h0IC0gY2xpcEhlaWdodCAtIGJvdHRvbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NsaXA6ICcsIHRvcCwgbGVmdCwgd2lkdGgsIGNsaXBIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZmluZCgnLmZ1enp5LWJsdXJyZWQnKS5jc3MoeydjbGlwJzogJ3JlY3QoJyArIGNsaXBUb3AgKyAncHgsICcgKyAobGVmdCArIGNsaXBXaWR0aCkgKyAncHgsICcgKyAoY2xpcFRvcCArIGNsaXBIZWlnaHQpICsgJ3B4LCAnICsgbGVmdCArICdweCknfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICBcclxuICAgIH07XHJcbn1dKVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9