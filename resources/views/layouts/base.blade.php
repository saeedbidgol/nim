<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سامانه معدن کاری هوشمند - @yield('title') </title>

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{!! asset('css/vendor.css') !!}" />
    <link rel="stylesheet" href="{!! asset('css/app.css') !!}" />
    <!-- <link href="{{ asset('/css/fonts.css') }}" rel="stylesheet"> -->

</head>

<body class="gray-bg">
    <script src="https://www.google.com/recaptcha/api.js?hl=fa" async defer></script>
    @yield('content')
    @section('scripts') @show
</body>
</html> 