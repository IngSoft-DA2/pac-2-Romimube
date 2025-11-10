import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitCounterService {
  private _count = 0;

  get count(): number {
    return this._count;
  }

  increment(): void {
    this._count++;
  }

  reset(): void {
    this._count = 0;
  }
}
