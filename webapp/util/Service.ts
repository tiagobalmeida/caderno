export default class Service {

    static getTags() {
        let toTag = (name:string) => { return {name: name, selected: false}}; 
        return ["UI5", "Password", "ABAP", "SCP"].map(toTag);
    }

    static getNotes() {
        return [];
    }   

}
