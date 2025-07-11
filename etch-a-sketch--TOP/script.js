document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById('gridContainer');
    const generateBtn = document.getElementById('generateBtn');

    function createGrid(size) {
        gridContainer.innerHTML = '';
        const squareSize = 20; // Size of each square
        gridContainer.style.width = `${size * squareSize}px`;
        gridContainer.style.height = `${size * squareSize}px`;
        // Set grid-template-columns and grid-template-rows properties
        gridContainer.style.setProperty('grid-template-columns', `repeat(${size}, 20px)`);
        gridContainer.style.setProperty('grid-template-rows', `repeat(${size}, 20px)`);


        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.addEventListener('mouseover', darkenSquare);
            gridContainer.appendChild(square);
        }
    }

    function darkenSquare(event) {
        let opacity = parseFloat(event.target.style.backgroundColor || 0);
        opacity += 1; // Increase opacity by 100% on each interaction
        event.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    }

    generateBtn.addEventListener('click', function() {
        let gridSize = prompt('Enter the number of squares per side for the new grid (max 100):');
        gridSize = parseInt(gridSize);
        if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
            alert('Please enter a valid number between 1 and 100.');
            return;
        }
        createGrid(gridSize);
    });

    createGrid(16); // Initial grid size
});
