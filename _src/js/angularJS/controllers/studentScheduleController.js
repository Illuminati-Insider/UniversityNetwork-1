app.controller('studentScheduleController', ['$scope', '$mdPanel', '$mdDialog', 'api', 'flib', 'storage', '$timeout', function($scope, $mdPanel, $mdDialog, api, flib, storage, $timeout){
    $scope.selectedDate = new Date();
    
    function updateFn(){
        if (!storage.program || !storage.rules){
            $timeout(updateFn, 50);
            return;
        }
        $scope.rules = storage.rules;
        $scope.times = ['08:30-10:00', '10:15-11:45', '12:00-13:30', '14:00-15:30'];
        var weekStart = new Date($scope.selectedDate.valueOf());
        switch(weekStart.getDay()){
            case 6:
                weekStart.setDate(weekStart.getDate() + 2);
                break;
            case 0:
                weekStart.setDate(weekStart.getDate() + 1);
                break;
        }
        weekStart.setDate(weekStart.getDate() - weekStart.getDay() + 1);
        weekStart.setHours(0);
        var weekEnd = new Date(weekStart.valueOf());
        weekEnd.setDate(weekEnd.getDate() + 7);

        var classes = [[],[],[],[],[]];

        for(i=0; i< $scope.rules.length; ++i){
            var rule = $scope.rules[i];
            var validRule = true;
            for(k=0;k<storage.program.length;++k){
                if (storage.program[k].subjectID == rule.subjectID){
                    // Subgroup not set for user
                    if (!storage.program[k].subgroup || !rule.subgroup) break;
                    // Subgroup differs for user
                    if (storage.program[k].subgroup != rule.subgroup) {
                        validRule = false;
                    }
                    break;
                }
            }
            if (!validRule) continue;
            for(k=0; k < rule.classes.length; ++k){
                var cl = rule.classes[k];
                if (typeof(cl.startTimestamp) == 'string') {
                    cl.startTimestamp = flib.timestampToDate(cl.startTimestamp);
                }
                var classTime = cl.startTimestamp;
                if (classTime >= weekStart && classTime < weekEnd){
                    var order = classTime.getHours() / 2 - 4;
                    var wday = classTime.getDay() - 1;

                    classes[wday][order] = rule;
                    classes[wday][order].id = cl.id;
                }
            }
            //rule.classes = null;
        }
        var dates = [];
        var startTimestamp = weekStart.valueOf();
        for(i=0;i<5;++i){
            dates.push(new Date(startTimestamp));
            // +1 day worth of ms
            startTimestamp += 1000 * 3600 * 24;
        }
        $scope.dates = dates;
        $scope.activeDay = $scope.selectedDate.getDay() - 1;
        $scope.classes = classes;
        waitFn();
    };
    $scope.getProfName = function(day, order){
        if (!$scope.classes) return;
        if (!$scope.classes[day][order] || $scope.classes[day][order].profs.length == 0) return;
        var profs = $scope.classes[day][order].profs;
        return profs[0].surname + ' ' + profs[0].name[0] + '.' + profs[0].lastname[0] + '.';
    };
    
    $scope.getClassType = function(rule){
        if (!rule) return;
        switch(rule.classType){
            case 'lab': return 'лб';
            case 'lection': return 'лк';
            case 'activity': return 'у';
        }
    };
    
    var waitFn = function(){
        if (!$scope.$$phase){
            $scope.week = storage.getWeek($scope.selectedDate);
            $scope.semester = storage.semester;
            return;
        }
        $timeout(waitFn, 50);
    };
    
    $scope.$watch('selectedDate', function(oldValue, newValue){
        if (!newValue || newValue == oldValue) return;
        updateFn();
    });
    
    $timeout(updateFn, 50);
    
    $scope.disabledWeekendsPredicate = function(date){
        var day = date.getDay();
        return day != 0 && day != 6;
    };
    
    $scope.checkSubgroup = function(rule){
        if (!rule) return false;
        if (!rule.subgroup) return true;
        if (!storage.program) return true;
        for(i=0;i<storage.program.length;++i){
            if (storage.program[i].subjectID == rule.subjectID){
                if (storage.program[i].subgroup == rule.subgroup) return true;
                return false;
            }
        }
        return false;
    }
    
    // Header color
    $scope.colorHeader = {
        red: 48, green: 172, blue: 149,
        title: 'Фон заголовка'
    };
    $scope.colorActiveHeader = {
        red: 21, green: 82, blue: 77,
        title: 'Фон заголовка (активный)'
    };
    $scope.colorTimeOdd = {
        red: 97, green: 121, blue: 125,
        title: '1й столбец (нечет)'
    };
    $scope.colorTimeEven = {
        red: 0, green: 137, blue: 114,
        title: '1й столбец (чет)'
    };
    $scope.colorOdd = {
        red: 201, green: 201, blue: 128,
        title: 'Нечетные строки'
    };
    $scope.colorEven = {
        red: 130, green: 172, blue: 123,
        title: 'Четные строки'
    };
    $scope.colorOddActive = {
        red: 120, green: 120, blue: 78,
        title: 'Нечетные строки (активный)'
    };
    $scope.colorEvenActive = {
        red: 79, green: 119, blue: 82,
        title: 'Четные строки (активный)'
    };
    var buildColor = function(color){
        return 'rgb(' + color.red +',' + color.green +',' + color.blue +')';
    }
    $scope.getRowStyle = function(day, order){
        if (order % 2 != 0){
            return 'background: ' + (($scope.activeDay == day) ? buildColor($scope.colorEvenActive) : buildColor($scope.colorEven));
        }
        return 'background: ' + (($scope.activeDay == day) ? buildColor($scope.colorOddActive) : buildColor($scope.colorOdd));
    };
    
    $scope.getHeaderStyle = function(d){
        return ($scope.activeDay == (d.getDay() - 1)) ? ('background: rgb(' + $scope.colorActiveHeader.red +',' + $scope.colorActiveHeader.green +',' + $scope.colorActiveHeader.blue +')') : '';
    }
    var updateOddFn = function(){
        try{
            var color = $scope.colorTimeOdd;
            var background = 'rgb(' + color.red +',' + color.green +',' + color.blue +')';
            $('.schedule-color:nth-child(odd) > div:first-child').css('background', background);
        }catch(err){}
    };
    var updateEvenFn = function(){
        try{
            var color = $scope.colorTimeEven;
            var background = 'rgb(' + color.red +',' + color.green +',' + color.blue +')';
            $('.schedule-color:nth-child(even) > div:first-child').css('background', background);
        }catch(err){}
    };
    $timeout(function(){
        updateOddFn();
        updateEvenFn();
    }, 500);
    
    $scope.$watch('colorTimeOdd.red', updateOddFn);
    $scope.$watch('colorTimeOdd.green', updateOddFn);
    $scope.$watch('colorTimeOdd.blue', updateOddFn);
    
    $scope.$watch('colorTimeEven.red', updateEvenFn);
    $scope.$watch('colorTimeEven.green', updateEvenFn);
    $scope.$watch('colorTimeEven.blue', updateEvenFn);
    
    $scope.openSelection = function($event, cl){
        var position = $mdPanel.newPanelPosition()
            .relativeTo($event.target.closest('button'))
            .addPanelPosition($mdPanel.xPosition.ALIGN_START, $mdPanel.yPosition.BELOW);
        
        var mdPanelRef = $mdPanel.create({
            attachTo: angular.element(document.body),
            controller: 'asgSelectionController',
            controllerAs: 'ctrl',
            template: 
                '<md-list md-colors="{background: \'background\'}">' +
                '   <md-list-item layout-align="center center" ng-repeat="option in ctrl.options" ng-click="close(option)">' +
                '       <p>{{ option }}</p>' + 
                '   </md-list-item>' + 
                '</md-list>'
            ,
            clickOutsideToClose: true,
            escapeToClose: true,
            locals: {
                'options' : function(c){
                    switch(c.classType){
                        case 'lection': return false;
                        case 'lab': return ['Лабораторная'];
                        case 'activity': return ['Контрольная', 'Тест', 'Семинар'];
                    }
                }(cl)
            },
            position: position
        });
        //$scope.selected = mdPanelRef.selected;
        mdPanelRef.open();
        $scope.panel = mdPanelRef;
        $scope.class = cl;
    };
    $scope.$watch('panel.selected', function(){
        if (!$scope.panel) return;
        //alert($scope.panel.selected);
    });
    
    $scope.canHaveAsg = function(cl){
        if (!cl) return false;
        return cl.classType != 'lection';
    };
    
    // Class menu
    $scope.onClassClick = function(cl, event){
        $mdDialog.show({
            controller: 'classDialogController',
            templateUrl: 'ui.router/templates/class_dialog.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            locals: {
                classObj: cl
            }
        }).then();
    };
}]);
app.controller('asgSelectionController', ['$scope', 'mdPanelRef', function($scope, mdPanelRef){
    $scope.close = function(val){
        mdPanelRef.selected = val;
        mdPanelRef.close();
    };
}]);
app.controller('classDialogController', ['$scope', '$mdDialog', 'classObj', 'api', '$timeout', function($scope, $mdDialog, cl, api, $timeout){
    $scope.classObj = cl;
    $scope.labs = [];
    $scope.newAsg = {};
    
    $scope.close = function(){
        $mdDialog.hide();
    };
    
    api.get('lab_mod', 'class_list', {
        classID: $scope.classObj.id
    }).then(function(response){
        console.debug(response);
        $scope.labs = response.data;
        for(i=0;i<$scope.labs.length;++i){
            $scope.labs[i].completed = $scope.labs[i].completed == '1';
        }
        $timeout($scope.fixTabs, 100);
    }, function(response){
        console.debug(response);
    });
    
    $scope.confirmAsg = function(){
        switch($scope.asgType){
            case 'lab':
                api.get('lab_mod', 'add', {
                    order: $scope.newAsg.order,
                    theme: $scope.newAsg.theme,
                    desc: $scope.newAsg.desc,
                    classID: $scope.classObj.id
                }).then(function(response){
                    console.debug(response);
                    $scope.newAsg.id = response.data.id;
                    $scope.labs.push($scope.newAsg);
                    $scope.addAsgForm = false;
                }, function(response){
                    console.debug(response);
                });
                break;
        }
        $scope.newAsg = {};
    };
    $scope.updateStatus = function(lab){
        if (!lab._count) {
            lab._count = 0;
        }
        lab._count++;
        $timeout(function(){
            if (--lab._count != 0) return;
            api.get('lab_mod', lab.completed ? 'set' : 'unset',{
                asgID: lab.id
            }).then(function(response){
                
            }, function(response){
                console.debug(response);
            });
        }, 500);
    };
    $scope.fixTabs = function(){
        if ($scope.$$phase){
            $timeout($scope.fixTabs, 50);
            return;
        }
        var width = $('md-dialog md-pagination-wrapper').width();
        $('md-dialog md-pagination-wrapper').width(width + 1);
    };
    
}]);