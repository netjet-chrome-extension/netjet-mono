import { SceEvent, SceMain } from "@sce/plugin-typings";
export declare class SCEPlugin implements SceMain {
    static pluginType: string;
    static pluginName: string;
    private events;
    private typescriptGenerator;
    constructor();
    getRawGeneratedCode(): any;
    getStyledGeneratedCode(): any;
    setEvents(events: SceEvent[]): void;
}
