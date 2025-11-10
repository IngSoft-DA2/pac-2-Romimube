import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class ReflectionService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  importers = signal<string[]>([]);
  isLoading = signal(false);
  isError = signal<string | null>(null);

  getImporters(): void {
    this.isLoading.set(true);
    this.isError.set(null);
    this.importers.set([]);

    this.http.get<string[]>("/api/reflection/importers").subscribe({
      next: (response) => {
        this.importers.set(response ?? []);
        this.isLoading.set(false);
      },
      error: (error) => {
        const message = error?.error?.message ?? "Ocurrió un error inesperado";
        this.snackBar.open(message, "Cerrar", { duration: 3000 });
        this.isError.set(message);
        this.isLoading.set(false);
      },
    });
  }

  clear(): void {
    this.importers.set([]);
    this.isError.set(null);
    this.isLoading.set(false);
  }
}
