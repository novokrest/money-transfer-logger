<template>
    <form>
        <div class="form-group">
            <label for="transfer-amount">Amount</label>
            <input id="transfer-amount" class="form-control" type="number" step="0.01" 
                   placeholder="Enter amount of money to transfer" />
        </div>
        <div class="form-group">
            <label for="transfer-source">Source</label>
            <input id="transfer-source" class="form-control" type="text" 
                   placeholder="Enter information of money source" />
            <small class="form-text text-muted">Specify all information you need later: card number, bank account, bank name etc.</small>
        </div>
        <div class="form-group">
            <label for="transfer-destination">Destination</label>
            <input id="transfer-destination" class="form-control" type="text" 
                   placeholder="Enter information of money destination" />
            <small class="form-text text-muted">Specify all information you need later: card number, receiver name, bank name etc.</small>
        </div>
        <div class="form-group">
            <label for="transfer-created-dt">Created At</label>
            <input id="transfer-created-dt" class="form-control" type="date"
                   placeholder="Enter date and time of money transfer" />
        </div>
        <div class="form-check">
            <label class="form-check-label">
                <input type="checkbox" class="form-check-input">
                Already Done
            </label>
        </div>
        <button type="submit" class="btn btn-success">Save</button>
    </form>
</template>

<script>
export default {
};
</script>