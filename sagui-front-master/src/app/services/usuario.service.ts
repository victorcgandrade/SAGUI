import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


const httpOptions ={
  headers: new HttpHeaders({ 'Çontent-Type': 'application/json'})
};

@Injectable({ providedIn: 'root'})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  getUsuarios(){
    return this.http.get('/server/api/usuario/get/all');
  }
}
