import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  private imgUrl;
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1,"第一个商品",99,3.5,"这是一本书",["图书","读物"]),
      new Product(2,"第二个商品",32,1.5,"这是一个茶杯",["餐具","杯子"]),
      new Product(3,"第三个商品",123,2.5,"这是一台笔记本",["电器","电脑"]),
      new Product(4,"第四个商品",54.2,5,"这是游戏账号",["游戏","账号"]),
      new Product(5,"第五个商品",412,1,"这是一只羊驼",["动物","草食动物"]),
      new Product(6,"第六个商品",23,3.6,"这是什么鬼，不明生物",["什么鬼","地球的？"]),
    ];
    this.products.push(new Product(7,"第七个商品",22.5,4.9,"这是一间房子",["房子"]));

    this.imgUrl = 'http://placehold.it/320x150';
  }

}

export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}

