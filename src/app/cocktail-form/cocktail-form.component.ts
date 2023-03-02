import { Component } from '@angular/core';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.sass']
})
export class CocktailFormComponent {
  spirit: string = '';

  onSpiritInput(newValue: string) {
    this.spirit = newValue;
    console.log(this.spirit)
  }
}
