const addNumber = () => {
    let count = 0;
    const previousNumberString = document.getElementById('show-number').innerText;
    const previousNumber = parseInt(previousNumberString) || 0; // Ensure previousNumber is a valid number
    const newNumber = count + 1;
    const number = previousNumber + newNumber;
    saveNumber(number);
    displayNumber(); // Display the updated number
};

const getStoredNumber = () => {
    let number = 0; // Initialize with a default value
    const storedNumber = window.localStorage.getItem('number');
    if (storedNumber) {
        number = JSON.parse(storedNumber);
    }
    return number;
};

const saveNumber = (number) => {
    window.localStorage.setItem('number', JSON.stringify(number));
};

const displayNumber = () => {
    const savedNumber = getStoredNumber();
    document.getElementById('show-number').innerText = savedNumber;
};

displayNumber(); 