import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {HomeModelInterface} from "../home/homeModelInterface";
import {Observable} from "rxjs";

@Injectable({
  providedIn:'root'
})

export class HomeApiService{

  apiURL = 'https://stocktracker2021.herokuapp.com/api';

  constructor(private http: HttpClient) {
  }

  getProfileData():Observable<HomeModelInterface[]>{
    return this.http.get<HomeModelInterface[]>(this.apiURL+'/home');
  }

}
