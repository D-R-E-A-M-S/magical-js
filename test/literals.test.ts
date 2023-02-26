import { describe, it, expect } from 'vitest';
import { Parser } from 'MAGICAL-JS';

describe( 'literal', () => {

    const NumericAST = Parser.parse( `16` );

    it( 'should return a program tree for numericLiteral', () => {

        expect( NumericAST ).toEqual(

            {
                "type": 'Program',
                "body": [
                    {
                        "type": 'NumberLiteral',
                        "value": 16
                    }
                ]
            }

        );

    } );


    const StringAST = Parser.parse(
        `
            // Ignored Line MAGICAL-JS
            "MAGICAL-JS"
        `
    );

    it( 'should return a program tree for stringLiteral', () => {

        expect( StringAST ).toEqual(

            {
                "type": 'Program',
                "body": [
                    {
                        "type": 'StringLiteral',
                        "value": "MAGICAL-JS"
                    }
                ]
            }

        );

    } );

} );