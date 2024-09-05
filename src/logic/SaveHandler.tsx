import Enemy from "../types/Enemy";
import saveAs from "file-saver";

const FILE_PREFIX:string = "encounter_save"
const FILE_SUFFIX:string = "json"

class SaveHandler{
    public save(enemiesList:Enemy[]): void{
        saveAs(this.createEnemiesBlob(enemiesList), this.createSaveFileName());
    }

    public load(saveString:string): Enemy[]{
        const json:Enemy[] = JSON.parse(saveString)
        console.log(Date.now().toString())
        return json;
    }

    private createSaveFileName():string{
        let date = new Date;
        return `${FILE_PREFIX}_${date.getFullYear()}_${date.getMonth()}_${date.getDate()}_${date.getMinutes()}_${date.getMinutes()}_${date.getSeconds()}.${FILE_SUFFIX}`;
    }

    private createEnemiesBlob(enemiesList:Enemy[]): Blob{
        return new Blob([JSON.stringify(enemiesList)],{
            type: 'application/json'
        })
    }
}

export default SaveHandler;