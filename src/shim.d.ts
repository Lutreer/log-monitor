interface IResponse {
    code: number;
    data: any;
    message: any;
  }
type ProcessNodeEnv = 'development' | 'production' | 'test'