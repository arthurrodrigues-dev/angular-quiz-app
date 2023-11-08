import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  results = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: '',
      category: '',
      difficulty: '',
      numberOfQuestions: 0,
      type: ''
    })
  }

  onSubmit(): void {
    console.log(this.formGroup.value);
    
  }
}
