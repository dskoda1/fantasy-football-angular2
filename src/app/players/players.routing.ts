import {RouterModule} from '@angular/router';

// import {PlayersComponent} from './players.component'
import {ListComponent} from './list/list.component'
import {DetailComponent} from './detail/detail.component';

export const playersRouting = RouterModule.forChild([
  {
    path: '',
    component: ListComponent,
    children: [
      // {
      //   path: 'list',
      //   component: ListComponent
      // },
      {
        path: ':id',
        component: DetailComponent
      }
    ]
  }
])
