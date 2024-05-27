<script setup lang="ts">
import { css } from "~~/styled-system/css"
</script>

<template>
  <div :class="css({ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' })">
    <Demo />
  </div>
</template>
