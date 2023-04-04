import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PhotoesComponent } from "./photoes/photoes.component";


const routes: Routes = [
    {
        path: '',
        component: PhotoesComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GaleryRoutingModule {}