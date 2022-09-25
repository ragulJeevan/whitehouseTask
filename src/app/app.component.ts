import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'whitehouseTask';
  row:any = [
    {
      item1: '',
      item2: '',
      item3: ''
    }
  ];
  constructor(){}
  ngOnInit(): void {}
  addTable() {
    const obj = {
      item1: '',
      item2: '',
      item3: ''
    }
    this.row.push(obj)
  }
  deleteRow(x:any){
    this.row.splice(x, 1 );
  }
  item1Total(){
   return this.row.map((a:any)=>{return a.item1}).reduce((a:any,b:any)=>{
    return b+a;
   }); 

  }
  item2Total(){
    return this.row.map((a:any)=>{return a.item2}).reduce((a:any,b:any)=>{
     return b+a;
    });  
   }
   item3Total(){
    return this.row.map((a:any)=>{return a.item3}).reduce((a:any,b:any)=>{
     return b+a;
    });  
   }
}
