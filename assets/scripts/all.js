$(document).ready(function(){
    setTimeout(function(){
        $('html,body').animate({scrollTop: 0}, 800);
    }, 400);
    
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImJsdXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgODAwKTtcclxuICAgIH0sIDQwMCk7XHJcbiAgICBcclxufSk7XHJcbi8vIHZhciBTSEFPUEVOR19MSU5LSUVESU5fSUQgPSAncUM3MmZtSkdsQic7XHJcbmFuZ3VsYXIubW9kdWxlKCdibHVyZGVtbycsIFsnc2hhb3BlbmcuYmx1ciddKVxyXG5cclxuLmNvbnRyb2xsZXIoJ0FwcENvbnRyb2xsZXInLCBbJyRzY29wZScsICckcm9vdFNjb3BlJywgXHJcbiAgICBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBcclxuXHJcbn1dKTtcclxuXHJcbiIsImFuZ3VsYXIubW9kdWxlKCdzaGFvcGVuZy5ibHVyJywgW10pXHJcblxyXG4uZGlyZWN0aXZlKCdmdXp6eScsIFtmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgZnRvcDogJ0AnLFxyXG4gICAgICAgICAgICBmbGVmdDogJ0AnLFxyXG4gICAgICAgICAgICBmd2lkdGg6ICdAJyxcclxuICAgICAgICAgICAgZmhlaWdodDogJ0AnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIHZhciBpbWdXaWR0aCA9IGVsZW1lbnQuZmluZCgnaW1nJykud2lkdGgoKSwgXHJcbiAgICAgICAgICAgIGltZ0hlaWdodCA9IGVsZW1lbnQuZmluZCgnaW1nJykuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdG9wID0gcGFyc2VJbnQoc2NvcGUuZnRvcCkgfHwgMCxcclxuICAgICAgICAgICAgbGVmdCA9IHBhcnNlSW50KHNjb3BlLmZsZWZ0KSB8fCAwLFxyXG4gICAgICAgICAgICB3aWR0aCA9IHBhcnNlSW50KHNjb3BlLmZ3aWR0aCkgfHwgaW1nSGVpZ2h0LFxyXG4gICAgICAgICAgICBoZWlnaHQgPSBwYXJzZUludChzY29wZS5maGVpZ2h0KSB8fCBpbWdIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5maW5kKCcuZnV6enktYmx1cnJlZCcpLmNzcyh7J2NsaXAnOiAncmVjdCgnICsgdG9wICsgJ3B4LCAnICsgKGxlZnQgKyB3aWR0aCkgKyAncHgsICcgKyAodG9wICsgaGVpZ2h0KSArICdweCwgJyArIGxlZnQgKyAncHgpJ30pO1xyXG4gICAgICAgICAgICBlbGVtZW50LmZpbmQoJy5mdXp6eS1wYW5lbCcpLmNzcyh7J3RvcCc6IHRvcCArICdweCcsICdsZWZ0JzogbGVmdCArICdweCcsICd3aWR0aCc6IHdpZHRoICsgJ3B4JywgJ2hlaWdodCc6IGhlaWdodCArICdweCd9KTtcclxuICAgICAgICB9ICAgXHJcbiAgICB9O1xyXG59XSlcclxuXHJcbi5kaXJlY3RpdmUoJ2Z1enp5Rmx1aWQnLCBbJyR3aW5kb3cnLCBmdW5jdGlvbiAoJHdpbmRvdykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIHBib3R0b206ICdAJyxcclxuICAgICAgICAgICAgcHRvcDogJ0AnLFxyXG4gICAgICAgICAgICBwbGVmdDogJ0AnLFxyXG4gICAgICAgICAgICBwd2lkdGg6ICdAJyxcclxuICAgICAgICAgICAgcGhlaWdodDogJ0AnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF93aW5kb3cgPSBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdyk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIF93aW5kb3cub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemUgJywgZWxlbWVudC5oZWlnaHQoKSk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVFbGVtZW50KCk7ICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nV2lkdGggPSBlbGVtZW50LmZpbmQoJ2ltZycpLndpZHRoKCksIFxyXG4gICAgICAgICAgICAgICAgaW1nSGVpZ2h0ID0gZWxlbWVudC5maW5kKCdpbWcnKS5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW1nIHNpemU6ICcsIGltZ1dpZHRoLCBpbWdIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0b3AgPSAocGFyc2VGbG9hdChzY29wZS5wdG9wKSB8fCAwICkgKiBpbWdIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBsZWZ0ID0gKHBhcnNlRmxvYXQoc2NvcGUucGxlZnQpIHx8IDApICogaW1nV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IChwYXJzZUZsb2F0KHNjb3BlLnB3aWR0aCkgfHwgMSkgKiBpbWdXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IChwYXJzZUZsb2F0KHNjb3BlLnBoZWlnaHQpIHx8IDEpICogaW1nSGVpZ2h0LCBcclxuICAgICAgICAgICAgICAgIGNsaXBIZWlnaHQgPSBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBjbGlwV2lkdGggPSB3aWR0aCxcclxuICAgICAgICAgICAgICAgIGNsaXBUb3AgPSB0b3A7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1heEhlaWdodCwgbWluSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNjb3BlLnBib3R0b20gJiYgIXNjb3BlLnB0b3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b20gPSAocGFyc2VGbG9hdChzY29wZS5wYm90dG9tKSB8fCAwICkgKiBpbWdIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZigoJycgKyBzY29wZS5waGVpZ2h0KS5pbmRleE9mKCcqJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0ID0gcGFyc2VGbG9hdChoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9ICdhdXRvJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoKCcnICsgc2NvcGUucGhlaWdodCkuaW5kZXhPZignKycpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodCA9IHBhcnNlRmxvYXQoaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSAnYXV0byc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5maW5kKCcuZnV6enktcGFuZWwnKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7J3RvcCc6IHNjb3BlLnB0b3A/IHRvcCArICdweCcgOiAnYXV0bycsIFxyXG4gICAgICAgICAgICAgICAgICAnYm90dG9tJzogc2NvcGUucGJvdHRvbT8gYm90dG9tICsgJ3B4JyA6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgJ2xlZnQnOiBsZWZ0ICsgJ3B4JywgXHJcbiAgICAgICAgICAgICAgICAgICd3aWR0aCc6IHdpZHRoICsgJ3B4JywgXHJcbiAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiBoZWlnaHQgKyAncHgnLFxyXG4gICAgICAgICAgICAgICAgICAnbWF4LWhlaWdodCc6IG1heEhlaWdodCArICdweCcsXHJcbiAgICAgICAgICAgICAgICAgICdtaW4taGVpZ2h0JzogbWluSGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCgnJyArIHNjb3BlLnBoZWlnaHQpLmluZGV4T2YoJyonKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGlwSGVpZ2h0ID0gZWxlbWVudC5maW5kKCcuZnV6enktcGFuZWwnKS5oZWlnaHQoKTsgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoKCcnICsgc2NvcGUucGhlaWdodCkuaW5kZXhPZignKycpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodCA9IHBhcnNlRmxvYXQoaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBjbGlwSGVpZ2h0ID0gZWxlbWVudC5maW5kKCcuZnV6enktcGFuZWwnKS5oZWlnaHQoKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc2NvcGUucGJvdHRvbSAmJiAhc2NvcGUucHRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXBUb3AgPSBpbWdIZWlnaHQgLSBjbGlwSGVpZ2h0IC0gYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2xpcDogJywgdG9wLCBsZWZ0LCB3aWR0aCwgY2xpcEhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5maW5kKCcuZnV6enktYmx1cnJlZCcpLmNzcyh7J2NsaXAnOiAncmVjdCgnICsgY2xpcFRvcCArICdweCwgJyArIChsZWZ0ICsgY2xpcFdpZHRoKSArICdweCwgJyArIChjbGlwVG9wICsgY2xpcEhlaWdodCkgKyAncHgsICcgKyBsZWZ0ICsgJ3B4KSd9KTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfTtcclxufV0pXHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=