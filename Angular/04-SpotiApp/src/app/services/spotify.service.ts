import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log("Constructor listo!!!");
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDyc7Tn4hleEicNdq0alniD5S1gX88zyAnF7RTk8LUTX_gOue-c_hMjY7H3x504Rc7JjD0HLFGFmtqjd6M'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?offset=0&limit=20', { headers });
  }
}
