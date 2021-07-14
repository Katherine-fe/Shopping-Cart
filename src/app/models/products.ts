export interface Product {
  id: string;
  data: {
    precio: number;
    categoria: string;
    marca: string;
    name: string;
    sugerido: number;
    img: string;
  };
  qty:number
}
