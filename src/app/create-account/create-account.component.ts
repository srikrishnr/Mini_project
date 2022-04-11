import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  signupform: any
  fistValidation: any;
  secondNameValidation: any;
  validationEmail: any;
  passwd: any;
  confirm_pass: any;
  passcheck: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router 
  ) {



  }


  ngOnInit() {

    this.signupform = new FormGroup({
      "First_name": new FormControl("", [Validators.required, Validators.minLength(3)]),
      "Last_Name": new FormControl("", [Validators.required, Validators.minLength(3)]),
      "Email": new FormControl("", [Validators.required, Validators.email]),
      "Mobile_Number": new FormControl("", [Validators.required, Validators.min(10)]),
      "Password": new FormControl("", [Validators.required, Validators.minLength(3)]),
      "confirm_password": new FormControl("", [Validators.required, Validators.minLength(3)]),
      "Date_of_birth": new FormControl("", [Validators.required, Validators.minLength(3)])
    });

    this.signupform.get("First_name").valueChanges.subscribe((x: any) => {
      this.validatebutton()
      if (x.length <= 3 && x.length != "") {
        this.fistValidation = 'don"t be less than 3 chars '
      } else if (x === '') {
        this.fistValidation = 'Feild shound not empty'
      } else {
        this.fistValidation = ""

      }

    })
    this.signupform.get("Last_Name").valueChanges.subscribe((x: any) => {
      this.validatebutton();
      if (x.length <= 3 && x.length != "") {
        this.secondNameValidation = 'don"t be less than 3 chars '
      } else if (x === '') {
        this.secondNameValidation = 'Feild shound not empty'
      } else {
        this.secondNameValidation = ""
      }

    })
    this.signupform.get("Email").valueChanges.subscribe((x: any) => {
      this.validatebutton();
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (x.match(mailformat)) {
        console.log("emial")
        this.validationEmail = ""
      } else {
        this.validationEmail = "pleesa enter valied email"
      }
    })

    this.signupform.get("Password").valueChanges.subscribe((x: any) => {
      this.validatebutton();
      // console.log("pass-->",x)  
      this.passwd = x

      if (this.confirm_pass != undefined) {
        if ((this.confirm_pass.length != 0) && (this.confirm_pass !== this.passwd)) {
          this.passcheck = "ur password not matching please check "
        }
      }

    })

    this.signupform.get("confirm_password").valueChanges.subscribe((x: any) => {
      this.validatebutton();

      this.confirm_pass = x
      if (this.passwd === x) {
        this.passcheck = ""
      } else {
        this.passcheck = "Password not matched!"
      }
    })

    this.signupform.get("Date_of_birth").valueChanges.subscribe((x: any) => {
      this.validatebutton();
    })


  }
  flag: any = true
  newarray1: any = []

  validatebutton() {
    if (this.signupform.value.First_Name != ""
    && this.signupform.value.Last_Name != ""
    ) {

      this.flag = false
    }
  }


  get f() {
    return this.signupform.controls;
  }
  Submitform() {
    
   if(this.signupform.value){
    this.router.navigate([`/home`]);
   }
    
  }

}
