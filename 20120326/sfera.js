var drawSfera = function(r,n,m) {
	var dominio = DOMAIN([[0,2*PI],[0,PI]])([n,m]);

	var mapping = function(p) {
		var u = p[0] -PI/2;
		var v = p[1] ;
		return [r * SIN(u)*SIN(v), r *COS(u)*SIN(v), r*COS(v)];
	};

	var model = MAP(mapping)(dominio);
	DRAW(model);
};