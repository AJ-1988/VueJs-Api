<template>
  <div id="app" class="container">
    <h1 class="display-3">Users</h1>
    <input type="text" class="form-control mb-5"placeholder="Search Name..." v-model="filterInput">
    <ul class="list-group" v-for="user in filterBy(users, filterInput)">
      <li class="list-group-item bg-light border border-info mb-2"><h2>{{user.name}}<router-link class="float-right mt-1 btn btn-info" v-bind:to="'/projects/vue/user'+user.id">Details</router-link></h2></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Users',
    data() {
      return {
        users: [],
        filterInput: ''
      }
    },
    methods: {
      fetchUsers() {
        this.$http.get('http://api.aj-jerath.com/slimapp/api/users').then((res) => {
          this.users = res.body
        });
      },
      filterBy(list, input) {
        input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        return list.filter(function(user) {
          return user.name.indexOf(input) > -1;
        });
      }
    },
    created: function() {
      this.fetchUsers();
    }
  }
</script>

<style>

</style>
