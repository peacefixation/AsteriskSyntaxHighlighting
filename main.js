/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/** 
 * Add language support for Asterisk dialplan
 */
define(function (require, exports, module) {
    "use strict";

    var LanguageManager = brackets.getModule("language/LanguageManager");

    LanguageManager.defineLanguage("asterisk", {
        name: "Asterisk",
        mode: "asterisk",
        //fileExtensions: ["conf"],
        lineComment: [";"]
    });
});