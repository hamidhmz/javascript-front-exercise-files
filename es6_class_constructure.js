//374 index53

class MakeName {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    completeName() {
        console.log(this);
        console.log(this.firstName + " " + this.lastName);
    }
}
let friend = new MakeName("Laurence", "Svekis");
friend.completeName();
