(function(t){function e(e){for(var a,s,o=e[0],u=e[1],c=e[2],p=0,h=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"4e95":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var a=n("e332"),i=n.n(a);i.a},a932:function(t,e,n){"use strict";var a=n("4e95"),i=n.n(a);i.a},cc04:function(t,e,n){"use strict";var a=n("f373"),i=n.n(a);i.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Map",{attrs:{restaurants:t.restaurantList}})],1)},r=[],s=(n("ac6a"),n("d225")),o=n("b0b4"),u=n("308d"),c=n("6bb5"),l=n("4e2b"),p=n("9ab4"),h=n("60a3"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map"},[n("LMap",{staticStyle:{height:"100%",width:"100%"},attrs:{zoom:t.zoom,center:t.center},on:{"update:zoom":t.zoomUpdated,"update:center":t.centerUpdated,"update:bounds":t.boundsUpdated}},[n("LTileLayer",{attrs:{url:t.url}}),t._l(t.restaurantList,function(t){return n("RestaurantMarker",{key:t.title,attrs:{restaurant:t}})})],2)],1)},f=[],_=n("e11e"),v=n("2699"),m=n("a40a"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("LMarker",{attrs:{"lat-lng":t.convertLatLng(t.restaurant.location)},on:{click:t.clickHandler}},[n("l-popup",[n("Popup",{attrs:{restaurant:t.restaurant,loadMenu:t.loadMenu}})],1)],1)],1)},g=[],y=n("4e2b6"),k=n("f60f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup"},[n("div",{staticClass:"popup__label"},[t._v(t._s(t.title))]),n("div",{staticClass:"popup__label"},[t._v("Osoite: "+t._s(t.restaurant.address))]),t.hasTime?n("div",{staticClass:"popup__label"},[t._v("Lounasaika: "+t._s(t.lunchTime))]):n("div",{staticClass:"popup__label"},[t._v("Lounasaika: Ei lounasaikaa saatavilla")]),t.hasMenu?n("div",{staticClass:"popup__menu"},[t._m(0),t._l(t.lunchMenu,function(e){return n("div",{key:e.Name,staticClass:"popup__menu__item"},[n("div",{staticClass:"popup__menu__item__title"},[t._v(t._s(e.Name))]),n("div",{staticClass:"popup__menu__item__ingredients"},[n("div",{staticClass:"popup__menu__item__container",class:{expanded:t.showFullIncredients}},t._l(e.Components,function(e){return n("div",{key:e,staticClass:"popup__menu__item__ingredients__item"},[t._v(t._s(e))])}),0),t.showFullIncredients?n("div",{staticClass:"popup__menu__item__container__button",on:{click:function(e){t.showFullIncredients=!t.showFullIncredients}}},[t._v("\n                      Näytä vähemmän\n                  ")]):n("div",{staticClass:"popup__menu__item__container__button",on:{click:function(e){t.showFullIncredients=!t.showFullIncredients}}},[t._v("\n                      Näytä enemmän\n                  ")])]),n("div",{staticClass:"popup__menu__item__price"},[t._v(t._s(e.Price))])])})],2):n("div",[n("div",{staticClass:"popup__label"},[t._v("Ei ruokalistaa saatavilla")])]),t.isLoading?n("div",{staticClass:"popup__loading"},[n("i",{staticClass:"fa fa-spinner fa-spin"})]):t._e()])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup__menu__item__labels"},[n("div",{},[t._v("Nimi")]),n("div",{},[t._v("Ainekset")]),n("div",{},[t._v("Hinta")])])}],w=(n("7f7f"),n("6762"),n("2fdb"),n("28a5"),function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.lunchMenu=[],t.lunchTime="",t.title=t.restaurant.title,t.hasMenu=!0,t.hasTime=!0,t.isLoading=!0,t.showFullIncredients=!1,t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"fetchLuchMenu",value:function(t){return fetch("https://akalhainen.me/"+t).then(function(t){return t.json()},function(t){console.error(t)})}},{key:"getDate",value:function(t,e,n){var a=e.toLowerCase(),i=a.split(n),r=t.split(n),s=i.indexOf("mm"),o=i.indexOf("dd"),u=i.indexOf("yyyy"),c=parseInt(r[s]);c-=1;var l=new Date(parseInt(r[u]),c,parseInt(r[o]));return l}},{key:"parseFazer",value:function(t){t.MenusForDays||(this.hasMenu=!1,this.hasTime=!1),this.lunchMenu=t.MenusForDays[0].SetMenus,this.title=t.RestaurantName,this.lunchTime=t.MenusForDays[0].LunchTime,this.lunchMenu.length<1&&(this.hasMenu=!1,this.hasTime=!1)}},{key:"parseUnicafe",value:function(t){var e=this,n=t.filter(function(t){return e.title.toLowerCase().includes(t.menuData.name.toLowerCase())})[0];if(!n)return this.hasMenu=!1,void(this.hasTime=!1);var a=(new Date).getFullYear(),i=n.menuData.menus.filter(function(t){var n=t.date.split(" ")[1]+a,i=e.getDate(n,"dd.mm.yyyy",".");return i.getDate()===(new Date).getDate()})[0].data;this.title=n.title;var r,s=n.visitingHours.filter(function(t){return"Lounas"===t.name})[0],o=(new Date).getDay();s&&0!==o&&6!==o?(r=5===o?s.group.filter(function(t){return"Fri"===t.weekday[0]})[0]:s.group.filter(function(t){return"Mon"===t.weekday[0]})[0],this.lunchTime=r.opening_hour+" - "+r.closing_hour):(this.lunchTime="",this.hasMenu=!1,this.hasTime=!1);var u=[];i.forEach(function(t){var e={Price:"",Components:[""],Name:""};e.Components=[t.ingredients],e.Price="Opiskelija: "+t.price.value.student,e.Name=t.name,u.push(e)}),this.lunchMenu=u,this.lunchMenu.length<1&&(this.hasMenu=!1)}}]),e}(h["c"]));Object(p["a"])([Object(h["b"])()],w.prototype,"restaurant",void 0),Object(p["a"])([Object(h["b"])()],w.prototype,"loadMenu",void 0),w=Object(p["a"])([Object(h["a"])({watch:{loadMenu:function(t,e){var n=this;!e&&t&&(console.log(this.restaurant.lunchUrl),this.restaurant.lunchUrl?this.fetchLuchMenu(this.restaurant.lunchUrl).then(function(t){switch(n.isLoading=!1,n.restaurant.type){case"fazer":n.parseFazer(t);break;case"unicafe":n.parseUnicafe(t);break}}):(this.isLoading=!1,this.hasMenu=!1,this.hasTime=!1))}}})],w);var M=w,C=M,T=(n("cc04"),n("2877")),U=Object(T["a"])(C,O,j,!1,null,"0a2a61bc",null),x=U.exports,I=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.loadMenu=!1,t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){}},{key:"clickHandler",value:function(){this.loadMenu=!0}},{key:"convertLatLng",value:function(t){return Object(_["latLng"])(t.lat,t.lng)}}]),e}(h["c"]);Object(p["a"])([Object(h["b"])()],I.prototype,"restaurant",void 0),I=Object(p["a"])([Object(h["a"])({components:{LMarker:y["a"],LPopup:k["a"],Popup:x}})],I);var P=I,F=P,D=Object(T["a"])(F,b,g,!1,null,"c8c8ad5a",null),E=D.exports,N=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.url="https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",t.zoom=14,t.center=[60.167255,24.940523],t.bounds=null,t.showParagraph=!1,t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){delete _["Icon"].Default.prototype._getIconUrl,_["Icon"].Default.imagePath="/",_["Icon"].Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),navigator.geolocation&&navigator.geolocation.getCurrentPosition(this.setPosition)}},{key:"setPosition",value:function(t){this.center=[t.coords.latitude,t.coords.longitude],this.zoom=14}},{key:"restaurantList",get:function(){var t=this.restaurants.filter(function(t){return null!==t.location});return t}}]),e}(h["c"]);Object(p["a"])([Object(h["b"])()],N.prototype,"restaurants",void 0),N=Object(p["a"])([Object(h["a"])({components:{LMap:v["a"],LTileLayer:m["a"],RestaurantMarker:E},methods:{zoomUpdated:function(t){this.zoom=t},centerUpdated:function(t){this.center=t},boundsUpdated:function(t){this.bounds=t}}})],N);var z=N,S=z,R=(n("a932"),Object(T["a"])(S,d,f,!1,null,"a941f7be",null)),A=R.exports,B=function(){function t(e,n,a,i,r,o){if(Object(s["a"])(this,t),this._title=e,this._address=n,this._location=a,this._website=i,this._type=r,this._lunchUrl=o,this.location){this._marker=L.marker([+this.location.lat,+this.location.lng]);var u=this.website?"<p>"+this.title+'</p><br><a href="'+this.website+'">Ruokalista</a>':"<p>"+this.title+"</p>";this._marker.bindPopup(u)}}return Object(o["a"])(t,[{key:"addMarkerToMap",value:function(t){this._marker&&(this._map=t,this._marker.addTo(t))}},{key:"hideMarker",value:function(){this._marker&&this._marker.remove()}},{key:"showMarker",value:function(){(this._map||this._marker)&&this._marker.addTo(this._map)}},{key:"title",get:function(){return this._title}},{key:"type",get:function(){return this._type}},{key:"address",get:function(){return this._address}},{key:"location",get:function(){return this._location}},{key:"website",get:function(){return this._website}},{key:"lunchUrl",get:function(){return this._lunchUrl}}]),t}(),$=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.restaurantList=[],t.refreshing=!1,t.registration=null,t.updateExists=!1,t.snackBtnText="Päivitä",t.snackWithBtnText="Päivityksiä saatavilla",t.snackWithButtons=!1,t.timeout=0,t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"getRestaurants",value:function(){return fetch("https://akalhainen.me/ruokalistat/restaurants.json").then(function(t){return t.json()})}},{key:"created",value:function(){var t=this;this.getRestaurants().then(function(e){e.forEach(function(e){var n=new B(e.title,e.address,e.location,e.website,e.type,e.lunchUrl);t.restaurantList.push(n)})}),document.addEventListener("swUpdated",this.showRefreshUI,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",function(){t.refreshing||(t.refreshing=!0,window.location.reload())})}},{key:"showRefreshUI",value:function(t){this.registration=t.detail,this.updateExists=!0}},{key:"refreshApp",value:function(){this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage("skipWaiting")}}]),e}(h["c"]);$=Object(p["a"])([Object(h["a"])({components:{Map:A},data:function(){return{}}})],$);var H=$,W=H,Y=(n("5c0b"),Object(T["a"])(W,i,r,!1,null,null,null)),J=Y.exports,q=n("2f62");a["default"].use(q["a"]);var X=new q["a"].Store({state:{unicafeMenu:void 0},mutations:{unicafeMenu:function(t,e){t.unicafeMenu=e}},getters:{unicafeMenu:function(t){return t.unicafeMenu}},actions:{}}),G=n("9483");Object(G["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(t){document.dispatchEvent(new CustomEvent("swUpdated",{detail:t})),console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Q=n("ce5b"),V=n.n(Q);a["default"].use(V.a),a["default"].config.productionTip=!1,new a["default"]({store:X,render:function(t){return t(J)}}).$mount("#app")},e332:function(t,e,n){},f373:function(t,e,n){}});
//# sourceMappingURL=app.55cecd37.js.map