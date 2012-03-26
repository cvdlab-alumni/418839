var domain = DOMAIN([[0,10]])([10]);

var mapping = function (p) {
	var u = p[0];

	return [u,u];
};

var mapped = MAP(mapping)(domain);