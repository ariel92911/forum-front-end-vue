(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2ec8"],{"25d3":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"album py-5 bg-light"},[a("div",{staticClass:"container"},[a("div",[a("h1",[t._v(t._s(t.restaurant.name))]),a("p",[t._v("["+t._s(t.restaurant.categoryName)+"]")])]),a("hr"),a("ul",[a("li",[t._v("評論數："+t._s(t.restaurantComments.length))]),a("li",[t._v("瀏覽次數：15475")]),a("li",[t._v("收藏數："+t._s(t.restaurantFavoritedUsers.length))])]),a("a",{attrs:{href:"#"},on:{click:function(e){return t.$router.back()}}},[t._v("回上一頁")])])])},s=[],n=(a("b0c0"),{restaurant:{id:1,name:"Judy Runte",tel:"(918) 827-1962",address:"98138 Elisa Road",opening_hours:"08:00",description:"dicta et cupiditate",image:"https://loremflickr.com/320/240/food,dessert,restaurant/?random=1",createdAt:"2019-06-22T09:00:43.000Z",updatedAt:"2019-06-22T09:00:43.000Z",CategoryId:3,Category:{id:3,name:"義大利料理",createdAt:"2019-06-22T09:00:43.000Z",updatedAt:"2019-06-22T09:00:43.000Z"},FavoritedUsers:[1,2],LikedUsers:[],Comments:[{id:3,text:"Quos asperiores in nostrum cupiditate excepturi aspernatur.",UserId:2,RestaurantId:1,createdAt:"2019-06-22T09:00:43.000Z",updatedAt:"2019-06-22T09:00:43.000Z",User:{id:2,name:"user1",email:"user1@example.com",password:"$2a$10$0ISHJI48xu/VRNVmEeycFe8v5ChyT305f8KaJVIhumu7M/eKAikkm",image:"https://i.imgur.com/XooCt5K.png",isAdmin:!1,createdAt:"2019-06-22T09:00:43.000Z",updatedAt:"2019-06-23T01:16:31.000Z"}}]}}),i={data:function(){return{restaurant:{id:-1,name:"",categoryName:""},restaurantComments:[],restaurantFavoritedUsers:[]}},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},methods:{fetchRestaurant:function(t){console.log("fetchRestaurant id: ",t),this.restaurant={id:n.restaurant.id,name:n.restaurant.name,categoryName:n.restaurant.Category.name},this.restaurantComments=n.restaurant.Comments,this.restaurantFavoritedUsers=n.restaurant.FavoritedUsers}}},u=i,d=a("2877"),o=Object(d["a"])(u,r,s,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0b2ec8.7bd8bf80.js.map