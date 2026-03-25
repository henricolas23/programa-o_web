document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0;
    const clickCounterDisplay = document.getElementById('clickCounter');
    const addTextInput = document.getElementById('addTextInput');
    const characterCountDisplay = document.getElementById('characterCount');
    const itemList = document.getElementById('itemList');

    document.getElementById('incrementButton').addEventListener('click', () => {
        clickCount++;
        clickCounterDisplay.textContent = clickCount;
    });

    document.getElementById('decrementButton').addEventListener('click', () => {
        clickCount = Math.max(0, clickCount - 1);
        clickCounterDisplay.textContent = clickCount;
    });

    addTextInput.addEventListener('input', () => {
        const textLength = addTextInput.value.length;
        characterCountDisplay.textContent = textLength;
    });

    document.getElementById('addItemButton').addEventListener('click', () => {
        const newItemText = addTextInput.value.trim();
        if (newItemText) {
            const newItem = document.createElement('p');
            newItem.textContent = newItemText;
            itemList.appendChild(newItem);
            addTextInput.value = '';
            characterCountDisplay.textContent = 0;
        }
    });

    document.getElementById('resetButton').addEventListener('click', () => {
        clickCount = 0;
        clickCounterDisplay.textContent = clickCount;
        addTextInput.value = '';
        characterCountDisplay.textContent = 0;
        itemList.innerHTML = '';
    });
});