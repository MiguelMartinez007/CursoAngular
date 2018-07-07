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
      'Authorization': 'Bearer BQBpsceIZ98LMwqvOXRp9Gb38-upEcd3IL1ueslJuCOKBcxXlcNTu_Tpk7v0IB_jhAJ0BUaqZI2tZiMsgXc'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?offset=0&limit=20', { headers });
  }

  getArtista( termino:string ){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBpsceIZ98LMwqvOXRp9Gb38-upEcd3IL1ueslJuCOKBcxXlcNTu_Tpk7v0IB_jhAJ0BUaqZI2tZiMsgXc'
    })

    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&market=MX&offset=0&limit=15`, { headers });
  }
}
