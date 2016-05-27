angular.module('myApp').directive('horloge', function () {
	return {
		link: function (scope, element, attrs) {
			function afficheHeure(){
				var date = new Date();
				var heure = date.getHours();
				var minute = date.getMinutes();
				var seconde = date.getSeconds();
				element.text(heure+" : "+minute+" : "+seconde);
			}
			var interval = setInterval(afficheHeure,1000);
		}
	};
});
