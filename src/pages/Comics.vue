<template>
  <q-page class="flex container" dark>
    <div class="row justify-araound">
      <div
        v-for="quadrinho in quadrinhos"
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
      quadrinhos: []
    };
  },
  created() {
    MarvelApi.getAllComics(50, comics => {
      this.quadrinhos = comics.data.data.results;
    });
  },
  methods: {
    getImagem: function(quadrinho) {
      if (quadrinho.thumbnail) {
        return quadrinho.thumbnail.path + ".jpg";
      }
    }
  }
};
</script>
