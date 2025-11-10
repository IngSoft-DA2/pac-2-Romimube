import { Component, computed } from '@angular/core';
import { ReflectionService } from '../services/reflection.service';

@Component({
  selector: 'app-reflection',
  templateUrl: './reflection.component.html',
  standalone: false,
})
export class ReflectionComponent {
  constructor(public reflectionService: ReflectionService) {}

  get isEmpty(): boolean {
    return !this.reflectionService.isLoading() &&
      !this.reflectionService.isError() &&
      this.reflectionService.importers().length === 0;
  }

  // método para bindear al botón
  onLoad() {
    this.reflectionService.getImporters();
  }
}
