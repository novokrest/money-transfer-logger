<template>
  <div>
    <TransferHeader />
    <div class="container">
      <AddTransferForm @transferAdded="onTransferAdded" />
      <div class="bottom-buffer" />
      <div v-if="transfers.length">
        <h2>History</h2>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
                <th>Amount</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Created</th>
                <th>Updated</th>
                <th>Status</th>
                <th></th>
            </tr>
          </thead>
          <tbody>
            <TransferItem 
              v-for="transfer in transfers"
              :key="transfer.id"
              :transfer="transfer"
              @statusChanged="changeStatus"
            />
          </tbody>
        </table>
      </div>
      <p v-else class="no-transfer-message">
        There were not any money transfer until now.
      </p>
    </div>
  </div>
</template>

<script>
import TransferHeader from './TransferHeader'
import AddTransferForm from './AddTransferForm'
import TransferItem from './TransferItem'
import api from '@/client/api'

export default {
  components: {
    TransferHeader, AddTransferForm, TransferItem
  },

  data () {
    return {
      transfers: []
    }
  },

  created () {
    this.fetchTransfers()
  },

  methods: {
    onTransferAdded (transfer) {
      console.log('Transfer was added:', transfer)
      this.fetchTransfers()
    },

    fetchTransfers () {
      api.getTransfers().then(transfers => {
        console.log('Fetched transfers:', transfers)
        this.transfers = transfers
      })
    },

    changeStatus (transferId, status) {
      console.log(`Transfer#${transferId}: ${status}`)
    }
  }
}
</script>

<style scoped>
.no-transfer-message {
    text-align: center;
}

div.bottom-buffer {
    margin-bottom: 30px;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
  background-color: #dff0d8;
}
</style>