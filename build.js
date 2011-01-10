{
    baseUrl: "lib",
    dir: "build",

    paths: {
        "ace": "ace",
        "demo": "../demo",
        "cockpit": "../support/cockpit/lib/cockpit",
        "pilot": "../support/cockpit/support/pilot/lib/pilot"
    },

    //- "closure": uses Google's Closure Compiler in simple optimization
    //mode to minify the code.
    //- "closure.keepLines": Same as closure option, but keeps line returns
    //in the minified files.
    //- "none": no minification will be done.
    optimize: "closure.keepLines",
    //optimize: "none",
    inlineText: true,
    useStrict: false,

    pragmas: {
        jquery: false,
        requireExcludeModify: true,
        requireExcludePlugin: false,
        requireExcludePageLoad: false
    },

    skipPragmas: false,
    execModules: false,
    skipModuleInsertion: false,

    modules: [
        {
            name: "demo/boot",
            include: [
                "pilot/fixoldbrowsers", 
                "pilot/plugin_manager", 
                "pilot/settings",
                "pilot/environment", 
                "pilot/index",
                "cockpit/index",
                "demo/startup"
            ]
        },
        /*{
            name: "demo/startup",
            includeRequire: false,
            include: [
                "pilot/fixoldbrowsers"
            ]
        },
        {
            name: "ace/editor",
            include: [
                "ace/document",
                "ace/undomanager",
                "ace/virtual_renderer",

                "ace/mode/javascript",
                "ace/theme/textmate"
            ],
            includeRequire: false
        },*/
        {
            name: "ace/theme/eclipse",
            exclude: [
                "pilot/lang",
                "pilot/dom",
                "pilot/oop"
            ]
        },
        {
            name: "ace/mode/xml",
            exclude: [
                "pilot/oop",
                "ace/tokenizer",
                "ace/mode/text"
            ]
        },
        {
            name: "ace/mode/css",
            exclude: [
                "pilot/oop",
                "pilot/lang",
                "ace/tokenizer",
                "ace/range",
                "ace/mode/text"
            ]
        },
        {
            name: "ace/mode/html",
            exclude: [
                "pilot/oop",
                "pilot/lang",
                "ace/tokenizer",
                "ace/range",
                "ace/mode/text",
                "ace/mode/javascript",
                "ace/mode/css",
            ]
        },
        { 
            name: "ace/mode/python",
            exclude: [
                "pilot/oop",
                "pilot/lang",
                "ace/tokenizer",
                "ace/range",
                "ace/mode/text"
            ]
        }
    ]
}