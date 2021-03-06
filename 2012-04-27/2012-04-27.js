//ESERCIZI 27-04-2012

//ESERCIZIO 1
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

//ESERCIZIO 2
function exercise2() {
  var roof = BOUNDARY(T([1,2])([-7,3])(CUBOID([9,7,0.5])));
  DRAW(COLOR([1,0,0,0.5])(roof));
};
//exercise2();

//ESERCIZIO 3
function exercise3() {
  var domain = INTERVALS(1)(20);
  var controls = [[1,0],[1,1],[1,0],[1,1]];
  var curve = MAP(CUBIC_HERMITE(S0)(controls))(domain);
  DRAW(curve);
};
//exercise3();

//ESERCIZIO 4
function exercise4() {
  var domain = INTERVALS(1)(20);
  var controls = [[0,0],[1,2],[3,2],[3,0],[5,-1],[6,1]];
  var curve = MAP(BEZIER(S0)(controls))(domain);
  DRAW(curve);
};
//exercise4();

//ESERCIZIO 5
function exercise5() {
  var domain = INTERVALS(1)(20);
  var controls = [[0,0],[3,2],[4,-1],[7,3],[9,0],[11,1],[12,0]];
  var curve = SPLINE(CUBIC_CARDINAL(domain))(controls);
  DRAW(curve);
};
//exercise5();

//ESERCIZIO 6
function exercise6() {
  var domain = INTERVALS(1)(20);
  var controls = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];
  var curve = SPLINE(CUBIC_UBSPLINE(domain))(controls);
  DRAW(curve);
};
//exercise6();

//ESERCIZIO 7
function exercise7() {
  var domain = INTERVALS(1)(20);
  var controls1 = [[0,0],[3,2],[4,-1],[7,3],[9,0],[11,1],[12,0]];

  var listaDfacce = [];
  controls1.forEach( function(v,i) { listaDfacce.push([i]); } );
  DRAW(COLOR([0,1,0])( SIMPLICIAL_COMPLEX(controls1)(listaDfacce) ) );

  var curve = SPLINE(CUBIC_CARDINAL(domain))(controls1);
  DRAW(COLOR([0,1,0])(curve);


  var controls2 = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];

  var listaDfacce2 = [];
  controls2.forEach( function(v,i) { listaDfacce2.push([i]); } );
  DRAW(COLOR([1,0,0])( SIMPLICIAL_COMPLEX(controls2)(listaDfacce2) ) );

  var curve2 = SPLINE(CUBIC_UBSPLINE(domain))(controls2);
  DRAW(COLOR([1,0,0])(curve2);
};
//exercise7();