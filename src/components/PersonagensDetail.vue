<template>
  <q-page>
    <div class="backgound-detail">
      <div class="card">
        <div class="div-img">
          <q-img :src="thumbnail" basic contain class="img-detail"> </q-img>
        </div>
        <div class="txt-infos">
          <div class="">
            <div class="txt-persona">
              <b>{{ name }}</b>
            </div>
            <div class="txt-decription" v-if="descricao">
              <b>Description: </b>
              {{ descricao }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "personagemDetail",
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
  methods: {}
};
</script>
<style scoped>
body {
  width: 100%;
}
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: rgb(14, 13, 13);
  border-radius: 10px;
  padding: 20px;
  width: 70%;
  position: fixed;
  z-index: 1;
  top: 15%;
  left: 15%;
  height: 80vh;
  overflow: auto;
  
}
.div-img {
  flex: 1 1 250px; /*  Stretching: */
  flex: 0 1 250px; /*  No stretching: */
  margin: 5px;
  margin: 5px;
}
.backgound-detail {
  /* width: 100vw; */
  height: 100%;
  background: rgba(77, 77, 77, 0.863);
  border-radius: 5px;
  /* padding: 28px; */
  color: rgb(243, 52, 52);
  display: grid;
  grid-template-rows: auto 1fr;
 
 
}
.img-detail {
  /* border: #000000 0.1em solid; */
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0 0 20px 0 #df2323;
}
.txt-persona{
  font-size: 1.5em;
}
.txt-decription{
  font-size: 1em;
}
.txt-infos{
  margin: 2em;
  width: 80%;
}
</style>
