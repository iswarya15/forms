import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, Form, FormGroup } from '@angular/forms';
import { MemberInfo } from './member';
import { Member } from './member.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

   title = 'angular-forms';
   memberDetails: Member = new MemberInfo();

   @ViewChild('myForm', {static: true}) userForm!:  NgForm;
  
   ngOnInit(): void{
      this.userForm.form.valueChanges.subscribe(form => {
         console.log(form)
         console.log(this.userForm)
      })
   }
   // Using getter method to access form controls saves time
   get memberid(): FormControl{
      // console.log(this.userForm.form.controls['memberId'])
      return this.userForm.form.controls['memberId'] as FormControl;
   }
  submitHandler(formValue: NgForm){
     
   console.log(formValue);
   this.userForm.reset();
   
  }
}
