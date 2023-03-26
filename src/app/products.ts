export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  quantity: number;
}
export interface CartProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  quantity: number;
}
export const products = [
  {
    id: 1,
    name: 'iPhone XL',
    description: 'El mejor telefono segun los mamadores',
    price: 799,
    stock: 1,
    images: ['uno.png'],
    quantity: 0
  },
  {
    id: 2,
    name: 'Nokia 3220',
    description: 'Trae gomas con colores a los lados',
    price: 699,
    stock: 2,
    images: ['dos.jpeg'],
    quantity: 0
  },
  {
    id: 3,
    name: 'Sony Ericcson',
    description: 'Que chingones estaban estos celulares',
    price: 299,
    stock: 3,
    images: ['tres.jpg'],
    quantity: 0
  },
  {
    id: 4,
    name: 'Motorolla',
    description: 'Buena estetica y buen rendimiento',
    price: 899,
    stock: 4,
    images: ['cuatro.png'],
    quantity: 0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/