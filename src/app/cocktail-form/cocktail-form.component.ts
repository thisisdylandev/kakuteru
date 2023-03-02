import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface DrinksResponse {
  drinks?: (Drink)[]| null
}

interface Drink {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.sass']
})
export class CocktailFormComponent {
  constructor(
    private http: HttpClient) { }

  spirit: string = '';
  // TODO: figure out how to fix this, if its a problem
  // idc this is just a one night project anyways
  cocktails: Drink[] | null | undefined = [];

  findCocktailBySpirit() {
    this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.spirit}`).subscribe((response: DrinksResponse) => {
      this.cocktails = response.drinks
    });
  }
}
