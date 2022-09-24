import { Product } from "./product";

export interface Controller {}

export interface View {
  renderProduct: (product: Product) => void;
}

export interface Model {}
