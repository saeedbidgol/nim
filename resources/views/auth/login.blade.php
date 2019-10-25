@extends('dashboard.base')

@section('title','ورود')

@section('content')
<div class="page-container">
    <div class="page-inner login-page">
        <div id="main-wrapper" class="container-fluid">
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6 login-box">
                    <h4 class="login-title">ورود به پنل</h4>
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="form-group{{ $errors->has('username') || $errors->has('email')  ? ' has-error' : '' }}">
                            <label for="exampleInputEmail1">نام کاربری</label>
                            <input id="login" type="login" class="form-control" name="login" value="{{ old('username') }}" required oninvalid="this.setCustomValidity('نام کاربری الزامی‌ است!')" oninput="this.setCustomValidity('')" autocomplete="username" autofocus>
                            @if ($errors->has('email') || $errors->has('username') )
                            <span class="help-block">
                                <strong>{{$errors->has('mobile') ? $errors->first('username') : $errors->first('email') }}</strong>
                            </span>
                            @endif
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">رمزعبور:</label>
                            <input type="password" class="form-control @error('password') is-invalid @enderror" id="exampleInputPassword1" name="password" required autocomplete="current-password" oninvalid="(this.validity.typeMismatch || this.validity.patternMismatch || this.validity.badInput || !this.validity.valid)?this.setCustomValidity('رمزعبور معتبر نیست.'):this.setCustomValidity('رمزعبور الزامی است.')" oninput="this.setCustomValidity('')">
                            @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                        <div class="form-group{{ $errors->has('g-recaptcha-response') ? ' has-error' : '' }}">
                            {!! NoCaptcha::renderJs('fa') !!}
                            {!! NoCaptcha::display() !!}

                            @if ($errors->has('g-recaptcha-response'))
                            <span class="help-block">
                                <strong>{{ $errors->first('g-recaptcha-response') }}</strong>
                            </span>
                            @endif
                        </div>
                        <button type="submit" class="btn btn-primary">ورود</button>
                        <!-- <br>
                        @if (Route::has('password.request'))
                        <a class="btn btn-link" href="{{ route('password.request') }}">
                            رمزعبور خود را فراموش کرده اید؟
                        </a>
                        @endif -->
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="js/vendor/jquery.min.js" type="text/javascript"></script>
<script>
    function resizeReCaptcha() {

        var width = $(".g-recaptcha").parent().width();

        if (width < 302) {
            var scale = width / 302;
        } else {
            var scale = 1;
        }

        $(".g-recaptcha").css('transform', 'scale(' + scale + ')');
        $(".g-recaptcha").css('-webkit-transform', 'scale(' + scale + ')');
        $(".g-recaptcha").css('transform-origin', '272px 0');
        $(".g-recaptcha").css('-webkit-transform-origin', '272px 0');
    };

    $(document).ready(function() {

        $(window).on('resize', function() {
            resizeReCaptcha();
        });

        resizeReCaptcha();

    });
</script>
<style>
.login-page{
  background: url("/uploads/background/login.jpg") no-repeat fixed;
  background-size: cover;
}
:root .page-inner {
    padding-bottom: 0 !important;
}    
</style>
@endsection
