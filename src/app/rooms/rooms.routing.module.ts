import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConfirmResComponent } from "./confirm-res/confirm-res.component";
import { RoomsListComponent } from "./rooms-list/rooms-list.component";

const routes: Routes = [
    
    {
        path: '',
        component: RoomsListComponent
    },
    {
        path: 'confirm',
        component: ConfirmResComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoomsRoutingModule {}