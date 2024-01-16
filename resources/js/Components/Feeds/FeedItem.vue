<script setup lang="ts">
import FaIcon from '@/Components/FaIcon.vue';
import { Feed } from '@/Types/Feeds/feed.type';
import dayjs from 'dayjs';

defineProps<{
  feed: Feed
}>()
</script>

<template>
  <div class="border rounded bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600">
    <div class="p-3">{{ feed.content }}</div>
    <div class="border-t flex justify-between dark:border-gray-600 text-sm px-3 py-2">
      <div>
        <img
          v-if="feed.user.profile_photo_url"
          :src="feed.user.profile_photo_url"
          :alt="feed.user.name"
          class="inline rounded-full h-6 w-6 object-cover mr-1"
        />

        <FaIcon v-else icon="user" mr />
        {{ feed.user.name }}
      </div>
      <div>
        <FaIcon icon="calendar" mr />
        {{ dayjs(feed.created_at) }}
      </div>
    </div>
  </div>
</template>
