<template>
    <h3>Add new Transaction</h3>

    <form id="form" @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="text">Text {{ textValue }}</label>
            <input type="text" id="text" v-model="textValue" placeholder="Enter Text....">
        </div>

        <div class="form-control">
            <label for="amount">
            Amount <br /> 
            (negative - expense, positive - income)
            </label>

            <input type="text" v-model="amountValue" placeholder="Enter Amount...." id="amount">
        </div>
        <button class="btn">Add Transaction</button>
    </form>

</template>

<script setup>

import { ref, defineEmits } from 'vue';
import { useToast } from 'vue-toastification';

const textValue = ref('');
const amountValue = ref('');

const emit = defineEmits(['transactionSubmitted']);

const toast = useToast();

const onSubmit = () => {
    if (!textValue.value || !amountValue.value) {
        toast.error("Both fields must be filled");
        return; // Add return to prevent further execution
    }

    const transactionData = {
        text: textValue.value,
        amount: parseFloat(amountValue.value)
    };

    emit('transactionSubmitted', transactionData);

    textValue.value = '';
    amountValue.value = '';
}

</script>
