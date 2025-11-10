// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ReflectionComponent } from './features/reflection/pages/reflection.component';
import { ReflectionGuard } from './core/guards/reflection.guard';

export const routes: Routes = [
  {
    path: 'reflection',
    component: ReflectionComponent,
    canActivate: [ReflectionGuard],
  },
];
