<template>
    <span id="blogSidebar">
        <div class="span4">
            <aside class="right-sidebar">
              <div class="widget">
                <form class="form-search">
                  <input placeholder="Type something" @keyup = "realSearch" v-model="keyword" type="text" class="input-medium search-query">
                  <button type="submit" @click="realSearch" class="btn btn-square btn-theme">Search</button>
                </form>
              </div>
              <div class="widget">
                <h5 class="widgetheading">Categories</h5>
                <ul class="cat">

                  <li v-for="category in allCategory"><i class="icon-angle-right"></i><router-link :to="`/categories/${category.id}`">{{category.cat_name}}</router-link><span> (20)</span></li>

                </ul>
              </div>
              <div class="widget">
                <h5 class="widgetheading">Latest posts</h5>
                <ul class="recent">
                  <li v-for="(post,index) in blogPost" v-if="index<5">
                    <img :src="`/uploadImage/${post.photo}`" class="pull-left sidebar_img" alt="" />
                    <h6><router-link :to="`/single-blog/${post.id}`">{{post.title}}</router-link></h6>
                    <p>
                      {{post.description | shortLength(100,"...")}}
                    </p>
                  </li>


                </ul>
              </div>
              <div class="widget">
                <h5 class="widgetheading">Popular tags</h5>
                <ul class="tags">
                  <li><a href="#">Web design</a></li>
                  <li><a href="#">Trends</a></li>
                  <li><a href="#">Technology</a></li>
                  <li><a href="#">Internet</a></li>
                  <li><a href="#">Tutorial</a></li>
                  <li><a href="#">Development</a></li>
                </ul>
              </div>
            </aside>
          </div>
    </span>
</template>

<script>
  import _ from 'lodash';

    export default {
        name: "BlogSidebar",
        data(){
            return{
                keyword:''
            }
        },
        mounted(){
            this.$store.dispatch('allCategoriesforBlog');
            this.$store.dispatch('latestPost');
        },
        computed:{
            allCategory(){
                return this.$store.getters.allCategories;
            },
            blogPost(){
                return this.$store.getters.latestPost
            }
        },
        methods:{

            realSearch:_.debounce(function(){
                this.$store.dispatch('searchpost',this.keyword)
            },1000)
        }
    }
</script>

<style scoped>
  .sidebar_img{
    width: 57px !important;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 2px;
    background: #f3f3f3;
  }
</style>