<template>
  <q-page class="flex container" dark>
    <div class="row justify-araound">
      <div
        v-for="persona in personagens"
        :key="persona.id"
        class="col-lg-1 col-md-2 col-sm-3 col-xs-6 justify-center"
      >
        <personagem
          :name="persona.name"
          :descricao="persona.description"
          :thumbnail="getImagem(persona)"
        ></personagem>
      </div>
    </div>
  </q-page>
</template>

<script>
import MarvelApi from "components/MarvelAPI.js";
import Personagem from "components/Personagens";

export default {
  name: "PagePersonagens",
  components: {
    Personagem

  },
  data() {
    return {
      personagens: [],
    };
  },
  created() {
    MarvelApi.getAllCharapters(50, charapters => {
      this.personagens = charapters.data.data.results;
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
