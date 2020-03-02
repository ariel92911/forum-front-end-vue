// ./src/views/RestaurantDashboard.vue
<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div>
        <h1>{{restaurant.name}}</h1>
        <p>[{{restaurant.categoryName}}]</p>
      </div>
      <hr />
      <ul>
        <li>評論數：{{restaurantComments.length}}</li>
        <li>瀏覽次數：15475</li>
        <li>收藏數：{{restaurantFavoritedUsers.length}}</li>
      </ul>
      <a href="#" @click="$router.back()">回上一頁</a>
    </div>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Judy Runte",
    tel: "(918) 827-1962",
    address: "98138 Elisa Road",
    opening_hours: "08:00",
    description: "dicta et cupiditate",
    image: "https://loremflickr.com/320/240/food,dessert,restaurant/?random=1",
    createdAt: "2019-06-22T09:00:43.000Z",
    updatedAt: "2019-06-22T09:00:43.000Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z"
    },
    FavoritedUsers: [1, 2],
    LikedUsers: [],
    Comments: [
      {
        id: 3,
        text: "Quos asperiores in nostrum cupiditate excepturi aspernatur.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-06-22T09:00:43.000Z",
        updatedAt: "2019-06-22T09:00:43.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$0ISHJI48xu/VRNVmEeycFe8v5ChyT305f8KaJVIhumu7M/eKAikkm",
          image: "https://i.imgur.com/XooCt5K.png",
          isAdmin: false,
          createdAt: "2019-06-22T09:00:43.000Z",
          updatedAt: "2019-06-23T01:16:31.000Z"
        }
      }
    ]
  }
};

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: ""
      },
      restaurantComments: [],
      restaurantFavoritedUsers: []
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name
      };

      this.restaurantComments = dummyData.restaurant.Comments;
      this.restaurantFavoritedUsers = dummyData.restaurant.FavoritedUsers;
    }
  }
};
</script>