# algocasts

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// j  0  1  2
//i   // // //
//0    0 0 0
//1    0 0 0
//2    0 0 0

let DIRECTION_RIGHT = [0,1];// j++
let DIRECTION_DOWN = [1,0]; // i++
let DIRECTION_LEFT = [0,-1];// j--
let DIRECTION_UP = [-1,0];	// i--

let rightCorner = 0;

function getNextDirection(previousDirection) {

    //direction forward alongside row
    if (previousDirection === DIRECTION_UP){
        return DIRECTION_RIGHT;
    } else if (previousDirection === DIRECTION_RIGHT) {
        return DIRECTION_DOWN;
    } else if(previousDirection === DIRECTION_DOWN) {
        return DIRECTION_LEFT;
    } else {
        return DIRECTION_UP;
    }

}

function getNextBorder(direction) {

    // i = 0 ; and j = 0 alongside row
    if (direction === DIRECTION_RIGHT){
        // right corner
        return [rightCorner,width-rightCorner];
    // i = 1 , j = 0 alongside collumn
    } else if (direction === DIRECTION_DOWN) {
        //bottom right corner
        return [height-rightCorner,width-rightCorner];
    // i = 0 j = - 1  backward on row
    } else if(direction === DIRECTION_LEFT) {
        return [height-rightCorner,rightCorner];
    // i = -1 j = 0 backward on collumn
    } else if (direction === DIRECTION_UP) {
    	rightCorner++;
        return [rightCorner,rightCorner];
    }

}

function solve( matrix ) {

    counter = 1;

    height = matrix.length-1;
    width = matrix.length-1;

    let current_i = 0;
    let current_j = 0;

    let direction = DIRECTION_RIGHT;
    let border    = [0,width];

    let newVar;

    while (counter <= matrix.length*matrix.length){

//    	try {
        newVar = matrix[current_i][current_j];
//		} catch (e) {
//			// TODO: handle exception
//			printBorder();
//			printMatrix(matrix);
//			console.log("current i %s , current j %s",current_i,current_j);
//		}
    	
        if ( newVar != 0 ){
			current_i = rightCorner;
			current_j = rightCorner;
			direction = DIRECTION_UP;
		}
        
        if (current_i === border[0] && current_j === border[1]){
            direction = getNextDirection(direction);
            border    = getNextBorder( direction );
        }
        				
        matrix[current_i][current_j] = counter++;

        current_i = current_i+(1*direction[0]);
        current_j = current_j+(1*direction[1]);

    }

    printBorder();
    printMatrix(matrix);
    printBorder();

}

function printMatrix( matrix ) {

    for (i = 0; i<matrix.length;i++){

        rowArray = matrix[i];
        tmp = "";
        for (j = 0; j < rowArray.length ; j++ ){
            tmp += " "+matrix[i][j];
        }
        console.log(tmp);

    }

}

function printBorder() {
    console.log("");
    console.log("###############");
    console.log("");
}

function createMatrix( length , width ) {

    let matrix = [];

    for(i = 0 ; i < length ; i++){

        array = [];

        for (j = 0; j < width;j++){
            array.push(0);
        }

        matrix.push(array);

    }

    // printBorder();
    // console.log("MATRIX CREATED!");
    // printMatrix(matrix);
    // printBorder();

    return matrix

}

function matrix(n) {

    a = createMatrix(n,n);

    solve(a);
    
}

module.exports = matrix;

//matrix(2);

matrix(5);

//matrix(4);
