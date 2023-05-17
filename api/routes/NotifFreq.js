const cron = require("node-cron");
const notifier = require("node-notifier");

function sendNotification(user) {
  const notificationOptions = {
    appID: 'Bookly',
    title: "Reading Check-In!",
    message: "Did you read today?",
    icon: "./Bookstack.png",
  };

  notifier.notify(notificationOptions, (error, response) => {
    if (error) {
      console.error("Error sending notification:", error);
    } else {
      console.log("Notification sent");
    }
  });
}

module.exports = {
  sendNotification: sendNotification,
};
