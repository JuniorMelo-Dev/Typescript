var Default = /** @class */ (function () {
    function Default() {
        this.method();
        this.array = [
            {
                nome: "JuniorDev"
            }
        ];
    }
    // Sobrescrevendo conteúdo de string
    Default.prototype.method = function () {
        this.numero = 33;
        this.texto = "TemplateString e concatena\u00E7\u00E3o em TypeScript, valor da vari\u00E1vel n\u00FAmero:  ".concat(this.numero);
        return alert(this.texto);
    };
    return Default;
}());
