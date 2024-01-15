<script setup lang="ts">
import { Feed } from '@/Types/Feeds/feed.type';
import FeedComponent from './FeedComponent.vue';

defineProps<{
  feeds: Feed[]
}>()
</script>

<template>
  <div class="p-4 grid grid-cols-1 gap-4">
    <FeedComponent v-for="feed in feeds" :key="feed.id" :feed="feed" />
  </div>
</template>
