import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'mentors',
        loadChildren: () => import('./pages/mentors/mentors.module').then( m => m.MentorsPageModule)
      },
      {
        path: 'meet-ups',
        loadChildren: () => import('./pages/meet-ups/meet-ups.module').then( m => m.MeetUpsPageModule)
      },
      {
        path: 'nuggets',
        loadChildren: () => import('./pages/nuggets/nuggets.module').then( m => m.NuggetsPageModule)
      },  
      {
        path: 'feedback',
        loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
      },
      {
        path: 'bookings',
        loadChildren: () => import('./pages/bookings/bookings.module').then( m => m.BookingsPageModule)
      },
      {
        path: 'mentor-details/:id',
        loadChildren: () => import('./pages/mentor-details/mentor-details.module').then( m => m.MentorDetailsPageModule)
      },
      {
        path: 'mental',
        loadChildren: () => import('./pages/mental/mental.module').then( m => m.MentalPageModule)
      },
    ]
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'register-confirmation',
    loadChildren: () => import('./register-confirmation/register-confirmation.module').then( m => m.RegisterConfirmationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
