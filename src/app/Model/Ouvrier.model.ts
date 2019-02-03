export class Ouvrier {
    constructor(public username: string ,
                public nom_ouvirer: string,
                public prenom_ouvrier: string,
                public numero_telephone: string,
                public sexe_ouvrier: string,
                public age_ouvrier: number,
                public photo: string,
                public metier_ouvrier: string,
                public date_creation: String,
                public password: string,
                public enabled: boolean,
                public addresse: string) {}
}
