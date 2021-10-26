import { Injectable } from '@angular/core';
import { urlData } from './model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlshortService {

  constructor(private http:HttpClient) { }

  saveUrl(url:urlData){
    return this.http.post(`https://616c3b9b37f997001745d5ad.mockapi.io/urlshortner`,url)
  }
  getAllUrl(){
    return this.http.get<Array<urlData>>(`https://616c3b9b37f997001745d5ad.mockapi.io/urlshortner`)
  }
  getUrlByID(id?:number){
    return this.http.get<Array<urlData>>(`https://616c3b9b37f997001745d5ad.mockapi.io/urlshortner/?id=${id}`)
  }
  updateUrlById(userId:number,userdata:urlData){
    return this.http.put(`https://616c3b9b37f997001745d5ad.mockapi.io/urlshortner/${userId}`,userdata)
  }

}