// ./src/views/UsersTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <!-- User卡片 UserCard-->
      <UserCard v-for="user in users" :key="user.id" :initial-user="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import UserCard from "./../components/UserCard";

const dummyData = {
  users: [
    {
      id: 1,
      name: "Root",
      email: "root@example.com",
      image: "https://i.pravatar.cc/300?img=1",
      isAdmin: true,
      follower: 3
    },
    {
      id: 2,
      name: "User1",
      email: "user1@example.com",
      image: "https://i.pravatar.cc/300?img=2",
      isAdmin: false,
      follower: 0
    },
    {
      id: 3,
      name: "User2",
      email: "user2@example.com",
      image: "https://i.pravatar.cc/300?img=3",
      isAdmin: false,
      follower: 2
    }
  ]
};

export default {
  components: {
    NavTabs,
    UserCard
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    }
  }
};
</script>