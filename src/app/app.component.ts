import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'whitehouseTask';
  rowC:any = [
    {
      item1: '',
      item2: '',
      item3: ''
    }
  ];
  rowB:any = [
    {
      item1: '',
      item2: '',
      item3: ''
    }
  ];
  rowK:any = [
    {
      item1: '',
      item2: '',
      item3: ''
    }
  ];
  rowM:any = [
    {
      item1: '',
      item2: '',
      item3: ''
    }
  ];
  constructor(){}
  ngOnInit(): void {}
  addTable(item:any) {
    const obj = {
      item1: '',
      item2: '',
      item3: ''
    }
    item.push(obj);
  }
  deleteRow(x:any){
    this.rowC.splice(x, 1 );
  }
  item1Total(item:any){
   return item.map((a:any)=>{return a.item1}).reduce((a:any,b:any)=>{
    return b+a;
   }); 

  }
  item2Total(item:any){
    return item.map((a:any)=>{return a.item2}).reduce((a:any,b:any)=>{
     return b+a;
    });  
   }
   item3Total(item:any){
    return item.map((a:any)=>{return a.item3}).reduce((a:any,b:any)=>{
     return b+a;
    });  
   }
}
