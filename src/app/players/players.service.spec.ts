import { TestBed, inject, async } from '@angular/core/testing';
import {PlayersService} from  './players.service'
// import {Player} from  './player.model'
import {} from 'jasmine';

describe('PlayersService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            {provide: PlayersService, useClass: PlayersService}
        ]
        // imports: [FormsModule, HttpModule]
    });
  })

  it('should construct', async(inject(
    [PlayersService], (service: PlayersService) => {
    expect(service).toBeDefined();
  })));

  describe('#getPlayers', () => {
    it('Should return an array of valid players', async(inject(
      [PlayersService], (service: PlayersService) => {
      service.getPlayers()
            .then((players) => {
              // Assert each player has a name and id
              players.forEach((player) => {
                expect(player.id).toBeDefined()
                expect(player.name).toBeDefined()
              })
            });
    })));
  })

  describe('#getPlayer', () => {
    it('Should return a player of matching id', async(inject(
      [PlayersService], (service: PlayersService) => {
      service.getPlayer(13)
            .then((player) => {
              // Assert each player has a name and id
                expect(player.id).toEqual(13)
            });
    })));
  })


})
