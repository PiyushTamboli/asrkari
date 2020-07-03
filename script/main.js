
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
                Origin :{
                    Lable : "Origin",
                },
                Vision :{
                    Lable : "Vision",
                },
                OurWork :{
                    Lable : "Our Work",
                    Title1: "Shifting focus from profit to peace and from wealth to wellbeing",
                    Title2: "COMPANION ORGANIZATIONS",
                    Title3: "REGULAR INDIVIDUAL CONTRIBUTORS",
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
                Origin :{
                    Lable : "Origin",
                },
                Vision :{
                    Lable : "Vision",
                },
                OurWork :{
                    Lable : "हमारा काम",
                    Title1: "लाभ से शांति और धन से भलाई तक ध्यान केंद्रित करना",
                    Title2: "साथी संगठन",
                    Title3: "नियमित एकल सहायक",
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
                Origin :{
                    Lable : "Origin",
                },
                Vision :{
                    Lable : "Vision",
                },
                OurWork :{
                    Lable : "Unsere Arbeit",
                    Title1 : "Verlagerung des Fokus von Profit zu Frieden und von Wohlstand zu Wohlbefinden",
                    Title2: "BEGLEIT ORGANISATIONEN",
                    Title3: "REGELMÄSSIGE INDIVIDUELLE BEITRÄGE",

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
        }
        $scope.changeLanguage("English");
    });
		    