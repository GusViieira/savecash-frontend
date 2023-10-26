import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MainStore } from 'src/app/Store/main-store';


@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent {
  value: string | undefined;
  abrirModal = false
  btnLancamento = true
  tituloModal = 'Lançamentos'; 
  formGroup: FormGroup;

  constructor(private route: ActivatedRoute, private mainStore: MainStore) {
    this.mainStore.setRouteName(this.route.snapshot.data['name']);
    this.formGroup = new FormGroup({
      tipo: new FormControl(''),
      valor: new FormControl(''),
      dataVencimento: new FormControl(''),
      descricao: new FormControl(''),
      dataPagamento: new FormControl(''),
      salario: new FormControl(''),
      flash: new FormControl(''),
      anotacao: new FormControl(''),
      recorrente: new FormControl('')
    });
  }
  updateVisibility(newValue: boolean) {
    this.abrirModal = newValue;
  }

  ngOnInit() {
  }

  onSubmit() {
    // Realizar o processamento do formulário
  }
  
}

