<template>
  <section class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__top-row">
          <div v-if="logo" class="footer__logo">
            <AtomsIcon icon="logo-white" alt="Logo" />
          </div>
          <div v-if="links" class="footer__links">
            <a
              v-for="(link, i) in links"
              :key="i"
              :href="link.href"
              class="footer__links-link"
            >
              {{ link.title }}
            </a>
          </div>
          <div v-if="social" class="footer__social-desktop">
            <a
              v-for="(link, index) in social"
              :key="index"
              :href="link.href"
              class="footer__social-link"
            >
              <AtomsIcon :icon="link.icon" alt="Logo" />
            </a>
          </div>
        </div>

        <div v-if="contactUs || fields" class="footer__middle-row">
          <div v-if="contactUs" class="footer__contact-us">
            <h3 class="footer__contact-us-title">{{ contactUs.title }}</h3>
            <ul class="footer__contacts">
              <li v-for="(contact, index) in contactUs.details" :key="index">
                <strong>{{ contact.title }}: </strong>
                <span v-html="contact.text"></span>
              </li>
            </ul>
          </div>
          <div v-if="fields && button" class="footer__form">
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
              class="footer__form-input"
            />
            <div class="footer__button-container">
              <AtomsButton
                v-if="button"
                :text="button.text"
                :type="button.type"
                :theme="'neon-green'"
                :size="'full-width'"
                class="footer__button"
              />
            </div>
          </div>
          <div v-if="social" class="footer__social-mob">
            <a
              v-for="(link, index) in social"
              :key="index"
              :href="link.href"
              class="footer__social-link"
            >
              <AtomsIcon :icon="link.icon" alt="Logo" />
            </a>
          </div>
        </div>

        <div v-if="footer" class="footer__bottom-row">
          <div
            v-for="(footerItem, index) in footer"
            :key="index"
            class="footer__text"
          >
            <span v-if="footerItem.text">{{ footerItem.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    logo: {
      type: String,
    },
    links: {
      type: Array,
    },
    social: {
      type: Array,
    },
    contactUs: {
      type: Object,
    },
    fields: {
      type: Array,
    },
    fieldValues: {
      type: Array,
    },
    button: {
      type: Object,
    },
    footer: {
      type: Array,
    },
  });

  onMounted(() => {});
</script>

<style lang="scss">
  @import 'Footer';
</style>
