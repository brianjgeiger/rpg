declare module 'tracery-grammar' {
    export const baseEngModifiers: Modifiers;
    export function createGrammar(raw: {}): Grammar;

    interface Grammar {
        addModifiers(modifiers: Modifiers): null;
        flatten(key: string): string;
    }

    interface Modifiers {
        replace(s: string, params: [string]): string;
        capitalizeAll(s: string): string;
        capitalize(s: string): string;
        a(s: string): string;
        firstS(s: string): string;
        s(s: string): string;
        ed(s: string): string;
    }
}
