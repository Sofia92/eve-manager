import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { DashboardComponent } from './pages/+dashboard/dashboard.component';
import { LoginComponent } from './pages/+login/login.component';

@Component({
  moduleId: module.id,
  selector: 'eve-manager-front-app',
  templateUrl: 'eve-manager-front.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@Routes([
	{ path: '/dashboard', component: DashboardComponent },
	{ path: '/login', component: LoginComponent },
])
export class EveManagerFrontAppComponent {
  title = 'eve-manager-front works!';
}
