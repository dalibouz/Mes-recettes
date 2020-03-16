import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductModel } from '../../shared/product.model';
import { UnitOfMeasureModel } from '../../shared/unit-of-measure.model';
import { QuantityModel } from '../../shared/quantity.model';

@Injectable()
export class ProductService {
  productsChanged = new Subject<ProductModel[]>();

  private products: ProductModel[] = [
    new ProductModel(
      'Tomate concerve',
      'Annalisa',
      '8002560200106',
      'Concerve',
      'Tomate composition',
      'https://www.produits-italiens.fr/4125-large_default/pulpe-de-tomates-100-italiennes.jpg',
      new QuantityModel(
        new UnitOfMeasureModel('Kilogramme', 'kg'),
        1
      )
    ),
    new ProductModel(
      'Confiture',
      'Bonne Maman',
      '3608580758686',
      'Concerve',
      'confiture composition',
      'https://www.bonnemaman.ch/uploads/catalogues_price_image/confiturePackaging-fraise.jpg',
      new QuantityModel(
        new UnitOfMeasureModel('Kilogramme', 'kg'),
        2
      )
    ),
    new ProductModel(
      'Ovomaltine Crunchy',
      'Ovomaltine',
      '3470320400052',
      'Chocolat Tartine',
      'piteàtartiner avec de pépites croustillantes à l\'extrait de malt d\'orge et de cacao Ovomaltine Oln rédients : ' +
      'Pépites croustillantes à l\'extrait de malt d\'orge et de cacao Oyomaltjne [extrait de concentré (lait), cacao mai yégetales ' +
      '(colza et palme), noise tes, phosp ate de calcium, émuls\' :lécithinàe maigre antioxydants : palmitate dascorbyfe et ' +
      'alpha•tocophérol, arôme : vanilline. freerpasta met krokante stukjes van gerstemoutextract en cacao Ovomaltine SIn ediënten: ' +
      'Krokante stukjes van gerstemoutextnct en cacao Ovomaltine 33%ÉerstemoutexI magere melk geconcentreerde melkserum, magere cacao ' +
      '(1 3%), suiker,fructose, viamines (A E, C, thiamine Vitamine BI), riboflavine',
      'https://www.cdiscount.com/pdt2/4/7/7/1/700x700/ovo7612100018477/rw/ovomaltine-ovomaltine-crunchy.jpg',
      new QuantityModel(
        new UnitOfMeasureModel('Gramme', 'g'),
        360
      )
    )
  ];

  constructor() {}

  setProducts(products: ProductModel[]) {
    this.products = products;
    this.productsChanged.next(this.products.slice());
  }

  getProducts() {
    return this.products.slice();
  }

  getProduct(index: number) {
    return this.products[index];
  }

  addProduct(product: ProductModel) {
    this.products.push(product);
    this.productsChanged.next(this.products.slice());
  }

  updateProduct(index: number, product: ProductModel) {
    this.products[index] = product;
    this.productsChanged.next(this.products.slice());
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.productsChanged.next(this.products.slice());
  }
}
