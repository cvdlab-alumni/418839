var drawCircle = function(r,h,n,m) {
	var dominioCircle = DOMAIN([[0,2*PI],[0,h]])([n,m]);

	var mapping = function(p) {
		var u = p[0];
		var v = p[1];
		return [r * COS(u), r * SIN(u), v];
	};

	var model = MAP(mapping)(dominioCircle);
	DRAW(model);
	COLOR([0,0,0])(model);
};