(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d55d3ce2"],{"22ab":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("NavTabs"),r("h1",{staticClass:"mt-5"},[e._v("美食達人")]),r("hr"),r("div",{staticClass:"row text-center"},e._l(e.users,(function(e){return r("UserCard",{key:e.id,attrs:{"initial-user":e}})})),1)],1)},a=[],s=(r("96cf"),r("1da1")),o=r("8bb1"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-3"},[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:e.user.image,width:"140px",height:"140px"}})]),r("h2",[e._v(e._s(e.user.name))]),r("span",{staticClass:"badge badge-secondary"},[e._v("追蹤人數："+e._s(e.user.FollowerCount))]),r("p",{staticClass:"mt-3"},[e.user.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFollowing(e.user.id)}}},[e._v("取消追蹤")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollowing(e.user.id)}}},[e._v("追蹤")])])])},i=[],c=(r("d81d"),r("5530")),l=r("4cce"),d=r("2fa3"),p={props:{initialUser:{type:Object,required:!0}},data:function(){return{user:this.initialUser}},methods:{addFollowing:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].addFollowing({userId:e});case 3:if(n=r.sent,a=n.data,s=n.statusText,"OK"===s&&"success"===a.status){r.next=8;break}throw new Error(s);case 8:t.users=t.users.map((function(t){return t.id!==e?t:Object(c["a"])({},t,{FollowerCount:t.FollowerCount+1,isFollowed:!0})})).sort((function(e,t){return t.FollowerCount-e.FollowerCount})),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),d["a"].fire({type:"error",title:"無法加入追蹤，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()},removeFollowing:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].deleteFollowing({userId:e});case 3:if(n=r.sent,a=n.data,s=n.statusText,"OK"===s&&"success"===a.status){r.next=8;break}throw new Error(s);case 8:t.users=t.users.map((function(t){return t.id!==e?t:Object(c["a"])({},t,{FollowerCount:t.FollowerCount-1,isFollowed:!1})})).sort((function(e,t){return t.FollowerCount-e.FollowerCount})),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),d["a"].fire({type:"error",title:"無法取消追蹤，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}},f=p,w=r("2877"),h=Object(w["a"])(f,u,i,!1,null,null,null),v=h.exports,b={components:{NavTabs:o["a"],UserCard:v},data:function(){return{users:[]}},created:function(){this.fetchTopUsers()},methods:{fetchTopUsers:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l["a"].getTopUsers();case 3:if(r=t.sent,n=r.data,a=r.statusText,"OK"===a){t.next=8;break}throw new Error(a);case 8:e.users=n.users,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),d["a"].fire({type:"error",title:"無法取得美食達人，請稍後再試"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}}},m=b,g=Object(w["a"])(m,n,a,!1,null,null,null);t["default"]=g.exports},d81d:function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").map,s=r("1dde"),o=r("ae40"),u=s("map"),i=o("map");n({target:"Array",proto:!0,forced:!u||!i},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-d55d3ce2.09c88e30.js.map