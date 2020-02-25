// ./src/views/Restaurants.vue
<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage > 1"
      :category-id="categoryId"
      :current-page="currentPage"
      :total-page="totalPage"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaurantsPagination";

const dummyData = {
  restaurants: [
    {
      id: 49,
      name: "Russ Kertzmann",
      tel: "087-274-1881",
      address: "6601 Lura Lodge",
      opening_hours: "08:00",
      description: "sed",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-07-30T16:24:55.443Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 46,
      name: "Jasper Mueller",
      tel: "254-159-2190",
      address: "44890 Dominique Wall",
      opening_hours: "08:00",
      description: "dolorem ratione et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.08831513935154",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-07-30T16:24:55.443Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 47,
      name: "Beverly Yundt",
      tel: "099-398-9865 x7776",
      address: "27001 Ike Well",
      opening_hours: "08:00",
      description:
        "Quibusdam ut natus officia porro. Quis eum explicabo architecto sint repudiandae unde. Sunt magni quibusdam ipsa et impedit esse occaecati. Et nemo quaerat saepe delectus. Autem dignissimos corporis sed voluptates suscipit quia fuga. Dolorum ea suscipit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.588878866397906",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-07-30T16:24:55.443Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 48,
      name: "Lucie McDermott",
      tel: "(087) 019-9323 x4728",
      address: "218 Bennett Street",
      opening_hours: "08:00",
      description: "omnis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.899925023303915",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-07-30T16:24:55.443Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 50,
      name: "Mrs. Wellington Lehner",
      tel: "792-886-2864 x53152",
      address: "4185 Cartwright Green",
      opening_hours: "08:00",
      description: "aspernatur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.977654953966386",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-07-30T16:24:55.443Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 42,
      name: "Melody Koepp",
      tel: "(774) 342-2533",
      address: "3318 Feeney Hollow",
      opening_hours: "08:00",
      description: "beatae iste alias",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.34426799459621",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.442Z",
      updatedAt: "2019-07-30T16:24:55.442Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 43,
      name: "Carrie Robel V",
      tel: "455.357.0399 x356",
      address: "33531 Mayert Fall",
      opening_hours: "08:00",
      description:
        "Quos illum dolorem laboriosam temporibus incidunt non nihil.\nPerspiciatis iusto cumque possimus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.74175407974987",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.442Z",
      updatedAt: "2019-07-30T16:24:55.442Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 45,
      name: "Luther Hickle",
      tel: "477-667-6528 x320",
      address: "79381 Bradtke Manor",
      opening_hours: "08:00",
      description:
        "Esse qui rerum et occaecati quia quo molestiae. Consequuntur rem iste doloribus minus esse ea voluptas atque. Dolore distinctio tempore expedita atque unde aliquam laudantium.\n \rQuaerat est ut. Nulla dolore a error eaque voluptatem quo. Laborum quis reiciendis in ipsa dolores dolor exercitationem itaque deserunt. Rerum ut ab sequi consequatur quae nulla. Consequatur nam aut voluptate amet qui omnis. Voluptatem commodi assumenda quisquam consequatur magni quod repellat ut dolore.\n \rRem nesciunt quia adipisci debitis distinctio est. Odit voluptas autem repellendus commodi a quas voluptatum. At quia modi ut ea earum consequatur facere recusandae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.10379900896436",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.442Z",
      updatedAt: "2019-07-30T16:24:55.442Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 44,
      name: "Sonny Funk",
      tel: "093-689-0372",
      address: "908 Kassulke Landing",
      opening_hours: "08:00",
      description:
        "Asperiores sequi doloribus. Alias corporis praesentium quas amet. Ad et delectus amet ea reiciendis. Perspiciatis aliquid sapiente doloremque. Ut hic reiciendis velit voluptates atque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.97383668164223",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.442Z",
      updatedAt: "2019-07-30T16:24:55.442Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 37,
      name: "Ezekiel Gerlach",
      tel: "1-781-932-3493 x2886",
      address: "328 Shayne Isle",
      opening_hours: "08:00",
      description: "nostrum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=26.892961850412213",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.441Z",
      updatedAt: "2019-07-30T16:24:55.441Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    }
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    }
  ],
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
  categoryId: ""
};

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  data() {
    return {
      categories: [],
      categoryId: -1,
      currentPage: 1,
      restaurants: [],
      totalPage: -1
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.categories = dummyData.categories;
      this.categoryId = dummyData.categoryId;
      this.currentPage = dummyData.page;
      this.restaurants = dummyData.restaurants;
      this.totalPage = dummyData.totalPage.length;
    }
  }
};
</script>