import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottomTabsPage } from './bottom-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: BottomTabsPage,
    children: [
      {
        path: 'overnight-sleep',
        loadChildren: () => import('../overnight-sleep/overnight-sleep.module').then( m => m.OvernightSleepPageModule)
      },
      {
        path: 'daytime-sleepiness',
        loadChildren: () => import('../daytime-sleepiness/daytime-sleepiness.module').then( m => m.DaytimeSleepinessPageModule)
      },
      {
        path: 'sleep-logs',
        loadChildren: () => import('../sleep-logs/sleep-logs.module').then( m => m.SleepLogsPageModule)
      },
      {
        path: '',
        redirectTo: 'overnight-sleep',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomTabsPageRoutingModule {}
