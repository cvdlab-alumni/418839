//ESERCIZI 27-04-2012

//esercizio 1
function exercise1() {

  var points = [[0,0],[9,0],[9,-3],[8,-3],[8,-1],[5,-1],[5,-3],[4,-3],[4,-1],[1,-1],[1,-3],[0,-3],[0,0]];
  var poly = POLYLINE(points);

  var points2 = [[0,-7],[9,-7],[9,-4],[8,-4],[8,-6],[5,-6],[5,-4],[4,-4],[4,-6],[1,-6],[1,-4],[0,-4],[0,-7]];
  var poly2 = POLYLINE(points2);

  var struttura = STRUCT([poly, poly2]);

  var e = EXTRUDE([3])(struttura);
  var colored  = COLOR([0,1,0,0.5])(e);

  DRAW(colored);
};
//exercise1();

//esercizio 2
function exercise2() {
  var roof = BOUNDARY(T([1,2])([-7,3])(CUBOID([9,7,0.5])));
  DRAW(COLOR([1,0,0,0.5])(roof));
};
//exercise2();

//esercizio 3
function exercise3() {
  var domain = INTERVALS(1)(20);
  var controls = [[1,0],[1,1],[1,0],[1,1]];
  var curve = MAP(CUBIC_HERMITE(S0)(controls))(domain);
  DRAW(curve);
};
//exercise3();

function exercise4() {
  var domain = INTERVALS(1)(20);
  var controls = [[0,0],[1,2],[3,2],[3,0],[5,-1],[6,1]];
  var curve = MAP(BEZIER(S0)(controls))(domain);
  DRAW(curve);
};
//exercise4();
