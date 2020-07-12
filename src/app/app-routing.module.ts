import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/Cancellation/tables.component';
import { FormsComponent } from './pages/Reschedule/forms.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/Changing info/notifications.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';



const routes: Routes = [
  {path: '',   redirectTo: '/signin', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path:'signup' , component: SignupComponent},
  {path:'signin' , component: SigninComponent},
  {path: 'reschedule', component: FormsComponent},
  {path: 'cancellation', component: TablesComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'changeinfo', component: NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
