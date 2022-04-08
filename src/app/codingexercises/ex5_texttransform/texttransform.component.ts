import { Component, OnInit } from '@angular/core';
import { TTUtuls } from './texttransformpipes/ttutils';

/**
 * Dashboard that transforms the input string by applying a specific transformation rule.
 */
@Component({
  selector: 'app-texttransform',
  templateUrl: './texttransform.component.html',
  styleUrls: ['./texttransform.component.scss'],
})
export class TexttransformComponent {
  dropDownData: string = '';
  inputValue: string = '';
  outputValue: string = '';

  textTransformCollection = new Map<string, string>();

  //Pipe parameters;
  pipeCaseChangerCamelCase: string = TTUtuls.CAMEL_CASE_PARAM;
  pipeCaseChangerTitleCase: string = TTUtuls.TITLE_CASE_PARAM;

  TITLE_CASE_PARAM: string = 'TITLE TRANSFORM';

  constructor() {
    this.textTransformCollection.set('ordinal', 'Ordinal Pipe');
    this.textTransformCollection.set('titleonlycase', 'Title Only Case');
    this.textTransformCollection.set('cleanword', 'Filter bad words');
    this.textTransformCollection.set('camelcase', 'Camel case');
    this.textTransformCollection.set('reverse', 'Reverse a string');
  }

  onSelectionChange() {
    this.inputValue = '';
    this.outputValue = '';
  }

  onKeyUp() {
    this.outputValue = this.inputValue;
  }
}
