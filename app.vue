<template>
  <div>
    <code>
      {{ resp }}
    </code>
  </div>
</template>

<script setup>
let { data: resp } = await useFetch('/api/words/test')
</script>