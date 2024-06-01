chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create('waterReminder', { periodInMinutes: 1 });
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
  