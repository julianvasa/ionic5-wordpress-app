import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,HttpClientModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  providers: [HttpClientModule],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
