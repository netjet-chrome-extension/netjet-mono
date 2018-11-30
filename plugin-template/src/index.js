'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var SCEPlugin = (function () {
    function SCEPlugin() {
        this.rawCode = '';
        this.styledCode = '';
        this.code = [];
        this.defaultCode = 'very special cooode.';
    }
    SCEPlugin.prototype.initialize = function () {
    };
    SCEPlugin.prototype.getRawGeneratedCode = function () {
        return 'so much code right now';
    };
    SCEPlugin.prototype.getStyledGeneratedCode = function () {
        return this.styledCode;
    };
    SCEPlugin.prototype.onComplete = function (x) {
        this.code.push('complete');
        x.updateCode();
    };
    SCEPlugin.prototype.onNextEvent = function (ev, x) {
        x.updateCode();
    };
    SCEPlugin.scePlugin = true;
    SCEPlugin.pluginType = 'code-generator';
    SCEPlugin.pluginName = 'va va voom' || 'my-special-plugin';
    return SCEPlugin;
}());
exports.SCEPlugin = SCEPlugin;
