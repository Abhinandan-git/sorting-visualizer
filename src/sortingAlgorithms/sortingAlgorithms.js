// Merge Sort
export const mergeSort = array => {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = [...array];
  mergeSortHelper(array, auxiliaryArray, 0, array.length - 1, animations);
  return animations;
};

const mergeSortHelper = (mainArray, auxArray, startIdx, endIdx, animations) => {
  if (startIdx === endIdx) return;
  const midIdx = Math.floor((startIdx + endIdx) / 2);

  mergeSortHelper(auxArray, mainArray, startIdx, midIdx, animations);
  mergeSortHelper(auxArray, mainArray, midIdx + 1, endIdx, animations);

  merge(mainArray, auxArray, startIdx, midIdx, endIdx, animations);
};

const merge = (mainArray, auxArray, startIdx, midIdx, endIdx, animations) => {
  let i = startIdx, j = midIdx + 1, k = startIdx;

  while (i <= midIdx && j <= endIdx) {
    animations.push(['color', i, j]); // Comparing elements at i and j
    animations.push(['color', i, j]); // Revert color after comparison

    if (auxArray[i] <= auxArray[j]) {
      animations.push(['swap', k, auxArray[i]]); // Overwrite with value from left half
      mainArray[k++] = auxArray[i++];
    } else {
      animations.push(['swap', k, auxArray[j]]); // Overwrite with value from right half
      mainArray[k++] = auxArray[j++];
    }
  }

  // Remaining elements from the left half
  while (i <= midIdx) {
    animations.push(['color', i, i]); // Comparing with itself (single element)
    animations.push(['color', i, i]); // Revert color
    animations.push(['swap', k, auxArray[i]]); // Place the element in the sorted array
    mainArray[k++] = auxArray[i++];
  }

  // Remaining elements from the right half
  while (j <= endIdx) {
    animations.push(['color', j, j]); // Comparing with itself (single element)
    animations.push(['color', j, j]); // Revert color
    animations.push(['swap', k, auxArray[j]]); // Place the element in the sorted array
    mainArray[k++] = auxArray[j++];
  }
};

// Quick Sort
export const quickSort = array => {
  const animations = [];
  if (array.length <= 1) return array;
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

const quickSortHelper = (array, low, high, animations) => {
  if (low < high) {
    const pivotIndex = partition(array, low, high, animations);

    // Recursively sort the left and right halves
    quickSortHelper(array, low, pivotIndex - 1, animations);
    quickSortHelper(array, pivotIndex + 1, high, animations);
  }
};

const partition = (array, low, high, animations) => {
  const pivot = array[high]; // Choosing the last element as the pivot
  let i = low - 1;

  for (let j = low; j < high; j++) {
    // Compare current element with pivot
    animations.push(['color', j, high]);        // Push for color change

    if (array[j] < pivot) {
      i++;
      // Swap array[i] and array[j]
      animations.push(['swap', i, array[j]]);  // Push the swap animation
      animations.push(['swap', j, array[i]]);  // Push the swap animation
      [array[i], array[j]] = [array[j], array[i]];
    }

    animations.push(['color', j, high]);        // Push to revert color
  }

  // Swap the pivot element to its correct position
  animations.push(['color', i + 1, high]);       // Push for color change
  animations.push(['swap', i + 1, array[high]]); // Push the swap animation
  animations.push(['swap', high, array[i + 1]]); // Push the swap animation
  animations.push(['color', i + 1, high]);       // Push to revert color
  [array[i + 1], array[high]] = [array[high], array[i + 1]];

  return i + 1; // Return the index of the pivot
};

// Heap Sort
export const heapSort = (array) => {
  const animations = [];
  const n = array.length;

  // Build the max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i, animations);
  }

  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end (swap array[0] and array[i])
    animations.push(["color", 0, i]); // Color change for the swap
    animations.push(["color", 0, i]); // Revert the color after the swap
    animations.push(["swap", 0, array[i]]); // Push animation for root swap
    animations.push(["swap", i, array[0]]); // Push animation for end swap
    [array[0], array[i]] = [array[i], array[0]];

    // Call heapify on the reduced heap
    heapify(array, i, 0, animations);
  }

  return animations;
};

const heapify = (array, n, i, animations) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  // If left child is larger than the root
  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  // If right child is larger than the largest so far
  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  // If the largest is not the root, swap and continue heapifying
  if (largest !== i) {
    animations.push(["color", i, largest]); // Color change for comparison
    animations.push(["color", i, largest]); // Revert the color after comparison
    animations.push(["swap", i, array[largest]]); // Push animation for i-th swap
    animations.push(["swap", largest, array[i]]); // Push animation for largest swap
    [array[i], array[largest]] = [array[largest], array[i]];

    // Recursively heapify the affected subtree
    heapify(array, n, largest, animations);
  }
};


// Insertion Sort
export const insertionSort = (array) => {
  const animations = [];
  if (array.length <= 1) return array;

  // Perform insertion sort and generate animations
  insertionSortHelper(array, array.length, animations);
  
  return animations;
};

const insertionSortHelper = (array, endIdx, animations) => {
  // Traverse through the array from the second element
  for (let i = 1; i < endIdx; i++) {
    let key = array[i]; // The element to be positioned
    let j = i - 1;

    // Compare key with elements on the left of it and move them one position to the right if needed
    while (j >= 0 && array[j] > key) {
      // Animation for color change to indicate comparison
      animations.push(['color', j, i]); // Highlight comparison
      animations.push(['color', j, i]); // Revert color after comparison
      
      // Animation for swapping the heights (visual swap)
      animations.push(['swap', j + 1, array[j]]); // Move larger element to the right
      array[j + 1] = array[j];
      j--;
    }
    
    // Insert the key at the correct position
    animations.push(['swap', j + 1, key]); // Push the key to its correct position
    array[j + 1] = key;
  }
};


// Bubble Sort
export const bubbleSort = (array) => {
  const animations = [];
  if (array.length <= 1) return array;

  bubbleSortHelper(array, animations);
  return animations;
};

const bubbleSortHelper = (array, animations) => {
  const endIdx = array.length;
  
  // Perform Bubble Sort
  for (let i = 0; i < endIdx - 1; i++) {
    for (let j = 0; j < endIdx - i - 1; j++) {
      // Compare adjacent elements
      animations.push(['color', j, j + 1]); // Change color to indicate comparison
      animations.push(['color', j, j + 1]); // Revert the color back

      // Swap if the element is greater than the next
      if (array[j] > array[j + 1]) {
        animations.push(['swap', j, array[j + 1]]);   // Record swap for j
        animations.push(['swap', j + 1, array[j]]);   // Record swap for j + 1
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
};