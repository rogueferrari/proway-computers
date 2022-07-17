import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  //LAZY LOAD (CARREGAR SÓ A PÁGINA QUE O USUÁRIO ESTÁ, PARA O SITE CARREGAR MAIS RÁPIDO)
  {
    path: 'produtos',
    loadChildren: () =>
      import('./produtos/produtos.module').then((m) => m.ProdutosModule),
  },
  //TRECHO USADO PARA FORÇAR O CARREGAMENTO DESSA ROTA ASSIM QUE O SITE FOR CARREGADO
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  {
    path: 'carrinho',
    loadChildren: () =>
      import('./carrinho/carrinho.module').then((m) => m.CarrinhoModule),
  },
  {
    path: 'contato',
    loadChildren: () =>
      import('./contato/contato.module').then((m) => m.ContatoModule),
  },

  { path: '**', component: NaoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}
