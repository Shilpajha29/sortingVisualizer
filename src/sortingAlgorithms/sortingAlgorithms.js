export function getMergeSortAnimations(array) {
  // console.log(array);
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}


// ////////////////////////////////////////////////////////////////////////////////////////////// //
export function getBubbleSortAnimations(array) {
  console.log(array);
    const xxx = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    bubbleSortHelper(array, 0, array.length - 1, auxiliaryArray, xxx);
    return xxx;
  }
  
  function bubbleSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    xxx,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    bubbleSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, xxx);
    bubbleSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, xxx);
    doBubble(mainArray, startIdx, auxiliaryArray, xxx);
  }
  
  function doBubble(
    mainArray,
    startIdx,
    auxiliaryArray,
    xxx,
    swapped,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = startIdx + 1;
    let arr = mainArray;
    let n = mainArray.length;
    let  z;
  
    // int i, j;
    // bool swapped;
    for (i = 0; i < n - 1; i++) {
      swapped = false;
      for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          xxx.push([i, j]);
          xxx.push([i, j]);
          z = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = z;
          z=0;
          // swap(arr[j], arr[j + 1]);
          xxx.push([k, auxiliaryArray[i]]);
          mainArray[k++] = auxiliaryArray[i++];
          swapped = true;
        }
        else {
          xxx.push([k, auxiliaryArray[j]]);
          mainArray[k++] = auxiliaryArray[j++];
        }
      }
      
    }
  }