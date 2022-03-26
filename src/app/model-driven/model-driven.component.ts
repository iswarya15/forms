import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

   myForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
   //   We can nest FormGroups inside other FormGroup
     this.myForm = new FormGroup({
        name: new FormGroup({
           firstName: new FormControl('',Validators.required),
           lastName: new FormControl('',Validators.required)
        }),
        email: new FormControl(),
        password: new FormControl('',[
           Validators.required,
           Validators.minLength(8)
        ])
     });
     
     this.myForm.valueChanges.subscribe(change => console.log(this.myForm))
  }

  get name(): FormGroup{
     return this.myForm.get('name') as FormGroup
  }
}
