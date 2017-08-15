import { Action } from '@ngrx/store';

export const WINDOW_MINIMIZE = '[Window] Minimize';
export const WINDOW_MAXIMIZE = '[Window] Maximize';
export const WINDOW_CLOSE = '[Window] Close';

export class MinimizeWindow implements Action {
    readonly type = WINDOW_MINIMIZE;
}

export class MaximizeWindow implements Action {
    readonly type = WINDOW_MAXIMIZE;
}

export class CloseWindow implements Action {
    readonly type = WINDOW_CLOSE;
}

export type All =
    MinimizeWindow |
    MaximizeWindow |
    CloseWindow;
