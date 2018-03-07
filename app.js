(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("main.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var vuetify_1 = require("vuetify");
require("vuetify/dist/vuetify.min.css");
var App_vue_1 = require("./App.vue");
var Home_vue_1 = require("./components/Home.vue");
var Logo_vue_1 = require("./components/Logo.vue");
var Create_vue_1 = require("./components/Create.vue");
var store_1 = require("./store");
vue_1.default.component('mut-logo', Logo_vue_1.default);
vue_1.default.use(vue_router_1.default);
vue_1.default.use(vuetify_1.default, {
    theme: {
        primary: "#26A69A",
        secondary: "#00897B",
        accent: "#F50057",
        error: "#FF5252",
        warning: "#FF8F00",
        info: "#29B6F6",
        success: "#00E676"
    }
});
var router = new vue_router_1.default({
    routes: [
        { path: '/', component: Home_vue_1.default },
        { path: '/create', component: Create_vue_1.default }
    ]
});
new vue_1.default({
    router: router,
    store: store_1.default,
    el: '#app',
    render: function (h) { return h(App_vue_1.default); },
});
//# sourceMappingURL=main.js.map
});
___scope___.file("App.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-5c68d924'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('v-toolbar',{attrs:{"color":"primary white--text"}},[_c('v-toolbar-title',{on:{"click":function($event){_vm.goToRoute('/')}}},[_vm._v("Mutambo")])],1),_c('v-content',[_c('v-container',{attrs:{"fluid":"fluid","fill-height":"fill-height"}},[_c('v-layout',{attrs:{"justify-center":"justify-center","align-center":"align-center"}},[_c('v-flex',{attrs:{"text-xs-center":"text-xs-center"}},[_c('router-view')],1)],1)],1)],1),_c('v-footer',{attrs:{"color":"accent"}},[_c('mut-logo')],1)],1)},
        staticRenderFns: []
      })
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    methods: {
        goToRoute: function (route) {
            this.$router.push(route);
        }
    }
};
//# sourceMappingURL=module.js.map
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-5c68d924']) {
            process.env.vueHMR['data-v-5c68d924'] = true;
            api.createRecord('data-v-5c68d924', module.exports.default);
          }
        }
      
});
___scope___.file("components/Home.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-9b326459'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-btn',{attrs:{"color":"primary"},on:{"click":function($event){_vm.goToRoute('create')}}},[_vm._v("Create tournament")]),_c('br'),_c('br'),(_vm.existingTournaments.length)?_c('div',[_c('v-list',[_vm._l((_vm.existingTournaments),function(tournament,index){return [_c('div',{staticClass:"pl-3 pr-3"},[(index !== 0)?_c('v-divider'):_vm._e()],1),_c('v-subheader',[_vm._v(_vm._s(tournament.name))])]})],2)],1):_vm._e()],1)},
        staticRenderFns: []
      })
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    methods: {
        goToRoute: function (route) {
            this.$router.push(route);
        }
    },
    computed: {
        existingTournaments: function () {
            return this.$store.state.tournaments;
        }
    }
};
//# sourceMappingURL=module.js.map
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-9b326459']) {
            process.env.vueHMR['data-v-9b326459'] = true;
            api.createRecord('data-v-9b326459', module.exports.default);
          }
        }
      
});
___scope___.file("components/Logo.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-6ffca79d'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('svg',{staticClass:"logo",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 500 500"}},[_c('path',{attrs:{"d":"M342.4,433.42a17.33,17.33,0,0,0,.25-17.33L284.34,310.23V233.41h17.48V188.05H198.18v45.35h17.48v76.82L157.32,416.09A17.48,17.48,0,0,0,172.58,442H327.42A17.33,17.33,0,0,0,342.4,433.42ZM196.51,376l9.64-17.48H247.5v-15H214.41l5.49-10h27.6v-15H228.17l2.5-4.47v-5.49H247.5v-15H230.65v-10H247.5v-15H230.65v-50.2H213.16V203h73.67v15.38H269.35V314.1L303.47,376Z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M430.89,238.9c-12.71-5.1-27.59-8.12-44.25-9-6.61-.34-13.18-.5-19.69-.5a393,393,0,0,0-75.57,7.3c-5.11,1-10.27,2.35-15.45,3.69-8.72,2.26-17.73,4.59-25.58,5.22-8.56-.63-17.57-3-26.29-5.22-5.17-1.34-10.34-2.67-15.44-3.69a393,393,0,0,0-75.57-7.3c-6.51,0-13.09.17-19.7.5-16.66.86-31.53,3.87-44.24,9l-3.64,1.47.82,3.84a65.63,65.63,0,0,1,1,7.61c.47,4.79,1,9.74,3.14,14.49a17.87,17.87,0,0,0,5.73,6.79,9,9,0,0,1,2.55,2.58c2.79,5.25,4.39,11.2,5.94,16.95.91,3.39,1.81,6.69,2.9,9.78,6.3,17.88,12.83,33.36,29.11,42,14.41,7.6,44.73,11.89,62.23,8.12,30.3-6.52,52-28.88,64.42-66.47.3-.91.6-2,.92-3.11.5-1.82,1.55-5.62,2.28-6.33a8.8,8.8,0,0,1,3.32-.64,10.75,10.75,0,0,1,3.5.56c.87.8,1.91,4.6,2.41,6.42.31,1.12.61,2.19.92,3.11,12.43,37.59,34.12,60,64.42,66.47A76.19,76.19,0,0,0,337,354c16.27,0,35.77-4,46.36-9.62,16.28-8.59,22.81-24.08,29.11-42,1.09-3.08,2-6.39,2.9-9.78,1.55-5.75,3.15-11.7,5.94-16.95a9,9,0,0,1,2.55-2.58,17.87,17.87,0,0,0,5.73-6.79c2.18-4.75,2.67-9.7,3.14-14.49a63.89,63.89,0,0,1,1-7.61l.82-3.84Zm-339,19.4H84.74a6.25,6.25,0,1,1,0-12.51h7.19a6.25,6.25,0,1,1,0,12.51Zm121.83,37c-6.56,24.75-26.1,37.83-56.94,37.83-13-.06-27.44-3.55-34.35-8.31s-10.55-17.66-13-28.38c-5.25-23.32-2.35-32.45-.16-35.81,4.73-7.25,22.48-12.13,44.16-12.13,3.16,0,6.27.11,9.22.32,5.82.4,11.52.83,17.13,1.43,17,1.8,31.36,7.51,34.8,13.89C217.79,270,217.46,281.38,213.75,295.33Zm176.76,1.13c-2.43,10.73-6.11,23.66-13,28.39s-21.34,8.25-34.75,8.31c-30.42,0-50-13.09-56.53-37.84-3.71-13.95-4-25.31-.89-31.16,3.44-6.39,17.75-12.1,34.81-13.89,5.6-.6,11.29-1,17.11-1.43,3-.21,6-.31,9.19-.31,21.71,0,39.47,4.88,44.19,12.14C392.86,264,395.76,273.15,390.51,296.47Zm22.3-38.17h-7.19a6.25,6.25,0,1,1,0-12.51h7.19a6.25,6.25,0,1,1,0,12.51Z"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"226.63","cy":"153.88","r":"16.75"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"272.58","cy":"119.14","r":"16.75"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"239.07","cy":"74.74","r":"16.75"}})])])},
        staticRenderFns: []
      })
exports.default = {}
Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-6ffca79d']) {
            process.env.vueHMR['data-v-6ffca79d'] = true;
            api.createRecord('data-v-6ffca79d', module.exports.default);
          }
        }
      
});
___scope___.file("components/Create.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-539c932'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md"}},[_c('v-form',{ref:"form",attrs:{"lazy-validation":"lazy-validation"},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-layout',{attrs:{"row":"row","wrap":"wrap"}},[_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-text-field',{attrs:{"label":"Name","required":"required","rules":_vm.nameRules},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1),_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-text-field',{attrs:{"label":"Number of players","required":"required","rules":_vm.totalPlayerRules,"type":"number"},model:{value:(_vm.totalPlayers),callback:function ($$v) {_vm.totalPlayers=$$v},expression:"totalPlayers"}})],1),_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-btn-toggle',{model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}},[_c('v-btn',{attrs:{"color":"primary white--text","flat":"flat","value":"knockout"}},[_vm._v("Knockout")]),_c('v-btn',{attrs:{"color":"primary white--text","flat":"flat","value":"league"}},[_vm._v("League")]),_c('v-btn',{attrs:{"color":"primary white--text","flat":"flat","value":"groupstage-knockout"}},[_vm._v("Groupstate & Knockout")])],1)],1),_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-btn',{attrs:{"color":"primary","disabled":!_vm.valid},on:{"click":_vm.submit}},[_vm._v("Submit")])],1)],1)],1)],1)],1)},
        staticRenderFns: []
      })
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    data: function () { return ({
        valid: true,
        name: "",
        nameRules: [function (v) { return !!v || "Name is required"; }],
        totalPlayers: 2,
        totalPlayerRules: [
            function (v) { return !!v || "Number of players is required"; },
            function (v) { return v >= 2 || "There should be at least 2 players"; }
        ],
        type: "knockout"
    }); },
    methods: {
        submit: function () {
            if (!this.$refs.form.validate()) {
                return;
            }
            this.$store.commit("addTournament", {
                name: this.name,
                type: this.type,
                numberOfPlayers: this.totalPlayers
            });
            this.$router.push('/');
        }
    }
};
//# sourceMappingURL=module.js.map
Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-539c932']) {
            process.env.vueHMR['data-v-539c932'] = true;
            api.createRecord('data-v-539c932', module.exports.default);
          }
        }
      
});
___scope___.file("store/index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vuex_1 = require("vuex");
var mutations_1 = require("./mutations");
var plugins_1 = require("./plugins");
vue_1.default.use(vuex_1.default);
exports.default = new vuex_1.default.Store({
    state: mutations_1.state,
    mutations: mutations_1.mutations,
    plugins: plugins_1.default
});
//# sourceMappingURL=index.js.map
});
___scope___.file("store/mutations.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STORAGE_KEY = 'mut-tournament';
exports.state = {
    tournaments: JSON.parse(window.localStorage.getItem(exports.STORAGE_KEY) || '[]')
};
exports.mutations = {
    addTournament: function (state, _a) {
        var name = _a.name, numberOfPlayers = _a.numberOfPlayers, type = _a.type;
        state.tournaments.push({
            name: name,
            numberOfPlayers: numberOfPlayers,
            type: type
        });
    },
};
//# sourceMappingURL=mutations.js.map
});
___scope___.file("store/plugins.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mutations_1 = require("./mutations");
var localStoragePlugin = function (store) {
    store.subscribe(function (mutation, _a) {
        var tournaments = _a.tournaments;
        window.localStorage.setItem(mutations_1.STORAGE_KEY, JSON.stringify(tournaments));
    });
};
exports.default = [localStoragePlugin];
//# sourceMappingURL=plugins.js.map
});
___scope___.file("components.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("components.css", ".logo {\n  --logo-size: 50px;\n  bottom: 30px;\n  fill: var(--color-white);\n  height: var(--logo-size);\n  right: 30px;\n  position: absolute;\n  width: var(--logo-size); }\n\n.logo circle {\n  animation-duration: 2s;\n  animation-fill-mode: backwards;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-play-state: paused; }\n\n.logo circle:nth-of-type(1) {\n  animation-delay: 1s;\n  animation-name: bubble1; }\n\n.logo circle:nth-of-type(2) {\n  animation-delay: 1.5s;\n  animation-name: bubble2; }\n\n.logo circle:nth-of-type(3) {\n  animation-name: bubble3; }\n\n.logo:hover circle {\n  animation-play-state: running; }\n\n@keyframes bubble1 {\n  0% {\n    opacity: 0;\n    transform: translateY(10%); }\n  75% {\n    opacity: .75; }\n  100% {\n    opacity: 0;\n    transform: translateY(-20%); } }\n\n@keyframes bubble2 {\n  0% {\n    opacity: 0;\n    transform: translateY(20%); }\n  75% {\n    opacity: .75; }\n  100% {\n    opacity: 0;\n    transform: translateY(-20%); } }\n\n@keyframes bubble3 {\n  0% {\n    opacity: 0;\n    transform: translateY(30%); }\n  75% {\n    opacity: .75; }\n  100% {\n    opacity: 0;\n    transform: translateY(-10%); } }");
});
return ___scope___.entry = "main.js";
});
FuseBox.pkg("fusebox-hot-reload", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
/**
 * @module listens to `source-changed` socket events and actions hot reload
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Client = require('fusebox-websocket').SocketClient, bundleErrors = {}, outputElement = document.createElement('div'), styleElement = document.createElement('style'), minimizeToggleId = 'fuse-box-toggle-minimized', hideButtonId = 'fuse-box-hide', expandedOutputClass = 'fuse-box-expanded-output', localStoragePrefix = '__fuse-box_';
function storeSetting(key, value) {
    localStorage[localStoragePrefix + key] = value;
}
function getSetting(key) {
    return localStorage[localStoragePrefix + key] === 'true' ? true : false;
}
var outputInBody = false, outputMinimized = getSetting(minimizeToggleId), outputHidden = false;
outputElement.id = 'fuse-box-output';
styleElement.innerHTML = "\n    #" + outputElement.id + ", #" + outputElement.id + " * {\n        box-sizing: border-box;\n    }\n    #" + outputElement.id + " {\n        z-index: 999999999999;\n        position: fixed;\n        top: 10px;\n        right: 10px;\n        width: 400px;\n        overflow: auto;\n        background: #fdf3f1;\n        border: 1px solid #eca494;\n        border-radius: 5px;\n        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        box-shadow: 0px 3px 6px 1px rgba(0,0,0,.15);\n    }\n    #" + outputElement.id + "." + expandedOutputClass + " {\n        height: auto;\n        width: auto;\n        left: 10px;\n        max-height: calc(100vh - 50px);\n    }\n    #" + outputElement.id + " .fuse-box-errors {\n        display: none;\n    }\n    #" + outputElement.id + "." + expandedOutputClass + " .fuse-box-errors {\n        display: block;\n        border-top: 1px solid #eca494;\n        padding: 0 10px;\n    }\n    #" + outputElement.id + " button {\n        border: 1px solid #eca494;\n        padding: 5px 10px;\n        border-radius: 4px;\n        margin-left: 5px;\n        background-color: white;\n        color: black;\n        box-shadow: 0px 2px 2px 0px rgba(0,0,0,.05);\n    }\n    #" + outputElement.id + " .fuse-box-header {\n        padding: 10px;\n    }\n    #" + outputElement.id + " .fuse-box-header h4 {\n        display: inline-block;\n        margin: 4px;\n    }";
styleElement.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(styleElement);
function displayBundleErrors() {
    var errorMessages = Object.keys(bundleErrors).reduce(function (allMessages, bundleName) {
        var bundleMessages = bundleErrors[bundleName];
        return allMessages.concat(bundleMessages.map(function (message) {
            var messageOutput = message
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbps;&npbs;&nbps;')
                .replace(/ /g, '&nbsp;');
            return "<pre>" + messageOutput + "</pre>";
        }));
    }, []), errorOutput = errorMessages.join('');
    if (errorOutput && !outputHidden) {
        outputElement.innerHTML = "\n        <div class=\"fuse-box-header\" style=\"\">\n            <h4 style=\"\">Fuse Box Bundle Errors (" + errorMessages.length + "):</h4>\n            <div style=\"float: right;\">\n                <button id=\"" + minimizeToggleId + "\">" + (outputMinimized ? 'Expand' : 'Minimize') + "</button>\n                <button id=\"" + hideButtonId + "\">Hide</button>\n            </div>\n        </div>\n        <div class=\"fuse-box-errors\">\n            " + errorOutput + "\n        </div>\n        ";
        document.body.appendChild(outputElement);
        outputElement.className = outputMinimized ? '' : expandedOutputClass;
        outputInBody = true;
        document.getElementById(minimizeToggleId).onclick = function () {
            outputMinimized = !outputMinimized;
            storeSetting(minimizeToggleId, outputMinimized);
            displayBundleErrors();
        };
        document.getElementById(hideButtonId).onclick = function () {
            outputHidden = true;
            displayBundleErrors();
        };
    }
    else if (outputInBody) {
        document.body.removeChild(outputElement);
        outputInBody = false;
    }
}
exports.connect = function (port, uri, reloadFullPage) {
    if (FuseBox.isServer) {
        return;
    }
    port = port || window.location.port;
    var client = new Client({
        port: port,
        uri: uri,
    });
    client.connect();
    client.on('page-reload', function (data) {
        return window.location.reload();
    });
    client.on('page-hmr', function (data) {
        FuseBox.flush();
        FuseBox.dynamic(data.path, data.content);
        if (FuseBox.mainFile) {
            try {
                FuseBox.import(FuseBox.mainFile);
            }
            catch (e) {
                if (typeof e === 'string') {
                    if (/not found/.test(e)) {
                        return window.location.reload();
                    }
                }
                console.error(e);
            }
        }
    });
    client.on('source-changed', function (data) {
        console.info("%cupdate \"" + data.path + "\"", 'color: #237abe');
        if (reloadFullPage) {
            return window.location.reload();
        }
        /**
         * If a plugin handles this request then we don't have to do anything
         **/
        for (var index = 0; index < FuseBox.plugins.length; index++) {
            var plugin = FuseBox.plugins[index];
            if (plugin.hmrUpdate && plugin.hmrUpdate(data)) {
                return;
            }
        }
        if (data.type === "hosted-css") {
            var fileId = data.path.replace(/^\//, '').replace(/[\.\/]+/g, '-');
            var existing = document.getElementById(fileId);
            if (existing) {
                existing.setAttribute("href", data.path + "?" + new Date().getTime());
            }
            else {
                var node = document.createElement('link');
                node.id = fileId;
                node.type = 'text/css';
                node.rel = 'stylesheet';
                node.href = data.path;
                document.getElementsByTagName('head')[0].appendChild(node);
            }
        }
        if (data.type === 'js' || data.type === "css") {
            FuseBox.flush();
            FuseBox.dynamic(data.path, data.content);
            if (FuseBox.mainFile) {
                try {
                    FuseBox.import(FuseBox.mainFile);
                }
                catch (e) {
                    if (typeof e === 'string') {
                        if (/not found/.test(e)) {
                            return window.location.reload();
                        }
                    }
                    console.error(e);
                }
            }
        }
    });
    client.on('error', function (error) {
        console.log(error);
    });
    client.on('bundle-error', function (_a) {
        var bundleName = _a.bundleName, message = _a.message;
        console.error("Bundle error in " + bundleName + ": " + message);
        var errorsForBundle = bundleErrors[bundleName] || [];
        errorsForBundle.push(message);
        bundleErrors[bundleName] = errorsForBundle;
        displayBundleErrors();
    });
    client.on('update-bundle-errors', function (_a) {
        var bundleName = _a.bundleName, messages = _a.messages;
        messages.forEach(function (message) { return console.error("Bundle error in " + bundleName + ": " + message); });
        bundleErrors[bundleName] = messages;
        displayBundleErrors();
    });
};

require('fuse-heresy-default')(module.exports)
});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("fuse-heresy-default", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

module.exports = function(input) {
    return ['function', 'object', 'array']
        .indexOf(typeof input) > -1 && input.default === undefined ? 
             Object.isFrozen(input) ? input.default = input : Object.defineProperty(input, "default", {value : input, enumerable : false}) : void 0;
}
});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("fusebox-websocket", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events = require('events');
var SocketClient = /** @class */ (function () {
    function SocketClient(opts) {
        opts = opts || {};
        var port = opts.port || window.location.port;
        var protocol = location.protocol === 'https:' ? 'wss://' : 'ws://';
        var domain = location.hostname || 'localhost';
        this.url = opts.host || "" + protocol + domain + ":" + port;
        if (opts.uri) {
            this.url = opts.uri;
        }
        this.authSent = false;
        this.emitter = new events.EventEmitter();
    }
    SocketClient.prototype.reconnect = function (fn) {
        var _this = this;
        setTimeout(function () {
            _this.emitter.emit('reconnect', { message: 'Trying to reconnect' });
            _this.connect(fn);
        }, 5000);
    };
    SocketClient.prototype.on = function (event, fn) {
        this.emitter.on(event, fn);
    };
    SocketClient.prototype.connect = function (fn) {
        var _this = this;
        console.log('%cConnecting to fusebox HMR at ' + this.url, 'color: #237abe');
        setTimeout(function () {
            _this.client = new WebSocket(_this.url);
            _this.bindEvents(fn);
        }, 0);
    };
    SocketClient.prototype.close = function () {
        this.client.close();
    };
    SocketClient.prototype.send = function (eventName, data) {
        if (this.client.readyState === 1) {
            this.client.send(JSON.stringify({ event: eventName, data: data || {} }));
        }
    };
    SocketClient.prototype.error = function (data) {
        this.emitter.emit('error', data);
    };
    /** Wires up the socket client messages to be emitted on our event emitter */
    SocketClient.prototype.bindEvents = function (fn) {
        var _this = this;
        this.client.onopen = function (event) {
            console.log('%cConnected', 'color: #237abe');
            if (fn) {
                fn(_this);
            }
        };
        this.client.onerror = function (event) {
            _this.error({ reason: event.reason, message: 'Socket error' });
        };
        this.client.onclose = function (event) {
            _this.emitter.emit('close', { message: 'Socket closed' });
            if (event.code !== 1011) {
                _this.reconnect(fn);
            }
        };
        this.client.onmessage = function (event) {
            var data = event.data;
            if (data) {
                var item = JSON.parse(data);
                _this.emitter.emit(item.type, item.data);
                _this.emitter.emit('*', item);
            }
        };
    };
    return SocketClient;
}());
exports.SocketClient = SocketClient;

require('fuse-heresy-default')(module.exports)
});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("events", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
if (FuseBox.isServer) {
    module.exports = global.require("events");
} else {
    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
    }
    module.exports = EventEmitter;

    // Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter;

    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;

    // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10;

    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError("n must be a positive number");
        this._maxListeners = n;
        return this;
    };

    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;

        if (!this._events)
            this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === "error") {
            if (!this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er; // Unhandled 'error' event
                }
                throw TypeError("Uncaught, unspecified \"error\" event.");
            }
        }

        handler = this._events[type];

        if (isUndefined(handler))
            return false;

        if (isFunction(handler)) {
            switch (arguments.length) {
                // fast cases
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                    // slower
                default:
                    args = Array.prototype.slice.call(arguments, 1);
                    handler.apply(this, args);
            }
        } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
                listeners[i].apply(this, args);
        }

        return true;
    };

    EventEmitter.prototype.addListener = function(type, listener) {
        var m;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events)
            this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener)
            this.emit("newListener", type,
                isFunction(listener.listener) ?
                listener.listener : listener);

        if (!this._events[type])
        // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener;
        else if (isObject(this._events[type]))
        // If we've already got an array, just append.
            this._events[type].push(listener);
        else
        // Adding the second element, need to change to array.
            this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners;
            } else {
                m = EventEmitter.defaultMaxListeners;
            }

            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " +
                    "leak detected. %d listeners added. " +
                    "Use emitter.setMaxListeners() to increase limit.",
                    this._events[type].length);
                if (typeof console.trace === "function") {
                    // not supported in IE 10
                    console.trace();
                }
            }
        }

        return this;
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        var fired = false;

        function g() {
            this.removeListener(type, g);

            if (!fired) {
                fired = true;
                listener.apply(this, arguments);
            }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
    };

    // emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events || !this._events[type])
            return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener ||
            (isFunction(list.listener) && list.listener === listener)) {
            delete this._events[type];
            if (this._events.removeListener)
                this.emit("removeListener", type, listener);

        } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
                if (list[i] === listener ||
                    (list[i].listener && list[i].listener === listener)) {
                    position = i;
                    break;
                }
            }

            if (position < 0)
                return this;

            if (list.length === 1) {
                list.length = 0;
                delete this._events[type];
            } else {
                list.splice(position, 1);
            }

            if (this._events.removeListener)
                this.emit("removeListener", type, listener);
        }

        return this;
    };

    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;

        if (!this._events)
            return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
            if (arguments.length === 0)
                this._events = {};
            else if (this._events[type])
                delete this._events[type];
            return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === "removeListener") continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners("removeListener");
            this._events = {};
            return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
            this.removeListener(type, listeners);
        } else if (listeners) {
            // LIFO order
            while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
    };

    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
            ret = [];
        else if (isFunction(this._events[type]))
            ret = [this._events[type]];
        else
            ret = this._events[type].slice();
        return ret;
    };

    EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];

            if (isFunction(evlistener))
                return 1;
            else if (evlistener)
                return evlistener.length;
        }
        return 0;
    };

    EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type);
    };

    function isFunction(arg) {
        return typeof arg === "function";
    }

    function isNumber(arg) {
        return typeof arg === "number";
    }

    function isObject(arg) {
        return typeof arg === "object" && arg !== null;
    }

    function isUndefined(arg) {
        return arg === void 0;
    }
}

require('fuse-heresy-default')(module.exports)
});
return ___scope___.entry = "index.js";
});

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = FuseBox.import('vue-hot-reload-api');
          var Vue = FuseBox.import('vue');

          api.install(Vue);

          FuseBox.addPlugin({
            hmrUpdate: function (data) {
              var componentWildcardPath = '~/' + data.path.substr(0, data.path.lastIndexOf('/') + 1) + '*.vue';
              var isComponentStyling = (data.type === "css" && !!FuseBox.import(componentWildcardPath));

              if (data.type === "js" && /.vue$/.test(data.path) || isComponentStyling) {
                var fusePath = '~/' + data.path;

                FuseBox.flush();

                FuseBox.flush(function (file) {
                  return file === data.path;
                });

                FuseBox.dynamic(data.path, data.content);

                if (!isComponentStyling) {
                  var component = FuseBox.import(fusePath).default;
                  api.reload(component._vueModuleId||component.options._vueModuleId, component);
                }

                return true;
              }
            }
          });
        }
        
FuseBox.import("fusebox-hot-reload").connect(4545, "", false)
FuseBox.target = "browser"

FuseBox.import("default/main.js");
FuseBox.main("default/main.js");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((p||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(p){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!p&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=g[a];if(!s){if(p&&"electron"!==x.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),d=i(c),v=s.f[d];return!v&&d.indexOf("*")>-1&&(l=d),v||l||(d=t(c,"/","index.js"),v=s.f[d],v||"."!==c||(d=s.s&&s.s.entry||"index.js",v=s.f[d]),v||(d=c+".js",v=s.f[d]),v||(v=s.f[c+".jsx"]),v||(d=c+"/index.jsx",v=s.f[d])),{file:v,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:d}}function s(e,r,n){if(void 0===n&&(n={}),!p)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);x.dynamic(a,o),r(x.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=h[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=g[t.pkgName];if(u){var d={};for(var m in u.f)a.test(m)&&(d[m]=c(t.pkgName+"/"+m));return d}}if(!i){var h="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return h?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var y=i.locals={},w=n(t.validPath);y.exports={},y.module={exports:y.exports},y.require=function(e,r){return c(e,{pkg:_,path:w,v:t.versions})},p||!v.require.main?y.require.main={filename:"./",paths:[]}:y.require.main=v.require.main;var j=[y.module.exports,y.require,y.module,t.validPath,w,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),y.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof WorkerGlobalScope,p="undefined"!=typeof window&&window.navigator||d,v=p?d?{}:window:global;p&&(v.global=d?{}:window),e=p&&"undefined"==typeof __fbx__dnm__?e:module.exports;var m=p?d?{}:window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};p||(v.require=require);var g=m.p=m.p||{},h=m.e=m.e||{},x=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){h[e]=h[e]||[],h[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=g[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=g.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(g[e])return n(g[e].s);var t=g[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=g,r.isBrowser=p,r.isServer=!p,r.plugins=[],r}();return p||(v.FuseBox=x),e.FuseBox=x}(this))
//# sourceMappingURL=app.js.map