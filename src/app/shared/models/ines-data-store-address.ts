import { BaseDataAddress } from "@think-it-labs/edc-connector-client";

export interface InesDataStoreAddress extends BaseDataAddress{
  type: 'Minio';
  folder?: string;
  file?: any;
}
