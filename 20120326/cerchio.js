var drawCircle = function(r,n) {
	var dominioCircle = DOMAIN([[0,2*PI]])([n]);

	var mappingCircle = function(p) {
		var u = p[0];
		return [r * COS(u), r * SIN(u)];
	};

	var mappedCircle = MAP(mappingCircle)(dominioCircle);
	DRAW(mappedCircle);
};