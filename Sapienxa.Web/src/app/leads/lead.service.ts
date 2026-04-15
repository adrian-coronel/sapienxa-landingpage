import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface LeadRequest {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  pais: string;
  mensaje: string;
}

@Injectable({ providedIn: 'root' })
export class LeadService {
  private http = inject(HttpClient);

  submitLead(data: LeadRequest): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(`${environment.apiUrl}/api/leads`, data);
  }
}
