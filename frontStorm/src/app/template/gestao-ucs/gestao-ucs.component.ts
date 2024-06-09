import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DataSTRMService } from 'src/app/services/data-strm.service';

@Component({
  selector: 'app-gestao-ucs',
  templateUrl: './gestao-ucs.component.html',
  styleUrls: ['./gestao-ucs.component.scss']
})
export class GestaoUcsComponent implements OnInit {

  displayedColumns: string[] = [
    'unidadeInstalacao',
    'numeroCliente',
    'empresa', 
    'descricaoUnidade',  
    //'Status'
  ];
  
  dataSource: PeriodicElement[] = [];
  clickedRows = new Set<PeriodicElement>();

  constructor(private dataService: DataSTRMService) { }

  ngOnInit(): void {
    this.loadDataFromService();
  }

  loadDataFromService(): void {
    const data = this.dataService.getData();
    this.dataSource = data.length ? data : [];
  }

  showAlert() {
    Swal.fire({
      title: 'Hello!',
      text: 'This is a SweetAlert2 alert.',
      icon: 'success',
      confirmButtonText: 'Cool'
    });
  }

  cards = [
    { title: 'Card 1', content: 'Content for Card 1' },
    { title: 'Card 2', content: 'Content for Card 2' },
    { title: 'Card 3', content: 'Content for Card 3' },
    { title: 'Card 4', content: 'Content for Card 4' },
    { title: 'Card 5', content: 'Content for Card 5' }
  ];
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
