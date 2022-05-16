import axios, { AxiosInstance } from 'axios';
import { CasAuth } from './cas.auth';

export class Cas {
  private readonly _axios: AxiosInstance;
  public _auth: CasAuth;

  constructor(private _casServerBaseUrl: string, private _redirectUri) {
    this._axios = axios.create({
      baseURL: _casServerBaseUrl,
      params: {}
    });
    this._auth = new CasAuth(this._axios, _redirectUri);
  }
}
