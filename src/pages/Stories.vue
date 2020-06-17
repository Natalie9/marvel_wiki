<template>
  <q-page class="flex container" dark>
    <div class="row justify-araound">
      <div
        v-for="story in stories"
        :key="story.id"
        class="col-lg-1 col-md-2 col-sm-3 col-xs-6 justify-center"
      >
        <historia
          :name="story.title"
          :descricao="story.description"
          :thumbnail="getImagem(story)"
        ></historia>
      </div>
    </div>
  </q-page>
</template>

<script>
import MarvelApi from "components/MarvelAPI.js";
import Historia from "components/Historias";

export default {
  name: "PageHistorias",
  components: {
    Historia

  },
  data() {
    return {
      stories: [],
    };
  },
  created() {
    MarvelApi.getAllStories(100, stories => {
      this.stories = stories.data.data.results;
    });
  },
  methods: {
    getImagem: function(quadrinho) {
      if (quadrinho.thumbnail) {
        console.log(quadrinho.thumbnail.path)
        return quadrinho.thumbnail.path + ".jpg";
      }
    }
  }
};
</script>
