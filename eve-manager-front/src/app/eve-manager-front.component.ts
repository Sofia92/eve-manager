import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { DashboardComponent } from './pages/+dashboard/dashboard.component';

@Component({
  moduleId: module.id,
  selector: 'eve-manager-front-app',
  styleUrls: ['eve-manager-front.component.css'],
  templateUrl: 'eve-manager-front.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@Routes([
	{ path: '/', component: DashboardComponent },
	{ path: '/dashboard', component: DashboardComponent },
])
export class EveManagerFrontAppComponent {
  title = 'eve-manager-front works!';
}
