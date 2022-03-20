import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        fontSize : {
            heading1: string,
            heading2: string,
            small: string
        }

        colors: { 
            darkPurple: string,
            lightPurple: string,
            hoverPurple: string,
            lightGrey: string
        }

    }
}