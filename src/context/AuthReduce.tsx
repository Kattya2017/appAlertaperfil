import { User } from "../interface/LoginInterface";
import { Rol } from "../interface/RolInterface";




export interface AuthState{
    status: 'checking' | 'authenticated' | 'not-authenticated';
    rol:'checking' | 'USER_ADMIN' | 'USER_SUPERVISOR' | 'USER_INFORMATICO'| 'not-authenticated';
    token: string | null;
    errorMessage: string;
    user: User | null;
}

export type AuthAction =
    | {type: 'signIn', payload:{token:string, user:User, rol:'USER_ADMIN' | 'USER_SUPERVISOR' | 'USER_INFORMATICO'| 'not-authenticated'}}
    | {type: 'signUp', payload:{token:string, user:User}}
    | {type: 'addError', payload:string}
    | {type: 'removeError'}
    | {type: 'notAuthenticated'}
    | {type: 'logout'}



export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                user: null,
                status: 'not-authenticated',
                token: null,
                errorMessage: action.payload,
                rol:'not-authenticated'
            }
        
        case 'removeError' :
            return {
                ...state,
                errorMessage:''
            }

        case 'signIn':
            return {
                ...state,
                errorMessage:'',
                status:'authenticated',
                token: action.payload.token,
                user: action.payload.user,
                rol:action.payload.rol
            }
        case 'signUp':
            return {
                ...state,
                errorMessage:'',
                status:'authenticated',
                token: action.payload.token,
                user: action.payload.user
            }

        case 'logout':
        case 'notAuthenticated':
            return {
                ...state,
                status:'not-authenticated',
                token: null,
                user:null,
                rol:'not-authenticated'
            }

        default:
            return state;
    }
}