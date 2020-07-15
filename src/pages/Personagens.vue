<template>
  <q-page class="flex container" dark>
    <div class="row justify-araound">
      <div
        v-for="persona in characters_whith_image"
        :key="persona.id"
        class="col-lg-1 col-md-2 col-sm-3 col-xs-6 justify-center"
        v-on:click="opendetail(persona)"
      >
        <personagem
          :name="persona.name.substr(0,5)"
          :descricao="persona.description"
          :thumbnail="getImagem(persona)"
        ></personagem>
      </div>
    </div>

    <div class="row justify-center" v-if="most" v-on:click="closedetail()">
      <div :key="personagensDetail.id">
        <personagemDetail
          class="detail"
          :name="personagensDetail.name"
          :descricao="personagensDetail.description"
          :thumbnail="getImagem(personagensDetail)"
        ></personagemDetail>
      </div>
    </div>
  </q-page>
</template>

<script le>
import MarvelApi from "components/MarvelAPI.js";
import Personagem from "components/Personagens";
import PersonagemDetail from "components/PersonagensDetail";
import router from "../router/routes";

export default {
  name: "PagePersonagens",
  components: {
    Personagem,
    PersonagemDetail
  },
  data() {
    return {
      personagens: [],
      personagensDetail: null,
      most: false
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
    opendetail(persona) {
      this.most = !this.most;
      this.showDetail(persona);
    },
    closedetail() {
      this.most = !this.most;
    },

    showDetail(persona) {
      console.log("persona", persona);
      console.log("detail", this.personagensDetail);
      this.personagensDetail = persona;
    },
    info: function(id) {
      var aux = this.personagens.filter(person => person.id === id);
      console.log(aux[0].name);
      router.push({
        path: "/detail",
        component: () => import("pages/PersonagensDetail")
      });
    }
  }
};
</script>
<style scoped>
.detail {
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  z-index: 2;
}
</style>
