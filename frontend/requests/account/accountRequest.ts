import { AxiosPromise } from 'axios';
import { Client } from '@requests/common/client';
import SignUpReqDto from '@models/account/req/signUpReqDto';
import LoginResDto from '@models/account/res/loginResDto';
import LoginReqDto from '@models/account/req/loginReqDto';

export namespace AccountRequest {
    const client = new Client('/account');

    export function signUp(req: SignUpReqDto): AxiosPromise<string> {
        return client.post('/sign-up', req);
    }

    export function login(req: LoginReqDto): AxiosPromise<LoginResDto> {
        return client.post('/login', req);
    }
}
