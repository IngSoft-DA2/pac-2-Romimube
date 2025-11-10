import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { VisitCounterService } from '../services/visit-counter.service';

@Injectable({
  providedIn: 'root'
})
export class ReflectionGuard implements CanActivate {
  private readonly LIMIT = 20;

  constructor(
    private counter: VisitCounterService,
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    this.counter.increment();

    return this.counter.count <= this.LIMIT;
  }
}
