<template>
  <div class="q-pa-sm row justify-center row">
    <q-card class="my-card col-12" dark>
      <q-img :src="thumbnail" basic contain> </q-img>
      <q-card-section>
        {{ concat_name }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "personagem",
  props: {
    thumbnail: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    descricao: {
      type: String
    }
  },
  computed: {
    concat_name: function(){
      console.log(this.name.length)
      if (this.name.length > 5){
        return this.name.substr(0,3) + '...'
      }
      else{
        return this.name
      }
    }
  },
  methods: {}
};
</script>
<style scoped>
.imagem-quadrinho {
  width: 120px;
}
.card-default {  
  padding: 28px;
  margin: 18px;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-rows: auto 1fr;
  /* flex-direction: column; */
  background: #fff !important;
}
</style>
