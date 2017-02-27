import {Component, OnInit} from "@angular/core";
import {PlayersService} from '../players.service';
import {Player} from '../player.model'
import {visible} from '../../shared/animations';

import {ViewTitleService} from '../../core';

import { Router } from '@angular/router';


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

  constructor(private router: Router,
              private playerService: PlayersService,
              viewTitle: ViewTitleService) {
    viewTitle.set('Players');
  }
  ngOnInit(): void {
    this.playerService.getPlayers().then(players => this.players = players);
  }
  onSelect(player: Player): void {
    console.log(player);
    // Unselecting a player if they are equal
    if (this.selectedPlayer == player) {
      this.selectedPlayer = null;
      this.router.navigate(['/players']);
    } else {
      // Selecting a player
      this.selectedPlayer = player;
      this.router.navigate(['/players', this.selectedPlayer.id]);
    }
  }
}
