<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <router-link class="navbar-brand" to="/projects/vue">VueJs & SlimPhp Api</router-link>
    <span id="back" v-on:click="goBack" class="col-1"><i class="fas fa-arrow-alt-circle-left fa-2x"></i></span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link active" to="/projects/vue">Search</router-link>
        <router-link class="nav-item nav-link active" to="/projects/vue/user/add">Add User</router-link>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
  #back {
    display: none;
  }

  @media (max-width: 600px) {
    #back {
      display: block;
      color: white;
    }
    #back:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 375px) {
    #back {
      margin-left: -45px;
      font-size: 12px;
    }
  }
</style>
