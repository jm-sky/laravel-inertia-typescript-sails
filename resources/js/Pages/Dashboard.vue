<script setup lang="ts">
import AppLayout from '@/Layouts/AppLayout.vue';
import FeedList from '@/Components/Feeds/FeedList.vue';
import { Feed } from '@/Types/Feeds/feed.type';

defineProps<{
  feeds: Feed[]
}>()
</script>

<template>
  <AppLayout title="Dashboard">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
        Dashboard
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
          <FeedList :feeds="feeds" />
        </div>
      </div>
    </div>
  </AppLayout>
</template>
