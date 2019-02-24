import { NgModule } from '@angular/core';
import { DropdownDirective } from './directives/dropdown.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { SanitizeHtmlPipe } from './pipes/sanitize.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DropdownDirective,
    ShortenPipe,
    SanitizeHtmlPipe
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    ShortenPipe,
    SanitizeHtmlPipe
  ]
})
export class SharedModule { }
