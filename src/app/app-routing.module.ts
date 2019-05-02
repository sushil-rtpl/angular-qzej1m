import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
    { 
        path: "",
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    { 
        path: 'dashboard', 
        component: DashboardComponent
    },
    { 
        path: '**', 
        component: PageNotFoundComponent
    },
    // { 
    //     path: '', 
    //     // loadChildren: () => HeroModule, 
    // }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
