import { Injectable } from '@angular/core';

import { DropdownQuestion } from 'src/app/controls/question-dropdown';
import { QuestionBase } from 'src/app/controls/question-base';
import { TextboxQuestion } from 'src/app/controls/question-textbox';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'nation',
        label: 'Nationality',
        required: true,
        options: [
          {key: 'italy',  value: 'Italy'},
          {key: 'germany',  value: 'Germany'},
          {key: 'france',   value: 'France'},
        ],
        order: 4
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'lastName',
        label: 'Last name',
        value: '',
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        key: 'birthday',
        label: 'Birthday',
        type: 'date',
        value: '',
        required: true,
        order: 3
      }),

      new TextboxQuestion({
        key: 'province',
        label: 'Province',
        value: '',
        required: false,
        order: 5
      }),

      new TextboxQuestion({
        key: 'city',
        label: 'City',
        value: '',
        required: false,
        order: 6
      }),

      new TextboxQuestion({
        key: 'address',
        label: 'Address',
        value: '',
        required: false,
        order: 7
      }),

      new TextboxQuestion({
        key: 'cap',
        label: 'CAP',
        value: '',
        type: 'number',
        required: false,
        order: 8
      }),
      
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }

}
