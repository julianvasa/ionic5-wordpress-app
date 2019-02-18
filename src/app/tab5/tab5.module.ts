import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab5Page } from './tab5.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,HttpClientModule, 
    RouterModule.forChild([{ path: '', component: Tab5Page }])
  ],
  providers: [HttpClientModule],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}
