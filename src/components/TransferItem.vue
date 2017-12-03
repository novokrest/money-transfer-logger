<template>
    <div class="row">
      <div class="col-sm">{{ transfer.amount }}</div>
      <div class="col-sm">{{ transfer.source }}</div>
      <div class="col-sm">{{ transfer.destination }}</div>
      <div class="col-sm">{{ transfer.createdDateTime }}</div>
      <div class="col-sm">{{ transfer.lastUpdatedDateTime }}</div>
      <div class="col-sm">{{ transfer.status }}</div>
    </tr>
</template>

<script>
export default {
    props: {
        transfer: {
            type: Object,
            required: true
        }
    }
}
</script>