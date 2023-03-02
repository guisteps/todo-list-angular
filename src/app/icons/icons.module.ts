import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Trash2 } from 'angular-feather/icons';

const icons = {
  Trash2
}

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons)
  ], exports: [
    FeatherModule
  ]
})
export class IconsModule { }
