import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from 'src/app/controls/question-base';
import { QuestionControlService } from 'src/app/services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad='';
  mess;

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = this.form.getRawValue();
    this.mess = Array('<span class="payload">First name: </span>'+this.payLoad['firstName'],
                'Last name: '+this.payLoad['lastName'],
                'Birthday: '+this.payLoad['birthday'],
                'Nationality: '+this.payLoad['nation'],
                'Province: '+this.payLoad['province'],
                'City: '+this.payLoad['city'],
                'Address: '+this.payLoad['address'],
                'CAP: '+this.payLoad['cap']);
  }

  createMess(): void{
    //TODO: Custom message
  }
}
