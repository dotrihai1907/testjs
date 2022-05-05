// Vectors
function findShortest(vectors) {
  let shortest = vectors[0];
  let vectorLength = 1000000;
  for (var i = 0; i < vectors.length; i++) {
    let length = Math.sqrt(
      vectors[i][0] * vectors[i][0] +
        vectors[i][1] * vectors[i][1] +
        vectors[i][2] * vectors[i][2]
    );
    if (length < vectorLength) {
      vectorLength = length;
      shortest = vectors[i];
    }
  }
  return shortest;
}

var vectors = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];
var shortest = findShortest(vectors);
console.log(shortest); // [1, 1, 1]
