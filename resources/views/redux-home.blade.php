<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    {{--<link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">--}}
    <title>Beera</title>

</head>
<body>
<div id="app-container"></div>

<!-- Scripts -->
<script src="{{ asset('js/redux/redux_app.js') }}"></script>
{{--<script src="http://localhost:3000/js/redux_app.js"></script>--}}
</body>
</html>
