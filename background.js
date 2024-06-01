chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(['reminderInterval'], function(result) {
        let reminderInterval = result.reminderInterval;
        if (reminderInterval === undefined) {
            reminderInterval = 15; 
            chrome.storage.sync.set({ reminderInterval: 15 });
        }
        chrome.alarms.create('waterReminder', { periodInMinutes: reminderInterval });
    });
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'waterReminder') {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: "icons/water-bottle.png",
            title: 'Hydration Reminder',
            message: 'Stay hydrated! It\'s time to drink some water.',
            priority: 2
        });
    }
});
