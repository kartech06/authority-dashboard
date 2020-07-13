import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TablesComponent,
    FormsComponent,
    TypographyComponent,
    MapsComponent,
    NotificationsComponent,
    SignupComponent,
    SigninComponent,
    TraindbComponent,
    RetrainComponent,
    CancelComponent,
    MaptrainComponent,
    OccupancyComponent,
    TsidebarComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
