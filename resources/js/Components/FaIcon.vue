<script setup lang="ts">
import { computed } from 'vue'
import { TFontAwesomeType, TFontAwesomeIcon } from '@/Types/fontAwesome.type'

const props = withDefaults(
  defineProps<{
    type?: TFontAwesomeType
    icon: TFontAwesomeIcon
    loading?: boolean
    loadingIcon?: string
    fw?: boolean
    ml?: boolean
    mr?: boolean
  }>(),
  {
    type: 'regular',
    loading: false,
    loadingIcon: 'sync',
    fw: false,
    ml: false,
    mr: false,
  },
)

const iconComp = computed(() => {
  if (props.loading) return `fa-${props.loadingIcon} fa-spin`
  if (`${props.icon}`.startsWith('fa-')) return props.icon

  return `fa-${props.icon}`
})

const fixedWidthComp = computed(() => (props.fw ? 'fa-fw' : ''))

const typeComp = computed(() => {
  if (props.icon?.includes('fa-brands')) return ''
  if (props.icon?.includes('fa-thin')) return ''
  if (props.icon?.includes('fa-regular')) return ''
  if (props.icon?.includes('fa-solid')) return ''
  if (props.type?.startsWith('fa-')) return props.type

  return `fa-${props.type}`
})
</script>

<template>
  <i :class="[typeComp, iconComp, fixedWidthComp, { 'mr-1.5': mr }, { 'ml-1.5': ml }]" />
</template>
