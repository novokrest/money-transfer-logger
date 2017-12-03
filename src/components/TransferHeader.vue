<template>
  <div class="transfer-header">
    <img src="../assets/dollar.png">
    <h1>{{ header }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      header: 'Money Transfers'
    }
  }
}
</script>

<style scoped>
.transfer-header {
  text-align: center;
  margin-bottom: 50px;
}

img {
  width: 300px;
}
</style>