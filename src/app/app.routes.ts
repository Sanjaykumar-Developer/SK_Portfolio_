import { Routes } from '@angular/router';

// Simple routes using lazy `loadComponent` for small standalone pages.
export const routes: Routes = [
	// load the home page at root
	{ path: '', loadComponent: () => import('./app').then(m => m.App) },
	{ path: 'about', loadComponent: () => import('./About/about.component').then(m => m.AboutComponent) },
	{ path: 'projects', loadComponent: () => import('./Project/project.component').then(m => m.ProjectsComponent) },
	{ path: 'contact', loadComponent: () => import('./Contact/contact.component').then(m => m.ContactComponent) },
	{ path: '**', redirectTo: '' }
];
