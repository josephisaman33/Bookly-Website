/*
import React from 'react';

export default function notifyme() {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification("Don't forget to read today!");
      // …
    } else if (Notification.permission !== "denied") {
      // Ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, create a notification
        if (permission === "granted") {
          const notification = new Notification("You've signed up for Bookly notifications!");
        }
      });
    }
  }
  */