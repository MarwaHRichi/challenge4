import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-component',
  templateUrl: './reactive-form-component.component.html',
  styleUrls: ['./reactive-form-component.component.css']
})
export class ReactiveFormComponentComponent implements OnInit {
  get userName(){
    return this.userForm.get("userName");
  };
  get email(){
    return this.userForm.get("email");
  };
  get typecarte(){
    return this.userForm.get("payementInformations.typecarte");
  };
  get numerocarte(){
    return this.userForm.get("payementInformations.numerocarte");
  };
  get dateexpiration(){
    return this.userForm.get("payementInformations.dateexpiration");
  };
  get code(){
    return this.userForm.get("payementInformations.code");
  }
  constructor( private fb:FormBuilder) { }

  userForm = this.fb.group({
    userName : ["", [Validators.required, Validators.minLength(3)]],
    email : ["", [Validators.required, Validators.pattern("[A-Za-z]+.[A-Za-z]+@[A-Za-z]{3}")]],
    payementInformations : this.fb.group({
      typecarte:["", Validators.required],
      numerocarte:[ ,[Validators.required, Validators.minLength(16)]],
      dateexpiration:[, [Validators.required]],
      code:[, [Validators.required, Validators.minLength(6)]]
    })
  })

  /*userForm = new FormGroup ({
   nom: new FormControl (""),
   email : new FormControl (""),
   payementInformations : new FormGroup ({
    typecarte: new FormControl (""),
    numerocarte: new FormControl (),
    dateexpiration: new FormControl (""),
    code: new FormControl (""),
   })
  })*/
  

  ngOnInit(): void {
  }
  onAjout(){
    this.userForm.setValue({
    nom: "marwa",
    email : "marwa.hr@",
    payementInformations : {
    typecarte: "visa",
    numerocarte: 17205 ,
    dateexpiration: "12/7/2015",
    code: 1236,
    }
    
    })
  }

}
