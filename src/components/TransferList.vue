<template>
    <div>
        <h1>Money Transfers</h1>
        <div class="container">
            <AddTransferForm 
                @transferAdding="addTransfer" 
            />
            <div v-if="transfer.length">
                <TransferItem 
                    v-for="transfer in transfers"
				    :key="transfer.id"
				    :transfer="transfer"
				    @statusChanged="changeStatus"
                />
            </div>
            <p v-else>
                There were not any money transfer until now.
            </p>
        </div>
    </div>
</template>

<script>
import AddTransferForm from './AddTransferForm'
import TransferItem from './TransferItem'

export default {
    components: {
        AddTransferForm, TransferItem
    },
    data () {
        return {
            transfers: []
        };
    },
    methods: {
        addTransfer (transfer) {
            console.log('Transfer was added:', transfer);
        },

        changeStatus (transferId, status) {
            console.log(`Transfer#${transferId}: ${status}`);
        }
    }
}
</script>