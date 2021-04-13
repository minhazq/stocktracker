import { Component, OnInit } from '@angular/core';
import {HomeModelInterface} from "./homeModelInterface";
import {HomeApiService} from "../services/home.api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public profileData: HomeModelInterface[] =[];

  constructor(private homeApiService:HomeApiService) { }

  ngOnInit() {
    this.getProfileData();
  }

  getProfileData(){
    this.homeApiService.getProfileData().subscribe(data=> {
      this.profileData = data;});
  }

}
