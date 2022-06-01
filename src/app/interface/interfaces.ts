export interface iaddress {
  userid : number,
  country : string,
  zipcode : number,
}

export interface icurrency {
  currencyid : number,
  currencyname : string,

}

export interface idelivery {
  deliveryid : number,
  method : string,
}

export interface iorders { // populate with navigation properties/interface
  orderid : number,
  productid : number,
  userid : number,
  deliveryid : number,
  paymentid : number,
  product : iproduct,
  user : iuser,
  delivery : idelivery,
  payment : ipayment
}

export interface icurrencyuser { // populate with navigation properties/interface
  userid : number,
  currencyid : number
}

export interface ipayment {
  paymentid : number,
  method : string,
}

export interface iproduct {
  productid : number,
  productname : string,
  price : number,

}

export interface iseller {
  sellerid : number,
  name : string,
  productid : number

}

export interface iuser {
  userid : number,
  username : string,
  password : string,
  address : iaddress,
  currencyuser  : icurrencyuser | null
}