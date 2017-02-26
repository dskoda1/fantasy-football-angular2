import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

// Imported services
import {PlayersService} from './players.service';

// Imported Components
import {PlayersComponent} from './players.component';
import {ListComponent} from './list/list.component';
import {playersRouting} from './players.routing';

const ENTRY_COMPONENTS = [
	PlayersComponent,
  ListComponent
];

@NgModule({
  imports: [
    SharedModule,
    // Routing
    playersRouting
  ],
  declarations: [...ENTRY_COMPONENTS],
  entryComponents: [...ENTRY_COMPONENTS],
  providers: [
    PlayersService
  ]
})
export class PlayersModule {}
