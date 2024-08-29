import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentPagDoCliente } from "../components/pagDoCliente/pagDoCliente.component";
import { ComponentPedidos } from "../components/pedidos/pedidos.component";
import { ComponentSuasInfos } from "../components/suasInfos/suasInfos.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    { path: '', component: ComponentPagDoCliente,
        children: [{path:'child1', component: ComponentPedidos},
        {path:'child2', component: ComponentSuasInfos}]
     }];

@NgModule({
    imports: [CommonModule,
         RouterModule.forChild(routes)],
    declarations: [ComponentPagDoCliente],
})
export class FatherModule {}