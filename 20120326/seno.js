var domain = DOMAIN([[0,2*PI]])([100]);
var mapping = function (p){
	var u = p[0];
	return [u,SIN(u)];
}
var mapped = MAP(mapping)(domain);
COLOR([0,0,0])(mapped);
DRAW(mapped);