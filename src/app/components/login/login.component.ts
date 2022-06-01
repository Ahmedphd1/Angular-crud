import { Component, OnInit } from '@angular/core';
import { iuser, iaddress } from 'src/app/interface/interfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { userservice } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "login/signup";
  list : iuser[] = [];
  user : iuser = {} as iuser;
  userbyid : iuser[] = [];

  userform = new FormGroup({
    userid: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    country: new FormControl(''),
    zipcode: new FormControl(''),
  });

  constructor(private webapi:userservice) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.user = {userid : 0,
                    username : this.userform.controls["username"].value,
                    password : this.userform.controls["password"].value,
                    address : {
                      userid : 0,
                      country : this.userform.controls["country"].value,
                      zipcode : Number(this.userform.controls["zipcode"].value)
                    },
                    currencyuser : null}

    console.log(this.user)

    console.log(this.user);

    this.createuser(this.user)
  }

  viewusers() {
    this.webapi.getall().subscribe((allusers)=>{
      console.log(allusers)
      this.list = allusers;
     })
  }

  deleteuser(userid:number){
    this.webapi.delete(userid).subscribe();
  }

  getuserbyid(userid: string) {
    this.userbyid = []
    this.webapi.gettables(Number(userid)).subscribe((user) => {
      this.userbyid.push(user[0])
    });
  }

  createuser(userobject : iuser){
    
    this.webapi.post(userobject).subscribe(createduser =>{
      alert(createduser)
    })
  }

}
