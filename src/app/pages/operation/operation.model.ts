import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export class Operation {
    constructor(public id: string,
                public coin: string,
                public entry: number,
                public entryBTC: number,
                public entryUSD: number,
                public exit: number,
                public exitBTC: number,
                public exitUSD: number,
                public profit: number,
                public btcCost: number,
                public btcGain: number,
                public usdGain: number,
                public userId: number,
                public userName: string,
                public date: string,
                public created: string,
                public modified: string,
                public comment: string
                ) { }
}