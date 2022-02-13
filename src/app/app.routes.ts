import { Routes, RouterModule } from '@angular/router';

//Routes
import { HomeComponent } from './routes/home/home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
