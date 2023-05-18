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
        this.texto = "Alert simples em TypeScript";
        return alert(this.texto);
    }
}