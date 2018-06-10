(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("main.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var app_vue_1 = require("./app.vue");
var logo_vue_1 = require("./components/logo.vue");
var create_team_vue_1 = require("./components/create-team.vue");
var match_vue_1 = require("./components/match.vue");
var matches_vue_1 = require("./components/matches.vue");
var knockout_match_vue_1 = require("./components/knockout-match.vue");
var table_vue_1 = require("./components/table.vue");
var header_vue_1 = require("./components/header.vue");
var router_1 = require("./router");
var store_1 = require("./store");
require("./style/style.css");
vue_1.default.component('mut-logo', logo_vue_1.default);
vue_1.default.component('mut-create-team', create_team_vue_1.default);
vue_1.default.component('mut-match', match_vue_1.default);
vue_1.default.component('mut-matches', matches_vue_1.default);
vue_1.default.component('mut-knockout-match', knockout_match_vue_1.default);
vue_1.default.component('mut-table', table_vue_1.default);
vue_1.default.component('mut-header', header_vue_1.default);
new vue_1.default({
    router: router_1.default,
    store: store_1.default,
    el: '#app',
    render: function (h) { return h(app_vue_1.default); },
});
//# sourceMappingURL=main.js.map
});
___scope___.file("app.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-1bece084'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',{staticClass:"statusbar u-background--gradient"}),_c('router-view')],1)},
        staticRenderFns: []
      })
exports.default = {}
Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-1bece084']) {
            process.env.vueHMR['data-v-1bece084'] = true;
            api.createRecord('data-v-1bece084', module.exports.default);
          }
        }
      
});
___scope___.file("components/logo.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-dd6e56bd'}
Object.assign(_options, {_scopeId: 'data-v-dd6e56bd'})
Object.assign(_options, {
        _scopeId: "data-v-dd6e56bd",
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

          if (!process.env.vueHMR['data-v-dd6e56bd']) {
            process.env.vueHMR['data-v-dd6e56bd'] = true;
            api.createRecord('data-v-dd6e56bd', module.exports.default);
          }
        }
      
});
___scope___.file("components/create-team.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-f18d2362'}
Object.assign(_options, {_scopeId: 'data-v-f18d2362'})
Object.assign(_options, {
        _scopeId: "data-v-f18d2362",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"u-box create-team"},[_c('div',{staticClass:"form__group"},[_c('label',[_vm._v("Player")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.team.player),expression:"team.player"}],attrs:{"type":"text"},domProps:{"value":(_vm.team.player)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.team, "player", $event.target.value)},_vm.submit]}})]),_c('div',{staticClass:"form__group"},[_c('label',[_vm._v("Club")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.team.club),expression:"team.club"}],attrs:{"type":"text"},domProps:{"value":(_vm.team.club)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.team, "club", $event.target.value)},_vm.submit]}})]),_c('div',{attrs:{"hidden":"hidden"}},[_c('span',{model:{value:(_vm.team.id),callback:function ($$v) {_vm.$set(_vm.team, "id", $$v)},expression:"team.id"}})])])},
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
        submit: lodash_1.debounce(function () {
            if (!this.team.club || !this.team.player) {
                return;
            }
            if (!this.team.id) {
                this.team.id = id_generator_1["default"].id();
            }
            this.$emit("addTeam", this.team);
        }, 500)
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-f18d2362']) {
            process.env.vueHMR['data-v-f18d2362'] = true;
            api.createRecord('data-v-f18d2362', module.exports.default);
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

var _options = { _vueModuleId: 'data-v-ca9d0d25'}
Object.assign(_options, {_scopeId: 'data-v-ca9d0d25'})
Object.assign(_options, {
        _scopeId: "data-v-ca9d0d25",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"match u-box u-box--large",class:{'match--playing': _vm.internalMatch.state === 'playing', 'match--done': _vm.internalMatch.state === 'done' , 'match--disabled': _vm.internalMatch.state === 'disabled', 'match--error': _vm.alert}},[_c('div',{staticClass:"match__team",class:{'match__team--winner': _vm.internalMatch.winner ===  1, 'match__team--loser': _vm.internalMatch.winner === 2 }},[_c('div',{staticClass:"team__name"},[_vm._v(_vm._s(_vm.internalMatch.home.club))]),_c('div',{staticClass:"team__player"},[_vm._v(_vm._s(_vm.internalMatch.home.player))])]),_c('div',{staticClass:"match__info",on:{"click":_vm.editMatch}},[_c('div',{staticClass:"match__live"},[_vm._v("live")]),_c('div',{staticClass:"match__score"},[_c('span',{class:{'match__score--winner': _vm.internalMatch.winner ===  1, 'match__score--loser': _vm.internalMatch.winner === 2}},[_vm._v(_vm._s(_vm.internalMatch.home.score))]),_c('span',{class:{'match__score--loser': _vm.internalMatch.winner ===  1, 'match__score--winner': _vm.internalMatch.winner === 2}},[_vm._v(_vm._s(_vm.internalMatch.away.score))])]),_c('div',{staticClass:"match__score--input"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.internalMatch.home.score),expression:"internalMatch.home.score"}],attrs:{"type":"number","min":"0"},domProps:{"value":(_vm.internalMatch.home.score)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.internalMatch.home, "score", $event.target.value)}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.internalMatch.away.score),expression:"internalMatch.away.score"}],attrs:{"type":"number","min":"0"},domProps:{"value":(_vm.internalMatch.away.score)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.internalMatch.away, "score", $event.target.value)}}})]),_c('a',{staticClass:"match__start",on:{"click":_vm.startMatch}},[_vm._v("start match")]),_c('a',{staticClass:"match__end",on:{"click":_vm.endMatch}},[_vm._v("end match")])]),_c('div',{staticClass:"match__team",class:{'match__team--loser': _vm.internalMatch.winner ===  1, 'match__team--winner': _vm.internalMatch.winner === 2}},[_c('div',{staticClass:"team__name"},[_vm._v(_vm._s(_vm.internalMatch.away.club))]),_c('div',{staticClass:"team__player"},[_vm._v(_vm._s(_vm.internalMatch.away.player))])])])},
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

          if (!process.env.vueHMR['data-v-ca9d0d25']) {
            process.env.vueHMR['data-v-ca9d0d25'] = true;
            api.createRecord('data-v-ca9d0d25', module.exports.default);
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

var _options = { _vueModuleId: 'data-v-db7e27a5'}
Object.assign(_options, {_scopeId: 'data-v-db7e27a5'})
Object.assign(_options, {
        _scopeId: "data-v-db7e27a5",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page home u-background--gradient u-height--full"},[_c('div',{staticClass:"page__content page__content--center"},[_c('h1',[_vm._v("Mutambo")]),_c('div',{staticClass:"button",attrs:{"color":"primary"},on:{"click":function($event){_vm.goToCreate()}}},[_vm._v("Create tournament")]),(_vm.tournaments.length)?_c('div',{staticClass:"tournament-list"},_vm._l((_vm.tournaments),function(tournament,index){return _c('div',{staticClass:"tournament u-box",on:{"click":function($event){_vm.goToRoute(tournament.id)}}},[_c('h3',{staticClass:"tournament__name"},[_vm._v(_vm._s(tournament.name))]),_c('div',{staticClass:"tournament__info"},[_c('div',{staticClass:"tournament__type"},[_c('span',[_vm._v("type:")]),_vm._v(_vm._s(tournament.type))]),_c('div',{staticClass:"tournament__players"},[_c('span',[_vm._v("players:")]),_vm._v(_vm._s(tournament.teams ? tournament.teams.length : '0'))])]),_c('div',{staticClass:"tournament__icon"},[_vm._v(_vm._s(tournament[tournament.type].done ? '🏆' : '🎮'))])])})):_vm._e()])])},
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

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-db7e27a5']) {
            process.env.vueHMR['data-v-db7e27a5'] = true;
            api.createRecord('data-v-db7e27a5', module.exports.default);
          }
        }
      
});
___scope___.file("pages/create.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-79d97cee'}
Object.assign(_options, {_scopeId: 'data-v-79d97cee'})
Object.assign(_options, {
        _scopeId: "data-v-79d97cee",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page create"},[_c('mut-header'),_c('div',{staticClass:"page__content"},[_c('h3',[_vm._v("🎉 Create new tournament  🎉")]),_c('div',{staticClass:"form__group"},[_c('label',[_vm._v("Tournament name")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"}],attrs:{"type":"text"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}})]),_c('div',{staticClass:"form__group"},[_c('label',[_vm._v("Tournament type")]),_c('div',{staticClass:"button-group"},[_c('div',{staticClass:"button-group-item",class:{ 'button-group-item--active': _vm.type === 'league'},attrs:{"value":"league"},on:{"click":function($event){_vm.setType('league')}}},[_vm._v("League")]),_c('div',{staticClass:"button-group-item",class:{ 'button-group-item--active': _vm.type === 'knockout'},attrs:{"value":"knockout"},on:{"click":function($event){_vm.setType('knockout')}}},[_vm._v("Knockout")]),_c('div',{staticClass:"button-group-item",class:{ 'button-group-item--active': _vm.type === 'groupstage'},attrs:{"value":"groupstage"},on:{"click":function($event){_vm.setType('groupstage')}}},[_vm._v("Groupstage & Knockout")])])]),_c('a',{staticClass:"button button--tertiary",on:{"click":_vm.submit}},[_vm._v("create")])])],1)},
        staticRenderFns: []
      })
"use strict";
exports.__esModule = true;
var slug_1 = require("slug");
var id_generator_1 = require("../services/id-generator");
exports["default"] = {
    data: function data() {
        return {
            name: "",
            type: "knockout"
        };
    },
    methods: {
        submit: function submit() {
            var slugged = slug_1["default"](this.name.toLowerCase());
            var tournament = {
                id: id_generator_1["default"].id(),
                name: this.name,
                type: this.type
            };
            tournament.slug = slugged + "-" + id_generator_1["default"].random4chars;
            this.$store.commit("addTournament", tournament);
            this.$router.push("/detail/" + tournament.slug);
        },
        setType: function setType(type) {
            this.type = type;
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-79d97cee']) {
            process.env.vueHMR['data-v-79d97cee'] = true;
            api.createRecord('data-v-79d97cee', module.exports.default);
          }
        }
      
});
___scope___.file("pages/detail.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-8d3f1e3b'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page detail"},[_c('mut-header'),_c('div',{staticClass:"page__content"},[_c('h3',[_vm._v("⚙️ "+_vm._s(_vm.type)+" settings ⚙️")]),(_vm.type === 'league')?[_c('div',{staticClass:"form__group"},[_c('label',[_vm._v("Total players")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.totalPlayers),expression:"totalPlayers"}],attrs:{"type":"number"},domProps:{"value":(_vm.totalPlayers)},on:{"input":function($event){if($event.target.composing){ return; }_vm.totalPlayers=$event.target.value}}})]),_c('div',{staticClass:"form__group"},[_c('label',[_vm._v("Number of plays against each team")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.numberOfPlays),expression:"numberOfPlays"}],attrs:{"type":"number"},domProps:{"value":(_vm.numberOfPlays)},on:{"input":function($event){if($event.target.composing){ return; }_vm.numberOfPlays=$event.target.value}}})])]:_vm._e(),(_vm.type === 'knockout')?[_c('div',{staticClass:"form__group"},[_c('label',[_vm._v("Total players")]),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.totalPlayers),expression:"totalPlayers"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.totalPlayers=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.knockoutTotalPlayerOptions),function(totalPlayers){return _c('option',{domProps:{"value":totalPlayers}},[_vm._v(_vm._s(totalPlayers))])}))])]:_vm._e(),(_vm.type === 'groupstage')?[_c('div',{staticClass:"form__group"},[_c('label',[_vm._v("Total players")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.totalPlayers),expression:"totalPlayers"}],attrs:{"type":"number"},domProps:{"value":(_vm.totalPlayers)},on:{"input":function($event){if($event.target.composing){ return; }_vm.totalPlayers=$event.target.value}}})]),_c('div',{staticClass:"form__group"},[_c('label',[_vm._v("Number of proceeding players")]),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.numberOfProceedingPlayers),expression:"numberOfProceedingPlayers"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.numberOfProceedingPlayers=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.numberOfProceedingPlayersOptions),function(totalPlayers){return _c('option',{domProps:{"value":totalPlayers}},[_vm._v(_vm._s(totalPlayers))])}))])]:_vm._e(),_c('a',{staticClass:"button button--tertiary",on:{"click":_vm.submit}},[_vm._v("submit")])],2)],1)},
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
            totalPlayers: undefined,
            numberOfPlays: undefined,
            numberOfProceedingPlayers: undefined,
            knockoutTotalPlayerOptions: [2, 4, 8, 16, 32]
        };
    },
    beforeMount: function beforeMount() {
        switch (this.type) {
            case 'knockout':
                this.totalPlayers = this.knockoutTotalPlayerOptions[0];
                break;
            case 'groupstage':
                this.totalPlayers = this.knockoutTotalPlayerOptions[1];
                this.numberOfProceedingPlayers = this.knockoutTotalPlayerOptions[0];
                break;
            case 'league':
                this.totalPlayers = 2;
                this.numberOfPlays = 1;
                break;
        }
    },
    computed: _extends({}, vuex_1.mapGetters({
        slug: "currentTournament/slug",
        name: "currentTournament/name",
        totalTeams: "currentTournament/totalTeams",
        type: "currentTournament/type"
    }), {
        numberOfProceedingPlayersOptions: function numberOfProceedingPlayersOptions() {
            var _this = this;
            if (this.type === 'groupstage') {
                return this.knockoutTotalPlayerOptions.filter(function (totalPlayers) {
                    return totalPlayers <= _this.totalPlayers;
                });
            }
            else {
                return 0;
            }
        }
    }),
    methods: {
        submit: function submit() {
            // remove from details if undefined :)
            var details = JSON.parse(JSON.stringify({
                numberOfPlays: this.numberOfPlays,
                numberOfProceedingPlayers: this.numberOfProceedingPlayers
            }));
            if (details) {
                this.$store.dispatch("currentTournament/updateDetails", details);
            }
            // create array of total players
            var teams = Array.from({ length: this.totalPlayers }).map(function () {
                return {};
            });
            if (teams) {
                this.$store.dispatch("currentTournament/addEmptyTeams", teams);
            }
            this.$router.push('/teams/' + this.slug);
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-8d3f1e3b']) {
            process.env.vueHMR['data-v-8d3f1e3b'] = true;
            api.createRecord('data-v-8d3f1e3b', module.exports.default);
          }
        }
      
});
___scope___.file("pages/teams.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-3aa42064'}
Object.assign(_options, {_scopeId: 'data-v-3aa42064'})
Object.assign(_options, {
        _scopeId: "data-v-3aa42064",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page teams"},[_c('mut-header'),_c('div',{staticClass:"page__content"},[_c('h3',[_vm._v("🙏🏻 Give us some teams plz 🙏🏻")]),_c('div',{staticClass:"create-teams"},_vm._l((_vm.teams),function(team){return _c('mut-create-team',{attrs:{"team":team},on:{"addTeam":_vm.addTeam}})})),_c('div',{staticClass:"form__group form__group--checkbox"},[_c('label',{attrs:{"for":"randomize"}},[_vm._v("Randomly mix players and teams")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.randomly),expression:"randomly"}],attrs:{"type":"checkbox","id":"randomize"},domProps:{"checked":Array.isArray(_vm.randomly)?_vm._i(_vm.randomly,null)>-1:(_vm.randomly)},on:{"change":function($event){var $$a=_vm.randomly,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.randomly=$$a.concat([$$v]))}else{$$i>-1&&(_vm.randomly=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.randomly=$$c}}}})]),_c('a',{staticClass:"button button--tertiary",on:{"click":_vm.submit}},[_vm._v("continue")])])],1)},
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
            randomly: false
        };
    },
    computed: _extends({}, vuex_1.mapGetters({
        slug: 'currentTournament/slug',
        teams: 'currentTournament/teams'
    })),
    beforeMount: function beforeMount() {
        // // JUST FOR DEVELOPMENT
        // const migratedTeams = generateDefaultTeams(this.teams.length);
        //
        // this.teams.forEach((team, index) => {
        //   team = Object.assign(team, migratedTeams[index]);
        //   this.addTeam(team);
        // });
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

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-3aa42064']) {
            process.env.vueHMR['data-v-3aa42064'] = true;
            api.createRecord('data-v-3aa42064', module.exports.default);
          }
        }
      
});
___scope___.file("pages/summary.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-e766e9a6'}
Object.assign(_options, {
        _scopeId: null,
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page summary"},[_c('mut-header'),_c('div',{staticClass:"page__content"},[_c('a',{staticClass:"button button--tertiary",on:{"click":_vm.submit}},[(_vm.type === 'groupstage')?[_vm._v("Start draw")]:[_vm._v("Start tournament")]],2)])],1)},
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
        name: 'currentTournament/name',
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

          if (!process.env.vueHMR['data-v-e766e9a6']) {
            process.env.vueHMR['data-v-e766e9a6'] = true;
            api.createRecord('data-v-e766e9a6', module.exports.default);
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

var _options = { _vueModuleId: 'data-v-5ee00795'}
Object.assign(_options, {_scopeId: 'data-v-5ee00795'})
Object.assign(_options, {
        _scopeId: "data-v-5ee00795",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page groupstage"},[_c('mut-header',[(_vm.view === 'matches')?_c('div',{staticClass:"button button--small button--secondary",on:{"click":function($event){_vm.toggleView('table')}}},[_vm._v("switch to table view")]):_vm._e(),(_vm.view === 'table')?_c('div',{staticClass:"button button--small button--secondary",on:{"click":function($event){_vm.toggleView('matches')}}},[_vm._v("switch to matches view")]):_vm._e()]),_c('div',{staticClass:"page__content"},[(_vm.view === 'matches')?[_c('mut-matches',{attrs:{"matches":_vm.matches},on:{"update":_vm.matchUpdate,"done":_vm.allMatchesPlayed}})]:_vm._e(),(_vm.view === 'table')?[_c('mut-table',{attrs:{"data":_vm.results}})]:_vm._e(),(_vm.done)?_c('a',{staticClass:"button button--tertiary",on:{"click":_vm.endTournament}},[_vm._v("End tournament")]):_vm._e()],2)],1)},
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
        },
        toggleView: function toggleView(state) {
            this.view = state;
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-5ee00795']) {
            process.env.vueHMR['data-v-5ee00795'] = true;
            api.createRecord('data-v-5ee00795', module.exports.default);
          }
        }
      
});
___scope___.file("pages/random.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-99bac771'}
Object.assign(_options, {_scopeId: 'data-v-99bac771'})
Object.assign(_options, {
        _scopeId: "data-v-99bac771",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page groupstage-draw"},[_c('mut-header',[(!_vm.done)?_c('a',{staticClass:"button button--small button--secondary",on:{"click":_vm.skip}},[_vm._v("Skip")]):_vm._e()]),_c('div',{staticClass:"page__content"},[_c('h1',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading && !_vm.showAllTeams),expression:"loading && !showAllTeams"}],staticClass:"loading"},[_vm._v("🥁")]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loading && !_vm.showAllTeams && !_vm.done),expression:"!loading && !showAllTeams && !done"}],staticClass:"name"},[_c('h1',[_vm._v(_vm._s(_vm.currentTeam.club))]),_c('div',{staticClass:"player"},[_vm._v(_vm._s(_vm.currentTeam.player))])]),_c('h1',{directives:[{name:"show",rawName:"v-show",value:(_vm.done),expression:"done"}],staticClass:"name"},[_vm._v("🦄 Draw finished 🦄")]),_c('div',{staticClass:"teams",class:{'teams--active': _vm.showAllTeams}},_vm._l((_vm.animatedTeams),function(team){return _c('div',{staticClass:"team",class:{'team--active': team.active}},[_c('div',{staticClass:"u-box"},[_c('div',[_vm._v(_vm._s(team.club))]),_c('div',[_vm._v(_vm._s(team.player))])])])})),(_vm.done)?_c('a',{staticClass:"button button--tertiary",on:{"click":_vm.start}},[_vm._v("Start "+_vm._s(_vm.type))]):_vm._e()])],1)},
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
var shuffle_1 = require("../helpers/shuffle");
var ANIMATION_TIME = 2000;
exports["default"] = {
    mounted: function mounted() {
        this.randomizeTeams();
        this.startDraw();
    },
    data: function data() {
        return {
            animatedTeams: [],
            currentTeam: {},
            loading: true,
            done: false,
            showAllTeams: false,
            loadingTimeout: undefined,
            nameTimeout: undefined
        };
    },
    computed: _extends({}, vuex_1.mapGetters({
        slug: 'currentTournament/slug',
        teams: 'currentTournament/teams',
        type: 'currentTournament/type'
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
    }),
    methods: {
        randomizeTeams: function randomizeTeams() {
            var shuffledClubs = shuffle_1.shuffle(this.clubs);
            var shuffledPlayers = shuffle_1.shuffle(this.players);
            var shuffledTeams = [];
            shuffledPlayers.forEach(function (club, index) {
                shuffledTeams.push({
                    club: shuffledClubs[index],
                    player: shuffledPlayers[index],
                    id: id_generator_1["default"].id()
                });
            });
            this.$store.dispatch("currentTournament/randomizeTeams", shuffledTeams);
        },
        animate: function animate(index) {
            var _this = this;
            this.loading = true;
            this.loadingTimeout = setTimeout(function () {
                _this.loading = false;
                _this.currentTeam = _this.animatedTeams[index];
                _this.animatedTeams[index].active = true;
                index++;
                if (index >= _this.teams.length) {
                    setTimeout(function () {
                        _this.done = true;
                    }, ANIMATION_TIME);
                    return;
                }
                _this.nameTimeout = setTimeout(function () {
                    _this.animate(index);
                }, ANIMATION_TIME);
            }, ANIMATION_TIME / 2);
        },
        skip: function skip() {
            clearTimeout(this.loadingTimeout);
            clearTimeout(this.nameTimeout);
            this.showAllTeams = true;
            this.done = true;
        },
        startDraw: function startDraw() {
            var tmp = JSON.parse(JSON.stringify(this.teams));
            tmp.forEach(function (team) {
                team.active = false;
            });
            this.animatedTeams = tmp;
            this.animate(0);
        },
        start: function start() {
            this.$router.push('/summary/' + this.slug);
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-99bac771']) {
            process.env.vueHMR['data-v-99bac771'] = true;
            api.createRecord('data-v-99bac771', module.exports.default);
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
___scope___.file("pages/knockout.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-b08d76a6'}
Object.assign(_options, {_scopeId: 'data-v-b08d76a6'})
Object.assign(_options, {
        _scopeId: "data-v-b08d76a6",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page knockout"},[_c('mut-header'),_c('div',{staticClass:"page__content"},[(_vm.startRoundState)?_c('div',{staticClass:"button button--tertiary next-round",on:{"click":_vm.startRound}},[_vm._v("Start next round")]):_vm._e(),(_vm.view === 'matches')?[_c('mut-matches',{attrs:{"matches":_vm.activeRound,"noTieAllowed":true},on:{"update":_vm.matchUpdate,"done":_vm.allMatchesPlayed}}),(_vm.completeRound)?_c('div',{staticClass:"button button--tertiary",on:{"click":_vm.complete}},[_vm._v("Complete Round")]):_vm._e()]:_vm._e(),(_vm.view === 'tree')?_c('div',{staticClass:"bracket",class:_vm.totalRoundsClass},_vm._l((_vm.internalRounds),function(round){return _c('div',{staticClass:"round",class:[round.classes, _vm.isInactive(round.round)]},[_c('h3',[_vm._v(_vm._s(_vm.getNameOfRound(round)))]),_c('div',{staticClass:"matches"},_vm._l((round.matches),function(match){return _c('mut-knockout-match',{attrs:{"home":match.home,"away":match.away}})}))])})):_vm._e()],2)],1)},
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
        slug: 'currentTournament/slug',
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
            var _this = this;
            this.view = 'tree';
            this.$store.dispatch('knockout/completeRound').then(function () {
                if (_this.winner) {
                    _this.$router.push('/results/' + _this.slug);
                }
            });
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

          if (!process.env.vueHMR['data-v-b08d76a6']) {
            process.env.vueHMR['data-v-b08d76a6'] = true;
            api.createRecord('data-v-b08d76a6', module.exports.default);
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

var _options = { _vueModuleId: 'data-v-ab57f7f0'}
Object.assign(_options, {_scopeId: 'data-v-ab57f7f0'})
Object.assign(_options, {
        _scopeId: "data-v-ab57f7f0",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page results u-background--gradient u-height--full"},[_c('div',{staticClass:"page__content page__content--center"},[_c('div',{staticClass:"icon"},[_vm._v("🏆")]),_c('h1',[_vm._v(_vm._s(_vm.winner.team))]),(_vm.type === 'league')?[_c('div',{staticClass:"icon--small"},[_vm._v("⚽️")]),_c('h2',[_vm._v(_vm._s(_vm.topscorer.team))]),_c('h2',[_vm._v(_vm._s(_vm.topscorer.scored)+" goals scored")])]:_vm._e(),(_vm.type === 'league')?[_c('div',{staticClass:"icon--small"},[_vm._v("🛡")]),_c('h2',[_vm._v(_vm._s(_vm.topdefence.team))]),_c('h2',[_vm._v(_vm._s(_vm.topdefence.against)+" goals against")])]:_vm._e(),_c('div',{staticClass:"button",on:{"click":_vm.endTournament}},[_vm._v("End tournament")])],2)])},
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
var order_by_property_1 = require("../helpers/order-by-property");
exports["default"] = {
    mounted: function mounted() {
        this.table();
    },
    data: function data() {
        return {
            winner: {},
            topscorer: {},
            topdefence: {}
        };
    },
    computed: _extends({}, vuex_1.mapGetters({
        type: 'currentTournament/type',
        leagueTable: 'league/table',
        knockoutWinner: 'knockout/winner'
    })),
    methods: {
        endTournament: function endTournament() {
            this.$router.push('/');
        },
        table: function table() {
            switch (this.type) {
                case 'league':
                    var flattenedTable = this.flattenTable(this.leagueTable);
                    var winnerTable = flattenedTable.sort(order_by_property_1.orderByProperty('points', 'difference', 'scored')).reverse();
                    this.winner = winnerTable[0];
                    var scoredTable = winnerTable.sort(order_by_property_1.orderByProperty('scored', 'difference')).reverse();
                    this.topscorer = scoredTable[0];
                    var defenceTable = scoredTable.sort(order_by_property_1.orderByProperty('against', 'difference'));
                    this.topdefence = defenceTable[0];
                    break;
                case 'knockout':
                    this.winner = {
                        team: this.knockoutWinner.club + ' (' + this.knockoutWinner.player + ')'
                    };
                    break;
                case 'groupstage':
                    this.winner = {
                        team: this.knockoutWinner.club + ' (' + this.knockoutWinner.player + ')'
                    };
                    // get all group tables and join them
                    // get all knockout stats
                    break;
            }
        },
        flattenTable: function flattenTable(table) {
            return table.map(function (t) {
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
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-ab57f7f0']) {
            process.env.vueHMR['data-v-ab57f7f0'] = true;
            api.createRecord('data-v-ab57f7f0', module.exports.default);
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
___scope___.file("pages/groupstage.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-a464e7f1'}
Object.assign(_options, {_scopeId: 'data-v-a464e7f1'})
Object.assign(_options, {
        _scopeId: "data-v-a464e7f1",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page groupstage"},[_c('mut-header',[(_vm.view === 'matches')?_c('div',{staticClass:"button button--small button--secondary",on:{"click":function($event){_vm.toggleView('table')}}},[_vm._v("switch to table view")]):_vm._e(),(_vm.view === 'table')?_c('div',{staticClass:"button button--small button--secondary",on:{"click":function($event){_vm.toggleView('matches')}}},[_vm._v("switch to matches view")]):_vm._e()]),_c('div',{staticClass:"page__content"},[_c('div',{ref:"shortcuts",staticClass:"groupstage__shortcuts"},_vm._l((_vm.groups),function(group){return _c('span',{on:{"click":function($event){_vm.scrollToGroup(group.name)}}},[_vm._v(_vm._s(group.name))])})),_vm._l((_vm.groups),function(group,index){return [_c('h3',{ref:_vm.generateId(group.name),refInFor:true,staticClass:"group__title"},[_vm._v(_vm._s(group.name))]),(_vm.view === 'matches')?[_c('mut-matches',{attrs:{"matches":group.matches},on:{"update":function($event){_vm.matchUpdate(index, $event)},"done":function($event){_vm.allMatchesPlayed(index)}}})]:_vm._e(),(_vm.view === 'table')?[_c('mut-table',{attrs:{"data":_vm.results(group)}})]:_vm._e()]}),(_vm.done)?_c('a',{staticClass:"button button--tertiary",on:{"click":_vm.endGroupstage}},[_vm._v("End groupstage")]):_vm._e()],2)],1)},
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
var slug_1 = require("slug");
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
        generateId: function generateId(group) {
            return "" + slug_1["default"](group.toLowerCase());
        },
        scrollToGroup: function scrollToGroup(group) {
            var element = this.$refs[this.generateId(group)];
            var shortCutElement = this.$refs['shortcuts'];
            var top = element[0].offsetTop - (shortCutElement.offsetTop + 100); // scroll to 100px below the shortcut ;)
            window.scrollTo(0, top);
        },
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
        },
        toggleView: function toggleView(state) {
            this.view = state;
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-a464e7f1']) {
            process.env.vueHMR['data-v-a464e7f1'] = true;
            api.createRecord('data-v-a464e7f1', module.exports.default);
          }
        }
      
});
___scope___.file("pages/groupstage-draw.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-ea9d0fdc'}
Object.assign(_options, {_scopeId: 'data-v-ea9d0fdc'})
Object.assign(_options, {
        _scopeId: "data-v-ea9d0fdc",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page groupstage-draw"},[_c('mut-header'),_c('div',{staticClass:"page__content"},[_c('h1',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading && !_vm.showAllTeams),expression:"loading && !showAllTeams"}],staticClass:"loading"},[_vm._v("🥁")]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loading && !_vm.showAllTeams && !_vm.done),expression:"!loading && !showAllTeams && !done"}],staticClass:"name"},[_c('h1',[_vm._v(_vm._s(_vm.currentTeam.club))]),_c('div',{staticClass:"player"},[_vm._v(_vm._s(_vm.currentTeam.player))])]),_c('h1',{directives:[{name:"show",rawName:"v-show",value:(_vm.done),expression:"done"}],staticClass:"name"},[_vm._v("🦄 Draw finished 🦄")]),_c('div',{staticClass:"groups",class:{'groups--active': _vm.showAllTeams}},_vm._l((_vm.animatedGroups),function(group){return _c('div',{staticClass:"group"},[_c('h3',[_vm._v(_vm._s(group.name))]),_vm._l((group.teams),function(team){return _c('div',{staticClass:"team",class:{'team--active': team.active}},[_vm._v(_vm._s(team.club)+" ("+_vm._s(team.player)+")")])})],2)})),(_vm.done)?_c('a',{staticClass:"button button--tertiary",on:{"click":_vm.startGroupstage}},[_vm._v("Start groupstage")]):_vm._e(),(!_vm.done)?_c('a',{staticClass:"button button--tertiary",on:{"click":_vm.skip}},[_vm._v("Skip")]):_vm._e()])],1)},
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
var ANIMATION_TIME = 2000;
exports["default"] = {
    mounted: function mounted() {
        if (!this.groups.length) {
            this.generateGroups();
        }
        this.startDraw();
    },
    data: function data() {
        return {
            animatedGroups: [],
            currentTeam: {},
            loading: true,
            done: false,
            showAllTeams: false,
            loadingTimeout: undefined,
            nameTimeout: undefined
        };
    },
    computed: _extends({}, vuex_1.mapGetters({
        teams: 'currentTournament/teams',
        type: 'currentTournament/type',
        slug: 'currentTournament/slug',
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
            var tmp = JSON.parse(JSON.stringify(this.groups));
            tmp.forEach(function (group) {
                group.teams.map(function (team) {
                    team.active = false;
                });
            });
            this.animatedGroups = tmp;
            this.animate(0, 0);
        },
        animate: function animate(currentGroupIndex, currentTeamIndex) {
            var _this = this;
            var currentGroup = this.groups[currentGroupIndex];
            this.loading = true;
            this.loadingTimeout = setTimeout(function () {
                _this.loading = false;
                _this.currentTeam = _this.animatedGroups[currentGroupIndex].teams[currentTeamIndex];
                _this.animatedGroups[currentGroupIndex].teams[currentTeamIndex].active = true;
                currentTeamIndex++;
                if (currentTeamIndex >= currentGroup.teams.length) {
                    currentTeamIndex = 0;
                    currentGroupIndex++;
                }
                if (currentGroupIndex >= _this.groups.length) {
                    setTimeout(function () {
                        _this.done = true;
                    }, ANIMATION_TIME);
                    return;
                }
                _this.nameTimeout = setTimeout(function () {
                    _this.animate(currentGroupIndex, currentTeamIndex);
                }, ANIMATION_TIME);
            }, ANIMATION_TIME / 2);
        },
        skip: function skip() {
            clearTimeout(this.loadingTimeout);
            clearTimeout(this.nameTimeout);
            this.showAllTeams = true;
            this.done = true;
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

          if (!process.env.vueHMR['data-v-ea9d0fdc']) {
            process.env.vueHMR['data-v-ea9d0fdc'] = true;
            api.createRecord('data-v-ea9d0fdc', module.exports.default);
          }
        }
      
});
___scope___.file("components/matches.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-5f955cd3'}
Object.assign(_options, {_scopeId: 'data-v-5f955cd3'})
Object.assign(_options, {
        _scopeId: "data-v-5f955cd3",
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

          if (!process.env.vueHMR['data-v-5f955cd3']) {
            process.env.vueHMR['data-v-5f955cd3'] = true;
            api.createRecord('data-v-5f955cd3', module.exports.default);
          }
        }
      
});
___scope___.file("components/knockout-match.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-15b41224'}
Object.assign(_options, {_scopeId: 'data-v-15b41224'})
Object.assign(_options, {
        _scopeId: "data-v-15b41224",
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

          if (!process.env.vueHMR['data-v-15b41224']) {
            process.env.vueHMR['data-v-15b41224'] = true;
            api.createRecord('data-v-15b41224', module.exports.default);
          }
        }
      
});
___scope___.file("components/table.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-c19e09a8'}
Object.assign(_options, {_scopeId: 'data-v-c19e09a8'})
Object.assign(_options, {
        _scopeId: "data-v-c19e09a8",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table u-box"},[_vm._m(0),_vm._l((_vm.sortedResults),function(result,index){return _c('div',{staticClass:"table__row"},[_c('div',{staticClass:"table__item"},[_vm._v(_vm._s(index + 1))]),_c('div',{staticClass:"table__item"},[_vm._v(_vm._s(result.team))]),_c('div',{staticClass:"table__item"},[_vm._v(_vm._s(result.played))]),_c('div',{staticClass:"table__item"},[_vm._v(_vm._s(result.wins))]),_c('div',{staticClass:"table__item"},[_vm._v(_vm._s(result.draws))]),_c('div',{staticClass:"table__item"},[_vm._v(_vm._s(result.losses))]),_c('div',{staticClass:"table__item"},[_vm._v(_vm._s(result.scored))]),_c('div',{staticClass:"table__item"},[_vm._v(_vm._s(result.against))]),_c('div',{staticClass:"table__item"},[_vm._v(_vm._s(result.difference))]),_c('div',{staticClass:"table__item"},[_vm._v(_vm._s(result.points))])])})],2)},
        staticRenderFns: [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table__row"},[_c('div',{staticClass:"table__item"},[_vm._v("#")]),_c('div',{staticClass:"table__item"},[_vm._v("Team")]),_c('div',{staticClass:"table__item"},[_vm._v("Played")]),_c('div',{staticClass:"table__item"},[_vm._v("Wins")]),_c('div',{staticClass:"table__item"},[_vm._v("Draws")]),_c('div',{staticClass:"table__item"},[_vm._v("Losses")]),_c('div',{staticClass:"table__item"},[_vm._v("Scored")]),_c('div',{staticClass:"table__item"},[_vm._v("Against")]),_c('div',{staticClass:"table__item"},[_vm._v("Difference")]),_c('div',{staticClass:"table__item"},[_vm._v("Points")])])}]
      })
"use strict";
exports.__esModule = true;
var order_by_property_1 = require("../helpers/order-by-property");
exports["default"] = {
    props: {
        data: {
            required: true
        }
    },
    computed: {
        sortedResults: function sortedResults() {
            return this.data.sort(order_by_property_1.orderByProperty('points', 'difference', 'scored')).reverse();
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-c19e09a8']) {
            process.env.vueHMR['data-v-c19e09a8'] = true;
            api.createRecord('data-v-c19e09a8', module.exports.default);
          }
        }
      
});
___scope___.file("components/header.vue", function(exports, require, module, __filename, __dirname){

var _options = { _vueModuleId: 'data-v-489fc649'}
Object.assign(_options, {_scopeId: 'data-v-489fc649'})
Object.assign(_options, {
        _scopeId: "data-v-489fc649",
        render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page__header u-background--gradient"},[_c('div',{staticClass:"page__header-left"},[_c('h1',{staticClass:"page__title",on:{"click":function($event){_vm.goToHome()}}},[_vm._v("Mutambo")]),(_vm.name)?_c('h2',{staticClass:"page__subtitle"},[_vm._v(_vm._s(_vm.name))]):_vm._e()]),_c('div',{staticClass:"page__header-right"},[_vm._t("default")],2)])},
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
        name: 'currentTournament/name'
    })),
    methods: {
        goToHome: function goToHome() {
            this.$router.push('/');
        }
    }
};

Object.assign(exports.default.options||exports.default, _options)

require("~/components.css")

        var process = FuseBox.import('process');

        if (process.env.NODE_ENV !== "production") {
          var api = require('vue-hot-reload-api');

          process.env.vueHMR = process.env.vueHMR || {};

          if (!process.env.vueHMR['data-v-489fc649']) {
            process.env.vueHMR['data-v-489fc649'] = true;
            api.createRecord('data-v-489fc649', module.exports.default);
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
        var id = _a.id, slug = _a.slug, name = _a.name, type = _a.type;
        var t = {
            id: id,
            slug: slug,
            name: name,
            teams: [],
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
    }; }
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
___scope___.file("store/modules/current-tournament/index.js", function(exports, require, module, __filename, __dirname){

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
___scope___.file("store/modules/current-tournament/getters.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
        if (getters.tournament.teams)
            return getters.tournament.teams;
    },
    totalTeams: function (state, getters) {
        if (getters.tournament.teams)
            return getters.tournament.teams.length;
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
    }
};
//# sourceMappingURL=getters.js.map
});
___scope___.file("store/modules/current-tournament/actions.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
    addEmptyTeams: function (_a, teams) {
        var commit = _a.commit, state = _a.state, rootState = _a.rootState;
        var tournament = rootState.tournaments.find(function (t) { return t.id === state.id; });
        if (tournament) {
            commit('addEmptyTeams', {
                tournament: tournament,
                teams: teams
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
    }
};
//# sourceMappingURL=actions.js.map
});
___scope___.file("store/modules/current-tournament/mutations.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
    addEmptyTeams: function (state, _a) {
        var tournament = _a.tournament, teams = _a.teams;
        tournament.teams = teams;
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
    }
};
//# sourceMappingURL=mutations.js.map
});
___scope___.file("store/modules/league/index.js", function(exports, require, module, __filename, __dirname){

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
___scope___.file("store/modules/league/getters.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
    }
};
//# sourceMappingURL=getters.js.map
});
___scope___.file("store/modules/league/actions.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../../../config");
var table_1 = require("../../../helpers/table");
exports.default = {
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
    }
};
//# sourceMappingURL=actions.js.map
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
___scope___.file("store/modules/league/mutations.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
};
//# sourceMappingURL=mutations.js.map
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
        if (getters.ko && getters.tournament.teams && getters.tournament.teams.length) {
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


require("fuse-box-css")("style/style.css", "@import url('https://fonts.googleapis.com/css?family=Montserrat:500,600,900');\n\n:root {\n  --bright-sky-blue: #00bfff;\n  --light-sea-green: #90ee90;\n  --live-red: #d0021b;\n  --warm-grey: #9b9b9b;\n  --pinkish-grey: #cecece;\n  --white-two: #e5e5e5;\n  --white: #ffffff;\n  --greyish-brown: #4a4a4a;\n  --font-main: 'Montserrat', sans-serif;\n  --font-weight-medium: 500;\n  --font-weight-bold: 600;\n  --font-weight-black: 900;\n}\n\n/*\n  DEFAULT\n*/\n\nhtml,\nbody {\n  font-family: var(--font-main);\n  font-size: 16px;\n  font-weight: var(--font-weight-medium);\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--white);\n  color: var(--warm-grey);\n}\n\n::-webkit-scrollbar {\n    display: none;\n}\n\n/*\n  TYPOGRAPHY\n*/\n\n\nh1, h2, h3, p, label, span {\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  line-height: normal;\n  margin: 0;\n  text-align: left;\n}\n\nh1 {\n  color: var(--white);\n  font-size: 40px;\n  font-weight: var(--font-weight-black);\n}\n\nh2 {\n  color: var(--white);\n  font-size: 24px;\n  font-weight: var(--font-weight-medium);\n}\n\nh3 {\n  color: var(--bright-sky-blue);\n  font-size: 20px;\n  font-weight: var(--font-weight-bold);\n  text-transform: uppercase;\n}\n\np, label, span {\n  color: var(--warm-grey);\n}\n\np.text--large {\n  color: var(--greyish-brown);\n  font-size: 20px;\n}\n\n/* Helpers */\n\n.u-background--gradient {\n   background-image: linear-gradient(to left, var(--light-sea-green), var(--bright-sky-blue));\n}\n\n.u-height--full {\n  height: 100%;\n}\n\n.u-box {\n  background-color: var(--white);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n  box-sizing: border-box;\n  padding: 25px;\n  min-width: 450px;\n}\n\n.u-box--large {\n  width: 550px;\n}\n\n.u-box .form__group {\n  min-width: auto;\n  width: 100%;\n}\n\n\n/* Buttons */\n\n.button {\n  background-color: transparent;\n  border-radius: 8px;\n  border: solid 2px var(--white);\n  color: var(--white);\n  cursor: pointer;\n  display: inline-block;\n  font-size: 20px;\n  margin: 50px 0;\n  min-width: 110px;\n  padding: 13px;\n  text-align: center;\n  text-decoration: none;\n  transition-duration: .1s;\n  transition-property: background-color, color, border-color;\n  transition-timing-function: ease-in-out;\n  -webkit-appearance: none;\n}\n\n.button:hover {\n  background-color: rgba(255, 255, 255, 0.9);\n  color: var(--bright-sky-blue);\n}\n\n.button--secondary {\n    background-color: rgba(255, 255, 255, 0.9);\n    color: var(--bright-sky-blue);\n}\n\n.button--secondary:hover {\n  background-color: transparent;\n  border-color: var(--white);\n  color: var(--white);\n}\n\n.button--tertiary {\n    background-color: var(--light-sea-green);\n    border-color: var(--light-sea-green);\n}\n\n.button--tertiary:hover {\n  color: var(--light-sea-green);\n}\n\n.button--small {\n  font-size: 16px;\n  padding: 8px;\n}\n\n/* Form */\n\n.form__group {\n  margin-top: 50px;\n  min-width: 550px;\n}\n\n.form__group--checkbox {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.form__group--checkbox label {\n    cursor: pointer;\n    flex-shrink: 0;\n    margin-bottom: 0;\n    margin-right: 10px;\n}\n\n.form__group--checkbox input[type=\"checkbox\"] {\n  height: auto;\n  width: auto;\n}\n\ninput, select {\n  background-color: var(--white);\n  border-radius: 8px;\n  border: solid 2px var(--pinkish-grey);\n  box-sizing: border-box;\n  color: var(--warm-grey);\n  font-size: 16px;\n  height: 50px;\n  line-height: 40px;\n  outline: none;\n  padding: 5px 10px;\n  width: 100%;\n}\n\nlabel {\n    display: block;\n    margin-bottom: 10px;\n}\n\n/* Page setup */\n\n.page {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 65px 1fr;\n  grid-template-areas:\n    \"header\"\n    \"content\";\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n}\n\n.page__content {\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  grid-area: content;\n  padding: 50px;\n  height: 100%;\n  width: 100%;\n}\n\n.page__content--center {\n  justify-content: center;\n}\n")
});
___scope___.file("components.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("components.css", "\n#app {\n  height: 100%;\n  width: 100%;\n}\n\n.statusbar {\n  -webkit-app-region: drag;\n  display: block;\n  height: 22px;\n  position: fixed;\n  width: 100%;\n  z-index: 10;\n}\n\n.statusbar::before {\n  background-color: rgba(255, 255, 255, .75);\n  bottom: 0;\n  content: '';\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.statusbar + .page {\n  height: calc(100% - 22px) !important;\n  position: relative;\n  top: 22px; /* same height as statusbar */\n}\n\n\n.logo[data-v-dd6e56bd] {\n  --logo-size: 30px;\n  bottom: 5px;\n  fill: var(--color-white);\n  height: var(--logo-size);\n  right: 10px;\n  position: absolute;\n  width: var(--logo-size);\n}\n.logo circle[data-v-dd6e56bd] {\n  animation-duration: 2s;\n  animation-fill-mode: backwards;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-play-state: paused;\n}\n.logo circle[data-v-dd6e56bd]:nth-of-type(1) {\n  animation-delay: 1s;\n  animation-name: bubble1-data-v-dd6e56bd;\n}\n.logo circle[data-v-dd6e56bd]:nth-of-type(2) {\n  animation-delay: 1.5s;\n  animation-name: bubble2-data-v-dd6e56bd;\n}\n.logo circle[data-v-dd6e56bd]:nth-of-type(3) {\n  animation-name: bubble3-data-v-dd6e56bd;\n}\n.logo:hover circle[data-v-dd6e56bd] {\n  animation-play-state: running;\n}\n@keyframes bubble1-data-v-dd6e56bd {\n0% {\n    opacity: 0;\n    transform: translateY(10%);\n}\n75% {\n    opacity: .75;\n}\n100% {\n    opacity: 0;\n    transform: translateY(-20%);\n}\n}\n@keyframes bubble2-data-v-dd6e56bd {\n0% {\n    opacity: 0;\n    transform: translateY(20%);\n}\n75% {\n    opacity: .75;\n}\n100% {\n    opacity: 0;\n    transform: translateY(-20%);\n}\n}\n@keyframes bubble3-data-v-dd6e56bd {\n0% {\n    opacity: 0;\n    transform: translateY(30%);\n}\n75% {\n    opacity: .75;\n}\n100% {\n    opacity: 0;\n    transform: translateY(-10%);\n}\n}\n\n\n.create-team[data-v-f18d2362] {\n  margin: 10px;\n}\n.create-team .form__group[data-v-f18d2362] {\n  margin-top: 30px;\n}\n.create-team .form__group[data-v-f18d2362]:first-child {\n  margin-top: 0;\n}\n\n\n@keyframes move-data-v-ca9d0d25 {\nfrom {\n    transform: translateY(-200%);\n}\nto {\n    transform: translateY(200%);\n}\n}\n.match[data-v-ca9d0d25] {\n  align-items: center;\n  box-sizing: border-box;;\n  display: flex;\n  justify-content: space-between;\n  margin: 10px;\n  min-height: 150px;\n}\n.match__team[data-v-ca9d0d25] {\n  flex-basis: 33%;\n  flex-shrink: 0;\n}\n.match__team[data-v-ca9d0d25]:last-child {\n  text-align: right;\n}\n.team__name[data-v-ca9d0d25] {\n  color: var(--greyish-brown);\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n.team__player[data-v-ca9d0d25] {\n  color: var(--warm-grey);\n  font-size: 14px;\n}\n.match__info[data-v-ca9d0d25] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n}\n.match__live[data-v-ca9d0d25] {\n  align-items: center;\n  color: var(--live-red);\n  display: none;\n  font-size: 12px;\n  flex-shrink: 0;\n  position: relative;\n  top: -15px;\n}\n.match__live[data-v-ca9d0d25]::after {\n  animation-name: move-data-v-ca9d0d25;\n  animation-duration: 0.5s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n  border-radius: 3px;\n  background-color: var(--live-red);\n  content: '';\n  display: inline-block;;\n  height: 3px;\n  margin-left: 5px;\n  width: 3px;\n}\n.match__score[data-v-ca9d0d25] {\n  color: var(--light-sea-green);\n  display: none;\n  font-size: 50px;\n  position: relative;\n  text-align: center;\n}\n.match__score span[data-v-ca9d0d25] {\n  display: inline-block;\n  margin-left: 10px;\n  text-align: center;\n  width: 70px;\n}\n.match__score span[data-v-ca9d0d25]:first-child {\n  margin-left: 0;\n  margin-right: 10px;\n}\n.match__score[data-v-ca9d0d25]::after,\n.match__score--input[data-v-ca9d0d25]::after {\n  content: '-';\n  color: var(--warm-grey);\n  font-size: 50px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.match__score--input[data-v-ca9d0d25] {\n  display: none;\n  position: relative;\n}\n.match__score--input input[data-v-ca9d0d25] {\n  -webkit-appearance: none;\n  border: none;\n  color: var(--light-sea-green);\n  font-family: var(--font-main);\n  font-size: 50px;\n  margin-left: 10px;\n  padding: 0;\n  text-align: center;\n  width: 70px;\n}\n.match__score--input input[data-v-ca9d0d25]:first-child {\n  margin-left: 0;\n  margin-right: 10px;\n}\n.match__score--input input[data-v-ca9d0d25]::-webkit-inner-spin-button,\n.match__score--input input[data-v-ca9d0d25]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n.match__score--input input[data-v-ca9d0d25]:focus {\n  outline: none;\n}\n.match__start[data-v-ca9d0d25],\n.match__end[data-v-ca9d0d25] {\n  cursor: pointer;\n  font-size: 12px;\n  flex-basis: 33%;\n  text-decoration: underline;\n}\n.match__start[data-v-ca9d0d25] {\n  color: var(--bright-sky-blue);\n}\n.match__end[data-v-ca9d0d25] {\n  color: var(--warm-grey);\n  display: none;\n  position: relative;\n  bottom: -15px;\n}\n\n/* STATE // PLAYING */\n.match--playing .match__score--input[data-v-ca9d0d25],\n.match--playing  .match__end[data-v-ca9d0d25] {\n  display: block;\n}\n.match--playing .match__live[data-v-ca9d0d25] {\n  display: flex;\n}\n.match--playing .match__score[data-v-ca9d0d25],\n.match--playing .match__start[data-v-ca9d0d25] {\n  display: none;\n}\n\n/* STATE // DISABLED */\n.match--disabled[data-v-ca9d0d25] {\n  opacity: 0.25;\n}\n.match--disabled .match__start[data-v-ca9d0d25] {\n  display: none;\n}\n\n/* STATE // DONE */\n.match--done[data-v-ca9d0d25] {\n  background-color: #90ee9033;\n}\n.match--done .match__team--loser[data-v-ca9d0d25],\n.match--done .match__score--loser[data-v-ca9d0d25] {\n    opacity: 0.4;\n}\n.match--done .match__start[data-v-ca9d0d25],\n.match--done .match__end[data-v-ca9d0d25],\n.match--done .match__playing[data-v-ca9d0d25] {\n    display: none;\n}\n.match--done .match__score[data-v-ca9d0d25],\n.match--done .match__divider[data-v-ca9d0d25] {\n    display: block;\n}\n.match--done .match__info[data-v-ca9d0d25] {\n  cursor: pointer;\n}\n\n/* STATE // ERROR */\n.match--error[data-v-ca9d0d25] {\n  background-color: #d0021b33;\n}\n\n\n\n.home[data-v-db7e27a5] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n.page__content[data-v-db7e27a5] {\n  flex-wrap: nowrap;\n  overflow-y: scroll;\n}\n.tournament-list[data-v-db7e27a5] {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 1410px;\n}\n.tournament[data-v-db7e27a5] {\n  cursor: pointer;\n  position: relative;\n  margin: 10px;\n}\n.tournament__name[data-v-db7e27a5] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-bottom: 14px;\n  max-width: 80%;\n}\n.tournament__info[data-v-db7e27a5] {\n  align-items: center;\n  color: var(--warm-grey);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  max-width: 70%;\n}\n.tournament__info span[data-v-db7e27a5] {\n  font-weight: var(--font-weight-bold);\n  margin-right: 5px;\n}\n.tournament__icon[data-v-db7e27a5] {\n  font-size: 40px;\n  height: 50px;\n  position: absolute;\n  right: 25px;\n  text-align: center;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 50px;\n}\n\n\n.button-group[data-v-79d97cee] {\n    display: flex;\n    flex-direction: row;\n    font-size: 16px;\n    justify-content: center;\n    text-align: center;\n}\n.button-group-item[data-v-79d97cee] {\n    align-items: center;\n    border: 1px solid var(--bright-sky-blue);\n    border-left: 0;\n    box-sizing: border-box;\n    cursor: pointer;\n    color: var(--bright-sky-blue);\n    display: flex;\n    flex-grow: 1;\n    height: 50px;\n    justify-content: center;\n    padding: 15px 30px;\n}\n.button-group-item[data-v-79d97cee]:first-child {\n    border-left: 1px solid var(--bright-sky-blue);\n    border-radius: 8px 0 0 8px;\n}\n.button-group-item[data-v-79d97cee]:last-child {\n    border-radius: 0 8px 8px 0;\n}\n.button-group-item--active[data-v-79d97cee] {\n    background-color: var(--bright-sky-blue);\n    color: var(--white);\n}\n\n\n.create-teams[data-v-3aa42064] {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 50px;\n  width: 100%;\n}\n\n\n.matches[data-v-5ee00795] {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(3, 1fr);\n  margin: 20px;\n}\n\n\n@keyframes drumroll-data-v-99bac771 {\n0%,\n    49% {\n        transform: scaleX(1);\n}\n50%,\n    100% {\n        transform: scaleX(-1);\n}\n}\n.loading[data-v-99bac771],\n.name[data-v-99bac771] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 150px;\n  justify-content: center;\n}\n.loading[data-v-99bac771] {\n  animation-name: drumroll-data-v-99bac771;\n  animation-duration: .2s;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n  font-size: 144px;\n}\n.name[data-v-99bac771],\n.name h1[data-v-99bac771] {\n  color: var(--light-sea-green);\n  font-size: 72px;\n}\n.player[data-v-99bac771] {\n  color: var(--greyish-brown);\n  font-size: 36px;\n}\n.teams[data-v-99bac771] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 100px;\n  justify-content: center;\n  width: 100%;\n}\n.team[data-v-99bac771] {\n  margin-bottom: 10px;\n  opacity: 0;\n  padding-right: 20px;\n  transition: opacity .2s linear;\n  width: 25%;\n}\n.team .u-box[data-v-99bac771] {\n  height: 100%;\n  min-width: auto;\n}\n.team--active[data-v-99bac771] {\n  opacity: 1;\n}\n.teams--active .team[data-v-99bac771] {\n    opacity: 1;\n}\n\n\n.bracket[data-v-b08d76a6] {\n  padding: 10px;\n  box-sizing: border-box;\n  min-height: calc(100vh - 136px); // height of header, footer and padding\n  color: #2c7399;\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n.round--inactive[data-v-b08d76a6] {\n  opacity: 0.5;\n}\n.next-round[data-v-b08d76a6] {\n  position: absolute;\n  top: 70%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 4;\n  margin: 0 !important;\n}\n.matches[data-v-b08d76a6] {\n  display: grid;\n  grid-gap: 10px;\n  grid-auto-columns: 1fr;\n  align-content: space-around;\n}\n.round h1[data-v-b08d76a6] {\n  font-size: 20px;\n  margin: 5px 0;\n  text-align: center;\n}\n.round--right h1[data-v-b08d76a6] {\n    display: none;\n}\n.winner[data-v-b08d76a6] {\n  position: relative;\n  margin: 10px auto 0;\n  font-size: 20px;\n}\n.winner span[data-v-b08d76a6] {\n  color: goldenrod;\n  text-align: center;\n}\n@media screen and (min-width: 768px) {\n.bracket[data-v-b08d76a6] {\n    display: grid;\n    grid-auto-columns: minmax(50px, 1fr);\n    grid-template-rows: 1fr minmax(1fr, 200px);\n    grid-template-areas:\n      \"round1-left round1-right\"\n      \"round2-left round2-right\"\n      \"round3-left round3-right\"\n      \"round4-left round4-right\"\n      \"round5 .\";\n    grid-gap: 10px;\n    width: 100%;\n}\n.round[data-v-b08d76a6] {\n    display: grid;\n    grid-template-rows: 30px 1fr;\n}\nround h1[data-v-b08d76a6] {\n      align-self: start;\n}\n.round--right h1[data-v-b08d76a6] {\n      display: block;\n}\n.round1.round--left[data-v-b08d76a6] {\n      grid-area: round1-left;\n}\n.round.round--right[data-v-b08d76a6] {\n      grid-area: round1-right;\n}\n.round2.round--left[data-v-b08d76a6] {\n      grid-area: round2-left;\n}\n.round2.round--right[data-v-b08d76a6] {\n      grid-area: round2-right;\n}\n.round3.round--left[data-v-b08d76a6] {\n      grid-area: round3-left;\n}\n.round3.round--right[data-v-b08d76a6] {\n    grid-area: round3-right;\n}\n.round4.round--left[data-v-b08d76a6] {\n      grid-area: round4-left;\n}\n.round4.round--right[data-v-b08d76a6] {\n      grid-area: round4-right;\n}\n.round5[data-v-b08d76a6] {\n    grid-area: round5;\n}\n}\n@media screen and (min-width: 1640px) {\n.bracket[data-v-b08d76a6] {\n    grid-auto-columns: minmax(50px, 1fr);\n}\n.bracket--1[data-v-b08d76a6] {\n    grid-template-areas: \"round1\";\n}\n.bracket--2[data-v-b08d76a6] {\n    grid-template-areas: \"round1-left round2 round1-right\";\n}\n.bracket--3[data-v-b08d76a6] {\n    grid-template-areas: \"round1-left round2-left round3 round2-right round1-right\";\n}\n.bracket--4[data-v-b08d76a6] {\n    grid-template-areas: \"round1-left round2-left round3-left round4 round3-right round2-right round1-right\";\n}\n.bracket--5[data-v-b08d76a6] {\n    grid-template-areas: \"round1-left round2-left round3-left round4-left round5 round4-right round3-right round2-right round1-right\";\n}\n.round.finals .matches[data-v-b08d76a6] {\n      align-content: center;\n}\n}\n\n\n.icon[data-v-ab57f7f0] {\n  font-size: 100px;\n}\n.icon--small[data-v-ab57f7f0] {\n  font-size: 50px;\n  margin-top: 50px;\n}\n\n\n.matches[data-v-a464e7f1] {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(3, 1fr);\n  margin: 20px;\n}\n.group__title[data-v-a464e7f1] {\n  margin: 70px 0 35px;\n  text-transform: uppercase;\n}\n.group__title[data-v-a464e7f1]::before {\n  content: '// ';\n}\n.groupstage__shortcuts[data-v-a464e7f1] {\n  background: var(--white);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  position: fixed;\n  top: 84px; /* header + statusbar; */\n}\n.groupstage__shortcuts span[data-v-a464e7f1] {\n  color: var(--bright-sky-blue);\n  cursor: pointer;\n  padding: 10px;\n  text-decoration: none;\n}\n.groupstage__shortcuts span[data-v-a464e7f1]::after {\n    content: '-';\n    padding-left: 20px;\n}\n.groupstage__shortcuts span[data-v-a464e7f1]:last-child::after {\n    content: none;\n}\n\n\n\n@keyframes drumroll-data-v-ea9d0fdc {\n0%,\n    49% {\n        transform: scaleX(1);\n}\n50%,\n    100% {\n        transform: scaleX(-1);\n}\n}\n.page__content[data-v-ea9d0fdc] {\n  padding-top: 100px;\n}\n.groups[data-v-ea9d0fdc] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 50px;\n  justify-content: center;\n  width: 100%;\n}\n.group[data-v-ea9d0fdc] {\n  box-sizing: border-box;\n  margin-top: 50px;\n  padding-right: 20px;\n  width: 25%;\n}\n.group h3[data-v-ea9d0fdc] {\n  margin-bottom: 15px;\n}\n.loading[data-v-ea9d0fdc],\n.name[data-v-ea9d0fdc] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 150px;\n  justify-content: center;\n}\n.loading[data-v-ea9d0fdc] {\n  animation-name: drumroll-data-v-ea9d0fdc;\n  animation-duration: .2s;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n  font-size: 144px;\n}\n.team[data-v-ea9d0fdc] {\n  opacity: 0;\n  transition: opacity .2s linear;\n  margin-bottom: 10px;\n}\n.name[data-v-ea9d0fdc],\n.name h1[data-v-ea9d0fdc] {\n  color: var(--light-sea-green);\n  font-size: 72px;\n}\n.player[data-v-ea9d0fdc] {\n  color: var(--greyish-brown);\n  font-size: 36px;\n}\n.team--active[data-v-ea9d0fdc] {\n  opacity: 1;\n}\n.groups--active .team[data-v-ea9d0fdc] {\n    opacity: 1;\n}\n\n\n.matches[data-v-5f955cd3] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n}\n\n\n.knockout-match__club-name[data-v-15b41224] {\n  text-align: left;\n@media screen and (min-width: 1640px) {\n    max-width: 130px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n}\n.knockout-match__club[data-v-15b41224] {\n  background-color: #fff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n  height: 30px;\n  margin: 5px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 10px;\n.knockout-match__score {\n    font-size: 13px;\n    color: lightgrey;\n    margin-left: 5px;\n}\n}\n.knockout-match__score[data-v-15b41224] {\n  margin-left: 5px;\n}\n.knockout-match__penalty-score[data-v-15b41224] {\n  font-size: 13px;\n  color: lightgrey;\n  margin-left: 5px;\n}\n\n\n.table[data-v-c19e09a8] {\n  display: grid;\n  font-size: 14px;\n  grid-template-columns: 1fr;\n  grid-template-rows: 40px 1fr;\n  margin: 20px;\n  max-width: 1024px;\n}\n.table__row[data-v-c19e09a8] {\n  align-items: center;\n  border-bottom: 1px solid var(--white-two);\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 20px 300px repeat(8, 1fr);\n  justify-content: space-around;\n  padding: 10px 0;\n  text-align: right;\n}\n.table__row[data-v-c19e09a8]:first-child {\n  color: var(--bright-sky-blue);\n  padding: 0;\n}\n.table__row[data-v-c19e09a8]:last-child {\n  border: 0;\n  padding-bottom: 0;\n}\n.table__item[data-v-c19e09a8]:nth-child(2) {\n  text-align: left;\n}\n\n\n\n\n.page__header[data-v-489fc649] {\n  box-sizing: border-box;\n  display: flex;\n  grid-area: header;\n  height: 65px;\n  padding: 8px;\n  position: fixed;\n  width: 100%;\n  z-index: 10;\n}\n.page__header-left[data-v-489fc649] {\n  align-items: flex-end;\n  box-sizing: border-box;\n  display: flex;\n  flex-grow: 1;\n}\n.page__header-right[data-v-489fc649] {\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-grow: 0;\n}\n.page__header-right .button[data-v-489fc649] {\n  margin: 0;\n}\n.page__title[data-v-489fc649] {\n  cursor: pointer;\n}\n.page__subtitle[data-v-489fc649] {\n  line-height: 40px;\n  margin-left: 15px;\n}\n.page__subtitle[data-v-489fc649]::before {\n    content: '// ';\n}\n");
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