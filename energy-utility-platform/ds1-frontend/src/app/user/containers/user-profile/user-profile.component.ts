import { Component, OnInit } from '@angular/core';
import {Device, User} from "../../../home/types/classes";
import {DeviceService, TokenStorageService} from "../../../home/services";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  template:`
    <div class="background full-height">
      <button mat-raised-button
              color="accent"
              (click)="onLogout()"
              class="logout"
      >Logout</button>
      <h1 class="title">Welcome, {{user.name}}!</h1>

      <app-user-devices-list
          *ngIf="devices$ | async as devices"
          [devices]="devices"
        ></app-user-devices-list>
    </div>
  `,
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User;
  devices$: Observable<Device[]>;

  constructor(private tokenStorageService: TokenStorageService,
              private devicesService: DeviceService,
              private router: Router,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.user = this.tokenStorageService.getUser()
    if(this.user===null){
      this.router.navigate(['../access-denied'], {relativeTo: this.route});
    }
    this.devices$ = this.devicesService.listByUser(this.user.username);
  }

  onLogout(){
    this.tokenStorageService.signOut();
    this.router.navigate(['../login'], {relativeTo: this.route});
  }

}
