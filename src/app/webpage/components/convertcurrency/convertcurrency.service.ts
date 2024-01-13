import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { parseString } from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class ConvertcurrencyService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://restapi.adequateshop.com/api/Traveler';
  getExrateList(): Observable<any> {
    var page = 1
    const url = `${this.apiUrl}?page=${page}`;
    return this.http.get(url, { responseType: 'text' }).pipe(
      map(xmlData => {
        let jsonData;
        parseString(xmlData, { explicitArray: false }, (error, result) => {
          if (error) {
            throw new Error('Error parsing XML');
          }
          jsonData = result;
        });
        return jsonData;
      })
    );
  }
}
