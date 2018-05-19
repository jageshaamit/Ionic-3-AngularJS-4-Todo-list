import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  item: string;
  itemLength: number;
  itemsList: any = [
    "item1",
    "item2",
    "item3",
    "item4",
  ];

  selectedItemsList: any = [];

  selectedItemsIndex: any = [];
  indexLength: number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItemsList = this.itemsList;
  }

  selectedItem(i) {
    console.log(i);
    var index = this.selectedItemsIndex.indexOf(i);
    if(index === -1){
      this.selectedItemsIndex.push(i);
    } 
    else {
      this.selectedItemsIndex.splice(index,1);
    }    
    this.indexLength = this.selectedItemsIndex.length;
    console.log(this.selectedItemsIndex);
  }

  addItem() {
    this.selectedItemsList.push(this.item);
    this.item = '';
  }

  deleteItems() {
    console.log(this.selectedItemsIndex)
    var removeFromIndex = this.selectedItemsIndex.sort();
    console.log(removeFromIndex)
    for (var i = removeFromIndex.length - 1; i >= 0; i--) {
      console.log(removeFromIndex[i])
      this.selectedItemsList.splice(removeFromIndex[i], 1);
      if (i == 0)
        this.selectedItemsIndex = [];
    }

    console.log(this.selectedItemsList);
  }

  change() {
    console.log(this.item.length)
  }

  getItems(ev: any) {   
    let val = ev._value;
    this.itemLength = val.length;
  }

}
