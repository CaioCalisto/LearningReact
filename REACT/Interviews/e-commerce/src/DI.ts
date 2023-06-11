import 'reflect-metadata'
import { container } from 'tsyringe'
import { Api } from './hooks/Api'
import { ProductsApi } from './hooks/ProductsApi'
/*
This file can contains others DI
re-export the container, so people must import this file
and not accidentally get `container' directly from tsyringe
*/
export { container }

container.register<Api>('api', { useValue: new ProductsApi()})