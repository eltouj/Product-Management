import { Routes } from '@angular/router';

// ui
import { AppChipsComponent } from './product/chips.component';
import { AppTooltipsComponent } from './category/tooltips.component';
import { AppListsComponent } from './command_line/lists.component';
import { AppMenuComponent } from './command/menu.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      
      {
        path: 'chips',
        component: AppChipsComponent,
      },
      {
        path: 'lists',
        component: AppListsComponent,
      },
      {
        path: 'menu',
        component: AppMenuComponent,
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
      },

    ],
  },
];
