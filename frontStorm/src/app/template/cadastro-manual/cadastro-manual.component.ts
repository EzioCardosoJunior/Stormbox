import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-manual',
  templateUrl: './cadastro-manual.component.html',
  styleUrls: ['./cadastro-manual.component.scss']
})
export class CadastroManualComponent {


  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      vigenciaInicial: [''],
      campo1: [''],
      campo2: [''],
      campo3: [''],
      campo4: [''],
      campo5: [''],
      campo6: [''],
      campo7: [''],
      campo8: [''],
      campo9: [''],
      campo10: [''],
      campo11: [''],
      campo12: ['']
    });
  }
}
