import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

// Imported services
import {PlayersService} from './players.service';

// Imported Components
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
// import {FormComponent} from './form/form.component';
import {playersRouting} from './players.routing';

const ENTRY_COMPONENTS = [
  ListComponent,
  DetailComponent,
  // FormComponent
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
