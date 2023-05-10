import React from 'react';

export default function notifyme() {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("Browser does not support desktop notifications");
    } else if (Notification.permission === "granted") {
      // Are notification permissions granted already?;
      //yes>>send notification
      const notification = new Notification("Don't forget to read today!");
      
    } else if (Notification.permission !== "denied") {
      // Ask the user for permission
      Notification.requestPermission().then((permission) => {
        // Permission granted > create a notification
        if (permission === "granted") {
          const notification = new Notification("You've signed up for Bookly notifications!");
        }
      });
    }
  }
