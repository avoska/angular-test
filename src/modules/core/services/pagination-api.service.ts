import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PaginationApiService {

  constructor(private http: HttpClient) {
  }

  fetchPaginationInfo(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=1');
  }
}
