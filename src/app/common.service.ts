import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public _http: HttpClient) { }

 url = "http://localhost:3000/users";
  createGuest(guest:any){
    return this._http.post(this.url,guest);
  }
  getGuest(){
    return this._http.get(this.url);
  }
  getCurrentGuest(id:any){
    return this._http.get(`${this.url}/${id}`);
  }
  updateGuest(id:any,data:any){
    return this._http.put(`${this.url}/${id}`,data);
  }
  deleteGuest(id:any){
    return this._http.delete(`${this.url}/${id}`);
  }

}
