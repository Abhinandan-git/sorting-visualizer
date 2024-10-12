/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './SortingVisualizer.css';
import * as sortingAlgorithm from '../sortingAlgorithms/sortingAlgorithms';

const SortingVisualizer = () => {
	const SECONDARY_COLOR = '#f64740';
	const PRIMARY_COLOR = '#c4d6b0';
	const ANIMATION_TIME = 2;

	const [array, setArray] = useState([]);

	useEffect(() => {
		generateArray();
	}, [])


	const randomIntegerFromRange = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const generateArray = () => {
		const array = [];

		// Get dimensions of the screen
		let viewportWidth = window.innerWidth;

		// Display number of bars according to the screen size
		let numberOfBars = 0.175 * viewportWidth;
		for (let i = 0; i < numberOfBars; i++) {
			array.push(randomIntegerFromRange(10, 1000));
		}
		setArray([...array]);
	};

	const changeBarColor = (arrayBars, barOneIdx, barTwoIdx, color, i) => {
		const barOneStyle = arrayBars[barOneIdx].style;
		const barTwoStyle = arrayBars[barTwoIdx].style;

		setTimeout(() => {
			barOneStyle.backgroundColor = color;
			barTwoStyle.backgroundColor = color;
		}, i * ANIMATION_TIME);
	};

	const changeBarHeight = (arrayBars, barOneIdx, newHeight, i) => {
		const barOneStyle = arrayBars[barOneIdx].style;

		setTimeout(() => {
			barOneStyle.height = `${newHeight / 10}%`;
		}, i * ANIMATION_TIME);
	};

	const performSortingAnimation = (sortingAlgorithm, array) => {
		const animations = sortingAlgorithm(array);
		const arrayBars = document.getElementsByClassName('array-bar');
		let count = 0
		
		animations.forEach((animation, i) => {
			const isColorChange = animation[0] === 'color';

			if (isColorChange) {
				count++;
				//eslint-disable-next-line
				const [func, barOneIdx, barTwoIdx] = animation;
				const color = count % 2 === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
				changeBarColor(arrayBars, barOneIdx, barTwoIdx, color, i);
			} else {
				//eslint-disable-next-line
				const [func, barOneIdx, newHeight] = animation;
				changeBarHeight(arrayBars, barOneIdx, newHeight, i);
			}
		});
	};

	const mergeSort = () => performSortingAnimation(sortingAlgorithm.mergeSort, array);
	const quickSort = () => performSortingAnimation(sortingAlgorithm.quickSort, array);
	const heapSort = () => performSortingAnimation(sortingAlgorithm.heapSort, array);
	const insertionSort = () => performSortingAnimation(sortingAlgorithm.insertionSort, array);
	const bubbleSort = () => performSortingAnimation(sortingAlgorithm.bubbleSort, array);

	return (
		<>
			<div className="button-container">
				<button type="button" onClick={() => generateArray()}>
					Generate new array
				</button>
				<button type="button" onClick={() => mergeSort()}>
					Merge Sort
				</button>
				<button type="button" onClick={() => quickSort()}>
					Quick Sort
				</button>
				<button type="button" onClick={() => heapSort()}>
					Heap Sort
				</button>
				<button type="button" onClick={() => insertionSort()}>
					Insertion Sort
				</button>
				<button type="button" onClick={() => bubbleSort()}>
					Bubble Sort
				</button>
			</div>
			<div className="array-container">
				{array.map((value, idx) => (
					<div
						className="array-bar"
						key={idx}
						style={{ height: `${value / 10}%` }}
					/>
				))}
			</div>
		</>
	)
}

export default SortingVisualizer;