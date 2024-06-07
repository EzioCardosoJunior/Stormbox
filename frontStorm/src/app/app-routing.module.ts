import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { CadastroManualComponent } from './template/cadastro-manual/cadastro-manual.component';
import { GestaoUcsComponent } from './template/gestao-ucs/gestao-ucs.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'cadastroManual', component: CadastroManualComponent },
  { path: 'gestaoUcs', component: GestaoUcsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
