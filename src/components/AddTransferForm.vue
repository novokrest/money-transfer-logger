<template>
<form @submit.prevent="saveTransfer" class="form-horizontal">
    <div class="form-group row">
        <label for="transfer-amount">Amount</label>
        <div class="input-group col-sm-4">
            <input v-model.number="transfer.amount" 
                   id="transfer-amount" class="form-control" type="number" step="1" min="0"
                   placeholder="Enter amount of money" />
            <div class="input-group-addon">.00</div>
        </div>
        <small class="form-text text-muted">The amount of money you are transfering (or already transfered)</small>
    </div>
    <div class="form-group row">
        <label for="transfer-source" class="">Source</label>
        <div class="">
            <input v-model="transfer.source"
                   id="transfer-source" class="form-control" type="text" 
                   placeholder="Enter information of money source" />
            <small class="form-text text-muted">Specify all information you need later: card number, bank account, bank name etc.</small>
        </div>
    </div>
    <div class="form-group row">
        <label for="transfer-destination" class="">Destination</label>
        <div class="">
            <input v-model="transfer.destination"
                   id="transfer-destination" class="form-control" type="text" 
                   placeholder="Enter information of money destination" />
            <small class="form-text text-muted">Specify all information you need later: card number, receiver name, bank name etc.</small>
        </div>
        
    </div>
    <div class="form-group">
        <label for="transfer-issued-dt" class="">Issued</label>
        <div id="transfer-issued-dt">
            <div class="issued-input-holder col-sm-6">
                <input v-model="transfer.issuedDate"
                       id="transfer-issued-date" class="form-control" type="date" />
                <small class="form-text text-muted">The date when you have started money transaction</small>
            </div>

            <div class="col-sm-1"></div>
            
            <div class="issued-input-holder col-sm-5">
                <input v-model="transfer.issuedTime"
                       id="transfer-issued-time" class="form-control" type="time" />
                <small class="form-text text-muted">The time when you have started money transaction</small>
            </div>
        </div>
        
    </div>
    <div class="form-group">
        <div class="checkbox">
            <label>
                <input v-model="transfer.done" type="checkbox"> Already Done
            </label>
        </div>
        <small class="form-text text-muted">Has transaction already done?</small>
    </div>
    <div class="form-group">
        <div class="">
            <button :disabled="!canSaveTransfer() || saving" type="submit" class="btn btn-success">
                {{ btnTitle}}
            </button>
            <img v-if="saving" class="loader pull-right" src="../assets/loader.gif" />
        </div>
    </div>
    <div v-if="errorMessage" class="form-group alert alert-danger">
        {{ errorMessage }}
    </div>
</form>

</template>

<script>
import dateFormat from 'dateformat'
import api from '@/client/api'

const now = new Date()
const nowDate = dateFormat(now, 'yyyy-mm-dd')
const nowTime = dateFormat(now, 'hh:MM')

export default {
  data () {
    return {
      transfer: {
        amount: '',
        source: 'Sberbank',
        destination: 'Sberbank',
        issuedDate: nowDate,
        issuedTime: nowTime,
        done: false
      },
      saving: false,
      btnTitle: 'Save',
      errorMessage: ''
    }
  },

  methods: {
    saveTransfer () {
      this.saving = true
      this.btnTitle = 'Saving'
      this.errorMessage = ''
      const transfer = this.transfer
      console.log('Saving transfer:', transfer)
      api.postTransfer(transfer).then(data => {
        this.saving = false
        this.btnTitle = 'Save'
        if (!data.ok) {
          this.errorMessage = `Failed to save transfer: ${data.status}`
          return
        }
        this.$emit('transferAdded', transfer)
      })
    },

    canSaveTransfer () {
      const transfer = this.transfer
      return transfer.amount &&
             transfer.amount > 0 &&
             transfer.source &&
             transfer.destination &&
             transfer.issuedDate && transfer.issuedTime
    }
  }
}
</script>

<style scoped>
.issued-input-holder {
    padding: 0px 0px 0px 0px;
}

.loader {
    height: 25px;
}
</style>