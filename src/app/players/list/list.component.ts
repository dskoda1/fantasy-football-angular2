import {Component, OnInit} from "@angular/core";
import {PlayersService} from '../players.service';
import {Player} from '../player'
import {visible} from '../../shared/animations';


@Component({
  selector: 'playersList',
  templateUrl: './list.component.html',
  styleUrls: [
		'./list.component.scss'
	],
	animations: [
		visible
	],
  providers: [PlayersService]
})

export class ListComponent implements OnInit {
  players: Player[];
  selectedPlayer: any;

  constructor(private playerService: PlayersService) {
  }
  ngOnInit(): void {
    this.playerService.getPlayers().then(players => this.players = players);
  }
  onSelect(player: Player): void {

    this.selectedPlayer = this.selectedPlayer == player
      ? null
      : player;
  }
}
