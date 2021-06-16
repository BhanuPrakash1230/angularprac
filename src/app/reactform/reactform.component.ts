import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { usernameValidator} from '../customvalidators/cus.val'; 

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {

  //   registrationForm=new FormGroup({
  //   username:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmpassword:new FormControl(''),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     pincode:new FormControl('')
  //   })
  // })

  /*from above coding we figure that we are writing and creating instance and formcontrol everytime
    so from overcoming that we need to use FORMBUILDER service and create instance variable and use
    that with group function*/
  constructor(private fb:FormBuilder) {}

  registrationForm=this.fb.group({
      username:['',[Validators.required,Validators.minLength(3),usernameValidator(/admin/),
        usernameValidator(/password/),usernameValidator(/bhanu/)]],
      password:[''],
      confirmpassword:[''],
      address:this.fb.group({
        city:[''],
        state:[''],
        pincode:['']
      })
  })

get Username(){
  return this.registrationForm.get('username');
}

  ngOnInit(): void {
  }


/* we can use setValue for updating, while using that we have to use all input fields.
from escaping that we have to use patchValue for limited fields.*/
  displayValues(){
    this.registrationForm.setValue({
      username:'bhanu',
      password:'prakash',
      confirmpassword:'prakash',
      address:{
        city:'hyderabad',
        state:'telangana',
        pincode:'508001'
      }
    })
  }


}
