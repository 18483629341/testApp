import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  /** 基本配置  --start */
  // public host = 'http://192.168.1.173:8080/RestService/rest/'; // 接口服务地址
  public host = 'http://119.253.32.11/Android/test/'; // 接口服务地址
  /** 基本配置  --end */

  //public login = ''; // 登陆
 

  constructor() {}
}
