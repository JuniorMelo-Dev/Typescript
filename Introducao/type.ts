class Default {

    //Tipos
    texto: string;
    numero: number;
    qualquer: any;
    boleano: boolean;

    // métodos de criar array
    array: Array<any>;
    array2: any[];

    constructor() {
        this.method();

        this.array = [
            {
                nome: "JuniorDev"
            }
        ];
    }

    // Sobrescrevendo conteúdo de string
    method() {
        this.numero = 33;
        this.texto = `TemplateString e concatenação em TypeScript, valor da variável número:  ${this.numero}`;
        return alert(this.texto);
    }
}