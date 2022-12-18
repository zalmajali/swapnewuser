import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  //this array for when user not login
  public appWithoutLogInPage = [
    { title: 'Profils', url: '/profile',icon:"person-outline"},
    { title: 'Setting', url: '/setting',icon:"settings-outline"},
    { title: 'Tickets', url: '/home',icon:"file-tray-full-outline"},
    { title: 'Logout', url: '/policy',icon:"log-out-outline"},
  ];
  //this array for when user login to account
  public appWithLoginPage = [
    { title: 'الرئيسية', url: '/home',icon:"person-outline"},
    { title: 'دعوة صديق', url: '/sendinvitation',icon:"person-outline"},
    { title: 'السجلات', url: '/archives',icon:"person-outline"},
    { title: 'المفضلة', url: '/favourite' ,icon:"person-outline"},
    { title: 'صفحتي الشخصية', url: '/mypage' ,icon:"person-outline"},
    { title: 'حسابي', url: '/account' ,icon:"person-outline"},
    { title: 'تغير كلمة المرور', url: '/changepassword' ,icon:"person-outline"},
    { title: 'إلغاء الحساب', url: '/deleteaccount',icon:"person-outline" },
    { title: 'المساعدة', url: '/help' ,icon:"person-outline"},
    { title: 'حول التطبيق', url: '/about',icon:"person-outline"},
    { title: 'سياسة الخصوصية', url: '/policy',icon:"person-outline"},
    { title: 'تسجيل الخروج', url: '',icon:"person-outline"},
  ];
  constructor() {
  }

}
