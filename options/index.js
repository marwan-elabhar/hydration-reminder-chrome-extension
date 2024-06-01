chrome.storage.sync.get('reminderInterval', ({reminderInterval}) => {
    document.getElementById('reminder').value = reminderInterval;
})

document.querySelector('#submit').addEventListener('click', () => {
    let reminderInterval = document.getElementById('reminder').value
    if (reminderInterval) {
        chrome.storage.sync.set({ 'reminderInterval': parseInt(reminderInterval) }, () => {
            let messageElement = document.getElementById('message');
            messageElement.style.display = 'block';
            
            setTimeout(() => {
                messageElement.style.display = 'none';
            }, 5000);
        })
    }
})