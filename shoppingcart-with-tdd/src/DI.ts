import 'reflect-metadata'
import { container } from 'tsyringe'
import { CartApi } from './infrastructure/api/CartApi'
import { CartApiRequest } from './infrastructure/api/CartApiRequest'

/*
This file can contains others DI
re-export the container, so people must import this file
and not accidentally get `container' directly from tsyringe
*/
export { container }

container.register<CartApi>('api', { useValue: new CartApiRequest()})