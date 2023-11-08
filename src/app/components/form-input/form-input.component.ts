import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms'

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class FormInputComponent {
  @Input() placeholder: string = '';
  @Input() labelName: string = '';
  @Input() type: string = "text";
  @Input() controlName: string = '';
}
