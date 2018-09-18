import { SectorComponent } from './sector/sector.component';
import { Routes,  RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
const appRoutes: Routes = [{path : '', component : SectorComponent} ,
                           {path : '**' , component : SectorComponent},
                           {path : 'index' , component : SectorComponent},
                        ];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
