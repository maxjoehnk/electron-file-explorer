import {Type} from '@angular/core';
import {WindowEffects} from './window';
import {PathEffects} from './path';
import {ItemEffects} from './items';

export const effects: Type<any>[] = [
    WindowEffects,
    PathEffects,
    ItemEffects
];
