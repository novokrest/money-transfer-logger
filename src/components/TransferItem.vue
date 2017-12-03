<template>
    <tr>
      <td class="">{{ transfer.amount }}</td>
      <td class="">{{ transfer.source }}</td>
      <td class="">{{ transfer.destination }}</td>
      <td class="">{{ transfer.createdDateTime }}</td>
      <td class="">{{ transfer.lastUpdatedDateTime }}</td>
      <td class="">{{ transfer.status }}</td>
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