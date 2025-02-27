import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats( matrix ) {
        let countCats = 0;
        for(let i = 0; i <= matrix.length; i++) {
            if( Array.isArray(matrix[i])){
                for(let j = 0; j<=matrix[i].length;j++){
                    if(matrix[i][j] === '^^'){
                        countCats += 1;
                    }
                }
            }
            if(matrix[i] === '^^'){
                countCats += 1;
            }
        }
        return countCats;
}
