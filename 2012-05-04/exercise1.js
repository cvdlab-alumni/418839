function drawWing() {
  var domain1 = INTERVALS(1)(30);
  var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);

  var p0 = [[0,0,0],[2,0.1,0],[2,0.2,0],[2,0.3,0],[1.7,0.3,0],[1.4,0.5,0],[0,0,0]];
  var p00 = [[0,0,0],[2,0.1,0.2],[2,0.2,0.2],[2,0.3,0.2],[1.7,0.3,0],[1.4,0.5,0],[0,0,0]];

  var p1 = p0.map(function(p) {return [p[0]+0.2,p[1],p[2]+1.41]});
  var p2 = p0.map(function(p) {return [p[0]+0.4,p[1],p[2]+2.82]});
  var p3 = p0.map(function(p) {return [p[0]+0.6,p[1],p[2]+4.23]});
  var p4 = p0.map(function(p) {return [p[0]+0.7,p[1],p[2]+4.935]}); 
  var p5 = [[0.8,0,5.6],[2.6,0.05,5.6],[2.6,0.05,5.6],[2.6,0.1,5.6],[2.1,0.1,5.6],[1.8,0.15,5.6],[0.8,0,5.6]];
  var p6 = [[1.2,0,5.64],[1.2,0,5.64],[1.2,0,5.64],[1.2,0,5.64],[1.2,0,5.64],[1.2,0,5.64],[1.2,0,5.64]];

  var c0 = BEZIER(S0)(p00);
  var c1 = BEZIER(S0)(p1);
  var c2 = BEZIER(S0)(p2);
  var c3 = BEZIER(S0)(p3);
  var c4 = BEZIER(S0)(p4);
  var c5 = BEZIER(S0)(p5);
  var c6 = BEZIER(S0)(p6);

  var wingCurves = BEZIER(S1)([c0,c1,c2,c3,c4,c5,c6]);
  var wing = MAP(wingCurves)(domain2);
  wing = COLOR([229/255,229/255,229/255,1])(wing);
  return wing;
}

DRAW(drawWing());