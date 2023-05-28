class Table {
    #table;

    #tableSizes= { width: 8, height: 8 };

    constructor(table) {
        this.#table = table;
    };

    initializePawns() {
        /*
         * TODO:
         *      - create pawns
         *      - set pawns position to default ones
         */
    };

    #createPawns() {
        const POSITIONS = {
            white: {
                pawn: range(8, 15),
                bishop: [ 2, 5 ],
                knight: [ 1, 6 ],
                rook: [ 0, 7 ],
                queen: [ 3 ],
                king: [ 4 ]
            },

            black: {
                // TODO: set good values!
                pawn: range(8, 15),
                bishop: [ 2, 5 ],
                knight: [ 1, 6 ],
                rook: [ 0, 7 ],
                queen: [ 3 ],
                king: [ 4 ]
            }
        };

        /* WHITE PAWNS */

        // TODO!
    };
}