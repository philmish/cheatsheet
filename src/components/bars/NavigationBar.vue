<script setup>
import indexedDocsDirectory from "@/assets/json/indexed_docs_directory.json"; // Generated file with indexed docs dict

const emit = defineEmits(["pathUpdated"]);

function setPathInURL(path) {
  window.history.replaceState(null, document.title, `?path=${path}`);
  emit("pathUpdated");
}
</script>

<template lang="pug">
v-navigation-drawer(expand-on-hover rail permanent)
  v-list(nav)
    v-list-group(v-for="group in indexedDocsDirectory" :key="group.title")
      template(v-slot:activator="{ props }")
        v-list-item(v-bind="props" :prepend-icon="group.icon" :title="group.title")
      v-list-item(v-for="item in group.links" :key="item.title" :title="item.title" @click="setPathInURL(item.path)")
  
  v-list-item(prepend-icon="mdi-information-box-outline" title="Imprint" @click="setPathInURL('src/docs/imprint.md')")
</template>
