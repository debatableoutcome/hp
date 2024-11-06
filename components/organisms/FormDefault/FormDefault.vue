<template>
  <form @submit.prevent="onSubmit" class="form-default__form">
    <div class="form-default__form-wrapper">
      <div class="form-default__fields">
        <MoleculesRadioGroup
          :options="radioButtons.radioGroup"
          v-model="contactType"
          class="form-default__radio-group"
        />

        <div class="form-default__fields-group">
          <AtomsInput
            v-for="(field, index) in fields"
            :key="index"
            :id="field.input.id"
            :type="field.input.type"
            :name="field.input.name"
            :label="field.input.label"
            v-model="fieldValues[field.input.name]"
            :required="field.input.required"
            :placeholder="field.input.placeholder"
          />
        </div>
      </div>

      <AtomsButton
        :text="button.text"
        :type="button.type"
        :theme="button.theme"
        size="full-width"
        class="form-default__button"
      />
    </div>
  </form>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    radioButtons: Object,
    fields: Array,
    button: Object,
  });

  const contactType = ref(props.radioButtons.contactType);
  const fieldValues = ref({});

  props.fields.forEach((field) => {
    fieldValues.value[field.input.name] = '';
  });

  const onSubmit = () => {
    console.log('Submitted values:', {
      contactType: contactType.value,
      ...fieldValues.value,
    });
  };
</script>

<style lang="scss">
  @import 'FormDefault';
</style>
