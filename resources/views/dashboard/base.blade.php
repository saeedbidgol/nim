<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>امداد آپادانا - @yield('title') </title>

        <link rel="icon" href="{{ asset('/images/logo/logo.svg') }}" sizes="any" type="image/svg+xml">
        <link rel="stylesheet" href="{!! asset('css/vendor.css') !!}" />
        <link rel="stylesheet" href="css/plugins.css" />
        <link rel="stylesheet" href="{!! asset('css/app.css') !!}" />

    </head>

<body class="rtl" id="auth">
    {{-- <script src="https://www.google.com/recaptcha/api.js?hl=fa" async defer></script> --}}
    @yield('content')
    @section('scripts') @show
</body>
</html>
