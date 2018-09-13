'use strict';

angular.module('cervServices',[])

.factory('cervezaFactory',['$http', function($http){

  var urlBase = '/api/cervezas';
  var cervezaFactory = {};

  cervezaFactory.getCervezas = function(){
    return $http.get(urlBase)
            .then(function(response){
              return response.data;
            });
  };

  cervezaFactory.getCerveza = function(id){
    return $http.get(urlBase + '/' + id)
            .then(function(response){
              return response.data;
            });
  };

  cervezaFactory.updateCerveza = function(cerveza){
    return $http.put(urlBase + '/' + cerveza._id, cerveza)
            .then(function(response){
                return response.data;
            })

  };

  cervezaFactory.deleteCerveza = function(cerveza){
    return $http.delete(urlBase + '/' + cerveza._id);
  };

  cervezaFactory.insertCerveza = function(cerveza){
    return $http.post(urlBase, cerveza)
            .then(function(response){
                return response.data;
            })
  };

  return cervezaFactory;
}])


.factory('cerveceriaFactory', ['$http', function($http){
  var urlBase = '/api/cervecerias';
  var cerveceriaFactory = {};

  cerveceriaFactory.getCervecerias = function(){
    return $http.get(urlBase)
            .then(function(response){
              return response.data;
            });
  }
  cerveceriaFactory.getCerveceria = function(id){
      return $http.get(urlBase + '/' + id)
              .then(function(response){
                return response.data;
              });
  }
  cerveceriaFactory.updateCerveceria = function(cerveceria){
      return $http.put(urlBase + '/' + cerveceria._id, cerveceria)
              .then(function(response){
                  return response.data;
              })
  }
  cerveceriaFactory.deleteCerveceria = function(cerveceria){
      return $http.delete(urlBase + '/' + cerveceria._id);
  }
  cerveceriaFactory.insertCerveceria = function(cerveceria){
      return $http.post(urlBase, cerveceria)
              .then(function(response){
                  return response.data;
              })
  }


  return cerveceriaFactory;
}])
