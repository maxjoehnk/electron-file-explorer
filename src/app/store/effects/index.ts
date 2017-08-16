import {Type} from '@angular/core';
import {WindowEffects} from './window';
import {PathEffects} from './path';
import {ItemEffects} from './items';
import {HistoryEffects} from './history';
import {FavoriteEffects} from './favorites';
import {TagEffects} from './tags';

export const effects: Type<any>[] = [
    WindowEffects,
    PathEffects,
    ItemEffects,
    HistoryEffects,
    FavoriteEffects,
    TagEffects
];
