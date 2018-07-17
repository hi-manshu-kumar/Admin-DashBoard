import React, { Component } from 'react';
import {Product} from './components/Product';
import {TotalAdded } from './components/TotalAdded'
import {List} from './components/List';
import {Count} from './components/Count';
import {ProductList} from './components/ProductList';
import './App.css';

class Item {
    constructor(id,name,price,url)
    { 
      this.id=id;
      this.name=name;
      this.price=price;
      this.url=url;
    }
}

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      mobiles:[],
      quantityATC: 0,
      id:'1',
      name:'',
      price:'',
      url:'www.',
    };
  }

  doAjax(){
    const url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
    fetch(url).then(response=>{
      response.json().then(data=>{
        console.log("Data is himank",data);
        console.log("fadu data is ",data.mobiles)
        this.setState({...this.setState,mobiles:data.mobiles});
      }).catch(err=>{
        console.log("Invalid JSON ",err);
      })
    }).catch(err=>{
      console.log("Error in Ajax Call ",err);
    })
  }

  handleDataid(event){
    this.setState({
      ...this.state, id:  event.target.value
    })
  }

  handleDataname(event){
    this.setState({
      ...this.state, name:  event.target.value
    })
  }
  handleDataprice(event){
    this.setState({
      ...this.state, price:  event.target.value
    })
  }
  handleDataurl(event){
    this.setState({
      ...this.state, url:  event.target.value
    })
  }

  

  addItem(){
    var id = this.state.id;
    var name = this.state.name;
    var price = this.state.price;
    var url = this.state.url;
    var x = new Item (id,name,url,price);
    this.state.mobiles = [...this.state.mobiles,x];
    this.setState({
      ...this.state,mobiles:this.state.mobiles 
    }) 
  }
  
  addtc(){
    var quantityATC= this.state.quantityATC;
    quantityATC++;
    this.setState({
      ...this.state, quantityATC : parseInt(quantityATC)
    });
  }


  render() {
    return (
      <div >
        <Product parentfn={this.doAjax.bind(this)}  list={this.state.mobiles} additem={this.addItem.bind(this)} ida={this.handleDataid.bind(this)} namea={this.handleDataname.bind(this)} pricea={this.handleDataprice.bind(this)} urla = {this.handleDataurl.bind(this)} ></Product>
        {this.state.id} {this.state.name} {this.state.price} {this.state.url}
        <br/>
        
        <List list={this.state.mobiles} count={this.state.quantityATC} addtocart= {this.addtc.bind(this)}></List>
      </div>
    );
  }
}
