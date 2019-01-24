import { BelongsToAccessor, repository, DefaultCrudRepository, juggler } from '@loopback/repository';
import { Product, Category } from '../models';
import { DbDataSource } from '../datasources';
import { Getter, inject } from '@loopback/core';
import { CategoryRepository } from './category.repository';

export class ProductRepository extends DefaultCrudRepository<Product, typeof Product.prototype.id> {

  public readonly category: BelongsToAccessor<Category, typeof Product.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('CategoryRepository') categoryRepositoryGetter: Getter<CategoryRepository>
  ) {
    super(Product, dataSource);

    this.category = this.createBelongsToAccessorFor('category', categoryRepositoryGetter);
  }
}
