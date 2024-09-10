import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UiComponentsRoutes } from './ui-components.routing';

// ui components
import { AppChipsComponent } from './product/chips.component';
import { MatNativeDateModule } from '@angular/material/core';
import { AppListsComponent } from './command_line/lists.component';
import { AppMenuComponent } from './command/menu.component';
import { AppTooltipsComponent } from './category/tooltips.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UiComponentsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
  ],
  declarations: [
    AppChipsComponent,
    AppListsComponent,
    AppMenuComponent,
    AppTooltipsComponent
  ],
})
export class UicomponentsModule {}
