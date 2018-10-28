import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHighlightDirective } from './directives/appHighLight/app-highlight.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AppHighlightDirective],
  exports: [AppHighlightDirective]
})
export class SharedModule { }
