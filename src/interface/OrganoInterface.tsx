// Generated by https://quicktype.io

export interface ResultOrgano {
    ok:   boolean;
    msg:  string;
    resp: Organo;
}

export interface Organo {
    id:      number;
    nombre:  string;
    estado:  number;
    id_sede: number;
    anexo:string;
    Sede:    Sede;
}

export interface Sede {
    id:     number;
    nombre: string;
    estado: number;
}
