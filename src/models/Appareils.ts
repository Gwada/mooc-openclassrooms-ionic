export class Appareil
{
    description: string[];

    constructor(public name: string,
                public startTime?: string,
                public endTime?: string,
                public status?: string)
    {
        this.description = [];
        !status ? this.status = 'éteint' : 0;
        !startTime ? this.startTime = '' : 0;
        !endTime ? this.endTime = '' : 0;
    }
}