# Sorting Algorithms Visualizer

This project is a visual representation of various sorting algorithms built using **React.js**. It allows users to see how different sorting algorithms work by visualizing the process step by step.

## Features

- **Visual Representation**: Animations to show how arrays are sorted by different algorithms.
- **Sorting Algorithms Available**:
  - Merge Sort
  - Quick Sort
  - Heap Sort
  - Insertion Sort
  - Bubble Sort

## Getting Started

### Prerequisites

To run this project locally, you will need:

- **Node.js**: Make sure Node.js is installed on your system. You can download it [here](https://nodejs.org/).
- **npm**: Installed with Node.js. Alternatively, you can use `yarn` if you prefer.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Abhinandan-git/sorting-visualizer.git
   cd sorting-visualizer
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm start
   ```

   The app will run in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view it.

### Build

To create an optimized production build:

```bash
npm run build
```

This will build the app for production and output the files to the `build` folder.

## How to Use

1. **Select a Sorting Algorithm**: You can choose between Merge Sort, Quick Sort, Heap Sort, Insertion Sort, and Bubble Sort.
2. **Start Sorting**: Click on the "Sort" button to start the visual representation of the selected algorithm.
3. **Reset**: You can reset the array at any time by clicking the "Generate New Array" button.

## Project Structure

```bash
.
├── public
│   └── index.html
├── src
│   ├── sortingAlgorithms  # Sorting algorithms implementation
│   ├── SortingVisualizer  # React components
│   ├── App.js             # Main application component
│   ├── index.js           # Entry point of the app
│   └── styles.css         # CSS styles
└── README.md
```

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner.

## Sorting Algorithms

- **Merge Sort**: A divide-and-conquer algorithm that splits the array into smaller subarrays and then merges them back in sorted order.
- **Quick Sort**: Another divide-and-conquer algorithm that picks a pivot and partitions the array into two halves, sorting them recursively.
- **Heap Sort**: Utilizes a binary heap to sort elements. It first builds a max heap and then repeatedly swaps the root with the last element, reducing the heap size.
- **Insertion Sort**: Builds the sorted array one item at a time, inserting each element into its correct position.
- **Bubble Sort**: Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **CSS**: For styling the UI and animations.
- **JavaScript**: Core language for implementing the sorting algorithms.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Abhinandan-git/sorting-visualizer/issues) if you want to contribute.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.