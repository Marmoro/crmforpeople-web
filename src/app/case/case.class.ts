export class Inquiry {

    constructor(
        public inquiryType?: string,
        public organization?: string,
        public content?: string,
        public timestamp?: Date,
    ) { }

}