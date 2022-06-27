import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const ENDPOINT = 'http://' + self.location.hostname + ':8080/api/';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor(private http: HttpClient) { }

  getFormResponses(uuid: string): Observable<any> {
    return this.http.get(ENDPOINT + '/responses/' + uuid);
  }
}
