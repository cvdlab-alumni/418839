function drawFuselage() {
  var domain1 = INTERVALS(1)(30);
  var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);
  var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([20,10,5]);

  var p0 = [[0,0,0.2],[-0.8,5,0.4],[-0.4,6.2,0.5],[-0.3,6.5,0.5],[1.7,7,0.5],[0.2,3,0.3],[1.5,-0.5,0.3],[0,0,0.2]];
  var p1 = [[0,0,-0.2],[-0.8,5,-0.4],[-0.4,6.2,-0.5],[-0.3,6.5,-0.5],[1.7,7,-0.5],[0.2,3,-0.3],[1.5,-0.5,-0.3],[0,0,-0.2]];

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

  //PUNTA DELL'AEREO

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


  //FUNZIONE PER DISEGNARE CILINDRI PIENI
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

  //QUì INIZIA L'ELICA
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

  //RUOTA DESTRA
  var cilindro3 = drawCylinderPieno(0.1,0.1,20,1,1);
  cilindro3 = T([0,1,2])([-0.32,4.8,0.2])(cilindro3);
  cilindro3 = COLOR([0,0,0,1])(cilindro3);
  //RUOTA SINISTRA
  var cilindro4 = drawCylinderPieno(0.1,0.1,20,1,1);
  cilindro4 = T([0,1,2])([-0.32,4.8,-0.3])(cilindro4);
  cilindro4 = COLOR([0,0,0,1])(cilindro4);

  var struct = STRUCT([fuselage, surface1, surface2, cockpitStruct, cilindro1]);
  struct = COLOR([229/255,229/255,229/255,1])(struct);
  solid56 = COLOR([139/255,69/255,19/255,1])(solid56);
  struct = STRUCT([struct,solid56,cilindro2,cilindro3,cilindro4]);
  DRAW(struct);
}

drawFuselage();