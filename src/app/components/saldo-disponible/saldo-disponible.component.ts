import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-saldo-disponible',
  templateUrl: './saldo-disponible.component.html',
  styleUrls: ['./saldo-disponible.component.scss']
})
export class SaldoDisponibleComponent implements OnInit {
  @Input() totalDescuento: number = 0;
  @Output() goBack: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  goBackView() {
    this.goBack.emit()
  }

}
