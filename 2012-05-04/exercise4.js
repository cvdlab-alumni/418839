//WING
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

//FUSELAGE
function drawFuselage() {
  var domain1 = INTERVALS(1)(30);
  var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);
  var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([20,10,5]);

  var p0 = [[0,0,0.2],[-0.8,5,0.4],[-0.4,6.2,0.5],[-0.3,6.5,0.5],[1.5,7,0.5],[0.2,3,0.3],[1.3,-0.5,0.3],[0,0,0.2]];
  var p1 = [[0,0,-0.2],[-0.8,5,-0.4],[-0.4,6.2,-0.5],[-0.3,6.5,-0.5],[1.5,7,-0.5],[0.2,3,-0.3],[1.3,-0.5,-0.3],[0,0,-0.2]];

  var c0 = BEZIER(S0)(p0);
  var c1 = BEZIER(S0)(p1);

  var p2 = [[0,0,0.2]];
  var c2 = BEZIER(S0)(p2);
  var curve1 = BEZIER(S1)([c0,c2]);
  var surface1 = MAP(curve1)(domain2);

  var p3 = [[0,0,-0.2]];
  var c3 = BEZIER(S0)(p3);
  var curve2 = BEZIER(S1)([c1,c3]);
  var surface2 = MAP(curve2)(domain2);

  var lateral = BEZIER(S1)([c0,c1]);
  var fuselage = MAP(lateral)(domain2);

  var p4 = [[0.5,5.8,0.15],[0.5,4,0.15],[-1,5.6,0.15],[0.5,5.8,0.15]];
  var p5 = [[0.5,5.8,-0.15],[0.5,4,-0.15],[-1,5.6,-0.15],[0.5,5.8,-0.15]];

  var c4 = BEZIER(S0)(p4);
  var c5 = BEZIER(S0)(p5);

  var p6 = [[0.5,5.8,0.15]];
  var c6 = BEZIER(S0)(p6);
  var curve3 = BEZIER(S1)([c4,c6]);
  var surface3 = MAP(curve3)(domain2);

  var p7 = [[0.5,5.8,-0.15]];
  var c7 = BEZIER(S0)(p7);
  var curve4 = BEZIER(S1)([c5,c7]);
  var surface4 = MAP(curve4)(domain2);

  var lateral2 = BEZIER(S1)([c4,c5]);
  var cockpit = MAP(lateral2)(domain2);

  var cockpitStruct = STRUCT([cockpit, surface3, surface4]);
  cockpitStruct = T([0,1])([0.1,-0.05])(cockpitStruct);

  function drawCylinderPieno(r,h,n,m,p,color) {
    r = r || 1;
    h = h || 2;
    n = n || 40;
    m = m || 1;
    p = p || 1;
    color = color || [1,1,1,1];

    var dominioSolido = SIMPLEX_GRID([ REPEAT(n)(2*PI/n), REPEAT(m)((r)/m), REPEAT(p)(h/p) ]);

    var mappingSolido = function(pt) {
      return [pt[1]*SIN(pt[0]), pt[1]*COS(pt[0]), pt[2]];
    };

    dominioSolido = MAP(mappingSolido)(dominioSolido);
    COLOR(color)(dominioSolido);

    return dominioSolido;
  };

  var cilindro1 = drawCylinderPieno(0.02,0.2,20,1,1);
  cilindro1 = T([0,1])([0.5,5.8])(R([1,2])([PI/2])(cilindro1));

  var p8 = [[-0.1,0,0],[0.25,0.1,0.01],[0.40,0.05,0.03],[0.5,0.12,0.04],[0.6,0.05,0.03],[0.75,0.1,0.01],[1.1,0,0]];
  var knots8 = [0,0,0,1,2,3,4,5,5,5];
  var c8 = NUBS(S0)(2)(knots8)(p8);

  var p9 = [[-0.1,0,0],[0.25,-0.1,0.01],[0.40,-0.05,0.03],[0.5,-0.12,0.04],[0.6,-0.05,0.03],[0.75,-0.1,0.01],[1.1,0,0]];
  var knots9 = [0,0,0,1,2,3,4,5,5,5];
  var c9 = NUBS(S0)(2)(knots9)(p9);

  var p10 = [[-0.1,0,0],[0.25,0.1,-0.01],[0.40,0.05,-0.03],[0.5,0.12,-0.04],[0.6,0.05,-0.03],[0.75,0.1,-0.01],[1.1,0,0]];
  var knots10 = [0,0,0,1,2,3,4,5,5,5];
  var c10 = NUBS(S0)(2)(knots10)(p10);
  
  var p11 = [[-0.1,0,0],[0.25,-0.1,-0.01],[0.40,-0.05,-0.03],[0.5,-0.12,-0.04],[0.6,-0.05,-0.03],[0.75,-0.1,-0.01],[1.1,0,0]];
  var knots9 = [0,0,0,1,2,3,4,5,5,5];
  var knots11 = [0,0,0,1,2,3,4,5,5,5];
  var c11 = NUBS(S0)(2)(knots11)(p11);

  var curve5 = BEZIER(S1)([c8,c9]);
  var surface5 = MAP(curve5)(domain2);

  var curve6 = BEZIER(S1)([c10,c11]);
  var surface6 = MAP(curve6)(domain2);

  var surface56 = BEZIER(S2)([curve5,curve6]);
  var solid56 = MAP(surface56)(domain3);
  solid56 = T([1])([5.8])(R([1,2])([PI/2])(solid56));

  var cilindro2 = drawCylinderPieno(0.05,0.01,20,1,1);
  cilindro2 = T([0,1])([0.5,5.84])(R([1,2])([PI/2])(cilindro2));

  var cilindro3 = drawCylinderPieno(0.1,0.1,20,1,1);
  cilindro3 = T([0,1,2])([-0.32,4.8,0.2])(cilindro3);
  cilindro3 = COLOR([0,0,0,1])(cilindro3);

  var cilindro4 = drawCylinderPieno(0.1,0.1,20,1,1);
  cilindro4 = T([0,1,2])([-0.32,4.8,-0.3])(cilindro4);
  cilindro4 = COLOR([0,0,0,1])(cilindro4);

  var struct = STRUCT([fuselage, surface1, surface2, cockpitStruct, cilindro1]);
  struct = COLOR([229/255,229/255,229/255,1])(struct);
  solid56 = COLOR([139/255,69/255,19/255,1])(solid56);
  struct = STRUCT([struct,solid56,cilindro2,cilindro3,cilindro4]);
  return struct;
}

//STABILIZERS
function drawStabilizers() {
  var domain1 = INTERVALS(1)(30);
  var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);

  //VERTICAL STABILIZERS
  var p1 = [[0,0,0.2],[0.1,0.5,0.3],[-0.1,0.5,0],[-0.05,0.5,0.01],[-0.1,1.1,0.01],
            [-1,1.3,0.01],[-1.3,1,0.01],[-1.3,0.3,0.01],[-1,-0,0.01],[-0.7,-0,0.01],[0,0,0.2]];
  var knots1 = [0,0,0,1,2,3,4,5,6,7,8,9,9,9];
  var c1 = NUBS(S0)(2)(knots1)(p1);

  var p2 = [[0,0,-0.2],[0.1,0.5,-0.3],[-0.1,0.5,-0],[-0.05,0.5,-0.01],[-0.1,1.1,-0.01],
            [-1,1.3,-0.01],[-1.3,1,-0.01],[-1.3,0.3,-0.01],[-1,-0,-0.01],[-0.7,-0,-0.01],[0,0,-0.2]];
  var knots2 = [0,0,0,1,2,3,4,5,6,7,8,9,9,9];
  var c2 = NUBS(S0)(2)(knots2)(p2);

  var s1 = BEZIER(S1)([c1,c2]);
  s1 = MAP(s1)(domain2);

  var p3 = [[0,0,0.2]];
  var c3 = BEZIER(S0)(p3);
  var curve3 = BEZIER(S1)([c1,c3]);
  var surface3 = MAP(curve3)(domain2);

  var p4 = [[0,0,-0.2]];
  var c4 = BEZIER(S0)(p4);
  var curve4 = BEZIER(S1)([c2,c4]);
  var surface4 = MAP(curve4)(domain2);

  //HORIZONTAL STABILIZERS
  var p3 = [[-0.1,0.5,0.3],[0,0.5,0.9],[-1,0.5,0.8],[-1,0.5,0.8],[-1,0.5,0.3],[-0.5,0.5,0.2],[-0.1,0.5,0.3]];
  var knots3 = [0,0,0,1,2,3,4,5,5,5];
  var c3 = NUBS(S0)(2)(knots3)(p3);

  var p4 = [[-0.1,0.48,0.3],[0,0.48,0.9],[-1,0.5,0.8],[-1,0.5,0.8],[-1,0.5,0.3],[-0.5,0.48,0.2],[-0.1,0.48,0.3]];
  var knots4 = [0,0,0,1,2,3,4,5,5,5];
  var c4 = NUBS(S0)(2)(knots4)(p4);

  var s2 = BEZIER(S1)([c3,c4]);
  s2 = MAP(s2)(domain2);

  var p5 = [[-0.1,0.5,0.3]];
  var c5 = BEZIER(S0)(p5);
  var curve5 = BEZIER(S1)([c3,c5]);
  var surface5 = MAP(curve5)(domain2);

  var p6 = [[-0.1,0.48,0.3]];
  var c6 = BEZIER(S0)(p6);
  var curve6 = BEZIER(S1)([c4,c6]);
  var surface6 = MAP(curve6)(domain2);

  var hStabRight = STRUCT([s2,surface5,surface6]);
  hStabRight = T([2])([-0.2])(hStabRight);
  var hStabLeft = S([2])([-1])(hStabRight);

  var tail = STRUCT([s1,surface3,surface4,hStabRight,hStabLeft])
  tail = COLOR([229/255,229/255,229/255,1])(tail);
  return tail;
}

function assembly(){
  var wing = drawWing();
  wing = R([0,2])([PI])(wing);
  wing = R([0,1])([-PI/2])(wing);
  wing = R([0,1])([PI/18])(wing);

  wing = T([0,1])([0.7,3.2])(wing);

  var leftWing = S([2])([-1])(wing);

  var wings = STRUCT([wing,leftWing]);

  var fuselage = drawFuselage();

  var stab = drawStabilizers();
  stab = R([1,2])([PI])(stab);
  stab = R([0,1])([PI/2])(stab);
  stab = R([0,1])([PI/18])(stab);
  stab = S([2])([0.96])(stab);

  var plane = STRUCT([wings,fuselage,stab]);
  return plane;
}

DRAW(assembly());