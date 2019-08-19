<!DOCTYPE html>
<html lang="fa" dir="rtl">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نیم‌رخ بافت - @yield('title') </title>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ asset('css/vendor.css') }}" />
    <link rel="stylesheet" href="{{ mix('css/app.css') }}" />
    <link href="images/favicon.png" rel="icon">
  <link href="img/apple-touch-icon.png" rel="apple-touch-icon">
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Poppins:300,400,500,700" rel="stylesheet">
</head>

<body class="rtls skin-1 canvas-menu top-navigation" style="font-family: iranyekan;" >
    <!-- Wrapper-->
    <div id="wrapper">

        <header id="header">
            <div class="container">
                <div class="navbar-logo">
                    <div id="logo" class="pull-left">
                        <a href="#hero"><img src="uploads/logo.svg" alt="نیم رخ بافت" title="" /></img></a>
                        <!-- Uncomment below if you prefer to use a text logo -->
                        <!--<h1><a href="#hero">Regna</a></h1>-->

                    </div>
                    <div id="logo-english-text">
                        <span>NimrokhBaft Carpet</span>
                    </div>
                </div>
                <!-- Top -->
                @include('layouts.topnavbar')

            </div>
        </header><!-- #header -->

        @include('layouts.hero')
        <!-- Page wrapper -->
        <div id="page-wrapper" class="gray-bg">


            <!-- Main view  -->
            {{--@yield('content')--}}
            <div class="wrapper wrapper-content animated fadeInRight" style="height: 70%;">
                <router-view name="main"></router-view>
            </div>

            <!-- Footer -->
            @include('layouts.footer')

        </div>
        <!-- End page wrapper-->

    </div>
    <!-- End wrapper-->

    <script src="{{ mix('js/app.js') }}"></script>
    <script src="{{ asset('js/base.js') }}"></script>
</body>

</html>
