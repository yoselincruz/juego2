/*
NOTA: AL FINAL DE CADA NIVEL, INICIA EL SIGUIENTE 
*/

const emojis = {
  '-': ' ',
  'O': '🍓',
  'X': '🟦',
  'I': '🍄',
  'PLAYER': '🐨',
  'BOMB_COLLISION': '💥',
  'GAME_OVER': '😭',
  'WIN': '🥇',
  'HEART': '🩵',
};

const maps = [];
maps.push(`
  I----XXXXX
  XXXX-XXXXX
  XXXX-XXXXX
  XXXX-XXXXX
  XXXX-XXXXX
  XXXX------
  XXXXXXXXX-
  XXXXXXXXX-
  XXXXXXXXX-
  O---------
`);
maps.push(`
  O------XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XXXXXX---X
  XXXXXXXX-X
  XXXXXXXXIX
  XXXXXXXXXX
  `);
maps.push(`
  XI------XX
  XXXXXXX--X
  XXXXXXXX-X
  XXXXX----X
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX---XXXXX
  XXXX---OXX
  XXXXXXXXXX
`);
