import { DataSTRMService } from './../../services/data-strm.service';
import { Component, OnInit } from '@angular/core'; // Adicionar OnInit à importação
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-manual',
  templateUrl: './cadastro-manual.component.html',
  styleUrls: ['./cadastro-manual.component.scss']
})
export class CadastroManualComponent implements OnInit { // Implementar OnInit

  form: FormGroup; // Remover operador ?

  constructor(private fb: FormBuilder, private dataSTRMService: DataSTRMService) {
    // Inicializando o form no construtor
    this.form = this.fb.group({
      vigenciaInicial: [''],
      concessionaria: [''],
      uf: [''],
      unidadeInstalacao: [''],
      numeroCliente: [''],
      empresa: [''],
      descricaoUnidade: [''],
      tipo: [''],
      modalidade: [''],
      clienteRural: [''],
      tipoOrganizacao: [''],
      tipoLigacao: [''],
      cpfCnpj: [''],
      email: [''],
      senha: [''],
    });
  }

  ngOnInit(): void { // Implementar OnInit
    this.loadFormData();
  }

  saveFormData(): void {
    if (this.form.valid) {
      this.dataSTRMService.saveData(this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

  loadFormData(): void {
    const savedData = this.dataSTRMService.getData();
    if (savedData) {
      this.form.patchValue(savedData);
    }
  }

  clearFormData(): void {
    this.dataSTRMService.clearData();
    this.form.reset();
  }
}
