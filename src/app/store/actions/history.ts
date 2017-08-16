import { Action } from '@ngrx/store';

export const HISTORY_BACK = '[History] Back';
export const HISTORY_FORWARD = '[History] Forward';

export class HistoryForward implements Action {
    readonly type = HISTORY_FORWARD;
}

export class HistoryBack implements Action {
    readonly type = HISTORY_BACK;
}

export type All =
    HistoryForward |
    HistoryBack;
