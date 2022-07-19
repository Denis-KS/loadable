import universities from './universities/key';
import apis from './apis/key';
import { valueof } from '../toolkit/valueof';

export type Domain = 
    valueof<typeof universities> |
    valueof<typeof apis>;