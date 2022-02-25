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



## 其他測試參考

https://www.itwonders-web.com/blog/push-notification-using-firebase-demo-tutorial/
- 直接新增一個  firebase.blade.php 導入 文章中 The Complete Solution 的 js code
- 錯誤訊息: Uncaught FirebaseError: Messaging: This browser doesn't support the API's required to use the firebase SDK.
  - 可能問題:   
    FCM supports only in localhost and the https enabled sites only
