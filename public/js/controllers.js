'use strict';

angular.module('cervControllers', ['cervServices'])


// controller para urlSite/cervezas

.controller("CervezaCtrl",['$scope', '$uibModal', 'cervezaFactory', function($scope, $uibModal, cervezaFactory){

    angular.element(document).ready(function(){
      cervezaFactory.getCervezas()
        .then(function(cervezas){
          $scope.cervezas = cervezas;
        },function(err){
          alert('Error:' + err.message);
        });
    });

    var modalOptions = {
        templateUrl: '../views/cervezaedit.html',
        controller: 'cerveza.add',
        resolve: {
            Cerveza: {}
        }
    }

    $scope.addCerveza = function(){
        modalOptions.controller = 'cerveza.add';
        var modalInstance = $uibModal.open(modalOptions);
        modalInstance.result.then(function(cerveza){
            if(!cerveza)return //clicked cancel.
            $scope.cervezas.push(cerveza);
        })
    }

    $scope.updateCerveza = function(cerveza){
        modalOptions.controller = 'cerveza.update';
        modalOptions.resolve.Cerveza = cerveza;
        var modalInstance = $uibModal.open(modalOptions);
    }

    $scope.deleteCerveza = function(cerveza){
        cervezaFactory.deleteCerveza(cerveza);
        let index = $scope.cerveza.indexOf(cerveza);
        $scope.cervezas.splice(index, 1);
    }

}])

//Modal nuevo cerveza
.controller('cerveza.add', ['cervezaFactory','$uibModalInstance','$scope', function(cervezaFactory, $uibModalInstance, $scope) {
    $scope.title = "Agregar nueva cerveza";
    $scope.ok = function() {
        cervezaFactory.insertCerveza($scope.cerveza)
            .then(function(cerveza){
                $uibModalInstance.close(cerveza);
            }, function(err){
                $uibModalInstance.close('Error insertando:' + err.message);
            })
        }

    $scope.cancel = function(){
        $uibModalInstance.close(null);
    }
}])

//Modal editar cerveza
.controller('cerveza.update', ['cervezaFactory', '$uibModalInstance','$scope', 'Cerveza', function(cervezaFactory, $uibModalInstance, $scope, Cerveza) {
    $scope.title = "Editar Cervezas";
    $scope.cerveza = Cerveza;
    $scope.ok = function() {
        cervezaFactory.updateCerveza($scope.cerveza)
            .then(function(cerveza){
                $uibModalInstance.close(cerveza);
            }, function(err){
                console.log("ERROR: " + err.message);
                $uibModalInstance.close(null);
            })
    }
    $scope.cancel = function(){
        $uibModalInstance.close(null);
    }
}])

// controller para urlSite/cervecerias
.controller("CerveceriaCtrl", ['$scope', '$uibModal', 'cerveceriaFactory', function($scope, $uibModal, cerveceriaFactory){

    angular.element(document).ready(function(){
        cerveceriaFactory.getCervecerias()
        .then(function(cervecerias){
            $scope.cervecerias = cervecerias;
        }, function(err){
            alert('Error: ' + err.message);
        })
    });

    var modalOptions = {
        templateUrl: '../views/cerveceriaedit.html',
        controller: 'cerveceria.add',
        resolve : {
            Cerveceria : {}
        }
    }

    $scope.addCerveceria = function(){
        modalOptions.controller = 'cerveceria.add';
        var modalInstance = $uibModal.open(modalOptions);
        modalInstance.result.then(function(cerveceria){
            if(!cerveceria)return //clicked cancel
            $scope.cervecerias.push(cerveceria);
        })
    }

    $scope.updateCerveceria = function(cerveceria){
        modalOptions.controller = 'cerveceria.update';
        modalOptions.resolve.Cerveceria = cerveceria;
        var modalInstance = $uibModal.open(modalOptions);
    }

    $scope.deleteCerveceria = function(cerveceria){
        cerveceriaFactory.deleteCerveceria(cerveceria);
        let index = $scope.cervecerias.indexOf(cerveceria);
        $scope.cervecerias.splice(index, 1);
    }

}])

//Modal nuevo cerveceria
.controller('cerveceria.add',['cerveceriaFactory','$uibModalInstance','$scope', function(cerveceriaFactory, $uibModalInstance, $scope){
    $scope.title = "Agregar nueva Cerveceria";
    $scope.ok = function(){
        cerveceriaFactory.insertCerveceria($scope.cerveceria)
            .then(function(cerveceria){
                $uibModalInstance.close(cerveceria);
            }, function(err){
                console.log("ERROR: " + err.message);
                $uibModalInstance.close(null);
            })
    };

    $scope.cancel = function(){
        $uibModalInstance.close(null);
    };
}])

//Modal editar cerveceria
.controller('cerveceria.update',['cerveceriaFactory','$uibModalInstance','$scope', 'Cerveceria', function(cerveceriaFactory, $uibModalInstance, $scope, Cerveceria){
    $scope.title = "Editar cerveceria";
    $scope.cerveceria = Cerveceria;
    $scope.ok = function(){
        cerveceriaFactory.updateCerveceria($scope.cerveceria)
            .then(function(cerveceria){
                $uibModalInstance.close(cerveceria);
            },function(err){
                console.log("ERROR: " + err.message);
                $uibModalInstance.close(null);
            })

    };

    $scope.cancel = function(){
        $uibModalInstance.close(null);
    };
}])


// controller para urlSite/

.controller('MainCtrl', ['$scope', function($scope){

}])
