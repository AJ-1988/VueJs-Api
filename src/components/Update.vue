<template>
  <div class="container">
    <div class="row">
      <h1 class="display-3 mb-4 mt-3 col-11">Update {{user.name}}</h1>
        <span v-on:click="goBack" class="col-1"><i class="mt-5 fas fa-arrow-alt-circle-left fa-3x"></i><small>Back</small></span>
    </div>
    <form class="mt-2" v-on:submit="updateUser">
      <div class="form-group">
        <label for="name">Name</label>
        <input class="form-control" type="text" placeholder="Enter Name..." id="name" v-model="user.name">
      </div>
      <div class="form-group">
        <label for="number">Phone Number</label>
        <input class="form-control" type="text" placeholder="Enter Number..." id="number" v-model="user.number">
      </div>
      <div class="form-group">
        <label for="location">Location</label>
        <input class="form-control" type="text" placeholder="Enter Location..." id="location" v-model="user.location">
      </div>
      <button class="btn btn-info" type="submit" name="button">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "update",
  data() {
    return {
      user: {}
    }
  },
  methods: {
    fetchUser(id) {
        this.$http.get('http://api.aj-jerath.com/slimapp/api/user/'+id).then((res) => {
          this.user = res.body
        });
      },
    updateUser(e) {
      let updateInfo = {
        name: this.user.name,
        number: this.user.number,
        location: this.user.location
      }
      this.$http.put('http://api.aj-jerath.com/slimapp/api/user/update/'+this.$route.params.id, updateInfo).then((res) => {
        this.$router.push({path: '/projects/vue'})
      });
      e.preventDefault()
    },
    goBack() {
      this.$router.go(-1);
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
      #delete {
        margin-left: 10px;
        margin-bottom: 10px;
      }
    }
    @media(max-width:991px) {
      small {
          padding-left: 10px;
      }
    }
</style>
