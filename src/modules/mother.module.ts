import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentDestaques } from "../components/destaques/destaques.component";
import { ComponentParaVoce } from "../components/paraVoce/paraVoce.component";
import { ComponentMaisComprados } from "../components/maisComprados/maisComprados.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    { path: '', component: ComponentDestaques,
        children: [{path:'child3', component: ComponentParaVoce},
                    {path:'child4', component: ComponentMaisComprados}
        ]
     },
    ];

@NgModule({
    imports: [CommonModule,
         RouterModule.forChild(routes)],
    declarations: [ComponentDestaques],
})
export class MotherModule {}