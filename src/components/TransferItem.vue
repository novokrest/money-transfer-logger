<template>
    <tr>
      <td class="">{{ transfer.id }}</td>
      <td class="">{{ transfer.amount }}</td>
      <td class="">{{ transfer.source }}</td>
      <td class="">{{ transfer.destination }}</td>
      <td class="">{{ transfer.createdDt }}</td>
      <td class="">{{ transfer.updatedDt }}</td>
      <td class="">
        <input v-model="transfer.done" type="checkbox" />
      </td>
      <td>
        <button @click="remove" type="button" class="btn btn-danger">Remove</button>
      </td>
    </tr>
</template>

<script>
import api from '@/client/api.js'

export default {
  props: {
    transfer: {
      type: Object,
      required: true
    }
  },
  methods: {
    remove () {
      const transferId = this.transfer.id
      api.deleteTransfer(transferId).then(data => {
        if (data.ok) {
          this.$emit('transferRemoved', transferId)
        }
      })
    }
  }
}
</script>