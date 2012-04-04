var spessorePav = 1.8;
var pavimenti = [];

//grid1
pavimenti.push(
  SIMPLEX_GRID([[1], [2], [spessorePav]])
);
//grid2
pavimenti.push(
  T([0])([1])(
    SIMPLEX_GRID([[38], [1], [spessorePav]])
  )
);
//grid3
pavimenti.push(
  T([0,1])([1,10])(
    SIMPLEX_GRID([[9], [12], [spessorePav]])
  )
);
//grid4
pavimenti.push(
  T([0,1])([21,1])(
    SIMPLEX_GRID([[(15+3/8)], [3], [spessorePav]])
  )
);
//grid5
pavimenti.push(
  T([0,1])([21,4])(
    SIMPLEX_GRID([[30], [1], [spessorePav]])
  )
);
//grid6
pavimenti.push(
  T([0,1])([51,4])(
    SIMPLEX_GRID([[1], [2], [spessorePav]])
  )
);
//grid7
pavimenti.push(
  T([0,1])([9,10])(
    SIMPLEX_GRID([[12], [7], [spessorePav]])
  )
);
//grid8
pavimenti.push(
  T([0,1])([21,5])(
    SIMPLEX_GRID([[18], [12], [spessorePav]])
  )
);
//grid9
pavimenti.push(
  T([0,1])([39,5])(
    SIMPLEX_GRID([[8], [11], [spessorePav]])
  )
);

var scale = [];
for(i=1; i<8; i++) {
  scale.push(
    T([0,1])([36+(3/8)*i,1])(
      SIMPLEX_GRID([[(3/8)], [3], [(spessorePav-0.225*i)]])
    )
  );
}

var muri = [];
altezzaMuro = 5;
spessoreMuro = 0.2;
//muro1
muri.push(
  T([0,1])([(1-spessoreMuro),(1-spessoreMuro)])(
    SIMPLEX_GRID([[(8+spessoreMuro)], [spessoreMuro], [altezzaMuro]])
  )
);
//muro2 
muri.push(
  T([0,1])([(1-spessoreMuro),(1)])(
    SIMPLEX_GRID([[spessoreMuro], [(21+spessoreMuro)], [altezzaMuro]])
  )
);
//muro3
muri.push(
  T([0,1])([1,22])(
    SIMPLEX_GRID([[4], [spessoreMuro], [altezzaMuro]])
  )
);
//muro4
muri.push(
  T([0,1])([9,(20.8-spessoreMuro)])(
    SIMPLEX_GRID([[spessoreMuro], [(1.4+spessoreMuro)], [altezzaMuro]])
  )
);
//muro5
muri.push(
  T([0,1])([9,(17-spessoreMuro)])(
    SIMPLEX_GRID([[spessoreMuro], [(1.4+spessoreMuro)], [altezzaMuro]])
  )
);
//muro6
muri.push(
  T([0,1])([7.4,15])(
    SIMPLEX_GRID([[20.4], [spessoreMuro], [altezzaMuro]])
  )
);
//muro7
muri.push(
  T([0,1])([25,7.2])(
    SIMPLEX_GRID([[9], [spessoreMuro], [altezzaMuro]])
  )
);
//muro8
muri.push(
  T([0,1])([37.2,11.6])(
    SIMPLEX_GRID([[5.6], [spessoreMuro], [altezzaMuro]])
  )
);
//muro9
muri.push(
  T([0,1])([41,(5-spessoreMuro)])(
    SIMPLEX_GRID([[(10+spessoreMuro)], [spessoreMuro], [altezzaMuro]])
  )
);
//muro10
muri.push(
  T([0,1])([51,5])(
    SIMPLEX_GRID([[spessoreMuro], [(11+spessoreMuro)], [altezzaMuro]])
  )
);
//muro11
muri.push(
  T([0,1])([(38-spessoreMuro),16])(
    SIMPLEX_GRID([[(13+spessoreMuro)], [spessoreMuro], [altezzaMuro]])
  )
);

var piscine = [];
var altezzaPiscina = 0.4
//piscina grande
piscine.push(
  T([0,1])([1,1])(
    SIMPLEX_GRID([[20], [9], [altezzaPiscina]])
  )
);
//piscina piccola
piscine.push(
  T([0,1])([47,5])(
    SIMPLEX_GRID([[4], [11], [altezzaPiscina]])
  )
);

var colonne = [];
var latoColonna = 0.2;
var mezzoLato = latoColonna/2;

//colonne del lato inferiore, partendo da sinistra
colonne.push(
  T([0,1])([(26-mezzoLato),(7-mezzoLato)])(
    SIMPLEX_GRID([[latoColonna], [latoColonna], [altezzaMuro]])
  )
);

colonne.push(
  T([0,1])([(26-mezzoLato+19/3),(7-mezzoLato)])(
    SIMPLEX_GRID([[latoColonna], [latoColonna], [altezzaMuro]])
  )
);

colonne.push(
  T([0,1])([(26-mezzoLato+2*19/3),(7-mezzoLato)])(
    SIMPLEX_GRID([[latoColonna], [latoColonna], [altezzaMuro]])
  )
);

colonne.push(
  T([0,1])([(26-mezzoLato+19),(7-mezzoLato)])(
    SIMPLEX_GRID([[latoColonna], [latoColonna], [altezzaMuro]])
  )
);
//colonne del lato superiore, sempre partendo da sinistra
colonne.push(
  T([0,1])([(26-mezzoLato),(14-mezzoLato)])(
    SIMPLEX_GRID([[latoColonna], [latoColonna], [altezzaMuro]])
  )
);

colonne.push(
  T([0,1])([(26-mezzoLato+19/3),(14-mezzoLato)])(
    SIMPLEX_GRID([[latoColonna], [latoColonna], [altezzaMuro]])
  )
);

colonne.push(
  T([0,1])([(26-mezzoLato+2*19/3),(14-mezzoLato)])(
    SIMPLEX_GRID([[latoColonna], [latoColonna], [altezzaMuro]])
  )
);

colonne.push(
  T([0,1])([(26-mezzoLato+19),(14-mezzoLato)])(
    SIMPLEX_GRID([[latoColonna], [latoColonna], [altezzaMuro]])
  )
);

var vetrate = [];
var spessoreVetrata = 0.1;
//vetrata1
vetrate.push(
  T([0,1])([5.1,22])(
    SIMPLEX_GRID([[4], [spessoreVetrata], [altezzaMuro]])
  )
);
//vetrata2
vetrate.push(
  T([0,1])([31,7.4])(
    SIMPLEX_GRID([[spessoreVetrata], [6], [altezzaMuro]])
  )
);
//vetrata3
vetrate.push(
  T([0,1])([(32-spessoreVetrata),7.4])(
    SIMPLEX_GRID([[spessoreVetrata], [6], [altezzaMuro]])
  )
);
//vetrata4
vetrate.push(
  T([0,1])([(44.55-spessoreVetrata),6.4])(
    SIMPLEX_GRID([[spessoreVetrata], [8], [altezzaMuro]])
  )
);
//vetrata5
vetrate.push(
  T([0,1])([30,13.4])(
    SIMPLEX_GRID([[10], [spessoreVetrata], [altezzaMuro]])
  )
);
//vetrata6
vetrate.push(
  T([0,1])([30,4.8])(
    SIMPLEX_GRID([[11], [spessoreVetrata], [altezzaMuro]])
  )
);

var cubetti = [];
var latoCubetto = 0.2;
for(i=0; i<8; i++) {
  cubetti.push(
    T([0,1,2])([(7.95+2.1*i),14.3, spessorePav])(
      SIMPLEX_GRID([[latoCubetto], [latoCubetto], [latoCubetto]])
    )
  );
}

var panca = (T([0,1,2])([7.9,14.2,(spessorePav+latoCubetto)])(
              SIMPLEX_GRID([[15.2], [0.6], [0.25]])
            ));
DRAW(STRUCT([panca]));

var tetti = [];
var spessoreTetto = 0.8;

//tetto grande
tetti.push(
  T([0,1,2])([24,4,altezzaMuro])(
    SIMPLEX_GRID([[23], [13], [spessoreTetto]])
  )
);
//tetto piccolo
tetti.push(
  T([0,1,2])([0.4,13.2,altezzaMuro])(
    SIMPLEX_GRID([[9.2], [10], [spessoreTetto]])
  )
);

var pavimento = STRUCT(pavimenti);
DRAW(pavimento);

var scalini = STRUCT(scale);
DRAW(scalini);

var pareti = STRUCT(muri);
DRAW(pareti);

var pools = STRUCT(piscine);
DRAW(pools);

var colonnato = STRUCT(colonne);
DRAW(colonnato);

var aria = STRUCT(vetrate);
DRAW(aria);

var cubi = STRUCT(cubetti);
DRAW(cubi);

var coperture = STRUCT(tetti);
DRAW(coperture);