// export function getbubbleSortAnimations(array) {
//     const animations = [];
//     if (array.length <= 1) return array;
//     const auxiliaryArray = array.slice();
//     bubbleSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
//     return animations;
//   }
  
//   function bubbleSortHelper(
//     mainArray,
//     startIdx,
//     endIdx,
//     auxiliaryArray,
//     animations,
//   ) {
//     if (startIdx === endIdx) return;
//     const middleIdx = Math.floor((startIdx + endIdx) / 2);
//     mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
//     mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
//     doBubble(mainArray, startIdx, auxiliaryArray, animations);
//   }
  
//   function doBubble(
//     mainArray,
//     startIdx,
//     auxiliaryArray,
//     animations,
//     swapped,
//   ) {
//     let k = startIdx;
//     let i = startIdx;
//     let j = startIdx + 1;
  
//     // int i, j;
//     // bool swapped;
//     for (i = 0; i < n - 1; i++) {
//       swapped = false;
//       for (j = 0; j < n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           animations.push([i, j]);
//           animations.push([i, j]);
  
//           swap(arr[j], arr[j + 1]);
//           animations.push([k, auxiliaryArray[i]]);
//           mainArray[k++] = auxiliaryArray[i++];
//           swapped = true;
//         }
//         else {
//           animations.push([k, auxiliaryArray[j]]);
//           mainArray[k++] = auxiliaryArray[j++];
//         }
//       }
//     }
//   }
  

// import { setArray } from "../reducers/array";
// import { setCurrentBubbleTwo } from "../reducers/bubbleSort";
// import { setCurrentSwappers } from "../reducers/swappers";
// import { setCurrentSorted } from "../reducers/sorted";
// import { setRunning } from "../reducers/running";

// function bubbleSort(stateArray, dispatch, speed) {
//   let array = stateArray.slice(0),
//       toDispatch = [],
//       sorted = false,
//       round = 0;
//   while (!sorted) {
//     sorted = true;
//     for (let i = 0; i < array.length - 1 - round; i++) {
//       toDispatch.push([i, i + 1]);
//       if (array[i] > array[i + 1]) {
//         toDispatch.push([i, i + 1, true]);
//         let temp = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = temp;
//         sorted = false;
//         toDispatch.push(array.slice(0));
//         toDispatch.push([]);
//       }
//     }
//     toDispatch.push([true, array.length - 1 - round]);
//     round++;
//   }
//   handleDispatch(toDispatch, dispatch, array, speed);
//   return array;
// }

// function handleDispatch(toDispatch, dispatch, array, speed) {
//   if (!toDispatch.length) {
//     dispatch(setCurrentBubbleTwo(array.map((num, index) => index)));
//     setTimeout(() => {
//       dispatch(setCurrentBubbleTwo([]));
//       dispatch(setCurrentSorted(array.map((num, index) => index)));
//       dispatch(setRunning(false));
//     }, 900);
//     return;
//   }
//   let dispatchFunction = toDispatch[0].length > 3 ?
//     setArray : toDispatch[0].length === 3 || toDispatch[0].length === 0 ?
//       setCurrentSwappers : toDispatch[0].length === 2 && typeof toDispatch[0][0] === "boolean" ?
//         setCurrentSorted : setCurrentBubbleTwo;
//   dispatch(dispatchFunction(toDispatch.shift()));
//   setTimeout(() => {
//     handleDispatch(toDispatch, dispatch, array, speed);
//   }, speed);
// }

// export default bubbleSort;