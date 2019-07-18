import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  public lisEtudiants: any = [];

  private host: string = 'http://192.168.137.146:8087';

  constructor(private http: HttpClient) { }

  public getList(){
    const token = localStorage.getItem('tokenspringba');
    return this.http.get(this.host + '/etudiant/getAll', {headers: new HttpHeaders({'authorization': token})});
  }
  public saveEtudiant(data){
    const token = localStorage.getItem('tokenspringba');
    return this.http.post(this.host + '/etudiant/save', data,  {headers: new HttpHeaders({'authorization': token})});
  }
  public removeEtudiant(data){
    const token = localStorage.getItem('tokenspringba');
    return this.http.post(this.host + '/etudiant/delete/',data,  {headers: new HttpHeaders({'authorization': token})});
  }
  public updateEtudiant(data){
    const token = localStorage.getItem('tokenspringba');
    return this.http.post(this.host + '/etudiant/update/',data,  {headers: new HttpHeaders({'authorization': token})});
  }
}

