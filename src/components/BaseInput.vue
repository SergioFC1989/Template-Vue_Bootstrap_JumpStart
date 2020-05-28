<template>
  <div>
    <b-form-group>
      <label> {{ label }} </label>
        <b-form-input
            :type="type" 
            :placeholder="placeholder"
            @input="$emit('onInput', $event)"
            required
        />
      </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: ["label","type", "placeholder"],
}
</script>