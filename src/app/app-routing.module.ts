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
import { TraindbComponent } from './pages/traindb/traindb.component';
import { RetrainComponent } from './pages/retrain/retrain.component';
import { CancelComponent } from './pages/cancel/cancel.component';
import { MaptrainComponent } from './pages/maptrain/maptrain.component';
import { OccupancyComponent } from './pages/occupancy/occupancy.component';
import { TsidebarComponent } from './components/tsidebar/tsidebar.component';


const routes: Routes = [
  {path: '',   redirectTo: '/signin', pathMatch: 'full'},
  {path: 'train-dashboard', component: TraindbComponent},
  {path: 'train-reschedule',component: RetrainComponent},
  {path: 'train-cancel',component: CancelComponent},
  {path: 'train-location',component: MaptrainComponent},
  {path: 'train-occupancy',component: OccupancyComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path:'signup' , component: SignupComponent},
  {path:'signin' , component: SigninComponent},
  {path: 'reschedule', component: FormsComponent},
  {path: 'check-information', component: TablesComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'occupancy', component: NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
