var points = [[0,0],[0,2],[1,2],[1,22],[9,22],[9,17],[39,17],[39,16],[51,16],[51,6],[52,6],[52,4],[39,4],[39,0],[0,0]];
var contorno = COLOR([0,0,0])(POLYLINE(points));
DRAW(contorno);
var points1 = [[47,5],[47,16],[51,16],[51,5],[47,5]];
var stanza = COLOR([0,0,0])(POLYLINE(points1));
DRAW(stanza);
var points2 = [[1,1],[1,10],[21,10],[21,1],[1,1]];
var piscina = COLOR([0,0,0])(POLYLINE(points2));
DRAW(piscina);

var lineeVerticali = [];
var lineeOrizzontali = [];

//i punti vanno in senso antiorario, a partire dal vertice in basso a sinistra
//il punto 3 non serve
var grid = function(p1,p2,p4) {
  var lineeVerticali = [];
  var lineeOrizzontali = [];
  for(i = p1[0]; i<=p2[0]; i++) {
    lineeVerticali.push(POLYLINE([[i,p1[1]],[i,p4[1]]]));
  }
  for(i = p1[1]; i<=p4[1]; i++) {
    lineeOrizzontali.push(POLYLINE([[p1[0],i],[p2[0],i]]));
  }

  return STRUCT([
    STRUCT(lineeVerticali),STRUCT(lineeOrizzontali)
  ]);
}

var grid1 = grid([0,0],[1,0],[0,1]);
var grid2 = grid([1,0],[39,0],[1,1]);
var grid3 = grid([1,10],[9,10],[1,22]);
var grid4 = grid([21,1],[36,1],[21,4]);
var grid5 = grid([21,4],[52,4],[0,10]);
var grid6 = grid([51,4],[52,4],[51,6]);
var grid7 = grid([9,10],[21,10],[9,17]);
var grid8 = grid([21,5],[39,5],[21,17]);
var grid9 = grid([39,5],[51,5],[39,16]);

var griglia = STRUCT([grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9]);
DRAW(griglia);

//muro1,2,3
var pointsM1 = [[8,1],[8,0.8],[0.8,0.8],[0.8,22.2],[5,22.2]];
var muro1 = COLOR([0,0,0])(POLYLINE(pointsM1));
DRAW(muro1);

//muro4
var pointsM4 = [[9,20.6],[9.2,20.6],[9.2,22.2],[9,22.2],[9.22]];
var muro4 = COLOR([0,0,0])(POLYLINE(pointsM4));
DRAW(muro4);

//muro5
var pointsM5 = [[9,17],[9.2,17.2],[9.2,18.8],[9,18.8]];
var muro5 = COLOR([0,0,0])(POLYLINE(pointsM5));
DRAW(muro5);

//muro6
var pointsM6 = [[7.4,15],[27.8,15],[27.8,15.2],[7.4,15.2],[7.4,15]];
var muro6 = COLOR([0,0,0])(POLYLINE(pointsM6));
DRAW(muro6);

//muro7
var pointsM7 = [[25,7.2],[34,7.2],[34,7.4],[25,7.4],[25,7.2]];
var muro7 = COLOR([0,0,0])(POLYLINE(pointsM7));
DRAW(muro7);

//muro8
var pointsM8 = [[37.2,11.6],[42.8,11.6],[42.8,11.8],[37.2,11.8],[37.2,11.6]];
var muro8 = COLOR([0,0,0])(POLYLINE(pointsM8));
DRAW(muro8);
