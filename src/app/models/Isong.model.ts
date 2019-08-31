import {Iquote} from './Iquote.model';

export interface Isong{
    id:string,
    quotes:Iquote[],
    title:string,
    youtubeId:string
}