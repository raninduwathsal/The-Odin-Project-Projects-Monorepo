document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const generateBtn = document.getElementById('generateBtn');

    function createGrid(size) {
        container.innerHTML = '';
        container.style.width = `${size * 20}px`;
        container.style.height = `${size * 20}px`;

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
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
