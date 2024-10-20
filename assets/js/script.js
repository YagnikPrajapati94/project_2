const rangeInput = document.querySelectorAll(".range-input input");
const priceInput = document.querySelectorAll(".price-input input");
const progress = document.querySelector(".slider .progress");

const minPrice = parseInt(priceInput[0].min);
const maxPrice = parseInt(priceInput[1].max);

rangeInput.forEach(input => {
    input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);
        
        if (maxVal > maxPrice) {
            maxVal = maxPrice;
            rangeInput[1].value = maxVal;
        }
        if (minVal < minPrice) {
            minVal = minPrice;
            rangeInput[0].value = minVal;
        }

        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;

        updateProgress(minVal, maxVal);
    });
});

priceInput.forEach(input => {
    input.addEventListener("input", (e) => {
        let minVal = parseInt(priceInput[0].value);
        let maxVal = parseInt(priceInput[1].value);
        
        if (minVal < minPrice) {
            minVal = minPrice;
            priceInput[0].value = minVal;
        }
        if (maxVal > maxPrice) {
            maxVal = maxPrice;
            priceInput[1].value = maxVal;
        }

        rangeInput[0].value = minVal;
        rangeInput[1].value = maxVal;

        updateProgress(minVal, maxVal);
    });
});

function updateProgress(minVal, maxVal) {
    const progressWidth = ((maxVal - minPrice) / (maxPrice - minPrice)) * 100;
    const minWidth = ((minVal - minPrice) / (maxPrice - minPrice)) * 100;

    progress.style.left = `${minWidth}%`;
    progress.style.width = `${progressWidth - minWidth}%`;
}

// Initialize the progress bar on load
updateProgress(40, 600);
