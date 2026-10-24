<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps<{
  src: string;
  width: number;
  height: number;
  label: string;
}>();

const video = ref<HTMLVideoElement | null>(null);
const hydrated = ref(false);
const playing = ref(false);
const muted = ref(true);
const reducedMotion = ref(false);
// Once the visitor pauses, scrolling back into view must not restart playback.
let userPaused = false;
let observer: IntersectionObserver | null = null;

async function play() {
  const el = video.value;
  if (!el) return;
  el.preload = 'auto';
  try {
    await el.play();
  } catch {
    playing.value = false;
  }
}

function toggle() {
  const el = video.value;
  if (!el) return;
  if (el.paused) {
    userPaused = false;
    play();
  } else {
    userPaused = true;
    el.pause();
  }
}

function toggleMute() {
  const el = video.value;
  if (!el) return;
  el.muted = !el.muted;
  muted.value = el.muted;
  // Some browsers pause a video that becomes audible; unmuting should keep it playing.
  if (!el.muted && el.paused && !userPaused) play();
}

onMounted(() => {
  hydrated.value = true;
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const el = video.value;
  if (!el) return;
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[entries.length - 1].isIntersecting) {
        if (!reducedMotion.value && !userPaused) play();
      } else if (!el.paused) {
        el.pause();
      }
    },
    { threshold: 0.35 },
  );
  observer.observe(el);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <div class="product-video relative size-full">
    <video
      ref="video"
      :src="props.src"
      :width="props.width"
      :height="props.height"
      :aria-label="props.label"
      :controls="!hydrated"
      preload="none"
      muted
      loop
      playsinline
      disablepictureinpicture
      class="media-fill"
      @play="playing = true"
      @pause="playing = false"
      @volumechange="muted = ($event.target as HTMLVideoElement).muted"
    />

    <template v-if="hydrated">
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night-950/75 to-transparent" aria-hidden="true" />

      <button
        v-if="!playing"
        type="button"
        class="play-cta absolute inset-0 m-auto flex size-20 items-center justify-center rounded-full border border-champagne-300/60 bg-night-900/55 text-champagne-100 backdrop-blur-md"
        aria-label="شغّلي الفيديو"
        @click="toggle"
      >
        <svg class="size-7 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5.5v13a.6.6 0 0 0 .9.5l10.2-6.5a.6.6 0 0 0 0-1L8.9 5a.6.6 0 0 0-.9.5Z" />
        </svg>
      </button>

      <div class="absolute bottom-4 start-4 flex gap-2">
        <button
          type="button"
          class="btn-round size-11 bg-night-900/55 backdrop-blur-md"
          :aria-label="playing ? 'إيقاف الفيديو مؤقتًا' : 'تشغيل الفيديو'"
          @click="toggle"
        >
          <svg v-if="playing" class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
          <svg v-else class="size-4 translate-x-px" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5.5v13a.6.6 0 0 0 .9.5l10.2-6.5a.6.6 0 0 0 0-1L8.9 5a.6.6 0 0 0-.9.5Z" />
          </svg>
        </button>
        <button
          type="button"
          class="btn-round size-11 bg-night-900/55 backdrop-blur-md"
          :aria-label="muted ? 'تشغيل الصوت' : 'كتم الصوت'"
          @click="toggleMute"
        >
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" stroke="none" />
            <template v-if="muted">
              <path d="M16 9.5l5 5M21 9.5l-5 5" />
            </template>
            <template v-else>
              <path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />
            </template>
          </svg>
        </button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.play-cta {
  transition:
    background-color 0.4s var(--ease-out-soft),
    color 0.4s var(--ease-out-soft),
    transform 0.6s var(--ease-out-soft);
}

@media (hover: hover) {
  .play-cta:hover {
    background: var(--color-champagne-300);
    color: var(--color-night-900);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .play-cta:hover {
    transform: scale(1.06);
  }
}
</style>
