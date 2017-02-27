import {Component, OnInit, Input} from "@angular/core";
import {PlayersService} from '../players.service';
import {Player} from '../player.model'
import {visible} from '../../shared/animations';

// import { ActivatedRoute, Router, NavigationStart} from '@angular/router';

@Component({
  selector: 'playerForm',
  templateUrl: './form.component.html',
  styleUrls: [
		'./form.component.scss'
	],
	animations: [
		visible
	],
  providers: [PlayersService]
})

export class FormComponent implements OnInit {
  @Input()
  player: Player;

  constructor(
    // private playerService: PlayersService,
              // private route: ActivatedRoute,
              // private router: Router
            ) {

    // this.router.events
    //   .map( event => event instanceof NavigationStart )
    //   .subscribe( () => {
    //       this.setPlayer()
    //   } );
  }
  ngOnInit(): void {
    this.setPlayer()
  }

  setPlayer(): void {

    // let playerId = this.route.snapshot.params['id'] as number;
    // if (playerId) {
    //   this.playerService.getPlayer(playerId).then((player) => {
    //     this.player = player;
    //   })
    // }

  }
  // onSelect(player: Player): void {
  //
  //   this.selectedPlayer = this.selectedPlayer == player
  //     ? null
  //     : player;
  // }
}
