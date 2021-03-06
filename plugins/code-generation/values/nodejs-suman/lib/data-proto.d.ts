export declare const proto: {
    getParent(): any;
    generate(): string;
    log(indent?: number): void;
    setLeftMost(v: any): any;
    setRightMost(v: any): any;
    getRightMostNonStringNode(): any;
    getLeftMostNonStringNode(): any;
    getRightMostWithMarker(): any;
    getLeftMostWithMarker(): any;
    getLeftMost(): any;
    getRightMost(): any;
    clearAllMarkers(): void;
    exitRightFromSumanHook(downOrUp: string, prevWasHook: boolean): any;
    exitRightFromSumanBlock(downOrUp: string, prevWasHook: boolean): any;
    exitLeftFromSumanHook(downOrUp: string): any;
    exitLeftFromSumanBlock(downOrUp: string): any;
    copy(): any;
    render(data: string): any;
};
