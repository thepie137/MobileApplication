import { Component } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Price } from '../../models/price.model';
import { ShopProvider } from '../../providers/shop/shop';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public price: Observable<Price>;
  public num: string;
  public am: number;
  public pie:string;
  public Address:string;
  public side=10;

  public q1:string;
  public q2:string;
  public q3:string;
  public q4:string;
  postdata: any = {};
  tada: Observable<any>;
  jojo: any = {};
  constructor(private ShopProvider: ShopProvider, public navCtrl: NavController,public httpClient: HttpClient,public http: HttpClient) {
    
  }
  nextPage(){
    this.navCtrl.push("analyze-page")
  }

  showPrice(num:string,amount:string,Address:string){
    this.price = this.ShopProvider.getPrice(num);
    this.am = Number(amount)
    this.pie=this.Address;
  }
  plusSize(size:number){
    this.side+=0.5;
  } 
  minusSize(size:number){
    this.side+=-0.5;
  } 
  save(){
    let url = 'http://ed0ef52d7d56.ngrok.io/post'
    let postdataset = new FormData();
    postdataset.append('number',this.q1);
    postdataset.append('amount',this.q2);
    postdataset.append('address',this.q3);
    postdataset.append('size',this.q4);

    let callback:Observable<any> = this.http.post(url,postdataset);
    callback.subscribe(call =>{
        if(call.status == 200){
          alert(call.msg);
        }else{
          alert(call.msg);
        }
    });
  }
  getMax(){
    var maxurl = 'http://ed0ef52d7d56.ngrok.io/findmax';
    this.tada = this.http.get(maxurl);
    this.tada.subscribe(tada =>{
      this.jojo = tada;
    });
  }
}