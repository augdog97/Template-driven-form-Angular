
/*
    1. Creating the User class with first name and email as required fields. 
        - the '?' in the country signifies that this is an optional field
*/
export class User {
    constructor(
        public firstName: string,
        public email: string,
        public country?: string
    ) {

    }
}