<template>
  <!--<div class="side">
      
  </div>!-->

  <div class="page-sidebar">
    <a class="logo-box bgc85" href="/">
      <div class="logo-content">
        <span>امداد آپادانا</span>
      </div>
    </a>
    <div class="page-sidebar-menu">
      <ul class="accordion-menu">
        <li v-can:view="'dashboard'">
          <router-link to="/dashboard">
            <i class="menu-icon fas fa-home"></i>
            <span>داشبورد</span>
          </router-link>
        </li>
        <li v-can:view="'requests'">
          <router-link to="/repair-requests">
            <i class="menu-icon fas fa-tasks"></i>
            <span>مشاهده درخواست ها</span>
          </router-link>
        </li>
        <li v-can:view="'profile'">
          <router-link to="/users/profile">
            <i class="menu-icon fas fa-user-edit"></i>
            <span>ویرایش پروفایل</span>
          </router-link>
        </li>
        <li v-can:view="'site_features'">
          <a href="javascript:void(0);">
            <i class="menu-icon fas fa-cogs"></i>
            <span>تنظیمات صفحه اصلی</span>
            <i class="accordion-icon fa fa-angle-left"></i>
          </a>
          <ul>
            <li v-can:view="'sliders'">
              <router-link to="/slides">
                <span>اسلایدر</span>
              </router-link>
            </li>
            <li v-can:view="'about_management'">
              <router-link to="/about-management">
                <span>درباره مدیریت</span>
              </router-link>
            </li>
            <li v-can:view="'portfolio'">
              <router-link to="/portfolio">
                <span>نمونه کارها</span>
              </router-link>
            </li>
            <li v-can:view="'contact_us'">
              <router-link to="/contact-us">
                <span>اطلاعات تماس با ما</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li v-can:view="'service_men'">
          <a href="javascript:void(0);">
            <i class="menu-icon fas fa-tools"></i>
            <span>تعمیرکاران</span>
            <i class="accordion-icon fa fa-angle-left"></i>
          </a>
          <ul>
            <li v-can:view="'service_man_management'">
              <router-link to="service-men/management">مدیریت تعمیرکاران</router-link>
            </li>
            <li v-can:view="'service_man_list'">
              <a href="#">مشاهده لیست تعمیرکاران</a>
            </li>
            <li v-can:view="'service_man_report'">
              <a href="#">گزارش کارکرد تعمیرکاران</a>
            </li>
          </ul>
        </li>
        <li v-can:view="'users'">
          <a href="javascript:void(0);">
            <i class="menu-icon fas fa-user-cog"></i>
            <span>مدیریت کاربران</span>
            <i class="accordion-icon fa fa-angle-left"></i>
          </a>
          <ul>
            <li v-can:view="'roles'">
              <router-link to="/roles">
                <span>مدیریت نقش</span>
              </router-link>
            </li>
            <li v-can:view="'users'">
              <a href="#">مدیریت کاربر</a>
            </li>
          </ul>
        </li>
        <li v-can:view="'group_work'">
          <a href="javascript:void(0);">
            <i class="fas fa-users-cog"></i>
            <span>مدیریت گروه های کاری</span>
            <i class="accordion-icon fa fa-angle-left"></i>
          </a>
          <ul>
            <li v-can:view="'group_work'">
              <router-link to="/group-work">
                <span>مدیریت گروه</span>
              </router-link>
            </li>
            <li v-can:view="'sub_group_work'">
              <router-link to="/sub-group-work">
                <span>مدیریت زیرگروه</span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
