<template>
  <h1 class="bg-body text-body">
    {{ title }}
  </h1>
  <p>{{ message }}</p>
  <p>{{ msg }}</p>
  <p>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </p>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'RootComponent',
    props: {
        msg: { type: String, required: false, default: '' }
    },
    data() {
        return {
            title: 'Hello, Vue !'
        }
    },
    methods: {
        init: function() {
            //
        }
    },
    setup(props) {
        return {
            message: props.msg
        };
    },
    mounted() {
        this.init();
    }
})
</script>
<style scoped>
:host {
    background-color: #ccc;
}
h1 {
    background-color: var(--bs-primary);
}
</style>
