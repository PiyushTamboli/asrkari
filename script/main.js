
angular.module('myApp', ["ngSanitize"])
    .controller('myCtrl', function($scope, $http) {
        $scope.myImages = ["image1.jpg", "image2.jpg", "image3.jpg"];
        $scope.textContent = {
            English : {
                Title: "Asrkari Satyagraha",
                Language: "Language",
                Home :{
                Lable : "Home",
                },
                About :{
                    Lable : "About",
                },
                OurWork :{
                    Lable : "Our Work",
                },
                Contact :{
                    Lable : "Contact",
                }
            },
            Hindi : {
                Title: "असरकारी सत्याग्रह",
                Language: "भाषा",
                
                Home :{
                Lable : "होम",
                },
                About :{
                    Lable : "बारे में",
                },
                OurWork :{
                    Lable : "हमारा काम",
                },
                Contact :{
                Lable : "सम्पर्क करें",
                }
            },
            Deutsche : {
                Title : "Asrkari Satyagraha",
                Language: "Sprache",
                Home :{
                Lable : "Zuhause",
                },
                About :{
                Lable : "Über",
                },
                OurWork :{
                    Lable : "Unsere Arbeit",
                },
                Contact :{
                    Lable : "Kontakt",
                }
            }
        };
        
        $scope.changeLanguage = function(lang) {
            $scope.myLanguage = $scope.textContent[lang];
            $http.get(lang +"/Home.html").then(function(response) {
                $scope.myLanguage.Home.htmlContent = response.data;
            });
            $http.get(lang +"/About.html").then(function(response) {
                $scope.myLanguage.About.htmlContent = response.data;
            });
            $http.get(lang +"/Contact.html").then(function(response) {
                $scope.myLanguage.Contact.htmlContent = response.data;
            });
            $http.get(lang +"/OurWork.html").then(function(response) {
                $scope.myLanguage.OurWork.htmlContent = response.data;
            });
        }
        $scope.changeLanguage("Deutsche");
    });
		    