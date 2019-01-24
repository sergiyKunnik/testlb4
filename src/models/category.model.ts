import { Entity, model, property } from '@loopback/repository';

@model()
export class Category extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    id: true
  })
  id: string;


  constructor(data?: Partial<Category>) {
    super(data);
  }
}
