@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Dashboard') }}</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        {{ __('You are logged in!') }}

{{--                        <script>--}}
{{--                            var firebaseConfig = {--}}
{{--                                // apiKey: 'api-key',--}}
{{--                                apiKey: "AIzaSyBYNO39HxM81KblZrCILNGylaDoOgX7YNE",--}}
{{--                                // authDomain: 'project-id.firebaseapp.com',--}}
{{--                                authDomain: "test-fcm-3838e.firebaseapp.com",--}}
{{--                                databaseURL: 'https://project-id.firebaseio.com',--}}
{{--                                // projectId: 'project-id',--}}
{{--                                projectId: "test-fcm-3838e",--}}
{{--                                // storageBucket: 'project-id.appspot.com',--}}
{{--                                storageBucket: "test-fcm-3838e.appspot.com",--}}
{{--                                // messagingSenderId: 'sender-id',--}}
{{--                                messagingSenderId: "341427886421",--}}
{{--                                // appId: 'app-id',--}}
{{--                                appId: "1:341427886421:web:97bd8a4884b903b7c877dc",--}}
{{--                                // measurementId: 'G-measurement-id',--}}
{{--                                measurementId: "G-Q259RSKB3H",--}}
{{--                            };--}}
{{--                            firebase.initializeApp(firebaseConfig);--}}
{{--                        </script>--}}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
