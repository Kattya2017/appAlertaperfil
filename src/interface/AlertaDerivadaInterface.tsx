// Generated by https://quicktype.io
// Generated by https://quicktype.io

export interface ResultAlertasDerivadas {
    ok:   boolean;
    msg:  string;
    resp: Derivada[];
}

export interface Derivada {
    id:           number;
    descripcion:  null;
    fecha_inicio: string;
    fecha_fin:    null;
    hora_inicio:  string;
    hora_fin:     null;
    id_alerta:    number;
    id_usuario:   number;
    id_estado:    number;
    sede:         string;
    organo:       string;
    unidad:       string;
    area:         string;
    anexo:        string;
    Alertum:      Alertum;
}

export interface Alertum {
    id:              number;
    fecha:           string;
    hora:            string;
    conformidad:     null;
    id_administrado: number;
    id_tipo_alerta:  number;
    descripcion:     string;
    estado:          number;
    TipoAlertum:     TipoAlertum;
    Administrado:    Administrado;
}

export interface Administrado {
    id:        number;
    nombre:    string;
    apellido:  string;
    password:  string;
    dni:       string;
    tipo_area: number;
    area:      number;
    telefono:  string;
}

export interface TipoAlertum {
    id:          number;
    descripcion: string;
    imagen:      null;
    estado:      number;
}
