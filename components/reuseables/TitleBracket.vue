<template>
  <h1 :id="titleId" class="divider">
    <span />
    <span class="text-span">
      <div class="bracket left-bracket">&#123;</div>
      {{ title }}
      <div class="bracket right-bracket">&#125;</div>
    </span>
    <span />
  </h1>
</template>

<script>
export default {
  name: 'TitleBracket',
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      default: ''
    }
  }
};
</script>
