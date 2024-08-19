declare module "slash2";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";

declare interface Window {
  metaidwallet: {
    verifySignature(verifyObj: {
      message: unknown;
      signature: any;
      encoding: string;
    }): any;
    getPublicKey(): any;
    signMessage(arg0: {
      message: string;
      encoding?: string;
    }): { signature: any } | PromiseLike<{ signature: any }>;
    getAddress(): any;
    getMvcBalance: () => Promise<{
      address: string;
      confirmed: number;
      total: number;
      unconfirmed: number;
    }>;
    switchNetwork: (network: "livenet" | "testnet") => Promise<{
      address: string;
      network: "mainnet" | "testnet";
      status: string;
    }>;
    on: (
      eventName: string,
      handler: { mvcAddress: string; btcAddress: string } | any
    ) => void;
    removeListener: (
      eventName: string,
      handler: { mvcAddress: string; btcAddress: string } | any
    ) => void;
    getNetwork: () => Promise<{ network: "mainnet" | "testnet" }>;
    connect: () => Promise<{
      address?: string;
      pubKey?: string;
      status?: string;
    }>;
    isConnected: () => Promise<boolean>;
    btc: {
      getAddress: () => Promise<string>;
      getPublicKey: () => Promise<string>;
      connect: () => Promise<{
        address?: string;
        pubKey?: string;
        status?: string;
      }>;
      transferMRC20: (params: any) => Promise<any>;
      getBalance: (chain: string) => Promise<{ total: number }>;
      inscribeTransfer: (tick: string) => Promise<string>;
      signMessage: (message: string) => Promise<string>;
      signPsbt: ({
        psbtHex,
        options,
      }: {
        psbtHex: string;
        options?: any;
      }) => Promise<string|{status:string}>;
      pushPsbt: (psbt: string) => Promise<string>;
      signPsbts: (psbtHexs: string[], options?: any[]) => Promise<string[]>;
      getUtxos: (params:any) => Promise<API.UTXO[]>;
    };
    token: {
      getBalance: () => Promise<any>;
    };
    transfer: (params: {
      tasks: TransferOutput[];
      broadcast: boolean;
    }) => Promise<TransferResponse>;
  };
}
