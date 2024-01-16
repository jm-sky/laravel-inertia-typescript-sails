<script setup lang="ts">
import { Feed } from '@/Types/Feeds/feed.type';
import FeedItem from './FeedItem.vue';

defineProps<{
  feeds: Feed[]
}>()
</script>

<template>
  <div class="p-4 grid grid-cols-1 gap-4">
    <FeedItem v-for="feed in feeds" :key="feed.id" :feed="feed" />
  </div>
</template>
