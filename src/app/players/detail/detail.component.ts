import {Component, OnInit, Input} from "@angular/core";
import {PlayersService} from '../players.service';
import {Player} from '../player.model'
import {visible} from '../../shared/animations';

import { ActivatedRoute, Router, NavigationStart} from '@angular/router';

@Component({
  selector: 'playerDetail',
  templateUrl: './detail.component.html',
  styleUrls: [
		'./detail.component.scss'
	],
	animations: [
		visible
	],
  providers: [PlayersService]
})

export class DetailComponent implements OnInit {
  @Input()
  player: Player;
  isEditing: boolean;

  constructor(private playerService: PlayersService,
              private route: ActivatedRoute,
              private router: Router) {

    this.router.events
      .map( event => event instanceof NavigationStart )
      .subscribe( () => {
          this.setPlayer()
      } );
  }
  ngOnInit(): void {
    this.setPlayer()
    this.isEditing = false;
  }

  setPlayer(): void {

    let playerId = this.route.snapshot.params['id'] as number;
    if (playerId) {
      this.playerService.getPlayer(playerId).then((player) => {
        this.player = player;
      })
    }
  }

  edit(): void {
    this.isEditing = !this.isEditing;
    console.log(this.isEditing)
  }
  // onSelect(player: Player): void {
  //
  //   this.selectedPlayer = this.selectedPlayer == player
  //     ? null
  //     : player;
  // }
}
