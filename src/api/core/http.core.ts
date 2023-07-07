export type httpMethod = 'get' | 'delete' | 'head' | 'post' | 'put' | 'patch';
export const methods = {
  get: 'get' as httpMethod,
  post: 'post' as httpMethod,
  update: 'put' as httpMethod,
  delete: 'delete' as httpMethod,
  patch: 'patch' as httpMethod,
};

export type ApiDefaultesponse = { success: boolean; redirectUrl: string };

export const httpStatusResponse = {
  200: {
    message: 'Sucesso',
    code: 'SUCCESS',
  },
  400: {
    message: 'Requisição inválida',
    code: 'BAD_REQUEST',
  },
  401: {
    message: 'Você não tem permissão para acessar o conteúdo',
    code: 'UNHAUTHORIZED',
  },
  404: {
    message: 'Recurso não encontrado',
    code: 'NOT_FOUND',
  },
  500: {
    message: 'Ocorreu um erro interno',
    code: 'INTERNAL_SERVER_ERROR',
  },
};

export const defaultHttpStatusResponse = {
  message: 'Erro desconhecido',
  code: '',
};
