// Generated by https://quicktype.io

export interface ResultTipoAlerta {
    ok:   boolean;
    msg:  string;
    resp: TipoAlerta[];
}

export interface TipoAlerta {
    id:          number;
    descripcion: string;
    imagen:      null;
    estado:      number;
}