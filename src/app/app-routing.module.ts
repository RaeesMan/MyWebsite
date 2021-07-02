import { NgModule } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'about',component:AboutComponent},
    {path:'gallery',component:GalleryComponent}
    ];

    @NgModule({
    imports: [RouterModule.forRoot(routes)],   
    exports: [RouterModule] 
    })
    export class AppRoutingModule{}