import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ENVIRONMENT } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor(private http: HttpClient) { }

  getFormResponses(uuid: string): Observable<any> {
    return this.http.get(ENVIRONMENT.API_REF + 'responses/' + uuid);
  }
}
