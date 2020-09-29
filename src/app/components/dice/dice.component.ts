import { GameClientService, Game, PostRequestBody } from '../../services/game-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  titleH1 = 'DICE GAME';
  descryption = 'Simple dice game';
  game: Game;
  chosenDice = [];
  isChosenClass = [];

  constructor(private clientService: GameClientService) { }

  ngOnInit(): void {
    this.clientService.getGame().subscribe(value => {
      this.game = value;
    });
  }

  click(i, diceNumber): void {
    if (this.game.mug.dices[i].isSelected) {
      this.chosenDice.splice(this.chosenDice.indexOf(diceNumber), 1);
      this.isChosenClass[i] = '';
    } else {
      this.chosenDice.push(diceNumber);
      this.isChosenClass[i] = 'isChosen';

    }
    this.game.mug.dices[i].isSelected = !this.game.mug.dices[i].isSelected;
  }

  changeDice(): void{
    const reqBody: PostRequestBody = ({
      numbersToChange: this.chosenDice
    });

    this.clientService.postRollTheDices(reqBody).subscribe( postResponse => {
      this.game = postResponse;
      this.chosenDice = [];
      this.isChosenClass = [];
    });
  }

}
