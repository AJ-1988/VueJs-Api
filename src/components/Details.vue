<template>
  <div class="container">
      <div class="row">
        <h1 class="display-3 mt-3 col-11">{{user.name}}</h1>
        <span v-on:click="goBack" class="col-1"><i class="mt-5 fas fa-arrow-alt-circle-left fa-3x"></i><small>Back</small></span>
      </div>
  <table class="table mt-5 table-responsive-sm">
    <thead class="thead-light">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Location</th>
        <th scope="col"></th>
      </tr>
    </thead>
      <tbody>
        <tr>
          <td>{{user.name}}</td>
          <td>{{user.number}}</td>
          <td>{{user.location}}</td>
          <td>
            <router-link id="edit" class="btn btn-info mr-2" v-bind:to="'/projects/vue/user/update'+user.id">Edit</router-link>
            <button  class="btn btn-danger" v-on:click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      user: 'update'
    }
  },
  methods: {
    fetchUser(id) {
        this.$http.get('http://api.aj-jerath.com/slimapp/api/user/'+id).then((res) => {
          this.user = res.body
        });
      },
      deleteUser(id) {
        this.$http.delete('http://api.aj-jerath.com/slimapp/api/user/delete/'+id).then((res) => {
          this.$router.push({path: '/projects/vue'})
        })
      },
      goBack() {
        this.$router.go(-1)
      }
    },
    created: function() {
      this.fetchUser(this.$route.params.id);
    }
  }
</script>

<style scoped>
  span {
    color: #5bc0de;
    cursor: pointer;
    text-align: center;
  }
  span:hover{
    color: #0099CC;
  }
  @media(max-width: 600px) {
    span {
      display: none;
    }
    h1 {
      text-align: center;
    }
  }
    @media(max-width:767px) {
      #edit {
        margin-left: 9px;
        margin-bottom: 10px;
      }
    }
    @media(max-width:991px) {
      small {
          padding-left: 10px;
      }
    }
</style>
