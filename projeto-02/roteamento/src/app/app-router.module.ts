import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FirstComponentComponent } from './first-component/first-component.component';
import { LoginComponent } from './login/login.component';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { SecondComponentComponent } from './second-component/second-component.component';

const routes : Routes = [
{ path: 'first-component', component: FirstComponentComponent },
{ path: 'second-component', component: SecondComponentComponent },
{path : 'pagina-com-parametros/:id', component: PaginaComParametrosComponent},
{ path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
{path: 'pagina-protegida', component: PaginaProtegidaComponent, canActivate: [AuthGuard]},
{path: 'login', component: LoginComponent},
{ path: '**', redirectTo: '/first-component', pathMatch: 'full' },
{ path: '**', component : PaginaNaoEncontradaComponent}, // redirect to `first-component`


]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
