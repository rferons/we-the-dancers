<template>
  <div>
    <d-autocomplete
        :model-value="song"
        :items="songSuggestions"
        :item-name="formatSongTitle"
        placeholder="start typing the name of a song"
        @update:modelValue="setSelectedSong"
        @input="searchForSong($event.target.value)" >
      <template #item="{ item }">
        <div class="song-suggestion">
          <img class="album-thumbnail" :src="getSmallestImage(item.album.images).url" alt="">
          <div>
            <div>{{ item.name }}</div>
            <div>
              <span v-for="(artist, i) in item.artists" :key="artist.id">
                {{ artist.name }}<span v-if="i < item.artists.length - 1">, </span>
              </span>
            </div>
          </div>
        </div>
      </template>
    </d-autocomplete>
  </div>
</template>
<script>
import DAutocomplete from "@/components/FormFields/DAutocomplete";
import { mapState } from 'vuex';

export default {
  name: 'SongRequestForm',
  components: { DAutocomplete },
  props: {
    modelValue: {
      type: Object,
      required: false
    }
  },
  emits: ['update:modelValue'],
  data: () => ({
    song: null,
    songSuggestions: [],
  }),
  computed: {
    ...mapState({
      dance: (state) => state.dance,
      musicProvider: (state) => state.musicProvider
    }),
    selectedSong: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  },
  methods: {
    setSelectedSong(song) {
      this.song = song;
      this.selectedSong = this.songSuggestions.find(s => s.id === song.id)
    },
    async searchForSong(search) {
      if (!search) {
        return []
      }

      const response = await this.musicProvider.search(search, 10)
      this.songSuggestions = response
          .tracks
          .items
          .filter(s => this.dance.disableExplicitSongs ? s.explicit !== true : true);
    },
    getSmallestImage(images) {
      return images.sort((a, b) => a.width - b.width)[0]
    },
    formatSongTitle(song) {
      return `${song.name} - ${song.artists.map(a => a.name).join(', ')}`
    }
  }
}
</script>
<style scoped>
.song-suggestion {
  display: flex;
  align-items: center;
}

.album-thumbnail {
  margin-right: 8px;
  height: 64px;
  width: 64px;
}
</style>