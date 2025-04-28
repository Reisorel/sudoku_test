70 % de l'espace de stockage utilisés … Une fois la limite atteinte, vous ne pouvez plus créer, modifier ni importer de fichiers.
// Initialisation fonction check validité d’un plateau de Sudoku 9×9
const isValidSudoku = (board) => {
  // 1. Décomposer chaque dimension du tableau global en trois tableaux 9×9.
  // Chacune des cases est initialisés à false.
  const rows  = Array.from({ length: 9 }, () => Array(9).fill(false));
  const cols  = Array.from({ length: 9 }, () => Array(9).fill(false));
  const boxes = Array.from({ length: 9 }, () => Array(9).fill(false));

  // 2. Itération (coeur de l'exerice demandé)
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const ch = board[i][j];       // caractère actuel ('1'–'9' ou '.')
      if (ch === '.') continue;     // ignorer les cases vides

      // 3. Convertir directement le caractère en entier et décaler à 0–8
      const d = parseInt(ch, 10) - 1;


      // 4. Calculer l’indice du bloc 3×3 (0 à 8)
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      // 5. Vérifier si d a déjà été vu dans la même ligne, colonne ou bloc
      if (rows[i][d]) {
        return false;  // doublon sur la ligne i
      }
      if (cols[j][d]) {
        return false;  // doublon sur la colonne j
      }
      if (boxes[boxIndex][d]) {
        return false;  // doublon dans le bloc
      }

      // 6. Marquer d comme vu
      rows[i][d]        = true;
      cols[j][d]        = true;
      boxes[boxIndex][d] = true;
    }
  }

  // 7. Aucun doublon détecté → plateau valide
  return true;
};

// Exemple d’utilisation :
const board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(board)); // Execute avec node // true
