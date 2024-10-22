<template>
  <span v-if="!href"><slot> </slot></span>
  <a
    v-else-if="isExternal"
    :href="href"
    :target="targetValue"
    :download="downloadValue"
    :rel="relValue"
  >
    <slot> </slot>
  </a>
  <a v-else-if="isContacts" :href="href">
    <slot> </slot>
  </a>
  <NuxtLink v-else-if="isModal" :to="modalLink">
    <slot> </slot>
  </NuxtLink>
  <NuxtLink v-else :to="href">
    <slot> </slot>
  </NuxtLink>
</template>

<script>
  export default {
    name: 'AppLink',
    props: {
      href: {
        type: String,
        required: true,
      },
      target: {
        type: String,
      },
    },
    computed: {
      isExternal() {
        return this.href.includes('http');
      },
      isContacts() {
        return this.href.includes('mailto:') || this.href.includes('tel:');
      },
      isFile() {
        return this.href.split(/([^\/]+)\.([^\/]+)$/)[2]; //eslint-disable-line
      },
      isModal() {
        return this.href.includes('?modal');
      },
      targetValue() {
        if (this.target) return this.target;
        else if (this.isExternal || this.isFile) return '_blank';
        else return null;
      },
      downloadValue() {
        return this.isFile ? true : null;
      },
      relValue() {
        return this.targetValue === '_blank' ? 'nofollow' : null;
      },
      modalLink() {
        const route = this.$route;
        const currentQuery = { ...route.query };
        const modalQuery = this.parseQueryString(this.href);
        const mergedQuery = { ...currentQuery, ...modalQuery };

        return {
          path: route.path,
          query: mergedQuery,
        };
      },
    },
    methods: {
      parseQueryString(queryString) {
        const query = {};
        const queryStart = queryString.indexOf('?');
        if (queryStart === -1) return query;

        const pairs = queryString.slice(queryStart + 1).split('&');
        for (const pair of pairs) {
          const [key, value] = pair.split('=');
          query[decodeURIComponent(key)] = decodeURIComponent(value || '');
        }
        return query;
      },
    },
  };
</script>
