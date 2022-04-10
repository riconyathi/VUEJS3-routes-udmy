<template>
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

    <!--  ITEM -->
    <div v-for="(article) in  articles"
        :key="article.id"
     class="col">
        <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" :src="'http://placebeard.it/640/480?' + Math.random() "/>
            <div class="card-body">
                <p>{{article.excerpt}}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>


<script>
 import axios from 'axios';
export default{
   
  data(){

    return {
      articles: []
    }
  },
  methods:{
      loadArticles(){
          axios.get('http://localhost:3004/articles')
          .then(response => {
              this.articles =  response.data
          })
          .catch(err => {
              console.log(err)
          });
      }
    
  },
mounted(){
 this.loadArticles()
}
}
</script>