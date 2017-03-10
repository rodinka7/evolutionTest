'use strict';

angular.module('ngApp', [])
	.controller('ngController', function(){
			var contentList = this;			
			
			contentList.list = [
				{"img": "./img/car.png", "run": 94797, "body": "Внедорожник", "motor": "2.4 л, Бензин (170 л.с.)", "drive": "Полный привод", "climat": "true", "conditioner": "true", "disks": "true", "multiwheel": "true", "park": "true", "abs": "true", "signal": "true", "serve": "true", "aster": "true", "salon": "Aster Еxpert", "time": "Ежедневно с 8.00 до 22.00", "phone": "+7(495)7777777"},
				{"img": "./img/car.png", "run": 94797, "body": "Внедорожник", "motor": "2.4 л, Бензин (170 л.с.)", "drive": "Полный привод", "climat": "true", "conditioner": "true", "disks": "true", "multiwheel": "false", "park": "true", "abs": "true", "signal": "false", "serve": "true", "aster": "false", "salon": "Aster Еxpert", "time": "Ежедневно с 8.00 до 22.00", "phone": "+7(495)7777777"},
				{"img": "./img/car.png", "run": 55000, "body": "Внедорожник", "motor": "2.6 л, Бензин (190 л.с.)", "drive": "Полный привод", "climat": "false", "conditioner": "true", "disks": "false", "multiwheel": "true", "park": "false", "abs": "true", "signal": "true", "serve": "false", "aster": "true", "salon": "Aster Еxpert", "time": "Ежедневно с 8.00 до 22.00", "phone": "+7(495)7777777"},
				{"img": "./img/car.png", "run": 10000, "body": "Внедорожник", "motor": "2.4 л, Бензин (170 л.с.)", "drive": "Полный привод", "climat": "true", "conditioner": "true", "disks": "true", "multiwheel": "true", "park": "true", "abs": "true", "signal": "false", "serve": "true", "aster": "false", "salon": "Aster Еxpert", "time": "Ежедневно с 8.00 до 22.00", "phone": "+7(495)7777777"},
				{"img": "./img/car.png", "run": 94797, "body": "Внедорожник", "motor": "2.4 л, Бензин (170 л.с.)", "drive": "Полный привод", "climat": "false", "conditioner": "false", "disks": "true", "multiwheel": "true", "park": "true", "abs": "true", "signal": "true", "serve": "false", "aster": "true", "salon": "Aster Еxpert", "time": "Ежедневно с 8.00 до 22.00", "phone": "+7(495)7777777"},
				{"img": "./img/car.png", "run": 94797, "body": "Внедорожник", "motor": "2.4 л, Бензин (170 л.с.)", "drive": "Полный привод", "climat": "true", "conditioner": "true", "disks": "true", "multiwheel": "true", "park": "true", "abs": "false", "signal": "false", "serve": "false", "aster": "true", "salon": "Aster Еxpert", "time": "Ежедневно с 8.00 до 22.00", "phone": "+7(495)7777777"},
				{"img": "./img/car.png", "run": 94797, "body": "Внедорожник", "motor": "2.4 л, Бензин (170 л.с.)", "drive": "Полный привод", "climat": "true", "conditioner": "true", "disks": "false", "multiwheel": "true", "park": "true", "abs": "false", "signal": "true", "serve": "true", "aster": "false", "salon": "Aster Еxpert", "time": "Ежедневно с 8.00 до 22.00", "phone": "+7(495)7777777"},
				{"img": "./img/car.png", "run": 80000, "body": "Внедорожник", "motor": "2.4 л, Бензин (170 л.с.)", "drive": "Полный привод", "climat": "true", "conditioner": "false", "disks": "true", "multiwheel": "true", "park": "false", "abs": "true", "signal": "false", "serve": "true", "aster": "true", "salon": "Aster Еxpert", "time": "Ежедневно с 8.00 до 22.00", "phone": "+7(495)7777777"}
			];

			contentList.showDif = function(e) {
				e.preventDefault();
				console.log('hello')
			}

			contentList.slide = function() {
				var wrapper = document.querySelector('.container__wrapper');
				wrapper.style.position = 'absolute';
				wrapper.style.left = '-50%';
				wrapper.style.transtion = '3s'; 
			}
	
		});