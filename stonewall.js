// The problem consists of finding the solution to the minimum necessary number of blocks needed to build a skyline of a city. Each building’s height is given in an array and we must find the minimum number of rectangular stone blocks which can be used to fill that skyline.
//
// The trick is to realize that whenever there is a peak, it’s best to consider the stone block which is added for that peak to be as tall as the difference between its height and it’s tallest neighbor’s height.
// At the same time, if two or more consecutive elements of the skyline have the same height, they are considered to be the same edge (can be made with the same stone block).
//
// We combine these two conditions and keep a stack where we place the horizontal edges. They will be placed in an ascending order and after we go over on peak, we eliminate one edge, and add the block which was used to create that edge to the sum of all blocks.

function solution (H) {

    let head = H[0]
    let sum = 0;
    let currentSum = 0
    index = 0
    count = 0
    stackIndex = 0
    let stack = []


    for (index = 0; index < H.length; index++){
        while (stackIndex > 0 && stack[stackIndex - 1] > H[index]) {
            stackIndex--
        }
        if (stackIndex > 0 && stack[stackIndex -1] === H[index] ){
            continue
        } else {
            sum++
            stack[stackIndex] = H[index]
            stackIndex++
        }
    }

    return sum
}

console.log(solution([1, 3, 6, 4, 1, 2]));
