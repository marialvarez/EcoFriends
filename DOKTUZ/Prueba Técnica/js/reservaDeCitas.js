// Init app
var app = angular.module('app', []);

// Main controller
app.controller('mainController', function ($scope) {
    $scope.attributes = {};
    $scope.methods = {};
    $scope.show=false;
    
    // Attributes
    $scope.attributes.currentDate = null;
    $scope.attributes.currentDatesList = [];

    // Methods
    $scope.methods.init = function () {
        $scope.attributes.currentDate = new Date();
        $scope.attributes.currentDatesList = $scope.methods.generateDays(
            $scope.attributes.currentDate.getTime(),
            4
        );
    }
    
    $scope.methods.generateDays = function (dateTime, limit) {
        var d = new Date(dateTime);
        var datesList = [];
        for (var i=0; i<limit; i++) {
            var tempDateTime = d.getTime() + i*24*3600*1000;
            var tempDate = new Date(tempDateTime);
            var weekDays = [
                'Sun', 'Mon', 'Tue', 'Wed',
                'Thu', 'Fri', 'Sat'
            ]
            var months = [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ]
            datesList.push({
                date: tempDate,
                dateDay: weekDays[tempDate.getDay()],
                prettyDate: months[tempDate.getMonth()] + ' ' + tempDate.getDate()
            });
        }
        return datesList;
    }
    
    $scope.methods.loadNextDays = function () {
        var nextDaysCode = $scope.attributes.currentDate.getTime()+4*24*3600*1000;
        $scope.attributes.currentDate = new Date(nextDaysCode);
        $scope.attributes.currentDatesList = $scope.methods.generateDays(
            $scope.attributes.currentDate.getTime(),
            4
        );
    }
    
    $scope.methods.loadPrevDays = function () {
        var nextDaysCode = $scope.attributes.currentDate.getTime()-4*24*3600*1000;
        $scope.attributes.currentDate = new Date(nextDaysCode);
        $scope.attributes.currentDatesList = $scope.methods.generateDays(
            $scope.attributes.currentDate.getTime(),
            4
        );
    }


    // Init
    $scope.methods.init();

});

//when page is ready
app.controller('readyController', [function() {
    angular.element(document).ready(function () {
        $(".js-example-basic-single").select2();
    });
}]);