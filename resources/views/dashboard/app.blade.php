<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">

<head>
    <!-- <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('/images/favicon/apple-touch-icon.png') }}"> -->
    <!-- <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('/images/favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('/images/favicon/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('/images/favicon/site.webmanifest') }}"> -->
    <meta charset="utf-8">
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>نیم رخ-داشبورد</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <!-- <link rel="stylesheet" href="css/plugins/bootstrap.min.css" /> -->
    <link href="{{ asset('css/admin.css') }}" rel="stylesheet">
</head>

<body id="dashboard" class="page-sidebar-fixed page-header-fixed" style="margin: 0 !important;">
    <div id="wrapper" class="page-container">

        <!-- Right -->
        @include('dashboard.right')

        <!-- Main view  -->
        <div class="page-content">
            @include('dashboard.topnavbar')
            <div class="page-inner">
            {{-- @yield('content') --}}
                <router-view name="main">
         
                </router-view>
                @include('dashboard.footer')
            </div>
            @include('dashboard.left')
        </div>

        <!-- Footer -->
        


    </div>
    <!-- End wrapper-->
    @auth
    <script>
        window.user = @json(usr());
    </script>
    @endauth
    
    <script src="{!! asset('js/app.js') !!}" type="text/javascript"></script>
    <script src="{!! asset('js/admin.js') !!}" type="text/javascript"></script>
    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">@csrf</form>
</body>

</html>
