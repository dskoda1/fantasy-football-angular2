import {Component} from "@angular/core";
import {ViewTitleService} from '../core/view-title.service';
// import {Player} from './player'
import {visible} from '../shared/animations';


@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: [
		'./players.component.scss'
	],
	animations: [
		visible
	]
})

export class PlayersComponent {
  constructor(viewTitle: ViewTitleService) {
    viewTitle.set('Players');
  }
}
