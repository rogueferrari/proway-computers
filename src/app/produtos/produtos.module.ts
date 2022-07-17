import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { FormsModule } from '@angular/forms';
import { ProdutosRoutingModule } from './produtos-routing.module';

@NgModule({
  declarations: [ProdutosComponent, DetalhesProdutoComponent],
  imports: [CommonModule, FormsModule, ProdutosRoutingModule],
})
export class ProdutosModule {}
