function generateBoard(rows, columns, pieces) {
    
    const board = new Array(rows).fill(" ")
    .map(() => new Array(columns).fill(" "));
  
    
    pieces.forEach(piece => {
      const { row, col, value } = piece;
      board[col][row] = value;
    });
  
    return board;
  }
  const pieces = [
    { row: 0, col: 0, value: 'x' },
    { row: 0, col: 1, value: 'o' },
    { row: 0, col: 2, value: 'x' },
    { row: 1, col: 0, value: 'x' },
    { row: 1, col: 2, value: 'o' },
    { row: 2, col: 0, value: 'o' },
    { row: 2, col: 1, value: 'x' },
    { row: 2, col: 2, value: 'o' },
  ];
  
  const board = generateBoard(3, 3, pieces);
  
  console.table(board);