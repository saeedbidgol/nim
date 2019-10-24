import Vue from "vue";

import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend
} from "vee-validate/dist/vee-validate.full";
import { required } from "vee-validate/dist/rules";
import fa from "vee-validate/dist/locale/fa.json";

localize({
  fa: {
    messages: fa.messages,
    names: {
      name: "نام",
      user_id: "کاربر",
      family: "نام خانوادگی",
      father: "نام پدر",
      user_name: "نام کاربری",
      password: "رمزعبور",
      email: "ایمیل",
      mobile: "تلفن همراه",
      description: "توضیحات",
      title: "عنوان",
      subtitle: "توضیحات",
      telegram: "تلگرام",
      twitter: "توییتر",
      linkdin: "لینکدین",
      phone: "تلفن",
      group_id:'گروه',
      username:'نام کاربری',
      current_password:'رمزعبور فعلی',
      new_password:'رمزعبور جدید',
      confirm_password:'تکرار رمزعبور',
      expert:'کارشناس',
      about:'درباره ما',
      code:'کد طرح',
      reed:'شانه',
      density:'تراکم',
      back_color:'رنگ زمینه',
      color_count:'تعداد رنگ',
      dimension:'ابعاد',
      about:'درباره طرح',
      body:'متن اصلی'
    }
  }
});

localize("fa", fa);
Vue.component("v-validate", ValidationProvider);
Vue.component("v-validate-observer", ValidationObserver);
