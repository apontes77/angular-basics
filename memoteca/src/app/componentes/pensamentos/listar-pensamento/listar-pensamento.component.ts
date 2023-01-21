import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
      conteudo: '',
      autoria: '',
      modelo: 'modelo3'
    },
    {
      conteudo: '',
      autoria: '',
      modelo: 'modelo2'
    }
  ];

}
