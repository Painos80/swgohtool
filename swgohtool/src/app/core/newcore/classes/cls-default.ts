import { BehaviorSubject } from "rxjs";

export class ClsDefault {


    label:string = "";

    private _values = new BehaviorSubject<any>([]);
    values_obs$ = this._values.asObservable();
    valuesobj: any;
    changeValues(newData: any) {
        this.valuesobj = newData;
        this._values.next(newData);
    }
}
