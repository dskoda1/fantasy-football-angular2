import {RouterModule} from '@angular/router';

import {PlayersComponent} from './players.component'
import {ListComponent} from './list/list.component'

export const playersRouting = RouterModule.forChild([
  {
    path: '',
    component: PlayersComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      }
    ]
  }
])
