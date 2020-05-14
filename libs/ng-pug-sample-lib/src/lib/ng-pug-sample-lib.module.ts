import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './my/my.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MyComponent],
  exports: [MyComponent],
})
export class NgPugSampleLibModule {}
