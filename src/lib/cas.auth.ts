import { AxiosInstance } from 'axios';
import { XMLParser } from 'fast-xml-parser';

export class CasAuth {
  constructor(private _axios: AxiosInstance, private _redirectUri: string) {
  }

  /**
   * get xml which includes an indication of success, the authenticated subject and optionally attributes
   * @param ticket
   */
  public async serviceValidate(ticket: string): Promise<ResponseType> {
    const result = await this._axios.get('/cas/serviceValidate', {
      params: {
        params: {
          ticket: ticket,
          service: this._redirectUri
        }
      }
    });
    const parser = new XMLParser();
    return (result.data) ? {
      status: result.status,
      data: parser.parse(result.data)
    } : { status: result.status };
  }

  public service() {
    console.log('not yet implemented');
  }

  public async p3Service() {
    console.log('not yet implemented');
  }

  public async ticket() {
    console.log('not yet implemented');
  }
}
