import { Injectable } from '@angular/core';

import { Player } from './player.model';
// import { HEROES } from './mock-heroes';


const PLAYERS: Player[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];

@Injectable()
export class PlayersService {
  getPlayers(): Promise<Player[]> {
    return Promise.resolve(PLAYERS);
  }

  getPlayer(id: number): Promise<Player> {
    return Promise.resolve(PLAYERS.find((player) => {
      return player.id == id
    }))
  }
}
