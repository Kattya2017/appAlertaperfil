// Generated by https://quicktype.io

export interface ResultAlertasDerivadas {
    ok:   boolean;
    msg:  string;
    resp: Derivada[];
}

export interface Derivada {
    id:           number;
    descripcion:  string;
    fecha_inicio: string;
    fecha_fin:    string;
    hora_inicio:  string;
    hora_fin:     string;
    id_alerta:    number;
    id_usuario:   number;
    id_estado:    number;
    sede:         string;
    organo:       string;
    unidad:       string;
    area:         string;
    Alertum:      Alertum;
    Usuario:      Usuario;
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
}

export interface TipoAlertum {
    id:          number;
    descripcion: string;
    imagen:      null;
    estado:      number;
}

export interface Usuario {
    id:       number;
    nombre:   string;
    apellido: string;
    usuario:  string;
    password: string;
    id_rol:   number;
    estado:   number;
}
