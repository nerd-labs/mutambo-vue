(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("main.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vuetify_1 = require("vuetify");
require("vuetify/dist/vuetify.min.css");
var app_vue_1 = require("./app.vue");
var logo_vue_1 = require("./components/logo.vue");
var create_team_vue_1 = require("./components/create-team.vue");
var match_vue_1 = require("./components/match.vue");
var matches_vue_1 = require("./components/matches.vue");
var knockout_match_vue_1 = require("./components/knockout-match.vue");
var table_vue_1 = require("./components/table.vue");
var router_1 = require("./router");
var store_1 = require("./store");
require("./style/style.css");
vue_1.default.component('mut-logo', logo_vue_1.default);
vue_1.default.component('mut-create-team', create_team_vue_1.default);
vue_1.default.component('mut-match', match_vue_1.default);
vue_1.default.component('mut-matches', matches_vue_1.default);
vue_1.default.component('mut-knockout-match', knockout_match_vue_1.default);
vue_1.default.component('mut-table', table_vue_1.default);
vue_1.default.use(vuetify_1.default, {
    theme: {
        primary: '#26A69A',
        secondary: '#00897B',
        accent: '#F50057',
        error: '#FF5252',
        warning: '#FF8F00',
        info: '#29B6F6',
        success: '#00E676'
    }
});
new vue_1.default({
    router: router_1.default,
    store: store_1.default,
    el: '#app',
    render: function (h) { return h(app_vue_1.default); },
});
//# sourceMappingURL=main.js.map
});
___scope___.file("app.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-2bcf71fc'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('v-toolbar',{attrs:{"color":"primary white--text"}},[_c('v-toolbar-title',{on:{"click":function($event){_vm.goToRoute('/')}}},[_vm._v("Mutambo")])],1),_c('v-content',[_c('v-container',{attrs:{"fluid":"fluid","fill-height":"fill-height"}},[_c('v-layout',{attrs:{"justify-center":"justify-center","align-center":"align-center"}},[_c('v-flex',{attrs:{"text-xs-center":"text-xs-center"}},[_c('router-view')],1)],1)],1)],1),_c('v-footer',{attrs:{"color":"accent"}},[_c('mut-logo')],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
exports["default"] = {
    methods: {
        goToRoute: function goToRoute(route) {
            this.$router.push(route);
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-2bcf71fc']) {
            process.env.vueHMR['data-v-2bcf71fc'] = true;
            api.createRecord('data-v-2bcf71fc', module.exports.default);
          }
        }
      
});
___scope___.file("components/logo.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-fb11cde5'}
Object.assign(_options, {_scopeId: 'data-v-fb11cde5'})
Object.assign(_options, {
        _scopeId: "data-v-fb11cde5",
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

          if (!process.env.vueHMR['data-v-fb11cde5']) {
            process.env.vueHMR['data-v-fb11cde5'] = true;
            api.createRecord('data-v-fb11cde5', module.exports.default);
          }
        }
      
});
___scope___.file("components/create-team.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-f914d85a'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-form',{ref:"form",attrs:{"lazy-validation":"lazy-validation"},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-card',[_c('v-card-title',{attrs:{"primary-title":"primary-title"}},[_c('v-container',{attrs:{"fluid":"fluid","grid-list-md":"grid-list-md"}},[_c('v-layout',{attrs:{"row":"row","wrap":"wrap"}},[_c('div',{attrs:{"hidden":"hidden"}},[_c('v-text-field',{attrs:{"label":"id"},model:{value:(_vm.team.id),callback:function ($$v) {_vm.$set(_vm.team, "id", $$v)},expression:"team.id"}})],1),_c('v-flex',{attrs:{"d-flex":"d-flex","xs12":"xs12"}},[_c('v-text-field',{attrs:{"label":"Player","value":_vm.team.player},on:{"input":_vm.changePlayer}})],1),_c('v-flex',{attrs:{"d-flex":"d-flex","xs12":"xs12"}},[_c('v-text-field',{attrs:{"label":"Club","value":_vm.team.club},on:{"input":_vm.changeClub}})],1)],1)],1)],1)],1)],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var id_generator_1 = require("../services/id-generator");
exports["default"] = {
    props: {
        team: {
            type: Object | String,
            "default": function _default() {
                return {
                    id: "",
                    player: "",
                    club: ""
                };
            }
        }
    },
    methods: {
        changePlayer: function changePlayer(player) {
            this.team.player = player;
            this.submit();
        },
        changeClub: function changeClub(club) {
            this.team.club = club;
            this.submit();
        },
        submit: lodash_1.debounce(function () {
            if (!this.team.club || !this.team.player) {
                return;
            }
            if (!this.team.id) {
                this.team.id = id_generator_1["default"].id();
            }
            this.$emit("addTeam", this.team);
        }, 300)
    }
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-f914d85a']) {
            process.env.vueHMR['data-v-f914d85a'] = true;
            api.createRecord('data-v-f914d85a', module.exports.default);
          }
        }
      
});
___scope___.file("services/id-generator.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IdGenerator = /** @class */ (function () {
    function IdGenerator() {
    }
    IdGenerator.prototype.id = function () {
        return "" + this.random4chars + this.random4chars + "-" + this.random4chars + "-" + this.random4chars + "-" + this.random4chars + "-" + this.random4chars + this.random4chars + this.random4chars;
        ;
    };
    Object.defineProperty(IdGenerator.prototype, "random4chars", {
        get: function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        },
        enumerable: true,
        configurable: true
    });
    return IdGenerator;
}());
exports.default = new IdGenerator();
//# sourceMappingURL=id-generator.js.map
});
___scope___.file("components/match.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-ce07337d'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"match-template"},[_c('v-badge',{staticClass:"internal-badge",attrs:{"right":"right","overlap":"overlap","color":"red","value":_vm.alert,"transition":"slide-y-reverse-transition"}},[_c('span',{attrs:{"slot":"badge"},slot:"badge"},[_vm._v("Tie is not allowed")]),_c('div',{staticClass:"match",class:{'match--playing': _vm.internalMatch.state === 'playing', 'match--done': _vm.internalMatch.state === 'done' , 'match--disabled': _vm.internalMatch.state === 'disabled'},on:{"click":_vm.editMatch}},[_c('div',{staticClass:"math__side match__side--home",class:{'match__side--winner': _vm.internalMatch.winner ===  1, 'match__side--loser': _vm.internalMatch.winner === 2}},[_c('div',{staticClass:"match__team"},[_c('div',{staticClass:"match__club"},[_vm._v(_vm._s(_vm.internalMatch.home.club))]),_c('div',{staticClass:"match__player"},[_vm._v(_vm._s(_vm.internalMatch.home.player))])]),_c('div',{staticClass:"match__score"},[_vm._v(_vm._s(_vm.internalMatch.home.score))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.internalMatch.home.score),expression:"internalMatch.home.score"}],staticClass:"match__score--input",attrs:{"type":"number","min":"0"},domProps:{"value":(_vm.internalMatch.home.score)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.internalMatch.home, "score", $event.target.value)}}})]),_c('div',{staticClass:"match__center"},[_c('div',{staticClass:"match__playing"},[_vm._v("live")]),_c('div',{staticClass:"match__divider"},[_vm._v("-")]),_c('button',{staticClass:"match__button match__button--start",on:{"click":_vm.startMatch}},[_vm._v("start match")]),_c('button',{staticClass:"match__button match__button--end",on:{"click":_vm.endMatch}},[_vm._v("end match")])]),_c('div',{staticClass:"math__side match__side--away",class:{'match__side--winner': _vm.internalMatch.winner ===  2, 'match__side--loser': _vm.internalMatch.winner === 1}},[_c('div',{staticClass:"match__team"},[_c('div',{staticClass:"match__club"},[_vm._v(_vm._s(_vm.internalMatch.away.club))]),_c('div',{staticClass:"match__player"},[_vm._v(_vm._s(_vm.internalMatch.away.player))])]),_c('div',{staticClass:"match__score"},[_vm._v(_vm._s(_vm.internalMatch.away.score))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.internalMatch.away.score),expression:"internalMatch.away.score"}],staticClass:"match__score--input",attrs:{"type":"number","min":"0"},domProps:{"value":(_vm.internalMatch.away.score)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.internalMatch.away, "score", $event.target.value)}}})])])])],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var config_1 = require("../config");
exports["default"] = {
    data: function data() {
        return {
            internalMatch: undefined,
            alert: false
        };
    },
    props: {
        match: {
            required: true
        },
        noTieAllowed: {
            required: false
        }
    },
    beforeMount: function beforeMount() {
        this.internalMatch = this.match;
    },
    methods: {
        startMatch: function startMatch() {
            this.$emit("update", {
                match: this.internalMatch,
                state: config_1.matchStates.PLAYING
            });
        },
        editMatch: function editMatch() {
            if (this.match.state === config_1.matchStates.DONE) {
                this.$emit("update", {
                    match: this.internalMatch,
                    state: config_1.matchStates.PLAYING
                });
            }
        },
        endMatch: function endMatch(event) {
            var _this = this;
            var winner = config_1.matchWinner.TIE;
            // convert to number
            this.internalMatch.home.score = parseInt(this.internalMatch.home.score);
            this.internalMatch.away.score = parseInt(this.internalMatch.away.score);
            if (this.internalMatch.home.score > this.internalMatch.away.score) {
                winner = config_1.matchWinner.HOME;
            }
            else if (this.internalMatch.home.score < this.internalMatch.away.score) {
                winner = config_1.matchWinner.AWAY;
            }
            if (this.noTieAllowed && winner === config_1.matchWinner.TIE) {
                this.alert = true;
                setTimeout(function () {
                    _this.alert = false;
                }, 2000);
                return;
            }
            this.$emit("update", {
                match: this.internalMatch,
                state: config_1.matchStates.DONE,
                winner: winner
            });
            event.stopPropagation();
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-ce07337d']) {
            process.env.vueHMR['data-v-ce07337d'] = true;
            api.createRecord('data-v-ce07337d', module.exports.default);
          }
        }
      
});
___scope___.file("config.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_vue_1 = require("./pages/home.vue");
var create_vue_1 = require("./pages/create.vue");
var detail_vue_1 = require("./pages/detail.vue");
var teams_vue_1 = require("./pages/teams.vue");
var summary_vue_1 = require("./pages/summary.vue");
var league_vue_1 = require("./pages/league.vue");
var random_vue_1 = require("./pages/random.vue");
var knockout_vue_1 = require("./pages/knockout.vue");
var results_vue_1 = require("./pages/results.vue");
var groupstage_vue_1 = require("./pages/groupstage.vue");
var groupstage_draw_vue_1 = require("./pages/groupstage-draw.vue");
exports.matchStates = {
    NONE: '',
    PLAYING: 'playing',
    DISABLED: 'disabled',
    DONE: 'done'
};
exports.matchWinner = {
    TIE: 0,
    HOME: 1,
    AWAY: 2,
};
exports.routes = {
    HOME: {
        path: '',
        fullPath: '/',
        component: home_vue_1.default
    },
    CREATE: {
        path: 'create',
        fullPath: '/create/',
        component: create_vue_1.default
    },
    DETAIL: {
        path: 'detail',
        fullPath: '/detail/:slug',
        component: detail_vue_1.default,
        meta: {
            save: true,
            fetchCurrentTournament: true
        }
    },
    RANDOM: {
        path: 'random',
        fullPath: '/random/:slug',
        component: random_vue_1.default,
        meta: {
            fetchCurrentTournament: true
        }
    },
    TEAMS: {
        path: 'teams',
        fullPath: '/teams/:slug',
        component: teams_vue_1.default,
        meta: {
            save: true,
            fetchCurrentTournament: true
        }
    },
    SUMMARY: {
        path: 'summary',
        fullPath: '/summary/:slug',
        component: summary_vue_1.default,
        meta: {
            save: true,
            fetchCurrentTournament: true
        }
    },
    LEAGUE: {
        path: 'league',
        fullPath: '/league/:slug',
        component: league_vue_1.default,
        meta: {
            save: true,
            fetchCurrentTournament: true
        }
    },
    GROUPSTAGE_DRAW: {
        path: 'groupstage',
        fullPath: '/groupstage/draw/:slug',
        component: groupstage_draw_vue_1.default,
        meta: {
            save: true,
            fetchCurrentTournament: true
        }
    },
    GROUPSTAGE: {
        path: 'groupstage',
        fullPath: '/groupstage/:slug',
        component: groupstage_vue_1.default,
        meta: {
            save: true,
            fetchCurrentTournament: true
        }
    },
    KNOCKOUT: {
        path: 'knockout',
        fullPath: '/knockout/:slug',
        component: knockout_vue_1.default,
        meta: {
            save: true,
            fetchCurrentTournament: true
        }
    },
    RESULTS: {
        path: 'results',
        fullPath: '/results/:slug',
        component: results_vue_1.default,
        meta: {
            save: true,
            fetchCurrentTournament: true
        }
    }
};
//# sourceMappingURL=config.js.map
});
___scope___.file("pages/home.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-fb0b9dfd'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-btn',{attrs:{"color":"primary"},on:{"click":function($event){_vm.goToCreate()}}},[_vm._v("Create tournament")]),_c('br'),_c('br'),(_vm.tournaments.length)?_c('v-list',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md","fluid":"fluid"}},[_c('v-layout',{attrs:{"row":"row","wrap":"wrap","justify-space-between":"justify-space-between"}},[_vm._l((_vm.tournaments),function(tournament,index){return [(index !== 0)?_c('v-flex',{attrs:{"xs12":"xs12"}},[_c('div',{staticClass:"pl-3 pr-3"},[_c('v-divider')],1)]):_vm._e(),_c('v-flex',{attrs:{"xs12":"xs12","sm7":"sm7"}},[_c('v-subheader',{on:{"click":function($event){_vm.goToRoute(tournament.id)}}},[_vm._v(_vm._s(tournament.name))])],1),_c('v-flex',{staticClass:"text-xs-left text-sm-right",attrs:{"xs12":"xs12","sm5":"sm5"}},[_c('v-chip',{attrs:{"color":"secondary","text-color":"white","disabled":"disabled"}},[_vm._v(_vm._s(tournament.type))]),_c('v-chip',{attrs:{"color":"accent","text-color":"white","disabled":"disabled"}},[_vm._v(_vm._s(tournament.teams.length))])],1)]})],2)],1)],1):_vm._e()],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var config_1 = require("../config");
var vuex_1 = require("vuex");
exports["default"] = {
    beforeMount: function beforeMount() {
        this.$store.dispatch("currentTournament/reset");
    },
    methods: {
        goToCreate: function goToCreate() {
            this.$router.push(config_1.routes.CREATE.path);
        },
        goToRoute: function goToRoute(id) {
            var tournament = this.$store.getters.tournamentById(id);
            this.$router.push(tournament.page);
        }
    },
    computed: _extends({}, vuex_1.mapGetters({
        tournaments: "tournaments"
    }))
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-fb0b9dfd']) {
            process.env.vueHMR['data-v-fb0b9dfd'] = true;
            api.createRecord('data-v-fb0b9dfd', module.exports.default);
          }
        }
      
});
___scope___.file("pages/create.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-c9b3b456'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md"}},[_c('v-form',{ref:"form",attrs:{"lazy-validation":"lazy-validation"},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-layout',{attrs:{"row":"row","wrap":"wrap"}},[_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-text-field',{attrs:{"label":"Name","required":"required","rules":_vm.nameRules},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1),_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-text-field',{attrs:{"label":"Number of players","required":"required","rules":_vm.totalPlayerRules,"type":"number"},model:{value:(_vm.totalPlayers),callback:function ($$v) {_vm.totalPlayers=$$v},expression:"totalPlayers"}})],1),_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-btn-toggle',{model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}},[_c('v-btn',{attrs:{"color":"primary white--text","flat":"flat","value":"knockout"}},[_vm._v("Knockout")]),_c('v-btn',{attrs:{"color":"primary white--text","flat":"flat","value":"league"}},[_vm._v("League")]),_c('v-btn',{attrs:{"color":"primary white--text","flat":"flat","value":"groupstage"}},[_vm._v("Groupstage & Knockout")])],1)],1),_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-btn',{attrs:{"color":"primary","disabled":!_vm.valid},on:{"click":_vm.submit}},[_vm._v("Submit")])],1)],1)],1)],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var slug_1 = require("slug");
var id_generator_1 = require("../services/id-generator");
exports["default"] = {
    data: function data() {
        return {
            valid: false,
            name: "",
            nameRules: [function (v) {
                    return !!v || "Name is required";
                }],
            totalPlayers: 2,
            totalPlayerRules: [function (v) {
                    return !!v || "Number of players is required";
                }, function (v) {
                    return v >= 2 || "There should be at least 2 players";
                }],
            type: "knockout"
        };
    },
    methods: {
        submit: function submit() {
            if (!this.$refs.form.validate()) {
                return;
            }
            var slugged = slug_1["default"](this.name.toLowerCase());
            // create array of total players
            // const teams = Array.from({length: this.totalPlayers}).map(() => ({}))
            var teams = []; //TODO: fix with array.from
            for (var i = 0; i < this.totalPlayers; i++) {
                teams.push({});
            }
            var tournament = {
                id: id_generator_1["default"].id(),
                name: this.name,
                type: this.type,
                teams: teams
            };
            tournament.slug = slugged + "-" + id_generator_1["default"].random4chars;
            this.$store.commit("addTournament", tournament);
            this.$router.push("/detail/" + tournament.slug);
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-c9b3b456']) {
            process.env.vueHMR['data-v-c9b3b456'] = true;
            api.createRecord('data-v-c9b3b456', module.exports.default);
          }
        }
      
});
___scope___.file("pages/detail.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-2f38b4a3'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md"}},[_c('h2',{staticClass:"display-2 accent--text mb-5"},[_vm._v(_vm._s(_vm.name))]),_c('v-form',{ref:"form",attrs:{"lazy-validation":"lazy-validation"},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-layout',{attrs:{"row":"row","wrap":"wrap"}},[_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-text-field',{attrs:{"label":"Number of plays against each team","required":"required","rules":_vm.numberOfPlaysRules,"type":"number"},model:{value:(_vm.numberOfPlays),callback:function ($$v) {_vm.numberOfPlays=$$v},expression:"numberOfPlays"}})],1),(_vm.type === 'groupstage')?_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-select',{attrs:{"items":_vm.numberOfProceedingPlayersOptions,"label":"Number of proceeding players","single-line":"single-line"},model:{value:(_vm.numberOfProceedingPlayers),callback:function ($$v) {_vm.numberOfProceedingPlayers=$$v},expression:"numberOfProceedingPlayers"}})],1):_vm._e(),_c('v-flex',{attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-btn',{attrs:{"color":"primary","disabled":!_vm.valid},on:{"click":_vm.submit}},[_vm._v("Submit")])],1)],1)],1)],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var vuex_1 = require("vuex");
exports["default"] = {
    data: function data() {
        return {
            valid: true,
            numberOfPlays: 1,
            numberOfPlaysRules: [function (v) {
                    return !!v || "Number of plays is required";
                }, function (v) {
                    return v >= 1 || "There should be at least 1 play";
                }],
            numberOfProceedingPlayers: undefined,
            numberOfProceedingPlayersOptions: [2, 4, 8, 16, 32]
        };
    },
    computed: _extends({}, vuex_1.mapGetters({
        slug: "currentTournament/slug",
        name: "currentTournament/name",
        totalTeams: "currentTournament/totalTeams",
        type: "currentTournament/type"
    })),
    methods: {
        submit: function submit() {
            if (!this.$refs.form.validate()) {
                return;
            }
            this.$store.dispatch("currentTournament/updateDetails", {
                numberOfPlays: parseInt(this.numberOfPlays),
                numberOfProceedingPlayers: this.numberOfProceedingPlayers
            });
            this.$router.push("/teams/" + this.slug);
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-2f38b4a3']) {
            process.env.vueHMR['data-v-2f38b4a3'] = true;
            api.createRecord('data-v-2f38b4a3', module.exports.default);
          }
        }
      
});
___scope___.file("pages/teams.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-dace461c'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md"}},[_c('h2',{staticClass:"display-2 accent--text mb-5"},[_vm._v(_vm._s(_vm.tournamentName))]),_c('v-layout',{attrs:{"row":"row","wrap":"wrap","justify-center":"justify-center","align-center":"align-center"}},_vm._l((_vm.teams),function(team){return _c('v-flex',{attrs:{"d-flex":"d-flex","xs12":"xs12","sm6":"sm6","md4":"md4","lg3":"lg3","xl2":"xl2","my-2":"my-2"}},[_c('mut-create-team',{attrs:{"team":team},on:{"addTeam":_vm.addTeam}})],1)})),_c('div',{staticClass:"mt-5 text-xs-left"},[_c('v-checkbox',{attrs:{"label":"Randomly mix players and teams"},model:{value:(_vm.randomly),callback:function ($$v) {_vm.randomly=$$v},expression:"randomly"}}),_c('v-btn',{attrs:{"color":"success"},on:{"click":_vm.submit}},[_vm._v("Submit")])],1)],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var vuex_1 = require("vuex");
var migrations_1 = require("../helpers/migrations");
exports["default"] = {
    data: function data() {
        return {
            randomly: false
        };
    },
    computed: _extends({}, vuex_1.mapGetters({
        slug: 'currentTournament/slug',
        name: 'currentTournament/name',
        teams: 'currentTournament/teams'
    })),
    beforeMount: function beforeMount() {
        var _this = this;
        // JUST FOR DEVELOPMENT
        var migratedTeams = migrations_1.generateDefaultTeams(this.teams.length);
        this.teams.forEach(function (team, index) {
            team = Object.assign(team, migratedTeams[index]);
            _this.addTeam(team);
        });
    },
    methods: {
        addTeam: function addTeam(team) {
            this.$store.dispatch("currentTournament/addTeam", team);
        },
        submit: function submit() {
            if (this.randomly)
                this.$router.push('/random/' + this.slug);
            else
                this.$router.push('/summary/' + this.slug);
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-dace461c']) {
            process.env.vueHMR['data-v-dace461c'] = true;
            api.createRecord('data-v-dace461c', module.exports.default);
          }
        }
      
});
___scope___.file("helpers/migrations.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var id_generator_1 = require("../services/id-generator");
var faker = require("faker");
function generateDefaultTeams(length) {
    var teams = [];
    for (var i = 0; i < length; i++) {
        teams.push({
            id: id_generator_1.default.id(),
            player: faker.name.findName(),
            club: faker.address.country(),
        });
    }
    return teams;
}
exports.generateDefaultTeams = generateDefaultTeams;
//# sourceMappingURL=migrations.js.map
});
___scope___.file("pages/summary.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-70e8c61e'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md"}},[_c('v-layout',{attrs:{"row":"row","wrap":"wrap","justify-space-between":"justify-space-between"}},[_c('v-flex',{attrs:{"md8":"md8","offset-md2":"offset-md2"}},[_c('v-card',[_c('v-card-title',{staticClass:"accent white--text"},[_vm._v("Summary")]),_c('v-card-text',[_c('v-list',[_c('v-list-tile',[_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("Your tournament will contain "+_vm._s(_vm.totalTeams)+" players.")])],1)],1),_c('v-list-tile',[_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("Every player will play with 1 team.")])],1)],1),_c('v-list-tile',[_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("All teams will play "+_vm._s(_vm.numberOfPlays)+" "+_vm._s(_vm.numberOfPlays > 1 ? 'times' : 'time')+" against all other player's teams.")])],1)],1),_c('v-list-tile',[_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("The tournament will consist of "+_vm._s(_vm.totalFixtures)+" fixtures.")])],1)],1),_c('v-list-tile',[_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("It will take ± "+_vm._s(_vm.totalMinutes)+" minutes to play all fixtures (6 minutes per half).")])],1)],1)],1)],1)],1)],1)],1),_c('v-flex',{attrs:{"mt-3":"mt-3"}},[_c('v-btn',{attrs:{"color":"primary"},on:{"click":_vm.submit}},[(_vm.type === 'groupstage')?_c('span',[_vm._v("Start draw")]):_c('span',[_vm._v("Start tournament")])])],1)],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
function _toConsumableArray(arr) { if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}
else {
    return Array.from(arr);
} }
var berger_1 = require("../helpers/berger");
var vuex_1 = require("vuex");
exports["default"] = {
    computed: _extends({}, vuex_1.mapGetters({
        slug: 'currentTournament/slug',
        teams: 'currentTournament/teams',
        totalTeams: 'currentTournament/totalTeams',
        type: 'currentTournament/type',
        numberOfPlays: 'currentTournament/numberOfPlays'
    }), {
        totalFixtures: function totalFixtures() {
            var length = this.totalTeams;
            return length * (length - 1) / 2 * this.numberOfPlays;
        },
        totalMinutes: function totalMinutes() {
            return this.totalFixtures * 12;
        }
    }),
    mounted: function mounted() {
        switch (this.type) {
            case "league":
                this.generateMatches();
                break;
            case "knockout":
                this.generateKnockoutRounds();
                break;
            default:
                break;
        }
    },
    methods: {
        submit: function submit() {
            if (this.type === 'groupstage') {
                this.$router.push('/' + this.type + '/draw/' + this.slug);
            }
            else {
                this.$router.push('/' + this.type + '/' + this.slug);
            }
        },
        reverseFixtures: function reverseFixtures(n) {
            return n % 2 === 0;
        },
        generateMatches: function generateMatches() {
            var matches = [];
            for (var i = 1; i <= this.numberOfPlays; i++) {
                var teams = JSON.parse(JSON.stringify(this.teams));
                var bergerTable = berger_1["default"].getTable(teams, this.reverseFixtures(i));
                matches.push.apply(matches, _toConsumableArray(bergerTable));
            }
            matches.map(function (match) {
                match.away.score = 0;
                match.home.score = 0;
            });
            this.$store.dispatch("league/addMatches", matches);
        },
        generateKnockoutRounds: function generateKnockoutRounds() {
            this.$store.dispatch('knockout/generate');
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-70e8c61e']) {
            process.env.vueHMR['data-v-70e8c61e'] = true;
            api.createRecord('data-v-70e8c61e', module.exports.default);
          }
        }
      
});
___scope___.file("helpers/berger.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var id_generator_1 = require("../services/id-generator");
function getTable(teams, reverseFixtures, useDummy, dummy) {
    if (useDummy === void 0) { useDummy = false; }
    if (dummy === void 0) { dummy = {}; }
    if (!Array.isArray(teams)) {
        teams = Array.from({ length: teams }).map(function (_, i) { return i; });
    }
    if (teams.length % 2 !== 0) {
        teams.push(dummy);
    }
    var n = teams.length;
    var numberOfRounds = n - 1;
    var gamesPerRound = n / 2;
    var columnA = teams.slice(0, gamesPerRound);
    var columnB = teams.slice(gamesPerRound);
    var fixed = teams[0];
    var matches = Array.from({ length: numberOfRounds }).map(function (_, i) {
        var gameCount = 1;
        var round = Array.from({ length: gamesPerRound }).reduce(function (acc, _, k) {
            if (useDummy || (columnA[k] !== dummy && columnB[k] !== dummy)) {
                acc.push({
                    round: i + 1,
                    game: gameCount,
                    home: JSON.parse(JSON.stringify(reverseFixtures ? columnB[k] : columnA[k])),
                    away: JSON.parse(JSON.stringify(reverseFixtures ? columnA[k] : columnB[k])),
                    state: config_1.matchStates.NONE,
                    id: id_generator_1.default.id(),
                });
                gameCount++;
            }
            return acc;
        }, []);
        // rotate elements
        columnA = [fixed, columnB.shift()].concat(columnA.slice(1));
        columnB.push(columnA.pop());
        return round;
    });
    var flattendMatches = [].concat.apply([], matches);
    return flattendMatches;
}
exports.default = {
    getTable: getTable
};
//# sourceMappingURL=berger.js.map
});
___scope___.file("pages/league.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-1571ce8d'}
Object.assign(_options, {_scopeId: 'data-v-1571ce8d'})
Object.assign(_options, {
        _scopeId: "data-v-1571ce8d",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md"}},[_c('h2',{staticClass:"display-2 accent--text mb-5"},[_vm._v(_vm._s(_vm.name))]),_c('v-flex',{staticClass:"mb-5",attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-btn-toggle',{model:{value:(_vm.view),callback:function ($$v) {_vm.view=$$v},expression:"view"}},[_c('v-btn',{attrs:{"color":"primary white--text","flat":"flat","value":"matches"}},[_vm._v("Matches")]),_c('v-btn',{attrs:{"color":"primary white--text","flat":"flat","value":"table"}},[_vm._v("Table")])],1)],1),(_vm.view === 'matches')?_c('v-flex',{staticClass:"mb-5",attrs:{"xs12":"xs12","xl8":"xl8","offset-xl2":"offset-xl2"}},[_c('mut-matches',{attrs:{"matches":_vm.matches},on:{"update":_vm.matchUpdate,"done":_vm.allMatchesPlayed}})],1):_vm._e(),(_vm.view === 'table')?_c('v-flex',{staticClass:"mb-5",attrs:{"xs12":"xs12","xl8":"xl8","offset-xl2":"offset-xl2"}},[_c('mut-table',{attrs:{"data":_vm.results}})],1):_vm._e(),(_vm.done)?_c('v-btn',{on:{"click":_vm.endTournament}},[_vm._v("End tournament")]):_vm._e()],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var vuex_1 = require("vuex");
exports["default"] = {
    beforeMount: function beforeMount() {
        this.$store.dispatch('league/updateTable');
    },
    data: function data() {
        return {
            view: "matches"
        };
    },
    computed: _extends({}, vuex_1.mapGetters({
        slug: 'currentTournament/slug',
        name: 'currentTournament/name',
        matches: 'league/matches',
        done: 'league/completed',
        table: 'league/table'
    }), {
        results: function results() {
            return this.table.map(function (t) {
                return {
                    team: t.club + " (" + t.player + ")",
                    played: t.stats.played,
                    wins: t.stats.won,
                    draws: t.stats.draw,
                    losses: t.stats.lost,
                    scored: t.stats.goalsFor,
                    against: t.stats.goalsAgainst,
                    difference: t.stats.goalDifference,
                    points: t.stats.points
                };
            });
        }
    }),
    methods: {
        matchUpdate: function matchUpdate(event) {
            this.$store.dispatch("league/updateMatch", event.match);
        },
        allMatchesPlayed: function allMatchesPlayed() {
            this.$store.dispatch('league/complete');
        },
        endTournament: function endTournament() {
            this.$router.push("/results/" + this.$route.params.slug);
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-1571ce8d']) {
            process.env.vueHMR['data-v-1571ce8d'] = true;
            api.createRecord('data-v-1571ce8d', module.exports.default);
          }
        }
      
});
___scope___.file("pages/random.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-82b02229'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-lg":"grid-list-lg"}},[_c('v-layout',{attrs:{"row":"row","wrap":"wrap","align-center":"align-center","justify-center":"justify-center"}},_vm._l((_vm.newTeams),function(team,index){return _c('v-flex',{attrs:{"md2":"md2"}},[_c('v-jumbotron',{attrs:{"gradient":_vm.gradient,"dark":"dark","height":"200"}},[_c('div',{staticClass:"math__side match__side--home pa-2"},[_c('div',{staticClass:"match__team"},[_vm._v(_vm._s(team.club)),_c('div',{staticClass:"match__player"},[_vm._v(_vm._s(team.player))])])])])],1)})),(!_vm.draw)?_c('v-flex',{attrs:{"mt-3":"mt-3"}},[_c('v-btn',{attrs:{"color":"primary"},on:{"click":_vm.startDraw}},[_vm._v("Draw")])],1):_vm._e(),(_vm.submitable)?_c('v-flex',{attrs:{"mt-3":"mt-3"}},[_c('v-btn',{attrs:{"color":"primary"},on:{"click":_vm.submit}},[_vm._v("Submit")])],1):_vm._e()],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var id_generator_1 = require("../services/id-generator");
var vuex_1 = require("vuex");
exports["default"] = {
    data: function data() {
        return {
            draw: false,
            newTeams: [],
            gradient: "to top, #7B1FA2, #E1BEE7",
            submitable: false
        };
    },
    methods: {
        getRandomPlayer: function getRandomPlayer() {
            return this.players.splice(this.players.length * Math.random() | 0, 1)[0];
        },
        getRandomClub: function getRandomClub() {
            return this.clubs.splice(this.clubs.length * Math.random() | 0, 1)[0];
        },
        startDraw: function startDraw() {
            // TODO: redraw??
            this.draw = true;
            this.random();
        },
        random: function random() {
            var _this = this;
            var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            setTimeout(function () {
                _this.newTeams.push({
                    club: _this.getRandomClub(),
                    player: _this.getRandomPlayer(),
                    id: id_generator_1["default"].id()
                });
                if (i < _this.teams.length - 1) {
                    i++;
                    _this.random(i);
                }
                else {
                    _this.submitable = true;
                }
            }, 500);
        },
        submit: function submit() {
            this.$store.dispatch("currentTournament/randomizeTeams", this.newTeams);
            this.$router.push("/summary/" + this.slug);
        }
    },
    computed: _extends({}, vuex_1.mapGetters({
        slug: 'currentTournament/slug',
        teams: 'currentTournament/teams'
    }), {
        clubs: function clubs() {
            return this.teams.map(function (t) {
                return t.club;
            });
        },
        players: function players() {
            return this.teams.map(function (t) {
                return t.player;
            });
        }
    })
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-82b02229']) {
            process.env.vueHMR['data-v-82b02229'] = true;
            api.createRecord('data-v-82b02229', module.exports.default);
          }
        }
      
});
___scope___.file("pages/knockout.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-5ee0f31e'}
Object.assign(_options, {_scopeId: 'data-v-5ee0f31e'})
Object.assign(_options, {
        _scopeId: "data-v-5ee0f31e",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.startRoundState)?_c('v-btn',{staticClass:"next-round",attrs:{"color":"primary white--text","large":"large"},on:{"click":_vm.startRound}},[_vm._v("Start next round")]):_vm._e(),(_vm.view === 'matches')?_c('v-flex',{staticClass:"mb-5",attrs:{"xs12":"xs12","xl8":"xl8","offset-xl2":"offset-xl2"}},[_c('mut-matches',{attrs:{"matches":_vm.activeRound,"noTieAllowed":true},on:{"update":_vm.matchUpdate,"done":_vm.allMatchesPlayed}}),(_vm.completeRound)?_c('v-btn',{attrs:{"color":"primary white--text"},on:{"click":_vm.complete}},[_vm._v("Complete Round")]):_vm._e()],1):_vm._e(),(_vm.view === 'tree')?_c('div',{staticClass:"bracket",class:_vm.totalRoundsClass},_vm._l((_vm.internalRounds),function(round){return _c('div',{staticClass:"round",class:[round.classes, _vm.isInactive(round.round)]},[_c('h5',[_vm._v(_vm._s(_vm.getNameOfRound(round)))]),_c('div',{staticClass:"matches"},_vm._l((round.matches),function(match){return _c('mut-knockout-match',{attrs:{"home":match.home,"away":match.away}})}))])})):_vm._e(),(_vm.winner)?_c('div',{staticClass:"winner"},[_vm._v("🏆 "+_vm._s(_vm.winner.player)+" ("+_vm._s(_vm.winner.club)+") 🏆")]):_vm._e()],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var vuex_1 = require("vuex");
var knockout_1 = require("../helpers/knockout");
exports["default"] = {
    data: function data() {
        return {
            internalRounds: [],
            view: undefined,
            completeRound: false
        };
    },
    beforeMount: function beforeMount() {
        this.splitRounds();
    },
    created: function created() {
        this.view = this.startRoundState || this.tournamentComplete ? 'tree' : 'matches';
    },
    computed: _extends({}, vuex_1.mapGetters({
        rounds: 'knockout/rounds',
        activeRound: 'knockout/round',
        activeRoundId: 'knockout/activeRoundId',
        activeRoundState: 'knockout/activeRoundState',
        winner: 'knockout/winner',
        tournamentComplete: 'knockout/complete'
    }), {
        totalRoundsClass: function totalRoundsClass() {
            return 'bracket--' + this.rounds.length;
        },
        startRoundState: function startRoundState() {
            return this.activeRoundState === 0;
        }
    }),
    watch: {
        activeRoundId: function activeRoundId(val) {
            this.completeRound = false;
            this.splitRounds();
        }
    },
    methods: {
        getNameOfRound: function getNameOfRound(round) {
            return knockout_1.getRoundName(round.totalTeams);
        },
        matchUpdate: function matchUpdate(event) {
            this.$store.dispatch("knockout/updateMatch", event.match);
        },
        allMatchesPlayed: function allMatchesPlayed() {
            this.completeRound = true;
        },
        complete: function complete() {
            this.view = 'tree';
            this.$store.dispatch('knockout/completeRound');
        },
        startRound: function startRound() {
            this.view = 'matches';
            this.$store.dispatch('knockout/startRound');
        },
        isInactive: function isInactive(round) {
            return round > this.activeRoundId ? 'round--inactive' : '';
        },
        splitRounds: function splitRounds() {
            this.internalRounds = [];
            // TODO :: inactive state does not get updated on next round...
            for (var i = 0; i < this.rounds.length; i++) {
                var round = this.rounds[i] || [];
                if (round.length % 2 === 0) {
                    var half = round.length / 2;
                    var full = round.length;
                    this.internalRounds.push({
                        matches: round.slice(0, half),
                        round: i,
                        totalTeams: round.length,
                        classes: 'round' + (i + 1) + ' round--left'
                    });
                    this.internalRounds.push({
                        matches: round.slice(half, full),
                        round: i,
                        totalTeams: round.length,
                        classes: 'round' + (i + 1) + ' round--right'
                    });
                }
                else {
                    this.internalRounds.push({
                        matches: round,
                        totalTeams: round.length,
                        round: i
                    });
                }
            }
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-5ee0f31e']) {
            process.env.vueHMR['data-v-5ee0f31e'] = true;
            api.createRecord('data-v-5ee0f31e', module.exports.default);
          }
        }
      
});
___scope___.file("helpers/knockout.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTotalRounds(teams) {
    switch (teams) {
        case 2:
            return 1;
        case 4:
            return 2;
        case 8:
            return 3;
        case 16:
            return 4;
        case 32:
            return 5;
        default:
            throw new Error('Number of teams is not valid');
    }
}
exports.calculateTotalRounds = calculateTotalRounds;
function getRoundName(matches) {
    switch (matches) {
        case 1:
            return 'Final';
        case 2:
            return 'Semi-Final';
        case 4:
            return 'Quarter Final';
        case 8:
            return 'Round of 16';
        case 16:
            return 'Round of 32';
        default:
            throw new Error('Number of rounds is not valid');
    }
}
exports.getRoundName = getRoundName;
//# sourceMappingURL=knockout.js.map
});
___scope___.file("pages/results.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-e345dc08'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md"}},[_c('h2',{staticClass:"display-2 accent--text mb-5"},[_vm._v(_vm._s(_vm.name)+" results")]),_c('v-flex',{attrs:{"xs12":"xs12","xl8":"xl8","offset-xl2":"offset-xl2"}},[_c('mut-table',{attrs:{"data":_vm.results}})],1)],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
var vuex_1 = require("vuex");
exports["default"] = {
    computed: _extends({}, vuex_1.mapGetters({
        name: 'currentTournament/name',
        table: 'league/table'
    }), {
        results: function results() {
            return this.table.map(function (t) {
                return {
                    team: t.club + ' (' + t.player + ')',
                    played: t.stats.played,
                    wins: t.stats.won,
                    draws: t.stats.draw,
                    losses: t.stats.lost,
                    scored: t.stats.goalsFor,
                    against: t.stats.goalsAgainst,
                    difference: t.stats.goalDifference,
                    points: t.stats.points
                };
            });
        }
    })
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-e345dc08']) {
            process.env.vueHMR['data-v-e345dc08'] = true;
            api.createRecord('data-v-e345dc08', module.exports.default);
          }
        }
      
});
___scope___.file("pages/groupstage.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-e29e52a9'}
Object.assign(_options, {_scopeId: 'data-v-e29e52a9'})
Object.assign(_options, {
        _scopeId: "data-v-e29e52a9",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md"}},[_c('h2',{staticClass:"display-2 accent--text mb-5"},[_vm._v(_vm._s(_vm.name))]),_c('v-flex',{staticClass:"mb-5",attrs:{"xs6":"xs6","offset-xs3":"offset-xs3"}},[_c('v-btn-toggle',{model:{value:(_vm.view),callback:function ($$v) {_vm.view=$$v},expression:"view"}},[_c('v-btn',{attrs:{"color":"primary white--text","flat":"flat","value":"matches"}},[_vm._v("Matches")]),_c('v-btn',{attrs:{"color":"primary white--text","flat":"flat","value":"table"}},[_vm._v("Table")])],1)],1),_vm._l((_vm.groups),function(group,index){return _c('v-container',{attrs:{"grid-list-md":"grid-list-md"}},[_c('h3',{staticClass:"mb-5"},[_vm._v(_vm._s(group.name))]),(_vm.view === 'matches')?_c('v-flex',{staticClass:"mb-5",attrs:{"xs12":"xs12","xl8":"xl8","offset-xl2":"offset-xl2"}},[_c('mut-matches',{attrs:{"matches":group.matches},on:{"update":function($event){_vm.matchUpdate(index, $event)},"done":function($event){_vm.allMatchesPlayed(index)}}})],1):_vm._e(),(_vm.view === 'table')?_c('v-flex',{staticClass:"mb-5",attrs:{"xs12":"xs12","xl8":"xl8","offset-xl2":"offset-xl2"}},[_c('mut-table',{attrs:{"data":_vm.results(group)}})],1):_vm._e()],1)}),(_vm.done)?_c('v-btn',{on:{"click":_vm.endGroupstage}},[_vm._v("End groupstage")]):_vm._e()],2)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
function _toConsumableArray(arr) { if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}
else {
    return Array.from(arr);
} }
var vuex_1 = require("vuex");
var order_by_property_1 = require("../helpers/order-by-property");
exports["default"] = {
    beforeMount: function beforeMount() {
        this.$store.dispatch('groupstage/updateTables');
    },
    data: function data() {
        return {
            view: "matches"
        };
    },
    computed: _extends({}, vuex_1.mapGetters({
        slug: 'currentTournament/slug',
        teams: 'currentTournament/teams',
        name: 'currentTournament/name',
        numberOfProceedingPlayers: 'currentTournament/numberOfProceedingPlayers',
        groups: 'groupstage/groups',
        proceedingTeams: 'groupstage/proceedingTeams'
    }), {
        done: function done() {
            var allGroupsCompleted = this.groups.every(function (match) {
                return match.completed === true;
            });
            return allGroupsCompleted;
        }
    }),
    methods: {
        matchUpdate: function matchUpdate(index, event) {
            this.$store.dispatch("groupstage/updateMatch", {
                groupIndex: index,
                match: event.match
            });
        },
        allMatchesPlayed: function allMatchesPlayed(index) {
            this.$store.dispatch("groupstage/setGroupCompleted", {
                groupIndex: index
            });
        },
        endGroupstage: function endGroupstage() {
            var _this = this;
            var qualifiedPositions = Math.floor(this.numberOfProceedingPlayers / this.groups.length);
            var teamsToProceed = [];
            var teamsToExit = [];
            this.groups.forEach(function (group) {
                var table = _this.getTableOrder(group);
                table.forEach(function (team, index) {
                    if (index < qualifiedPositions) {
                        teamsToProceed.push(team.id);
                    }
                    else {
                        teamsToExit.push(team);
                    }
                });
            });
            if (this.numberOfProceedingPlayers !== teamsToProceed.length) {
                var extraTeamsToProceed = this.getRemainingTeams(teamsToExit, this.numberOfProceedingPlayers - teamsToProceed.length);
                teamsToProceed.push.apply(teamsToProceed, _toConsumableArray(extraTeamsToProceed));
            }
            this.$store.dispatch("groupstage/complete", {
                teamIds: teamsToProceed
            });
            this.$store.dispatch("knockout/generate", {
                teams: this.proceedingTeams
            });
            this.$router.push("/knockout/" + this.slug);
        },
        getRemainingTeams: function getRemainingTeams(teamsToExit, numberOfTeamsToSelect) {
            //- get all teams except already selected
            var sorted = teamsToExit.sort(order_by_property_1.orderByProperty('pointsAverage', 'scored', 'difference', 'wins', 'draws')).reverse();
            var extraTeamsToProceed = [];
            for (var i = 0; i < numberOfTeamsToSelect; i++) {
                extraTeamsToProceed.push(sorted[i].id);
            }
            return extraTeamsToProceed;
        },
        getTableOrder: function getTableOrder(group) {
            var data = this.results(group);
            return data.sort(order_by_property_1.orderByProperty('points', 'difference', 'scored')).reverse();
        },
        results: function results(group) {
            return group.table.map(function (t) {
                return {
                    id: t.id,
                    team: t.club + " (" + t.player + ")",
                    played: t.stats.played,
                    wins: t.stats.won,
                    draws: t.stats.draw,
                    losses: t.stats.lost,
                    scored: t.stats.goalsFor,
                    against: t.stats.goalsAgainst,
                    difference: t.stats.goalDifference,
                    points: t.stats.points,
                    pointsAverage: t.stats.points === 0 ? 0 : t.stats.points / t.stats.played
                };
            });
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-e29e52a9']) {
            process.env.vueHMR['data-v-e29e52a9'] = true;
            api.createRecord('data-v-e29e52a9', module.exports.default);
          }
        }
      
});
___scope___.file("helpers/order-by-property.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function orderByProperty(prop) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function (a, b) {
        var equality = a[prop] - b[prop];
        if (equality === 0 && arguments.length > 1) {
            return orderByProperty.apply(null, args)(a, b);
        }
        return equality;
    };
}
exports.orderByProperty = orderByProperty;
//# sourceMappingURL=order-by-property.js.map
});
___scope___.file("pages/groupstage-draw.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-4244c24'}
Object.assign(_options, {_scopeId: 'data-v-4244c24'})
Object.assign(_options, {
        _scopeId: "data-v-4244c24",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',{attrs:{"grid-list-md":"grid-list-md"}},[_c('h2',{staticClass:"display-2 accent--text mb-5"},[_vm._v(_vm._s(_vm.name))]),_c('div',{staticClass:"groups"},_vm._l((_vm.animatedGroups),function(group){return _c('div',{staticClass:"group"},[_c('h3',[_vm._v(_vm._s(group.name))]),_vm._l((group.teams),function(team){return _c('div',[_vm._v(_vm._s(team.club)+" ("+_vm._s(team.player)+")")])})],2)})),_c('v-btn',{attrs:{"color":"primary"},on:{"click":_vm.startGroupstage}},[_vm._v("Start groupstage")])],1)],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };
function _toConsumableArray(arr) { if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}
else {
    return Array.from(arr);
} }
var vuex_1 = require("vuex");
var shuffle_1 = require("../helpers/shuffle");
var berger_1 = require("../helpers/berger");
exports["default"] = {
    mounted: function mounted() {
        if (!this.groups.length) {
            this.generateGroups();
        }
        this.startDraw();
    },
    data: function data() {
        return {
            animatedGroups: []
        };
    },
    computed: _extends({}, vuex_1.mapGetters({
        teams: 'currentTournament/teams',
        type: 'currentTournament/type',
        slug: 'currentTournament/slug',
        name: 'currentTournament/name',
        groups: 'groupstage/groups'
    })),
    methods: {
        getNumberOfGroups: function getNumberOfGroups() {
            var numberOfTeams = this.teams.length;
            var numberOfGroups = numberOfTeams / 4;
            if (numberOfTeams >= 6 && numberOfTeams <= 8) {
                numberOfGroups = 2;
            }
            return Math.max(1, Math.floor(numberOfGroups));
        },
        generateGroups: function generateGroups() {
            var numberOfGroups = this.getNumberOfGroups();
            var groups = [];
            for (var i = 0; i < numberOfGroups; i++) {
                //- create letter from index 1 = A, B = 2, ...
                var name = String.fromCharCode(97 + i).toUpperCase();
                groups[i] = {
                    name: 'Group ' + name,
                    teams: [],
                    matches: [],
                    table: [],
                    completed: false
                };
            }
            var shuffledTeams = shuffle_1.shuffle(this.teams);
            shuffledTeams.forEach(function (team, index) {
                var groupIndex = index % numberOfGroups;
                groups[groupIndex].teams.push(team);
            });
            groups.forEach(function (group) {
                var teams = JSON.parse(JSON.stringify(group.teams));
                var bergerTable = berger_1["default"].getTable(teams);
                group.matches = [].concat(_toConsumableArray(bergerTable));
                group.matches.map(function (match) {
                    match.away.score = 0;
                    match.home.score = 0;
                });
            });
            this.$store.dispatch('groupstage/setGroups', { groups: groups });
        },
        startDraw: function startDraw() {
            var _this = this;
            var currentGroupIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var currentTeamIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var currentGroup = this.groups[currentGroupIndex];
            if (!this.animatedGroups.length) {
                for (var i = 0; i < this.groups.length; i++) {
                    this.animatedGroups.push({
                        name: this.groups[i].name,
                        teams: []
                    });
                }
            }
            this.animatedGroups[currentGroupIndex].teams.push(this.groups[currentGroupIndex].teams[currentTeamIndex]);
            currentTeamIndex++;
            if (currentTeamIndex >= currentGroup.teams.length) {
                currentTeamIndex = 0;
                currentGroupIndex++;
            }
            if (currentGroupIndex >= this.groups.length) {
                return;
            }
            setTimeout(function () {
                _this.startDraw(currentGroupIndex, currentTeamIndex);
            }, 1000);
        },
        startGroupstage: function startGroupstage() {
            this.$router.push('/' + this.type + '/' + this.slug);
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-4244c24']) {
            process.env.vueHMR['data-v-4244c24'] = true;
            api.createRecord('data-v-4244c24', module.exports.default);
          }
        }
      
});
___scope___.file("helpers/shuffle.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
exports.shuffle = shuffle;
//# sourceMappingURL=shuffle.js.map
});
___scope___.file("components/matches.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-21f09b0b'}
Object.assign(_options, {_scopeId: 'data-v-21f09b0b'})
Object.assign(_options, {
        _scopeId: "data-v-21f09b0b",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"matches"},_vm._l((_vm.matches),function(match){return _c('mut-match',{attrs:{"match":match,"noTieAllowed":_vm.noTieAllowed},on:{"update":_vm.matchUpdate}})}))},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var config_1 = require("../config");
exports["default"] = {
    props: {
        matches: {
            required: true
        },
        noTieAllowed: {
            required: false
        }
    },
    data: function data() {
        return {
            activeTeams: [],
            totalMatchesLeft: 0
        };
    },
    beforeMount: function beforeMount() {
        if (this.allMatchedsPlayed()) {
            this.$emit("done");
        }
    },
    computed: {
        isTeamPlaying: function isTeamPlaying() {
            var _this = this;
            return function (team) {
                return _this.activeTeams.indexOf(team) > -1;
            };
        }
    },
    methods: {
        allMatchedsPlayed: function allMatchedsPlayed() {
            var hasRemainingMatches = this.matches.every(function (match) {
                return match.state === config_1.matchStates.DONE;
            });
            return hasRemainingMatches;
        },
        matchUpdate: function matchUpdate(event) {
            var _this2 = this;
            var index = this.matches.findIndex(function (m) {
                return m.id === event.match.id;
            });
            if (index === -1)
                throw new Error("match not found");
            this.matches[index].state = event.state;
            this.matches[index].winner = event.winner;
            this.activeTeams = [];
            var activeMatches = this.matches.filter(function (m) {
                return m.state === config_1.matchStates.PLAYING;
            });
            activeMatches.forEach(function (m) {
                _this2.activeTeams.push(m.home.club);
                _this2.activeTeams.push(m.away.club);
            });
            this.matches.forEach(function (m, i) {
                if (m.state === config_1.matchStates.DONE)
                    return;
                if ((_this2.isTeamPlaying(m.home.club) || _this2.isTeamPlaying(m.away.club)) && m.state !== config_1.matchStates.PLAYING) {
                    _this2.matches[i].state = config_1.matchStates.DISABLED;
                }
                else if (m.state === config_1.matchStates.DISABLED) {
                    _this2.matches[i].state = config_1.matchStates.NONE;
                }
            });
            this.$emit("update", {
                match: this.matches[index]
            });
            if (this.allMatchedsPlayed()) {
                this.$emit("done");
            }
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-21f09b0b']) {
            process.env.vueHMR['data-v-21f09b0b'] = true;
            api.createRecord('data-v-21f09b0b', module.exports.default);
          }
        }
      
});
___scope___.file("components/knockout-match.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-8024cddc'}
Object.assign(_options, {_scopeId: 'data-v-8024cddc'})
Object.assign(_options, {
        _scopeId: "data-v-8024cddc",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"knockout-match"},[_c('div',{staticClass:"knockout-match__club"},[(_vm.home)?[_c('span',{staticClass:"knockout-match__club-name"},[_vm._v(_vm._s(_vm.home.club))]),_c('span',{staticClass:"knockout-match__score"},[_vm._v(_vm._s(_vm.home.score)),(_vm.home.penaltyScore)?_c('span',{staticClass:"knockout-match__penalty-score"},[_vm._v(_vm._s(_vm.home.penaltyScore))]):_vm._e()])]:_vm._e()],2),_c('div',{staticClass:"knockout-match__club"},[(_vm.away)?[_c('span',{staticClass:"knockout-match__club-name"},[_vm._v(_vm._s(_vm.away.club))]),_c('span',{staticClass:"knockout-match__score"},[_vm._v(_vm._s(_vm.away.score)),(_vm.away.penaltyScore)?_c('span',{staticClass:"knockout-match__penalty-score"},[_vm._v(_vm._s(_vm.away.penaltyScore))]):_vm._e()])]:_vm._e()],2)])},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
exports["default"] = {
    props: {
        home: {
            required: true
        },
        away: {
            required: true
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-8024cddc']) {
            process.env.vueHMR['data-v-8024cddc'] = true;
            api.createRecord('data-v-8024cddc', module.exports.default);
          }
        }
      
});
___scope___.file("components/table.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-305588d0'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.sortedResults,"hide-actions":"hide-actions"},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.team))]),_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.played))]),_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.wins))]),_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.draws))]),_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.losses))]),_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.scored))]),_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.against))]),_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.difference))]),_c('td',{staticClass:"text-xs-left"},[_vm._v(_vm._s(props.item.points))])]}}])})},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
exports["default"] = {
    props: {
        data: {
            required: true
        }
    },
    data: function data() {
        return {
            headers: [{
                    text: "Team",
                    value: "team",
                    sortable: false
                }, {
                    text: "Played",
                    value: "played",
                    sortable: false
                }, {
                    text: "Wins",
                    value: "wins",
                    sortable: false
                }, {
                    text: "Draws",
                    value: "draws",
                    sortable: false
                }, {
                    text: "Losses",
                    value: "losses",
                    sortable: false
                }, {
                    text: "Scored",
                    value: "scored",
                    sortable: false
                }, {
                    text: "Against",
                    value: "against",
                    sortable: false
                }, {
                    text: "Difference",
                    value: "difference",
                    sortable: false
                }, {
                    text: "Points",
                    value: "points",
                    sortable: false
                }]
        };
    },
    computed: {
        sortedResults: function sortedResults() {
            return this.data.sort(this.orderByProperty('points', 'difference', 'scored')).reverse();
        }
    },
    methods: {
        orderByProperty: function orderByProperty(prop) {
            var _arguments = arguments, _this = this;
            var args = Array.prototype.slice.call(arguments, 1);
            return function (a, b) {
                var equality = a[prop] - b[prop];
                if (equality === 0 && _arguments.length > 1) {
                    return _this.orderByProperty.apply(null, args)(a, b);
                }
                return equality;
            };
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-305588d0']) {
            process.env.vueHMR['data-v-305588d0'] = true;
            api.createRecord('data-v-305588d0', module.exports.default);
          }
        }
      
});
___scope___.file("router/index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var store_1 = require("../store");
var config_1 = require("../config");
vue_1.default.use(vue_router_1.default);
function buildRouteConfig() {
    var routeConfig = [];
    for (var key in config_1.routes) {
        routeConfig.push({
            path: config_1.routes[key].fullPath,
            component: config_1.routes[key].component,
            meta: config_1.routes[key].meta
        });
    }
    return routeConfig;
}
var router = new vue_router_1.default({
    routes: buildRouteConfig()
});
router.beforeEach(function (to, from, next) {
    if (to.meta) {
        if (to.meta.fetchCurrentTournament) {
            var tournament = store_1.default.getters.tournamentBySlug(to.params.slug);
            if (Object.keys(tournament).length === 0) {
                next('/');
            }
            var currentTournamentId = store_1.default.getters['currentTournament/id'];
            if (tournament.id !== currentTournamentId) {
                store_1.default.dispatch('currentTournament/set', tournament.id);
            }
        }
        if (to.meta.save) {
            store_1.default.dispatch('currentTournament/setProgress', to.path);
        }
    }
    next();
});
exports.default = router;
//# sourceMappingURL=index.js.map
});
___scope___.file("store/index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vuex_1 = require("vuex");
var state_1 = require("./state");
var mutations_1 = require("./mutations");
var actions_1 = require("./actions");
var getters_1 = require("./getters");
var plugins_1 = require("./plugins");
// modules
var current_tournament_1 = require("./modules/current-tournament");
var league_1 = require("./modules/league");
var knockout_1 = require("./modules/knockout");
var groupstage_1 = require("./modules/groupstage");
vue_1.default.use(vuex_1.default);
exports.default = new vuex_1.default.Store({
    state: state_1.default,
    actions: actions_1.default,
    mutations: mutations_1.default,
    plugins: plugins_1.default,
    getters: getters_1.default,
    modules: {
        currentTournament: current_tournament_1.default,
        league: league_1.default,
        knockout: knockout_1.default,
        groupstage: groupstage_1.default,
    }
});
//# sourceMappingURL=index.js.map
});
___scope___.file("store/state.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
exports.default = {
    tournaments: JSON.parse(window.localStorage.getItem(config_1.STORAGE_KEY) || '[]')
};
//# sourceMappingURL=state.js.map
});
___scope___.file("store/config.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STORAGE_KEY = 'mut-tournament';
//# sourceMappingURL=config.js.map
});
___scope___.file("store/mutations.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    addTournament: function (state, _a) {
        var id = _a.id, slug = _a.slug, name = _a.name, teams = _a.teams, type = _a.type;
        var t = {
            id: id,
            slug: slug,
            name: name,
            teams: teams,
            type: type,
            details: {},
            league: {
                matches: [],
                table: [],
                done: false
            },
            knockout: {
                rounds: [],
                teams: [],
                done: false,
                winner: undefined,
                activeRound: {
                    id: 0,
                    state: 0,
                }
            },
            groupstage: {
                groups: {},
                proceedingTeams: [],
                done: false,
            },
        };
        state.tournaments.push(t);
    },
    setProgress: function (state, _a) {
        var slug = _a.slug, page = _a.page;
        var tournament = state.tournaments.find(function (t) { return t.slug === slug; });
        if (tournament) {
            tournament.page = page;
        }
        else {
            throw new Error("Tournament " + slug + " not found");
        }
    },
    updateDetails: function (state, _a) {
        var id = _a.id, details = _a.details;
        var tournament = state.tournaments.find(function (t) { return t.id === id; });
        if (tournament) {
            tournament.details = Object.assign({}, tournament.details, details);
        }
        else {
            throw new Error("Tournament " + id + " not found");
        }
    },
    addTeam: function (state, _a) {
        var team = _a.team, tournament = _a.tournament;
        var tournament = state.tournaments.find(function (t) { return t.slug === tournament; });
        if (tournament.name) {
            if (!tournament.teams)
                tournament.teams = [];
            var index = tournament.teams.findIndex(function (t) { return t.id === team.id; });
            if (index < 0) {
                tournament.teams.push(team);
            }
            else {
                tournament.teams[index] = team;
            }
        }
    },
    randomizeTeams: function (state, _a) {
        var slug = _a.slug, newTeams = _a.newTeams;
        var tournament = state.tournaments.find(function (t) { return t.slug === slug; });
        if (tournament) {
            tournament.teams = newTeams;
        }
        else {
            throw new Error("No tournament " + slug + " found.");
        }
    },
};
//# sourceMappingURL=mutations.js.map
});
___scope___.file("store/actions.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
//# sourceMappingURL=actions.js.map
});
___scope___.file("store/getters.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    tournaments: function (state) {
        return state.tournaments;
    },
    tournamentById: function (state) { return function (id) {
        var tournament = state.tournaments.find(function (tournament) { return tournament.id === id; });
        // if (!tournament) throw new Error('Tournament not found');
        return tournament || {};
    }; },
    tournamentBySlug: function (state) { return function (slug) {
        var tournament = state.tournaments.find(function (tournament) { return tournament.slug === slug; });
        return tournament || {};
    }; },
    tournament: function (state) { return function (slug) {
        var tournament = state.tournaments.find(function (tournament) { return tournament.slug === slug; });
        if (!tournament) {
            throw new Error("Tournament with name " + slug + " not find");
        }
        return {
            name: function () {
                return tournament.name;
            },
            type: function () {
                return tournament.type;
            },
            slug: function () {
                return tournament.slug;
            },
            teams: function () {
                return tournament.teams;
            },
            page: function () {
                return tournament.page;
            },
            numberOfPlays: function () {
                return tournament.details.numberOfPlays;
            },
        };
    }; },
};
//# sourceMappingURL=getters.js.map
});
___scope___.file("store/plugins.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var localStoragePlugin = function (store) {
    store.subscribe(function (mutation, _a) {
        var tournaments = _a.tournaments;
        window.localStorage.setItem(config_1.STORAGE_KEY, JSON.stringify(tournaments));
    });
};
exports.default = [localStoragePlugin];
//# sourceMappingURL=plugins.js.map
});
___scope___.file("store/modules/current-tournament.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    namespaced: true,
    state: {
        id: undefined
    },
    getters: {
        id: function (state) {
            return state.id;
        },
        tournament: function (state, getters, rootState, rootGetters) {
            return rootGetters.tournamentById(state.id);
        },
        page: function (state, getters) {
            return getters.tournament.page;
        },
        name: function (state, getters) {
            return getters.tournament.name;
        },
        type: function (state, getters) {
            return getters.tournament.type;
        },
        slug: function (state, getters) {
            return getters.tournament.slug;
        },
        teams: function (state, getters) {
            return getters.tournament.teams;
        },
        totalTeams: function (state, getters) {
            if (getters.teams)
                return getters.teams.length;
        },
        matchList: function (state, getters) {
            return getters.tournament.matches;
        },
        numberOfPlays: function (state, getters) {
            if (getters.tournament.details) {
                return getters.tournament.details.numberOfPlays;
            }
        },
        numberOfProceedingPlayers: function (state, getters) {
            if (getters.tournament.details) {
                return getters.tournament.details.numberOfProceedingPlayers;
            }
        },
    },
    mutations: {
        set: function (state, tournamentId) {
            state.id = tournamentId;
        },
        reset: function (state) {
            state.id = undefined;
        },
        updateDetails: function (state, _a) {
            var tournament = _a.tournament, details = _a.details;
            tournament.details = Object.assign({}, tournament.details, details);
        },
        randomizeTeams: function (state, _a) {
            var tournament = _a.tournament, randomizedTeams = _a.randomizedTeams;
            tournament.teams = randomizedTeams;
        },
        addTeam: function (state, _a) {
            var tournament = _a.tournament, team = _a.team;
            if (!tournament.teams)
                tournament.teams = [];
            var index = tournament.teams.findIndex(function (t) { return t.id === team.id; });
            if (index < 0) {
                tournament.teams.push(team);
            }
            else {
                tournament.teams[index] = team;
            }
        },
        setProgress: function (state, _a) {
            var tournament = _a.tournament, page = _a.page;
            tournament.page = page;
        },
    },
    actions: {
        set: function (_a, tournamentId) {
            var commit = _a.commit;
            commit('set', tournamentId);
            commit('league/set', tournamentId, {
                root: true
            });
            commit('knockout/set', tournamentId, {
                root: true
            });
            commit('groupstage/set', tournamentId, {
                root: true
            });
        },
        reset: function (_a) {
            var commit = _a.commit;
            commit('reset');
            commit('league/reset', null, {
                root: true
            });
            commit('knockout/reset', null, {
                root: true
            });
            commit('groupstage/reset', null, {
                root: true
            });
        },
        updateDetails: function (_a, details) {
            var commit = _a.commit, state = _a.state, rootState = _a.rootState;
            var tournament = rootState.tournaments.find(function (t) { return t.id === state.id; });
            if (tournament) {
                commit('updateDetails', {
                    tournament: tournament,
                    details: details
                });
            }
        },
        randomizeTeams: function (_a, randomizedTeams) {
            var commit = _a.commit, state = _a.state, rootState = _a.rootState;
            var tournament = rootState.tournaments.find(function (t) { return t.id === state.id; });
            if (tournament) {
                commit('randomizeTeams', {
                    tournament: tournament,
                    randomizedTeams: randomizedTeams
                });
            }
        },
        addTeam: function (_a, team) {
            var commit = _a.commit, state = _a.state, rootState = _a.rootState;
            var tournament = rootState.tournaments.find(function (t) { return t.id === state.id; });
            if (tournament) {
                commit('addTeam', {
                    tournament: tournament,
                    team: team
                });
            }
        },
        setProgress: function (_a, page) {
            var state = _a.state, getters = _a.getters, commit = _a.commit;
            var tournament = getters.tournament;
            commit('setProgress', {
                tournament: tournament,
                page: page
            });
        },
    }
};
//# sourceMappingURL=current-tournament.js.map
});
___scope___.file("store/modules/league.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../../config");
var table_1 = require("../../helpers/table");
exports.default = {
    namespaced: true,
    state: {
        id: undefined
    },
    getters: {
        id: function (state) {
            return state.id;
        },
        tournament: function (state, getters, rootState, rootGetters) {
            return rootGetters.tournamentById(state.id);
        },
        league: function (state, getters) {
            if (getters.tournament)
                return getters.tournament.league;
        },
        matches: function (state, getters) {
            if (getters.league)
                return getters.league.matches;
        },
        completed: function (state, getters) {
            if (getters.league)
                return getters.league.done;
        },
        table: function (state, getters) {
            if (getters.league)
                return getters.league.table;
        },
    },
    mutations: {
        set: function (state, tournamentId) {
            state.id = tournamentId;
        },
        reset: function (state) {
            state.id = undefined;
        },
        complete: function (state, tournament) {
            tournament.league.done = true;
        },
        updateMatchScore: function (state, _a) {
            var tournament = _a.tournament, matchIndex = _a.matchIndex, match = _a.match;
            if (matchIndex > -1) {
                tournament.league.matches[matchIndex] = match;
            }
        },
        addMatches: function (state, _a) {
            var tournament = _a.tournament, matches = _a.matches;
            tournament.league.matches = matches;
        },
        updateTable: function (state, _a) {
            var tournament = _a.tournament, table = _a.table;
            tournament.league.table = table;
        }
    },
    actions: {
        complete: function (_a) {
            var commit = _a.commit, getters = _a.getters;
            var tournament = getters.tournament;
            commit('complete', tournament);
        },
        updateMatchScore: function (_a, match) {
            var commit = _a.commit, getters = _a.getters;
            var tournament = getters.tournament;
            var matchIndex = tournament.league.matches.findIndex(function (m) { return m.id === match.id; });
            commit('updateMatchScore', { tournament: tournament, matchIndex: matchIndex, match: match });
        },
        addMatches: function (_a, matches) {
            var commit = _a.commit, getters = _a.getters;
            var tournament = getters.tournament;
            commit('addMatches', { tournament: tournament, matches: matches });
        },
        updateTable: function (_a) {
            var commit = _a.commit, getters = _a.getters;
            var tournament = getters.tournament;
            var completedMatches = tournament.league.matches.filter(function (match) {
                return match.state === config_1.matchStates.DONE;
            });
            var table = table_1.getTable(tournament.teams, completedMatches);
            commit('updateTable', { tournament: tournament, table: table });
        },
        updateMatch: function (_a, match) {
            var commit = _a.commit, dispatch = _a.dispatch, state = _a.state;
            dispatch('updateMatchScore', match);
            dispatch('updateTable');
        },
    }
};
//# sourceMappingURL=league.js.map
});
___scope___.file("helpers/table.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
function getTable(teams, matches) {
    var table = [];
    teams.forEach(function (team) {
        table.push({
            id: team.id,
            club: team.club,
            player: team.player,
            stats: {
                won: 0,
                draw: 0,
                lost: 0,
                played: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                goalDifference: 0,
                points: 0,
            }
        });
    });
    matches.forEach(function (match) {
        var homeIndex = table.findIndex(function (team) {
            return team.id === match.home.id;
        });
        var awayIndex = table.findIndex(function (team) {
            return team.id === match.away.id;
        });
        table[homeIndex].stats.goalsFor += match.home.score;
        table[homeIndex].stats.goalsAgainst += match.away.score;
        table[awayIndex].stats.goalsFor += match.away.score;
        table[awayIndex].stats.goalsAgainst += match.home.score;
        table[homeIndex].stats.played += 1;
        table[awayIndex].stats.played += 1;
        table[homeIndex].stats.goalDifference = table[homeIndex].stats.goalsFor - table[homeIndex].stats.goalsAgainst;
        table[awayIndex].stats.goalDifference = table[awayIndex].stats.goalsFor - table[awayIndex].stats.goalsAgainst;
        switch (match.winner) {
            case config_1.matchWinner.HOME:
                table[homeIndex].stats.won += 1;
                table[homeIndex].stats.points += 3;
                table[awayIndex].stats.lost += 1;
                break;
            case config_1.matchWinner.AWAY:
                table[awayIndex].stats.won += 1;
                table[awayIndex].stats.points += 3;
                table[homeIndex].stats.lost += 1;
                break;
            case config_1.matchWinner.TIE:
                table[homeIndex].stats.draw += 1;
                table[homeIndex].stats.points += 1;
                table[awayIndex].stats.draw += 1;
                table[awayIndex].stats.points += 1;
                break;
        }
    });
    return table;
}
exports.getTable = getTable;
//# sourceMappingURL=table.js.map
});
___scope___.file("store/modules/knockout/index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getters_1 = require("./getters");
var actions_1 = require("./actions");
var mutations_1 = require("./mutations");
exports.default = {
    namespaced: true,
    state: {
        id: undefined
    },
    getters: getters_1.default,
    mutations: mutations_1.default,
    actions: actions_1.default
};
//# sourceMappingURL=index.js.map
});
___scope___.file("store/modules/knockout/getters.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    id: function (state) {
        return state.id;
    },
    tournament: function (state, getters, rootState, rootGetters) {
        return rootGetters.tournamentById(state.id);
    },
    ko: function (state, getters) {
        return getters.tournament.knockout;
    },
    rounds: function (state, getters) {
        if (getters.ko)
            return getters.ko.rounds;
    },
    teams: function (state, getters) {
        if (getters.ko)
            return getters.ko.teams;
    },
    round: function (state, getters) {
        if (getters.ko)
            return getters.ko.rounds[getters.activeRoundId];
    },
    activeRoundId: function (state, getters) {
        if (getters.ko)
            return getters.ko.activeRound.id;
    },
    activeRoundState: function (state, getters) {
        if (getters.ko)
            return getters.ko.activeRound.state;
    },
    complete: function (state, getters) {
        if (getters.ko)
            return getters.ko.done;
    },
    winner: function (state, getters, rootState) {
        if (getters.ko) {
            var winningTeam = getters.tournament.teams.find(function (team) {
                return team.id === getters.ko.winner;
            });
            return winningTeam;
        }
    },
};
//# sourceMappingURL=getters.js.map
});
___scope___.file("store/modules/knockout/actions.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_1 = require("../../../helpers/match");
var knockout_1 = require("../../../helpers/knockout");
var config_1 = require("../../../config");
exports.default = {
    generate: function (_a, data) {
        var commit = _a.commit, getters = _a.getters;
        var tournament = getters.tournament;
        var teams = tournament.teams;
        if (data && data.teams)
            teams = data.teams;
        var shuffeledTeams = JSON.parse(JSON.stringify(teams.sort(function (a, b) { return 0.5 - Math.random(); })));
        var totalRounds = knockout_1.calculateTotalRounds(teams.length);
        var rounds = Array.from({ length: totalRounds }).map(function (round, i) {
            var matches = teams.length / Math.pow(2, totalRounds - (i + 1));
            // create empty matches
            return Array.from({ length: matches / 2 }).map(function (i) { return ([match_1.generateMatch({}, {})]); });
        });
        rounds.reverse();
        for (var i = 0; i < rounds[0].length; i++) {
            var teamA = shuffeledTeams.shift();
            var teamB = shuffeledTeams.shift();
            rounds[0][i] = match_1.generateMatch(teamA, teamB);
        }
        commit('generate', {
            tournament: tournament,
            teams: teams,
            rounds: rounds
        });
        commit('setRound', {
            tournament: tournament,
            round: 0
        });
    },
    updateMatch: function (_a, match) {
        var dispatch = _a.dispatch;
        dispatch('updateMatchScore', match);
    },
    updateMatchScore: function (_a, match) {
        var commit = _a.commit, getters = _a.getters;
        var tournament = getters.tournament;
        var round = getters.round;
        var roundIndex = getters.activeRoundId;
        var matchIndex = round.findIndex(function (m) { return m.id === match.id; });
        commit('updateMatchScore', { tournament: tournament, roundIndex: roundIndex, matchIndex: matchIndex, match: match });
    },
    completeRound: function (_a) {
        var commit = _a.commit, dispatch = _a.dispatch, getters = _a.getters;
        var tournament = getters.tournament;
        var roundIndex = getters.activeRoundId;
        var totalRounds = getters.rounds.length;
        var done = roundIndex === (totalRounds - 1);
        if (done) {
            commit('complete', { tournament: tournament, roundIndex: roundIndex, done: done });
            dispatch('setWinner');
        }
        else {
            dispatch('generateRound');
        }
    },
    generateRound: function (_a) {
        var commit = _a.commit, getters = _a.getters;
        var tournament = getters.tournament;
        var teams = getters.teams;
        var roundIndex = getters.activeRoundId;
        var rounds = getters.rounds;
        var winningTeams = [];
        tournament.knockout.rounds[roundIndex].forEach(function (match) {
            switch (match.winner) {
                case config_1.matchWinner.HOME:
                    winningTeams.push(match.home.id);
                    break;
                case config_1.matchWinner.AWAY:
                    winningTeams.push(match.away.id);
                    break;
            }
        });
        var teams = tournament.teams.filter(function (team) {
            return winningTeams.includes(team.id);
        });
        var copyOfTeams = JSON.parse(JSON.stringify(teams));
        // new round
        roundIndex++;
        for (var i = 0; i < rounds[roundIndex].length; i++) {
            var teamA = copyOfTeams.shift();
            var teamB = copyOfTeams.shift();
            rounds[roundIndex][i] = match_1.generateMatch(teamA, teamB);
        }
        commit('generate', {
            tournament: tournament,
            rounds: rounds
        });
        commit('setRound', {
            tournament: tournament,
            round: roundIndex
        });
    },
    startRound: function (_a) {
        var commit = _a.commit, getters = _a.getters;
        commit('startRound', {
            tournament: getters.tournament
        });
    },
    setWinner: function (_a) {
        var commit = _a.commit, getters = _a.getters;
        var tournament = getters.tournament;
        var rounds = tournament.knockout.rounds;
        var final = rounds[rounds.length - 1][0];
        var winner = final.winner;
        var winningTeamId = winner === 1 ? final.home.id : final.away.id;
        commit('setWinner', { tournament: tournament, winningTeamId: winningTeamId });
    }
};
//# sourceMappingURL=actions.js.map
});
___scope___.file("helpers/match.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var id_generator_1 = require("../services/id-generator");
function generateMatch(teamA, teamB) {
    var match = {
        home: teamA,
        away: teamB,
        id: id_generator_1.default.id(),
        state: config_1.matchStates.NONE,
    };
    match.away.score = 0;
    match.home.score = 0;
    return match;
}
exports.generateMatch = generateMatch;
//# sourceMappingURL=match.js.map
});
___scope___.file("store/modules/knockout/mutations.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    set: function (state, tournamentId) {
        state.id = tournamentId;
    },
    reset: function (state) {
        state.id = undefined;
    },
    generate: function (state, _a) {
        var tournament = _a.tournament, rounds = _a.rounds, teams = _a.teams;
        tournament.knockout.teams = teams;
        tournament.knockout.rounds = rounds;
    },
    setRound: function (state, _a) {
        var tournament = _a.tournament, round = _a.round;
        tournament.knockout.activeRound.id = round;
        tournament.knockout.activeRound.state = 0;
    },
    startRound: function (state, _a) {
        var tournament = _a.tournament;
        tournament.knockout.activeRound.state = 1;
    },
    updateMatchScore: function (state, _a) {
        var tournament = _a.tournament, roundIndex = _a.roundIndex, matchIndex = _a.matchIndex, match = _a.match;
        if (matchIndex > -1) {
            tournament.knockout.rounds[roundIndex][matchIndex] = match;
        }
    },
    complete: function (state, _a) {
        var tournament = _a.tournament, roundIndex = _a.roundIndex, done = _a.done;
        tournament.knockout.done = done;
    },
    setWinner: function (state, _a) {
        var tournament = _a.tournament, winningTeamId = _a.winningTeamId;
        tournament.knockout.winner = winningTeamId;
    }
};
//# sourceMappingURL=mutations.js.map
});
___scope___.file("store/modules/groupstage/index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getters_1 = require("./getters");
var actions_1 = require("./actions");
var mutations_1 = require("./mutations");
exports.default = {
    namespaced: true,
    state: {
        id: undefined
    },
    getters: getters_1.default,
    mutations: mutations_1.default,
    actions: actions_1.default
};
//# sourceMappingURL=index.js.map
});
___scope___.file("store/modules/groupstage/getters.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    id: function (state) {
        return state.id;
    },
    tournament: function (state, getters, rootState, rootGetters) {
        return rootGetters.tournamentById(state.id);
    },
    groupstage: function (state, getters, rootState, rootGetters) {
        if (getters.tournament)
            return getters.tournament.groupstage;
    },
    groups: function (state, getters) {
        if (getters.groupstage)
            return getters.groupstage.groups;
    },
    proceedingTeams: function (state, getters) {
        if (getters.groupstage)
            return getters.groupstage.proceedingTeams;
    },
};
//# sourceMappingURL=getters.js.map
});
___scope___.file("store/modules/groupstage/actions.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var table_1 = require("../../../helpers/table");
var config_1 = require("../../../config");
exports.default = {
    updateTable: function (_a, _b) {
        var commit = _a.commit, getters = _a.getters;
        var groupIndex = _b.groupIndex;
        var tournament = getters.tournament;
        var groups = getters.groups;
        var currentGroup = getters.groups[groupIndex];
        var completedMatches = currentGroup.matches.filter(function (match) {
            return match.state === config_1.matchStates.DONE;
        });
        var table = table_1.getTable(currentGroup.teams, completedMatches);
        groups[groupIndex].table = table;
        commit('setGroups', { tournament: tournament, groups: groups });
    },
    setGroupCompleted: function (_a, _b) {
        var commit = _a.commit, getters = _a.getters;
        var groupIndex = _b.groupIndex;
        var tournament = getters.tournament;
        var groups = getters.groups;
        groups[groupIndex].completed = true;
        commit('setGroups', { tournament: tournament, groups: groups });
    },
    updateTables: function (_a) {
        var commit = _a.commit, getters = _a.getters;
        var tournament = getters.tournament;
        var groups = getters.groups;
        groups.forEach(function (group, index) {
            var completedMatches = group.matches.filter(function (match) {
                return match.state === config_1.matchStates.DONE;
            });
            var table = table_1.getTable(group.teams, completedMatches);
            groups[index].table = table;
        });
        commit('setGroups', { tournament: tournament, groups: groups });
    },
    complete: function (_a, _b) {
        var commit = _a.commit, getters = _a.getters;
        var teamIds = _b.teamIds;
        var tournament = getters.tournament;
        var teams = tournament.teams;
        var proceedingTeams = [];
        teams.forEach(function (team) {
            var f = teamIds.find(function (t) { return t === team.id; });
            if (f)
                proceedingTeams.push(team);
        });
        commit('complete', { tournament: tournament, proceedingTeams: proceedingTeams });
    },
    updateMatchScore: function (_a, _b) {
        var commit = _a.commit, getters = _a.getters;
        var groupIndex = _b.groupIndex, match = _b.match;
        var tournament = getters.tournament;
        var matchIndex = tournament.groupstage.groups[groupIndex].matches.findIndex(function (m) { return m.id === match.id; });
        commit('updateMatchScore', { tournament: tournament, matchIndex: matchIndex, groupIndex: groupIndex, match: match });
    },
    updateMatch: function (_a, _b) {
        var dispatch = _a.dispatch;
        var groupIndex = _b.groupIndex, match = _b.match;
        dispatch('updateMatchScore', { groupIndex: groupIndex, match: match });
        dispatch('updateTable', { groupIndex: groupIndex });
    },
    setGroups: function (_a, _b) {
        var commit = _a.commit, getters = _a.getters;
        var groups = _b.groups;
        var tournament = getters.tournament;
        commit('setGroups', { tournament: tournament, groups: groups });
    }
};
//# sourceMappingURL=actions.js.map
});
___scope___.file("store/modules/groupstage/mutations.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    set: function (state, tournamentId) {
        state.id = tournamentId;
    },
    reset: function (state) {
        state.id = undefined;
    },
    setGroups: function (state, _a) {
        var tournament = _a.tournament, groups = _a.groups;
        tournament.groupstage.groups = groups;
    },
    updateMatchScore: function (state, _a) {
        var tournament = _a.tournament, matchIndex = _a.matchIndex, groupIndex = _a.groupIndex, match = _a.match;
        if (matchIndex > -1) {
            tournament.groupstage.groups[groupIndex].matches[matchIndex] = match;
        }
    },
    complete: function (state, _a) {
        var tournament = _a.tournament, proceedingTeams = _a.proceedingTeams;
        tournament.groupstage.proceedingTeams = proceedingTeams;
        tournament.groupstage.done = true;
    }
};
//# sourceMappingURL=mutations.js.map
});
___scope___.file("style/style.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("style/style.css", "@import url('https://fonts.googleapis.com/css?family=Montserrat:500,900');\n:root {\n  --color-white: #fff;\n  --color-primary: #009EC4;\n  --color-secondary: #009658;\n  --font-main: 'Montserrat', sans-serif;\n  --font-weight-medium: 500;\n  --font-weight-black: 900;\n}\n\n/*\n  DEFAULT\n*/\n\nhtml,\nbody {\n  color: var(--color-white);\n  font-family: var(--font-main);\n  font-size: 16px;\n  font-weight: var(--font-weight-medium);\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n  TYPOGRAPHY\n*/\n\nh1 {\n  font-size: 50px;\n  font-weight: var(--font-weight-black);\n  margin: 0;\n  text-transform: uppercase;\n}\n\nh2 {\n  font-size: 30px;\n  font-weight: var(--font-weight-medium);\n  margin: 0;\n  opacity: .75;\n  text-transform: uppercase;\n}\n")
});
___scope___.file("components.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("components.css", "\n.logo[data-v-fb11cde5] {\n  --logo-size: 30px;\n  bottom: 5px;\n  fill: var(--color-white);\n  height: var(--logo-size);\n  right: 10px;\n  position: absolute;\n  width: var(--logo-size);\n}\n.logo circle[data-v-fb11cde5] {\n  animation-duration: 2s;\n  animation-fill-mode: backwards;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-play-state: paused;\n}\n.logo circle[data-v-fb11cde5]:nth-of-type(1) {\n  animation-delay: 1s;\n  animation-name: bubble1-data-v-fb11cde5;\n}\n.logo circle[data-v-fb11cde5]:nth-of-type(2) {\n  animation-delay: 1.5s;\n  animation-name: bubble2-data-v-fb11cde5;\n}\n.logo circle[data-v-fb11cde5]:nth-of-type(3) {\n  animation-name: bubble3-data-v-fb11cde5;\n}\n.logo:hover circle[data-v-fb11cde5] {\n  animation-play-state: running;\n}\n@keyframes bubble1-data-v-fb11cde5 {\n0% {\n    opacity: 0;\n    transform: translateY(10%);\n}\n75% {\n    opacity: .75;\n}\n100% {\n    opacity: 0;\n    transform: translateY(-20%);\n}\n}\n@keyframes bubble2-data-v-fb11cde5 {\n0% {\n    opacity: 0;\n    transform: translateY(20%);\n}\n75% {\n    opacity: .75;\n}\n100% {\n    opacity: 0;\n    transform: translateY(-20%);\n}\n}\n@keyframes bubble3-data-v-fb11cde5 {\n0% {\n    opacity: 0;\n    transform: translateY(30%);\n}\n75% {\n    opacity: .75;\n}\n100% {\n    opacity: 0;\n    transform: translateY(-10%);\n}\n}\n/* scoped broken for nested classes??? */\n.match-template {\n  position: relative; }\n\n.internal-badge .badge__badge {\n  border-radius: 0 !important;\n  right: 0 !important;\n  top: -20px !important;\n  width: 200px !important; }\n\n.match {\n  background-color: white;\n  display: grid;\n  grid-template-columns: 2fr 1fr 2fr;\n  height: 100px;\n  padding: 20px; }\n\n.match--playing .match__playing,\n.match--playing .match__score--input,\n.match--playing .match__button--end {\n  display: block; }\n\n.match--playing .match__button--start {\n  display: none; }\n\n.match--disabled {\n  opacity: 0.25; }\n  .match--disabled .match__button,\n  .match--disabled .match__score {\n    display: none; }\n\n.match--done {\n  background-color: limegreen;\n  color: white; }\n  .match--done .match__score {\n    color: white; }\n  .match--done .match__side--loser .match__team {\n    opacity: 0.5; }\n  .match--done .match__button,\n  .match--done .match__playing {\n    display: none; }\n  .match--done .match__score,\n  .match--done .match__divider {\n    display: block; }\n\n.match__center {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  font-size: 12px;\n  justify-content: center; }\n\n.match__button {\n  background-color: transparent;\n  color: limegreen;\n  cursor: pointer;\n  border: 1px solid limegreen;\n  border-radius: 5px;\n  padding: 4px; }\n\n.match__button--end {\n  border: none;\n  color: #999;\n  display: none;\n  margin-top: 10px;\n  text-decoration: underline; }\n\n.match__divider {\n  display: none;\n  font-size: 40px;\n  font-weight: 300; }\n\n.match__playing {\n  color: red;\n  display: none;\n  position: relative; }\n  .match__playing::after {\n    animation-name: move;\n    animation-duration: 0.5s;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n    animation-direction: alternate;\n    background-color: currentColor;\n    border-radius: 50%;\n    content: \"\";\n    display: block;\n    height: 3px;\n    right: -10px;\n    position: absolute;\n    top: 50%;\n    width: 3px; }\n\n.math__side {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  text-align: left; }\n\n.match__side--away {\n  flex-direction: row-reverse;\n  text-align: right; }\n\n.match__team {\n  font-size: 20px;\n  font-weight: 300; }\n\n.match__player {\n  font-size: 12px;\n  line-height: 20px;\n  opacity: 0.5; }\n\n.match__score,\n.match__score--input {\n  display: none;\n  color: limegreen;\n  font-size: 40px;\n  font-weight: 100;\n  text-align: center;\n  width: 100px; }\n  .match__score:focus,\n  .match__score--input:focus {\n    outline: none; }\n\n@keyframes move {\n  from {\n    transform: translateY(-200%); }\n  to {\n    transform: translateY(200%); } }\n\n.matches[data-v-1571ce8d] {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(3, 1fr);\n  margin: 20px;\n}\n\n.bracket[data-v-5ee0f31e] {\n  padding: 10px;\n  box-sizing: border-box;\n  min-height: calc(100vh - 136px);\n  color: #2c7399;\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n.round--inactive[data-v-5ee0f31e] {\n  opacity: 0.5;\n}\n.next-round[data-v-5ee0f31e] {\n  position: absolute;\n  top: 70%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 4;\n  margin: 0 !important;\n}\n.matches[data-v-5ee0f31e] {\n  display: grid;\n  grid-gap: 10px;\n  grid-auto-columns: 1fr;\n  align-content: space-around;\n}\n.round h1[data-v-5ee0f31e] {\n  font-size: 20px;\n  margin: 5px 0;\n  text-align: center;\n}\n.round--right h1[data-v-5ee0f31e] {\n  display: none;\n}\n.winner[data-v-5ee0f31e] {\n  position: relative;\n  margin: 10px auto 0;\n  font-size: 20px;\n}\n.winner span[data-v-5ee0f31e] {\n    color: goldenrod;\n    text-align: center;\n}\n@media screen and (min-width: 768px) {\n.bracket[data-v-5ee0f31e] {\n    display: grid;\n    grid-auto-columns: minmax(50px, 1fr);\n    grid-template-rows: 1fr minmax(1fr, 200px);\n    grid-template-areas: \"round1-left round1-right\" \"round2-left round2-right\" \"round3-left round3-right\" \"round4-left round4-right\" \"round5 .\";\n    grid-gap: 10px;\n}\n.round[data-v-5ee0f31e] {\n    display: grid;\n    grid-template-rows: 30px 1fr;\n}\n.round h1[data-v-5ee0f31e] {\n      align-self: start;\n}\n.round--right h1[data-v-5ee0f31e] {\n    display: block;\n}\n.round1.round--left[data-v-5ee0f31e] {\n    grid-area: round1-left;\n}\n.round1.round--right[data-v-5ee0f31e] {\n    grid-area: round1-right;\n}\n.round2.round--left[data-v-5ee0f31e] {\n    grid-area: round2-left;\n}\n.round2.round--right[data-v-5ee0f31e] {\n    grid-area: round2-right;\n}\n.round3.round--left[data-v-5ee0f31e] {\n    grid-area: round3-left;\n}\n.round3.round--right[data-v-5ee0f31e] {\n    grid-area: round3-right;\n}\n.round4.round--left[data-v-5ee0f31e] {\n    grid-area: round4-left;\n}\n.round4.round--right[data-v-5ee0f31e] {\n    grid-area: round4-right;\n}\n.round5[data-v-5ee0f31e] {\n    grid-area: round5;\n}\n}\n@media screen and (min-width: 1640px) {\n.bracket[data-v-5ee0f31e] {\n    grid-auto-columns: minmax(50px, 1fr);\n}\n.bracket--1[data-v-5ee0f31e] {\n    grid-template-areas: \"round1\";\n}\n.bracket--2[data-v-5ee0f31e] {\n    grid-template-areas: \"round1-left round2 round1-right\";\n}\n.bracket--3[data-v-5ee0f31e] {\n    grid-template-areas: \"round1-left round2-left round3 round2-right round1-right\";\n}\n.bracket--4[data-v-5ee0f31e] {\n    grid-template-areas: \"round1-left round2-left round3-left round4 round3-right round2-right round1-right\";\n}\n.bracket--5[data-v-5ee0f31e] {\n    grid-template-areas: \"round1-left round2-left round3-left round4-left round5 round4-right round3-right round2-right round1-right\";\n}\n.round.finals .matches[data-v-5ee0f31e] {\n    align-content: center;\n}\n}\n\n.matches[data-v-e29e52a9] {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(3, 1fr);\n  margin: 20px;\n}\n\n.groups[data-v-4244c24] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  justify-content: center;\n}\n.group[data-v-4244c24] {\n  margin-bottom: 20px;\n}\n\n.matches[data-v-21f09b0b] {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(3, 1fr);\n  margin: 20px;\n}\n\n.knockout-match__club-name[data-v-8024cddc] {\n  text-align: left;\n}\n@media screen and (min-width: 1640px) {\n.knockout-match__club-name[data-v-8024cddc] {\n      max-width: 130px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n}\n}\n.knockout-match__club[data-v-8024cddc] {\n  background-color: #fff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n  height: 30px;\n  margin: 5px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 10px;\n}\n.knockout-match__club .knockout-match__score[data-v-8024cddc] {\n    font-size: 13px;\n    color: lightgrey;\n    margin-left: 5px;\n}\n.knockout-match__score[data-v-8024cddc] {\n  margin-left: 5px;\n}\n.knockout-match__penalty-score[data-v-8024cddc] {\n  font-size: 13px;\n  color: lightgrey;\n  margin-left: 5px;\n}");
});
return ___scope___.entry = "main.js";
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
        
FuseBox.target = "universal"

FuseBox.import("default/main.js");
FuseBox.main("default/main.js");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((p||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(p){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!p&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=g[a];if(!s){if(p&&"electron"!==x.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),d=i(c),v=s.f[d];return!v&&d.indexOf("*")>-1&&(l=d),v||l||(d=t(c,"/","index.js"),v=s.f[d],v||"."!==c||(d=s.s&&s.s.entry||"index.js",v=s.f[d]),v||(d=c+".js",v=s.f[d]),v||(v=s.f[c+".jsx"]),v||(d=c+"/index.jsx",v=s.f[d])),{file:v,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:d}}function s(e,r,n){if(void 0===n&&(n={}),!p)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);x.dynamic(a,o),r(x.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=h[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=g[t.pkgName];if(u){var d={};for(var m in u.f)a.test(m)&&(d[m]=c(t.pkgName+"/"+m));return d}}if(!i){var h="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return h?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var y=i.locals={},w=n(t.validPath);y.exports={},y.module={exports:y.exports},y.require=function(e,r){return c(e,{pkg:_,path:w,v:t.versions})},p||!v.require.main?y.require.main={filename:"./",paths:[]}:y.require.main=v.require.main;var j=[y.module.exports,y.require,y.module,t.validPath,w,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),y.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof WorkerGlobalScope,p="undefined"!=typeof window&&window.navigator||d,v=p?d?{}:window:global;p&&(v.global=d?{}:window),e=p&&"undefined"==typeof __fbx__dnm__?e:module.exports;var m=p?d?{}:window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};p||(v.require=require);var g=m.p=m.p||{},h=m.e=m.e||{},x=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){h[e]=h[e]||[],h[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=g[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=g.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(g[e])return n(g[e].s);var t=g[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=g,r.isBrowser=p,r.isServer=!p,r.plugins=[],r}();return p||(v.FuseBox=x),e.FuseBox=x}(this))
//# sourceMappingURL=app.js.map