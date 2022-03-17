<template>
  <div class="background-circles">
    <span style="position: absolute" class="circles-left">
      <span class="position: relative">
        <div class="circle-1" />
        <div class="circle-2" />
        <div class="circle-3" />
      </span>
    </span>
    <span
      v-if="$vuetify.breakpoint.mdAndUp"
      style="position: absolute"
      class="circles-right"
    >
      <span class="position: relative">
        <div class="circle-1" />
        <div class="circle-2" />
        <div class="circle-3" />
      </span>
    </span>
  </div>
</template>
