<template>
  <div>
    <BaseInput
    :label=" 'User' "
    @onInput="($event)=>{this.user=$event}"
    />
    <h2> {{user}} </h2>
  </div>
</template>

<script>
import BaseInput from '../components/BaseInput'
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'HelloWorld',
  components: {
    BaseInput,
  },
  computed: {
    ...mapFields([
      'user',
      'pass',
    ])
  },
}
</script>



