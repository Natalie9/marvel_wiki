<template>
  <q-page class="flex container" dark>
    <div class="row justify-araound">
      <div
        v-for="quadrinho in comics_whith_image"
        :key="quadrinho.id"
        class="col-lg-1 col-md-2 col-sm-3 col-xs-6 justify-center"
      >
        <quadrinho
          :title="quadrinho.title"
          :descricao="quadrinho.description"
          :thumbnail="getImagem(quadrinho)"
        ></quadrinho>
      </div>
    </div>
  </q-page>
</template>

<script>
import MarvelApi from "components/MarvelAPI.js";

import Quadrinho from "components/Quadrinhos";

export default {
  name: "PageComics",
  components: {
    Quadrinho
  },
  data() {
    return {
      quadrinhos: [],
    };
  },
  created() {
    MarvelApi.getAllComics(100, comics => {
      this.quadrinhos = comics;
    });
  },
  computed: {
    comics_whith_image: function(quadrinho, index) {
      return this.quadrinhos.filter(
        image =>
          image.thumbnail.path !==
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
      );
    }
  },
  methods: {
    getImagem: function(quadrinho) {
      if (quadrinho.thumbnail) {
        return quadrinho.thumbnail.path + "/portrait_uncanny.jpg";
      }
    }
  }
};
</script>
