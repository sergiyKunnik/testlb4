import { belongsTo, Entity, model, property } from '@loopback/repository';
import { Category } from './category.model';

@model()
export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @belongsTo(() => Category)
  categoryId: 'string';



  constructor(data?: Partial<Product>) {
    super(data);
  }
}
