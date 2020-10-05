
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let arrReverseOddElementsOfMatrix = matrix.map((x, i) => {
    if(i%2 === 0) return x
    else return x.reverse()
  });
  return [].concat(...arrReverseOddElementsOfMatrix)

}
