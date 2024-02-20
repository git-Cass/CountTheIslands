$(document).ready(function() {

  let matrix = [
    [1, 1, 1, 1],
    [0, 1, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0]
  ];

/* Count rows and columns */
    let rows = matrix.length;
    let cols = matrix[0].length;

/* Get Island and Water */
  function countIslands(matrix) {
    let result = "";

/* Find 1 and 0 values through loop*/ 
    for (let i = 0; i < rows; i++) {
      result += "\"";
      for (let j = 0; j < cols; j++) {
    /* -- Trial alert message to show each number isolated by loop -- */
      //alert(matrix[i][j]); 

    /* -- Append 'X' for island(1) and '~' for water(0) -- */
        if (matrix[i][j] === 1) {
          result += "X";
        } else {
          result += "~";
        }
      }
    /* -- Add newline after each row -- */
        result += "\"<br>";
    }

    return result;
  }


  function generateMatrixHTML(matrix) {
    let matrixHTML = '<table>';
    for (let i = 0; i < rows; i++) {
      matrixHTML += '<tr>';
      for (let j = 0; j < cols; j++) {
        matrixHTML += '<td class="cell">' + matrix[i][j] + '</td>';
      }
      matrixHTML += '</tr>';
    }
    matrixHTML += '</table>';
    return matrixHTML;
  }
  $("#matrix").html(generateMatrixHTML(matrix));


 /* Display result*/
  let islands = countIslands(matrix);
  $("#result").html("Output:<br>" + islands);
  
});