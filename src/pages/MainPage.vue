<template>
 <div>
   <h1>We The Dancers</h1>
   <p>code: {{ $route.params.code }}</p>

   <div>
     currently playing
   </div>

   <div>
     Up next...
   </div>

   <div>
     What the people want..
   </div>
 </div>
</template>

<script>
import { DataStore } from 'aws-amplify'
import {Dance, DanceStatus} from "@/models";
export default {
  data: () => ({
    dance: {}
  }),
  async mounted() {
    this.dance = await DataStore
        .query(Dance, (c) => {
          return c
              .code('eq', this.$route.params.code)
              .status('eq', DanceStatus.ACTIVE)
        })
        .then(results => {
          if (results.length > 0) {
            return results[0];
          }

          this.$router.push({path: `/?error=Dance Code ${this.$route.params.code} is invalid`})
        });
  }
}
</script>