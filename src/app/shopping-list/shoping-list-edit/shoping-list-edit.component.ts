import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingridient } from '../../shared/ingridient.model';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shoping-list-edit.component.html',
  styleUrls: ['./shoping-list-edit.component.css']
})
export class ShopingListEditComponent implements OnInit {
  @Output() addedIngridient = new EventEmitter<Ingridient>();
  constructor() { }

  ngOnInit() {
  }

  addIngridient(nameInput, amountInput) {
    this.addedIngridient.emit(new Ingridient(nameInput.value, amountInput.value));
  }

}
