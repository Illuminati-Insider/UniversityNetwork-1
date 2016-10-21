"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function m(a,b){return j(new(j(function(){},{prototype:a})),b)}function n(a){return i(arguments,function(b){b!==a&&i(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function o(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function p(a){if(Object.keys)return Object.keys(a);var b=[];return i(a,function(a,c){b.push(c)}),b}function q(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=d<0?Math.ceil(d):Math.floor(d),d<0&&(d+=c);d<c;d++)if(d in a&&a[d]===b)return d;return-1}function r(a,b,c,d){var f,e=o(c,d),g={},h=[];for(var i in e)if(e[i]&&e[i].params&&(f=p(e[i].params),f.length))for(var k in f)q(h,f[k])>=0||(h.push(f[k]),g[f[k]]=a[f[k]]);return j({},g,b)}function s(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function t(a,b){var c={};return i(a,function(a){c[a]=b[a]}),c}function v(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return i(c,function(c){c in a&&(b[c]=a[c])}),b}function w(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)q(c,d)==-1&&(b[d]=a[d]);return b}function y(a,b){var c=h(a),d=c?[]:{};return i(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function z(a,b){var c=h(a)?[]:{};return i(a,function(a,d){c[d]=b(a,d)}),c}function A(a,b){var e=1,h=2,k={},l=[],m=k,o=j(a.when(k),{$$promises:k,$$values:k});this.study=function(k){function v(a,c){if(u[c]!==h){if(t.push(c),u[c]===e)throw t.splice(0,q(t,c)),new Error("Cyclic dependency: "+t.join(" -> "));if(u[c]=e,f(a))s.push(c,[function(){return b.get(a)}],l);else{var d=b.annotate(a);i(d,function(a){a!==c&&k.hasOwnProperty(a)&&v(k[a],a)}),s.push(c,a,d)}t.pop(),u[c]=h}}function x(a){return g(a)&&a.then&&a.$$promises}if(!g(k))throw new Error("'invocables' must be an object");var r=p(k||{}),s=[],t=[],u={};return i(k,v),k=t=u=null,function(e,f,h){function v(){--t||(u||n(q,f.$$values),l.$$values=q,l.$$promises=l.$$promises||!0,delete l.$$inheritedValues,k.resolve(q))}function y(a){l.$$failure=a,k.reject(a)}function B(c,f,g){function m(a){j.reject(a),y(a)}function n(){if(!d(l.$$failure))try{j.resolve(b.invoke(f,h,q)),j.promise.then(function(a){q[c]=a,v()},m)}catch(a){m(a)}}var j=a.defer(),k=0;i(g,function(a){p.hasOwnProperty(a)&&!e.hasOwnProperty(a)&&(k++,p[a].then(function(b){q[a]=b,--k||n()},m))}),k||n(),p[c]=j.promise}if(x(e)&&h===c&&(h=f,f=e,e=null),e){if(!g(e))throw new Error("'locals' must be an object")}else e=m;if(f){if(!x(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=o;var k=a.defer(),l=k.promise,p=l.$$promises={},q=j({},e),t=1+s.length/3,u=!1;if(d(f.$$failure))return y(f.$$failure),l;f.$$inheritedValues&&n(q,w(f.$$inheritedValues,r)),j(p,f.$$promises),f.$$values?(u=n(q,w(f.$$values,r)),l.$$inheritedValues=w(f.$$values,r),v()):(f.$$inheritedValues&&(l.$$inheritedValues=w(f.$$inheritedValues,r)),f.then(v,y));for(var z=0,A=s.length;z<A;z+=3)e.hasOwnProperty(s[z])?v():B(s[z],s[z+1],s[z+2]);return l}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function B(a,b,c){this.fromConfig=function(a,b,c){return d(a.template)?this.fromString(a.template,b):d(a.templateUrl)?this.fromUrl(a.templateUrl,b):d(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return e(a)?a(b):a},this.fromUrl=function(c,d){return e(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function D(a,b,d){function q(b,c,d,e){if(p.push(b),n[b])return n[b];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(o[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return o[b]=new C.Param(b,c,d,e),o[b]}function r(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:f=f.replace(/\/$/,""),e=["(?:/(",")|/)?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function s(d,e){var f,g,h,j,k;return f=d[2]||d[3],k=b.params[f],h=a.substring(i,d.index),g=e?d[4]:d[4]||("*"==d[1]?".*":null),g&&(j=C.type(g)||m(C.type("string"),{pattern:new RegExp(g,b.caseInsensitive?"i":c)})),{id:f,regexp:g,segment:h,type:j,cfg:k}}b=j({params:{}},g(b)?b:{});var k,e=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,h="^",i=0,l=this.segments=[],n=d?d.params:{},o=this.params=d?d.params.$$new():new C.ParamSet,p=[];this.source=a;for(var t,u,v;(k=e.exec(a))&&(t=s(k,!1),!(t.segment.indexOf("?")>=0));)u=q(t.id,t.type,t.cfg,"path"),h+=r(t.segment,u.type.pattern.source,u.squash,u.isOptional),l.push(t.segment),i=e.lastIndex;v=a.substring(i);var w=v.indexOf("?");if(w>=0){var x=this.sourceSearch=v.substring(w);if(v=v.substring(0,w),this.sourcePath=a.substring(0,i+w),x.length>0)for(i=0;k=f.exec(x);)t=s(k,!0),u=q(t.id,t.type,t.cfg,"search"),i=e.lastIndex}else this.sourcePath=a,this.sourceSearch="";h+=r(v)+(b.strict===!1?"/?":"")+"$",l.push(v),this.regexp=new RegExp(h,b.caseInsensitive?"i":c),this.prefix=l[0],this.$$paramNames=p}function E(a){j(this,a)}function F(){function n(a){return null!=a?a.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):a}function o(a){return null!=a?a.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):a}function w(){return{strict:k,caseInsensitive:a}}function x(a){return e(a)||h(a)&&e(a[a.length-1])}function A(){for(;t.length;){var a=t.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(r[a.name],u.invoke(a.def))}}function B(a){j(this,a||{})}C=this;var u,a=!1,k=!0,l=!1,r={},s=!0,t=[],v={string:{encode:n,decode:o,is:function(a){return null==a||!d(a)||"string"==typeof a},pattern:/[^\/]*/},int:{encode:n,decode:function(a){return parseInt(a,10)},is:function(a){return d(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^\/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};F.$$getDefaultValue=function(a){if(!x(a.value))return a.value;if(!u)throw new Error("Injectable functions cannot be called at configuration time");return u.invoke(a.value)},this.caseInsensitive=function(b){return d(b)&&(a=b),a},this.strictMode=function(a){return d(a)&&(k=a),k},this.defaultSquashPolicy=function(a){if(!d(a))return l;if(a!==!0&&a!==!1&&!f(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return l=a,a},this.compile=function(a,b){return new D(a,j(w(),b))},this.isMatcher=function(a){if(!g(a))return!1;var b=!0;return i(D.prototype,function(c,f){e(c)&&(b=b&&d(a[f])&&e(a[f]))}),b},this.type=function(a,b,c){if(!d(b))return r[a];if(r.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return r[a]=new E(j({name:a},b)),c&&(t.push({name:a,def:c}),s||A()),this},i(v,function(a,b){r[b]=new E(j({name:b},a))}),r=m(r,{}),this.$get=["$injector",function(a){return u=a,s=!1,A(),i(v,function(a,b){r[b]||(r[b]=new E(a))}),this}],this.Param=function(e,i,k,m){function w(a){var b=g(a)?p(a):[],c=q(b,"value")===-1&&q(b,"type")===-1&&q(b,"squash")===-1&&q(b,"array")===-1;return c&&(a={value:a}),a.$$fn=x(a.value)?a.value:function(){return a.value},a}function A(a,c,d){if(a.type&&c)throw new Error("Param '"+e+"' has two type configurations.");return c?c:a.type?b.isString(a.type)?r[a.type]:a.type instanceof E?a.type:new E(a.type):"config"===d?r.any:r.string}function B(){var a={array:"search"===m&&"auto"},b=e.match(/\[\]$/)?{array:!0}:{};return j(a,b,k).array}function C(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!d(c)||null==c)return l;if(c===!0||f(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function D(a,b,d,e){var g,i,j=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return g=h(a.replace)?a.replace:[],f(e)&&g.push({from:e,to:c}),i=z(g,function(a){return a.from}),y(j,function(a){return q(i,a.from)===-1}).concat(g)}function F(){if(!u)throw new Error("Injectable functions cannot be called at configuration time");var a=u.invoke(k.$$fn);if(null!==a&&a!==c&&!n.type.is(a))throw new Error("Default value ("+a+") for parameter '"+n.id+"' is not an instance of Type ("+n.type.name+")");return a}function G(a){function b(a){return function(b){return b.from===a}}function c(a){var c=z(y(n.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),d(a)?n.type.$normalize(a):F()}function H(){return"{Param:"+e+" "+i+" squash: '"+t+"' optional: "+s+"}"}var n=this;k=w(k),i=A(k,i,m);var o=B();i=o?i.$asArray(o,"search"===m):i,"string"!==i.name||o||"path"!==m||k.value!==c||(k.value="");var s=k.value!==c,t=C(k,s),v=D(k,o,s,t);j(this,{id:e,type:i,location:m,array:o,squash:t,replace:v,isOptional:s,value:G,dynamic:c,config:k,toString:H})},B.prototype={$$new:function(){return m(this,j(new B,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=p(B.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),i(b,function(b){i(p(b),function(b){q(a,b)===-1&&q(d,b)===-1&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return i(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return i(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(d){var f,g,h,i,j,e=this.$$keys();for(f=0;f<e.length&&(g=this[e[f]],h=d[e[f]],h!==c&&null!==h||!g.isOptional);f++){if(i=g.type.$normalize(h),!g.type.is(i))return!1;if(j=g.type.encode(i),b.isString(j)&&!g.type.pattern.exec(j))return!1}return!0},$$parent:c},this.ParamSet=B}function G(a,g){function n(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function o(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function p(a,b,c){if(!c)return!1;var e=a.invoke(b,b,{$match:c});return!d(e)||e}function q(d,e,g,h,j){function q(a,b,c){return"/"===n?a:b?n.slice(0,-1)+a:c?n.slice(1)+a:a}function r(a){function e(a){var b=a(g,d);return!!b&&(f(b)&&d.replace().url(b),!0)}if(!a||!a.defaultPrevented){p&&d.url()===p;p=c;var j,h=i.length;for(j=0;j<h;j++)if(e(i[j]))return;k&&e(k)}}function s(){return m=m||e.$on("$locationChangeSuccess",r)}var p,n=h.baseHref(),o=d.url();return l||s(),{sync:function(){r()},listen:function(){return s()},update:function(a){return a?void(o=d.url()):void(d.url()!==o&&(d.url(o),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),p=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled),g=g&&j.history;var h=c.format(e);if(f=f||{},g||null===h||(h="#"+a.hashPrefix()+h),null!==h&&e&&e["#"]&&(h+="#"+e["#"]),h=q(h,g,f.absolute),!f.absolute||!h)return h;var i=!g&&h?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,i,h].join("")}}}var m,i=[],k=null,l=!1;this.rule=function(a){if(!e(a))throw new Error("'rule' must be a function");return i.push(a),this},this.otherwise=function(a){if(f(a)){var b=a;a=function(){return b}}else if(!e(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,d=f(b);if(f(a)&&(a=g.compile(a)),!d&&!e(b)&&!h(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return d&&(c=g.compile(b),b=["$match",function(a){return c.format(a)}]),j(function(c,d){return p(c,b,a.exec(d.path(),d.search()))},{prefix:f(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return d&&(c=b,b=["$match",function(a){return o(c,a)}]),j(function(c,d){return p(c,b,a.exec(d.path()))},{prefix:n(a)})}},k={matcher:g.isMatcher(a),regex:a instanceof RegExp};for(var l in k)if(k[l])return this.rule(i[l](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=q,q.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function H(a,l){function A(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function B(a,b){if(!a)return c;var d=f(a),e=d?a:a.name,g=A(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=B(b);for(var h=e.split("."),i=0,j=h.length,k=b;i<j;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=o[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function D(a,b){w[a]||(w[a]=[]),w[a].push(b)}function E(a){for(var b=w[a]||[];b.length;)F(b.shift())}function F(b){b=m(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!f(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(o.hasOwnProperty(c))throw new Error("State '"+c+"' is already defined");var d=c.indexOf(".")!==-1?c.substring(0,c.lastIndexOf(".")):f(b.parent)?b.parent:g(b.parent)&&f(b.parent.name)?b.parent.name:"";if(d&&!o[d])return D(d,b.self);for(var h in y)e(y[h])&&(b[h]=y[h](b,y.$delegates[h]));return o[c]=b,!b[x]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){u.$current.navigable==b&&s(a,c)||u.transitionTo(b,a,{inherit:!0,location:!1})}]),E(c),b}function G(a){return a.indexOf("*")>-1}function H(a){for(var b=a.split("."),c=u.$current.name.split("."),d=0,e=b.length;d<e;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(q(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(q(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length==c.length&&c.join("")===b.join("")}function I(a,b){return f(a)&&!d(b)?y[a]:e(b)&&f(a)?(y[a]&&!y.$delegates[a]&&(y.$delegates[a]=y[a]),y[a]=b,this):this}function J(a,b){return g(a)?b=a:b.name=a,F(b),this}function K(a,l,q,v,w,y,A,C,D){function K(b,c,d,e){var f=a.$broadcast("$stateNotFound",b,c,d);if(f.defaultPrevented)return A.update(),I;if(!f.retry)return null;if(e.$retry)return A.update(),J;var g=u.transition=l.when(f.retry);return g.then(function(){return g!==u.transition?E:(b.options.$retry=!0,u.transitionTo(b.to,b.toParams,b.options))},function(){return I}),A.update(),g}function M(a,c,d,f,g,j){function o(){var c=[];return i(a.views,function(d,f){var i=d.resolve&&d.resolve!==a.resolve?d.resolve:{};i.$template=[function(){return q.load(f,{view:d,locals:g.globals,params:k,notify:j.notify})||""}],c.push(w.resolve(i,g.globals,g.resolve,a).then(function(c){if(e(d.controllerProvider)||h(d.controllerProvider)){var j=b.extend({},i,g.globals);c.$$controller=v.invoke(d.controllerProvider,null,j)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,g[f]=c}))}),l.all(c).then(function(){return g.globals})}var k=d?c:t(a.params.$$keys(),c),m={$stateParams:k};g.resolve=w.resolve(a.resolve,m,g.resolve,a);var n=[g.resolve.then(function(a){g.globals=a})];return f&&n.push(f),l.all(n).then(o).then(function(a){return g})}var E=l.reject(new Error("transition superseded")),F=l.reject(new Error("transition prevented")),I=l.reject(new Error("transition aborted")),J=l.reject(new Error("transition failed"));return n.locals={resolve:null,globals:{$stateParams:{}}},u={params:{},current:n.self,$current:n,transition:null},u.reload=function(b){return u.transitionTo(u.current,y,{reload:b||!0,inherit:!1,notify:!0})},u.go=function(b,c,d){return u.transitionTo(b,c,j({inherit:!0,relative:u.$current},d))},u.transitionTo=function(c,e,h){e=e||{},h=j({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},h||{});var q,i=u.$current,o=u.params,p=i.path,s=B(c,h.relative),w=e["#"];if(!d(s)){var z={to:c,toParams:e,options:h},C=K(z,i.self,o,h);if(C)return C;if(c=z.to,e=z.toParams,h=z.options,s=B(c,h.relative),!d(s)){if(!h.relative)throw new Error("No such state '"+c+"'");throw new Error("Could not resolve '"+c+"' from state '"+h.relative+"'")}}if(s[x])throw new Error("Cannot transition to abstract state '"+c+"'");if(h.inherit&&(e=r(y,e||{},u.$current,s)),!s.params.$$validates(e))return J;e=s.params.$$values(e),c=s;var D=c.path,G=0,H=D[G],I=n.locals,N=[];if(h.reload){if(f(h.reload)||g(h.reload)){if(g(h.reload)&&!h.reload.name)throw new Error("Invalid reload state object");var O=h.reload===!0?p[0]:B(h.reload);if(h.reload&&!O)throw new Error("No such reload state '"+(f(h.reload)?h.reload:h.reload.name)+"'");for(;H&&H===p[G]&&H!==O;)I=N[G]=H.locals,G++,H=D[G]}}else for(;H&&H===p[G]&&H.ownParams.$$equals(e,o);)I=N[G]=H.locals,G++,H=D[G];if(L(c,e,i,o,I,h))return w&&(e["#"]=w),u.params=e,k(u.params,y),k(t(c.params.$$keys(),y),c.locals.globals.$stateParams),h.location&&c.navigable&&c.navigable.url&&(A.push(c.navigable.url,e,{$$avoidResync:!0,replace:"replace"===h.location}),A.update(!0)),u.transition=null,l.when(u.current);if(e=t(c.params.$$keys(),e||{}),w&&(e["#"]=w),h.notify&&a.$broadcast("$stateChangeStart",c.self,e,i.self,o,h).defaultPrevented)return a.$broadcast("$stateChangeCancel",c.self,e,i.self,o),null==u.transition&&A.update(),F;for(var P=l.when(I),Q=G;Q<D.length;Q++,H=D[Q])I=N[Q]=m(I),P=M(H,e,H===c,P,I,h);var R=u.transition=P.then(function(){var b,d,f;if(u.transition!==R)return E;for(b=p.length-1;b>=G;b--)f=p[b],f.self.onExit&&v.invoke(f.self.onExit,f.self,f.locals.globals),f.locals=null;for(b=G;b<D.length;b++)d=D[b],d.locals=N[b],d.self.onEnter&&v.invoke(d.self.onEnter,d.self,d.locals.globals);return u.transition!==R?E:(u.$current=c,u.current=c.self,u.params=e,k(u.params,y),u.transition=null,h.location&&c.navigable&&A.push(c.navigable.url,c.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===h.location}),h.notify&&a.$broadcast("$stateChangeSuccess",c.self,e,i.self,o),A.update(!0),u.current)},function(b){return u.transition!==R?E:(u.transition=null,q=a.$broadcast("$stateChangeError",c.self,e,i.self,o,b),q.defaultPrevented||A.update(),l.reject(b))});return R},u.is=function(b,e,f){f=j({relative:u.$current},f||{});var g=B(b,f.relative);return d(g)?u.$current===g&&(!e||s(g.params.$$values(e),y)):c},u.includes=function(b,e,g){if(g=j({relative:u.$current},g||{}),f(b)&&G(b)){if(!H(b))return!1;b=u.$current.name}var h=B(b,g.relative);return d(h)?!!d(u.$current.includes[h.name])&&(!e||s(h.params.$$values(e),y,p(e))):c},u.href=function(b,e,f){f=j({lossy:!0,inherit:!0,absolute:!1,relative:u.$current},f||{});var g=B(b,f.relative);if(!d(g))return null;f.inherit&&(e=r(y,e||{},u.$current,g));var h=g&&f.lossy?g.navigable:g;return h&&h.url!==c&&null!==h.url?A.href(h.url,t(g.params.$$keys().concat("#"),e||{}),{absolute:f.absolute}):null},u.get=function(a,b){if(0===arguments.length)return z(p(o),function(a){return o[a].self});var c=B(a,b||u.$current);return c&&c.self?c.self:null},u}function L(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=v.apply({},[a.params].concat(e)),g=new C.ParamSet(f);return g.$$equals(b,c)}if(!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b)))return!0}var n,u,o={},w={},x="abstract",y={parent:function(a){if(d(a.parent)&&a.parent)return B(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?B(b[1]):n},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=m(a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(f(b))return"^"==b.charAt(0)?l.compile(b.substring(1),c):(a.parent.navigable||n).url.concat(b,c);if(!b||l.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new C.ParamSet;return i(a.params||{},function(a,c){b[c]||(b[c]=new C.Param(c,null,a,"config"))}),b},params:function(a){var b=v(a.ownParams,a.ownParams.$$keys());return a.parent&&a.parent.params?j(a.parent.params.$$new(),b):new C.ParamSet},views:function(a){var b={};return i(d(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?j({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};n=F({name:"",url:"^",views:null,abstract:!0}),n.navigable=null,this.decorator=I,this.state=J,this.$get=K,K.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function I(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=j(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function J(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function M(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(a){return null}}}function j(a,c){function e(a){return 1===K&&L>=4?!!i.enabled(a):1===K&&L>=2?!!i.enabled():!!h}var d={enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}};if(a.noanimation)return d;if(i)return{enter:function(a,c,f){e(a)?b.version.minor>2?i.enter(a,null,c).then(f):i.enter(a,null,c,f):d.enter(a,c,f)},leave:function(a,c){e(a)?b.version.minor>2?i.leave(a).then(c):i.leave(a,c):d.leave(a,c)}};if(h){var f=h&&h(c,a);return{enter:function(a,b,c){f.enter(a,null,b),c()},leave:function(a,b){f.leave(a),b()}}}return d}var g=f(),h=g("$animator"),i=g("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,g){return function(c,f,h){function q(){function c(){a&&a.remove(),b&&b.$destroy()}var a=i,b=l;b&&(b._willBeDestroyed=!0),k?(p.leave(k,function(){c(),i=null}),i=k):(c(),i=null),k=null,l=null}function r(i){var j,r=O(c,h,f,e),s=r&&a.$current&&a.$current.locals[r];if((i||s!==m)&&!c._willBeDestroyed){j=c.$new(),m=a.$current.locals[r],j.$emit("$viewContentLoading",r);var t=g(j,function(a){p.enter(a,f,function(){l&&l.$emit("$viewContentAnimationEnded"),(b.isDefined(o)&&!o||c.$eval(o))&&d(a)}),q()});k=t,l=j,l.$emit("$viewContentLoaded",r),l.$eval(n)}}var i,k,l,m,n=h.onload||"",o=h.autoscroll,p=j(h,c);c.$on("$stateChangeSuccess",function(){r(!1)}),r(!0)}}};return k}function N(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=O(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function O(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function P(a,b){var d,c=a.match(/^\s*({[^}]*})\s*$/);if(c&&(a=b+"("+c[1]+")"),d=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!d||4!==d.length)throw new Error("Invalid state ref '"+a+"'");return{state:d[1],paramExpr:d[3]||null}}function Q(a){var b=a.parent().inheritedData("$uiView");if(b&&b.state&&b.state.name)return b.state}function R(a){var b="[object SVGAnimatedString]"===Object.prototype.toString.call(a.prop("href")),c="FORM"===a[0].nodeName;return{attr:c?"action":b?"xlink:href":"href",isAnchor:"A"===a.prop("tagName").toUpperCase(),clickable:!c}}function S(a,b,c,d,e){return function(f){var g=f.which||f.button,h=e();if(!(g>1||f.ctrlKey||f.metaKey||f.shiftKey||a.attr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function T(a,b){return{relative:Q(a)||b.$current,inherit:!0}}function U(a,c){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(d,e,f,g){var h=P(f.uiSref,a.current.name),i={state:h.state,href:null,params:null},k=R(e),l=g[1]||g[0];i.options=j(T(e,a),f.uiSrefOpts?d.$eval(f.uiSrefOpts):{});var m=function(c){c&&(i.params=b.copy(c)),i.href=a.href(h.state,i.params,i.options),l&&l.$$addStateInfo(h.state,i.params),null!==i.href&&f.$set(k.attr,i.href)};h.paramExpr&&(d.$watch(h.paramExpr,function(a){a!==i.params&&m(a)},!0),i.params=b.copy(d.$eval(h.paramExpr))),m(),k.clickable&&e.bind("click",S(e,a,c,k,function(){return i}))}}}function V(a,b){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function l(b){k.state=b[0],k.params=b[1],k.options=b[2],k.href=a.href(k.state,k.params,k.options),h&&h.$$addStateInfo(k.state,k.params),k.href&&e.$set(g.attr,k.href)}var g=R(d),h=f[1]||f[0],i=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],j="["+i.map(function(a){return a||"null"}).join(", ")+"]",k={state:null,params:null,options:null,href:null};c.$watch(j,l,!0),l(c.$eval(j)),g.clickable&&d.bind("click",S(d,a,b,g,function(){return k}))}}}function W(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(b,d,e,h){function o(b,c,e){var f=a.get(b,Q(d)),g=p(b,c);j.push({state:f||{name:b},params:c,hash:g}),k[g]=e}function p(a,c){if(!f(a))throw new Error("state should be a string");return g(c)?a+l(c):(c=b.$eval(c),g(c)?a+l(c):a)}function q(){for(var a=0;a<j.length;a++)t(j[a].state,j[a].params)?r(d,k[j[a].hash]):s(d,k[j[a].hash]),u(j[a].state,j[a].params)?r(d,m):s(d,m)}function r(a,b){h(function(){a.addClass(b)})}function s(a,b){a.removeClass(b)}function t(b,c){return a.includes(b.name,c)}function u(b,c){return a.is(b.name,c)}var m,n,j=[],k={};m=c(e.uiSrefActiveEq||"",!1)(b);try{n=b.$eval(e.uiSrefActive)}catch(a){}n=n||c(e.uiSrefActive||"",!1)(b),g(n)&&i(n,function(c,d){if(f(c)){var e=P(c,a.current.name);o(e.state,b.$eval(e.paramExpr),d)}}),this.$$addStateInfo=function(a,b){g(n)&&j.length>0||(o(a,b,n),q())},b.$on("$stateChangeSuccess",q),q()}]}}function X(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function Y(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var d=b.isDefined,e=b.isFunction,f=b.isString,g=b.isObject,h=b.isArray,i=b.forEach,j=b.extend,k=b.copy,l=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),A.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",A),B.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",B);var C;D.prototype.concat=function(a,b){var c={caseInsensitive:C.caseInsensitive(),strict:C.strictMode(),squash:C.defaultSquashPolicy()};return new D(this.sourcePath+a+this.sourceSearch,j(c,b),this)},D.prototype.toString=function(){return this.source},D.prototype.exec=function(a,b){function m(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=z(d,b);return z(e,c).reverse()}var c=this.regexp.exec(a);if(!c)return null;b=b||{};var i,j,l,e=this.parameters(),f=e.length,g=this.segments.length-1,h={};if(g!==c.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var n,o;for(i=0;i<g;i++){for(l=e[i],n=this.params[l],o=c[i+1],j=0;j<n.replace.length;j++)n.replace[j].from===o&&(o=n.replace[j].to);o&&n.array===!0&&(o=m(o)),d(o)&&(o=n.type.decode(o)),h[l]=n.value(o)}for(;i<f;i++){for(l=e[i],h[l]=this.params[l].value(b[l]),n=this.params[l],o=b[l],j=0;j<n.replace.length;j++)n.replace[j].from===o&&(o=n.replace[j].to);d(o)&&(o=n.type.decode(o)),h[l]=n.value(o)}return h},D.prototype.parameters=function(a){return d(a)?this.params[a]||null:this.$$paramNames},D.prototype.validates=function(a){return this.params.$$validates(a)},D.prototype.format=function(a){function l(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var b=this.segments,c=this.parameters(),d=this.params;if(!this.validates(a))return null;var e,g=!1,i=b.length-1,j=c.length,k=b[0];for(e=0;e<j;e++){var m=e<i,n=c[e],o=d[n],p=o.value(a[n]),q=o.isOptional&&o.type.equals(o.value(),p),r=!!q&&o.squash,s=o.type.encode(p);if(m){var t=b[e+1],u=e+1===i;if(r===!1)null!=s&&(k+=h(s)?z(s,l).join("-"):encodeURIComponent(s)),k+=t;else if(r===!0){var v=k.match(/\/$/)?/\/?(.*)/:/(.*)/;k+=t.match(v)[1]}else f(r)&&(k+=r+t);u&&o.squash===!0&&"/"===k.slice(-1)&&(k=k.slice(0,-1))}else{if(null==s||q&&r!==!1)continue;if(h(s)||(s=[s]),0===s.length)continue;s=z(s,encodeURIComponent).join("&"+n+"="),k+=(g?"&":"?")+(n+"="+s),g=!0}}return k},E.prototype.is=function(a,b){return!0},E.prototype.encode=function(a,b){return a},E.prototype.decode=function(a,b){return a},E.prototype.equals=function(a,b){return a==b},E.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},E.prototype.pattern=/.*/,E.prototype.toString=function(){return"{Type:"+this.name+"}"},E.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},E.prototype.$asArray=function(a,b){function e(a,b){function e(a,b){return function(){return a[b].apply(a,arguments)}}function f(a){return h(a)?a:d(a)?[a]:[]}function g(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function i(a){return!a}function j(a,b){return function(d){if(h(d)&&0===d.length)return d;d=f(d);var e=z(d,a);return b===!0?0===y(e,i).length:g(e)}}function k(a){return function(c,d){var e=f(c),g=f(d);if(e.length!==g.length)return!1;for(var h=0;h<e.length;h++)if(!a(e[h],g[h]))return!1;return!0}}this.encode=j(e(a,"encode")),this.decode=j(e(a,"decode")),this.is=j(e(a,"is"),!0),this.equals=k(e(a,"equals")),this.pattern=a.pattern,this.$normalize=j(e(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new e(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",F),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),G.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",G),H.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).provider("$state",H),I.$inject=[],b.module("ui.router.state").provider("$view",I),b.module("ui.router.state").provider("$uiViewScroll",J);var K=b.version.major,L=b.version.minor;M.$inject=["$state","$injector","$uiViewScroll","$interpolate"],N.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",M),b.module("ui.router.state").directive("uiView",N),U.$inject=["$state","$timeout"],V.$inject=["$state","$timeout"],W.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",U).directive("uiSrefActive",W).directive("uiSrefActiveEq",W).directive("uiState",V),
X.$inject=["$state"],Y.$inject=["$state"],b.module("ui.router.state").filter("isState",X).filter("includedByState",Y)}(window,window.angular);