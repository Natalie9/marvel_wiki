<template>
  <div class="q-pa-sm row justify-center row">
    <q-card class="my-card col-12" dark>
      <q-img :src="thumbnail" basic contain :ratio="1"> </q-img>

      <q-card-section>
         {{ name }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "historias",
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
  }
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
  display: flex;
  flex-direction: column;
  background: #fff !important;
}
</style>
