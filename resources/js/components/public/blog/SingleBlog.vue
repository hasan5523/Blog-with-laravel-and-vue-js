<template>
    <span id="singleBlog">
            <section id="inner-headline">
      <div class="container">
        <div class="row">
          <div class="span4">
            <div class="inner-heading">
              <h2>Post right sidebar</h2>
            </div>
          </div>
          <div class="span8">
            <ul class="breadcrumb">
              <li><a href="#"><i class="icon-home"></i></a><i class="icon-angle-right"></i></li>
              <li><a href="#">Blog</a><i class="icon-angle-right"></i></li>
              <li class="active">Blog post right sidebar</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="content">
      <div class="container">
        <div class="row">
          <div class="span8">
            <article>
              <div class="row">
                <div class="span8">
                  <div class="post-image">
                    <div class="post-heading">
                      <h3><a href="#">{{singlePost.title}}</a></h3>
                    </div>
                    <img :src="`/uploadImage/${singlePost.photo}`" alt="" class="postImage"/>
                  </div>
                  <p>
                    {{singlePost.description}}
                  </p>

                  <div class="bottom-article">
                    <ul class="meta-post">
                      <li v-if="singlePost.user"><i class="icon-user"></i><a href="#"> {{singlePost.user.name}}</a></li>
                      <li v-if="singlePost.category"><i class="icon-folder-open"></i><a href="#"> {{singlePost.category.cat_name}}</a></li>
                      <li><i class="icon-tags"></i><a href="#">Web design</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>

          </div>
          <BlogSidebar></BlogSidebar>
        </div>
      </div>
    </section>
    </span>
</template>

<script>
    import BlogSidebar from './BlogSidebar';
    export default {
        name: "SingleBlog",

        components:{
            BlogSidebar
        },

        computed:{
          singlePost(){
              return this.$store.getters.singlePost
          }
        },
        methods:{
            singleBlogPost(){
                this.$store.dispatch('getPostById',this.$route.params.postid);
            }
        },
        mounted(){
            this.singleBlogPost();
        },
        watch:{
            $route(to,from){
                this.singleBlogPost();
            }

        }
    }
</script>

<style scoped>
.postImage{
  width: 100% !important;
  height: 400px !important;
}
</style>