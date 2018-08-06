
export default class AppSettings {
    public driveRootFolderId: string;
    public useDrive: boolean;

    public save():void {
        var data = JSON.stringify(this);
        localStorage.setItem("jz.caderno.settings", data);
    }

    public load(): void {
        var item = localStorage.getItem(
            "jz.caderno.settings");
        if ( item ) {
            var savedSettings = JSON.parse(item);
            if ( savedSettings ) {
                this.driveRootFolderId = savedSettings.driveRootFolderId;
                this.useDrive = savedSettings.useDrive;
            }
        }
    }
}
