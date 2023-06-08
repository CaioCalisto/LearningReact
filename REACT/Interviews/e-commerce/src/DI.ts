import 'reflect-metadata'
import { container } from 'tsyringe'

/*
This file can contains others DI
re-export the container, so people must import this file
and not accidentally get `container' directly from tsyringe
*/
export { container }