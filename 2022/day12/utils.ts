import { potentialMove } from './solution';

export const findE = (s: string[]): number[] => {
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[0].length; j++) {
      if (s[i][j] === 'E') return [i, j];
    }
  }
  return [-1];
};

export const move = (
  s: string[],
  p: number[],
  prevP: number[],
  e: number[]
): number[][] => {
  let [checkUp, checkRight, checkDown, checkLeft] = [true, true, true, true];

  if (p[0] === 0) checkUp = false;
  if (p[1] === s[0].length - 1) checkRight = false;
  if (p[0] === s.length - 1) checkDown = false;
  if (p[1] === 0) checkLeft = false;

  let potentialMoves: potentialMove[] = [];
  let position = s[p[0]].charCodeAt(p[1]);
  if (position === 83) position = 96;
  if (position === 69) position = 123;

  // Start at top and move clockwise
  // Top
  if (checkUp) {
    if (s[p[0] - 1].charCodeAt(p[1]) - position <= 1) {
      potentialMoves.push({
        position: [p[0] - 1, p[1]],
        magnitude: Math.abs(p[0] - 1 - e[0]) + Math.abs(p[1] - e[1]),
        char: s[p[0] - 1].charCodeAt(p[1]),
      });
    }
  }

  // Right
  if (checkRight) {
    if (s[p[0]].charCodeAt(p[1] + 1) - position <= 1) {
      potentialMoves.push({
        position: [p[0], p[1] + 1],
        magnitude: Math.abs(p[0] - e[0]) + Math.abs(p[1] + 1 - e[1]),
        char: s[p[0]].charCodeAt(p[1] + 1),
      });
    }
  }

  // Bottom
  if (checkDown) {
    if (s[p[0] + 1].charCodeAt(p[1]) - position <= 1) {
      potentialMoves.push({
        position: [p[0] + 1, p[1]],
        magnitude: Math.abs(p[0] + 1 - e[0]) + Math.abs(p[1] - e[1]),
        char: s[p[0] + 1].charCodeAt(p[1]),
      });
    }
  }

  // Left
  if (checkLeft) {
    if (s[p[0]].charCodeAt(p[1] - 1) - position <= 1) {
      potentialMoves.push({
        position: [p[0], p[1] - 1],
        magnitude: Math.abs(p[0] - e[0]) + Math.abs(p[1] - 1 - e[1]),
        char: s[p[0]].charCodeAt(p[1] - 1),
      });
    }
  }

  // If any potential moves are the previous move, remove them
  for (let i = 0; i < potentialMoves.length; i++) {
    if (
      potentialMoves[i].position[0] === prevP[0] &&
      potentialMoves[i].position[1] === prevP[1]
    ) {
      potentialMoves.splice(i, 1);
    }
  }

  let bestMove: potentialMove = {
    position: [0, 0],
    magnitude: 10000,
    char: 96,
  };

  let bestMoves: potentialMove[] = [];

  for (let i = 0; i < potentialMoves.length; i++) {
    if (potentialMoves[i].char === 69) potentialMoves[i].char = 123;
    if (
      potentialMoves[i].char > bestMove.char &&
      potentialMoves[i].char - position <= 1
    ) {
      bestMove = potentialMoves[i];
    }
  }

  return [bestMove.position, p];
};
