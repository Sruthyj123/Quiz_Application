import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { ApiService } from './api.service';
import { LoginService } from './login.service';
import { User } from './user.model';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    num: any;

    constructor(public service:LoginService, private router:Router) {}

    ngOnInit(): void {
        this.service.refreshList();
    }

    onSubmit(form:NgForm){
        
        if (this.service.user=="Admin"&&this.service.pass=="Admin@123" ) {
            this.router.navigateByUrl('/quizs');

        }
        else if (this.service.user=="Participant1"&&this.service.pass=="P1@123"){
            this.router.navigateByUrl('/play');
        }
        else {
            alert("Invalid User!");
        }
    }
}