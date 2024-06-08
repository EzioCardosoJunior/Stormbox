import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { CadastroManualComponent } from './template/cadastro-manual/cadastro-manual.component';
import { GestaoUcsComponent } from './template/gestao-ucs/gestao-ucs.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'cadastroManual', component: CadastroManualComponent, data: { breadcrumb: 'Cadastro Manual' } },
  { path: 'gestaoUcs', component: GestaoUcsComponent, data: { breadcrumb: 'Gestão UCs' } },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
