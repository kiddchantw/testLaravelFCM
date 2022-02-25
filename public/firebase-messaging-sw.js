// import { getMessaging, getToken } from "firebase/messaging";
//
// // Get registration token. Initially this makes a network call, once retrieved
// // subsequent calls to getToken will return from cache.
// const messaging = getMessaging();
// getToken(messaging, { vapidKey: '<YOUR_PUBLIC_VAPID_KEY_HERE>' }).then((currentToken) => {
//     if (currentToken) {
//         // Send the token to your server and update the UI if necessary
//         // ...
//     } else {
//         // Show permission request UI
//         console.log('No registration token available. Request permission to generate one.');
//         // ...
//     }
// }).catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
//     // ...
// });
// Import the functions you need from the SDKs you need
//以上為v1版本
//https://firebase.google.com/docs/cloud-messaging/js/client#web-version-9_1
//v2版本
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYNO39HxM81KblZrCILNGylaDoOgX7YNE",
    authDomain: "test-fcm-3838e.firebaseapp.com",
    projectId: "test-fcm-3838e",
    storageBucket: "test-fcm-3838e.appspot.com",
    messagingSenderId: "341427886421",
    appId: "1:341427886421:web:97bd8a4884b903b7c877dc",
    measurementId: "G-Q259RSKB3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Message received.", payload);
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
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
