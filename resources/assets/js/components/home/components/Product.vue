<template>
<div id="product">
    <div class="spacer"></div>
    <div class="gallery-container">
        <div class="row">
            <div class="col-lg-3">
                <div class="right-side-bar">
                    <p class="filter" >فرش ماشینی ۱۰۰۰ شانه</p>
                    <div class="row search">
                        <div class="col-12">
                            <form action="">
                                <input class="search-text" type="text" placeholder="کد یا نام فرش ">
                                <button type="button" class="search-btn">جستجو </button>
                            </form>
                        </div>
                    </div>
                    <div class="row">
                        <div :class="{'col-12':true, 'collapse':isCollapseGroup}" id="grouping">
                            <div class="grouping">
                                <span class="collapse-btn" @click="isCollapseGroup=!isCollapseGroup"></span>
                                <span class="header-text">دسته‌بندی محصولات</span>
                                <ul class="group-list">
                                    <li>فرش ۱۵۰۰ شانه</li>
                                    <li>فرش ۱۲۰۰ شانه</li>
                                    <li class="active">فرش ۱۰۰۰ شانه</li>
                                    <li>فرش ۷۰۰ شانه</li>
                                    <li>فرش ۷۰۰ شانه</li>
                                    <li>فرش ۷۰۰ شانه</li>
                                    <li>فرش ۷۰۰ شانه</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div :class="{'col-12':true, 'collapse':isCollapseColor}" >
                            <div class="grouping">
                                <span class="collapse-btn" @click="isCollapseColor=!isCollapseColor"></span>
                                <span class="header-text">رنگ‌بندی محصولات</span>
                                <ul class="color-list">
                                    <div class="row">
                                        <li class="col-lg-2" ><span id="color1"></span></li>
                                        <li class="col-lg-2" ><span id="color2"></span></li>
                                        <li class="col-lg-2" ><span id="color3"></span></li>
                                        <li class="col-lg-2" ><span id="color4" class="active"></span></li>
                                        <li class="col-lg-2" ><span id="color5"></span></li>
                                        <li class="col-lg-2" ><span id="color6"></span></li>
                                    </div>
                                    <div class="row">
                                        <li class="col-lg-2" ><span id="color7"></span></li>
                                        <li class="col-lg-2" ><span id="color8"></span></li>
                                        <li class="col-lg-2" ><span id="color9"></span></li>
                                        <li class="col-lg-2" ><span id="color10"></span></li>
                                        <li class="col-lg-2" ><span id="color11"></span></li>
                                        <li class="col-lg-2" ><span id="color12"></span></li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div :class="{'col-12':true, 'collapse':isCollapseColorCount}" id="grouping">
                            <div class="grouping">
                                <span class="collapse-btn" @click="isCollapseColorCount=!isCollapseColorCount"></span>
                                <span class="header-text">تعداد رنگ محصولات</span>
                                <ul class="group-list">
                                    <li>۸ رنگ</li>
                                    <li>۱۰ رنگ</li>
                                    <li class="active">۱۲ رنگ</li>
                                    <li>۱۴ رنگ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="col-lg-9"> 
                <div class="content">
                    <div class="row" id="product-details">
                        <div class="col-lg-6" id="product-items">
                            <p><span class="title">کد طرح:</span>۸۷۴</p>
                            <p><span class="title">نام طرح:</span>یاشار</p>
                            <p><span class="title">رنگ زمینه:</span>سرمه‌ای</p>
                            <p><span class="title">جنس نخ خاب:</span>۱۰۰٪ آکریلیک</p>
                            <p><span class="title">جنس نخ تار:</span>پنبه و پلی‌استر</p>
                            <p><span class="title">جنس نخ پود:</span>پنبه و جوت</p>
                            <p><span class="title">اندازه:</span>۲*۳</p>
                            <div class="row" style="margin: 48px 0 0 0 !important;">
                                <div class="col-lg-6">
                                
                                    <p class="price">۱,۷۲۰,۰۰۰<span>تومان</span></p>
                                </div>
                                <div class="col-lg-6">
                                    <p id="order-title">تماس برای ثبت سفارش فوری</p>
                                    <button id="order-btn">تماس با واحد فروش</button>
                                </div>
                            </div>
                        </div>  
                        <div class="col-lg-6" id="product-image">
                            <img src="/uploads/products/product1.jpg" width="100%" height="100%"> 
                        </div>
                    </div>
                    <div class="row" id="decoration-content">
                        <div class="col-lg-5" id="decoration-text">
                            <span class="title">نمای دکوراسیون</span>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان 
                            </p> 
                        </div>
                        <div class="col-lg-7" id="decoration-image">
                            <img src="/uploads/decoration/decoration.jpg" alt="" width="100%" height="100%">
                        </div>
                    </div>
                    <div class="row" id="product-suggestion">
                        <h2 class="title">محصولات مرتبط</h2>
                        <div class="col-lg-3"> 
                            <div class="product">
                                <img src="/uploads/products/product1.jpg" alt="فرش زیبا">
                                <div class="text">
                                    <h3 class="product-name">ارکیده سرمه‌ای</h3>
                                    <p class="details1">۷۰۰ شانه تراکم ۲۵۵۰</p>
                                    <p class="details2">۸ رنگ</p>
                                    <p class="price">۱,۷۲۰,۰۰۰ تومان</p>
                                    <a href="" class="more">اطلاعات بیشتر</a>
                                </div>
                            </div>
                            
                        </div>
                         <div class="col-lg-3"> 
                            <div class="product">
                                <img src="/uploads/products/product1.jpg" alt="فرش زیبا">
                                <div class="text">
                                    <h3 class="product-name">ارکیده سرمه‌ای</h3>
                                    <p class="details1">۷۰۰ شانه تراکم ۲۵۵۰</p>
                                    <p class="details2">۸ رنگ</p>
                                    <p class="price">۱,۷۲۰,۰۰۰ تومان</p>
                                    <a href="" class="more">اطلاعات بیشتر</a>
                                </div>
                            </div>
                            
                        </div>
                         <div class="col-lg-3"> 
                            <div class="product">
                                <img src="/uploads/products/product1.jpg" alt="فرش زیبا">
                                <div class="text">
                                    <h3 class="product-name">ارکیده سرمه‌ای</h3>
                                    <p class="details1">۷۰۰ شانه تراکم ۲۵۵۰</p>
                                    <p class="details2">۸ رنگ</p>
                                    <p class="price">۱,۷۲۰,۰۰۰ تومان</p>
                                    <a href="" class="more">اطلاعات بیشتر</a>
                                </div>
                            </div>
                            
                        </div>
                         <div class="col-lg-3"> 
                            <div class="product">
                                <img src="/uploads/products/product1.jpg" alt="فرش زیبا">
                                <div class="text">
                                    <h3 class="product-name">ارکیده سرمه‌ای</h3>
                                    <p class="details1">۷۰۰ شانه تراکم ۲۵۵۰</p>
                                    <p class="details2">۸ رنگ</p>
                                    <p class="price">۱,۷۲۰,۰۰۰ تومان</p>
                                    <a href="" class="more">اطلاعات بیشتر</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div>
  
</template>

<script>
export default {
props:['id'],
data(){
    return {
        isCollapseGroup:false,
        isCollapseColor:false,
        isCollapseColorCount:false,
    }
}
}

</script>

<style>

</style>