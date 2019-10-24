<template>
  <div class="page-sidebar">
    <a class="logo-box bgc85" href="/">
      <div class="logo-content">
        <span>نیم رخ بافت</span>
      </div>
    </a>
    <div class="page-sidebar-menu">
      <ul class="accordion-menu">
        <li>
          <router-link to="/dashboard">
            <i class="menu-icon fas fa-home"></i>
            <span>داشبورد</span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/gallery">
            <i class="menu-icon fas fa-image"></i>
            <span>گالری محصولات</span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/slides">
            <i class="menu-icon fas fa-images"></i>
            <span>اسلایدر</span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/about-us">
            <i class="menu-icon fab fa-readme"></i>
            <span>درباره ما</span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/catalogues">
            <i class="menu-icon fas fa-book-open"></i>
            <span>کاتالوگ</span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/contact-us">
            <i class="menu-icon fas fa-code-branch"></i>
            <span>شبکه های اجتماعی</span>
          </router-link>
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
