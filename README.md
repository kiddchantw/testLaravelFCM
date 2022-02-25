# test fcm

- [x] add laravel/ui

- [x] add kreait/laravel-firebase


- 測試中 laravel-notification-channels/fcm
  - https://github.com/laravel-notification-channels/fcm
  
  - [x] 建立 notification class
    - php artisan make:notification AccountActivated
  - [ ] 調整 user model
    - routeNotificationForFcm -> 空值 
    
  `想測試方向：先找出web中的device token，再透過FCM傳送通知給當下的device token能找到的homestead中的專案`



## 參考範例1  
web push notification sent by you on the browser:

https://www.positronx.io/laravel-send-web-push-notification-using-firebase-tutorial/
https://www.youtube.com/watch?v=VLTfDYBK4B8

- [x] Create Controller : app\Http\Controllers\WebNotificationController.php
- [x] Create Routes : routes/web.php
- [x] Set Up Blade View : resources/views/home.blade.php 
- [x] Create Firebase (FCM) File : public/firebase-messaging-sw.js

- GET /push-notificaiton (跑home.blade.php時)，
  - 出現以下錯誤提示：Uncaught FirebaseError: Messaging: This browser doesn't support the API's required to use the firebase SDK. (messaging/unsupported-browser)
  - 可能原因:      
      FCM supports only in localhost and the https enabled sites only


- POST /send-web-notification 500 (Internal Server Error) "
  - "registration_ids" field cannot be empty"
  -  找不到 user的 device_key ?

    

## 參考範例2 

https://www.itwonders-web.com/blog/push-notification-using-firebase-demo-tutorial/
https://github.com/kenng/firebase-push-notification-demo
- 直接新增一個  firebase.blade.php 導入 文章中 The Complete Solution 的 js code
- 錯誤訊息: Uncaught FirebaseError: Messaging: This browser doesn't support the API's required to use the firebase SDK.
  - 可能原因：   
    FCM supports only in localhost and the https enabled sites only
