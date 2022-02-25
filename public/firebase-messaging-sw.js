// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    // databaseURL: 'https://project-id.firebaseio.com',
    apiKey: "AIzaSyBYNO39HxM81KblZrCILNGylaDoOgX7YNE",
    authDomain: "test-fcm-3838e.firebaseapp.com",
    projectId: "test-fcm-3838e",
    storageBucket: "test-fcm-3838e.appspot.com",
    messagingSenderId: "341427886421",
    appId: "1:341427886421:web:97bd8a4884b903b7c877dc",
    measurementId: "G-Q259RSKB3H"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Message received.", payload);
    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };
    return self.registration.showNotification(
        title,
        options,
    );
});
