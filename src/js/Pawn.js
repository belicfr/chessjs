class Pawn {
    /**
     * DOM element linked to this pawn.
     */
    #DOMElement;

    /**
     * Pawn type.
     */
    #type;

    /**
     * List that includes all accepted pawn types.
     */
    static #acceptedPawns = [
        "pawn", "bishop", "knight",
        "rook", "queen", "king"
    ];

    constructor(DOMElement, type) {
        this.#DOMElement = DOMElement;
        this.#type = type;
    }

    /**
     * Returns if the current pawn type is valid,
     * included in {@link Pawn.#acceptedPawns} list.
     * @returns {boolean}
     */
    isValidPawnType() {
        return Pawn.#acceptedPawns.includes(this.#type);
    }
}