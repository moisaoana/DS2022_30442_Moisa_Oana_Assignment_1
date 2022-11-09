import {UserService} from "./user.service";
import {TokenStorageService} from "./token-storage.service";
import {DeviceService} from "./device.service";

export const services =[
  UserService,
  TokenStorageService,
  DeviceService
]

export * from './user.service'
export * from './token-storage.service'
export * from './device.service'
