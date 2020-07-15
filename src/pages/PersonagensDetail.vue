<template>
  <q-page class="flex container">
   <div style="color: white">{{ $route.params.id }}</div>
  </q-page>
</template>

<script>
import MarvelApi from "components/MarvelAPI.js";
import Personagem from "components/Personagens";

export default {
  name: "PagePersonagensDetail",
  components: {
    Personagem
  },
  data() {
    return {
      personagens: []
    };
  },
  computed: {
    characters_whith_image: function() {
      return this.personagens.filter(
        image =>
          image.thumbnail.path !==
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
      );
    }
  },
  created() {
    MarvelApi.getAllCharapters(100, charapters => {
      this.personagens = charapters;
      console.log(this.personagens);
    });
  },
  methods: {
    getImagem: function(quadrinho) {
      if (quadrinho.thumbnail) {
        return quadrinho.thumbnail.path + "/standard_amazing.jpg";
      }
    },
    info: function(id) {
      var aux = this.personagens.filter(person => person.id === id);
      console.log(aux[0].name);
    }
  }
};
</script>
