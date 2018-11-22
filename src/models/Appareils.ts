export class Appareil
{
    description: string[];
    status: string;
    startTime: string;
    endTime: string;

    constructor(public name: string)
    {
        this.status = 'éteint';
        this.startTime = '';
        this.endTime = '';
        this.description = [];
    }
}