import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'sanitize' })
export class SanitizeHtmlPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) { }
  newValue: string;
  transform(value: string): SafeHtml {
    return this.newValue = value.replace(/<[^>]*>/g, '');
  }
}
