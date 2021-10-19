import axios from 'axios';

/** 
* Receber código (string)
* recuperar o access_token no github utilizando o Axios
* Verificar se o usuário existe
* === Se existir = gera um toke
* === Não existir = Cria no db e gera um token
* Retorna token com as informações do usuário
*/
class AuthenticateUserService {
    async execute(code: string) {
        const url = "https://github.com/login/oauth/access_token";
        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                "Accept": "application/json"
            }
        });
        return response.data
    }
}

export { AuthenticateUserService }