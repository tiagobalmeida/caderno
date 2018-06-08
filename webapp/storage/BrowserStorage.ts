export default class BrowserStorage {

    protected component: sap.ui.core.Component;

    public constructor(component: sap.ui.core.Component){
        this.component = component;
    }

    public static getInstance(component: sap.ui.core.Component) : BrowserStorage{
        return new BrowserStorage(component);
    }
}
