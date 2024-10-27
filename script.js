document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('color-box');
    const button = document.getElementById('change-color-button');

    const generateRandomColor = () => {
        const hexChars = '0123456789ABCDEF';
        let colorCode = '#';
        for (let i = 0; i < 6; i++) {
            colorCode += hexChars[Math.floor(Math.random() * 16)];
        }
        return colorCode;
    };

    button.addEventListener('click', () => {
        box.style.backgroundColor = generateRandomColor();
    });
});