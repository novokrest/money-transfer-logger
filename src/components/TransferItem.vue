<template>
    <tr>
      <td class="">{{ transfer.amount }}</td>
      <td class="">{{ transfer.source }}</td>
      <td class="">{{ transfer.destination }}</td>
      <td class="">{{ transfer.createdDt }}</td>
      <td class="">{{ transfer.updatedDt }}</td>
      <td class="">
        <div>
        <input v-model="transfer.done" type="checkbox" />
        </div>
      </td>
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