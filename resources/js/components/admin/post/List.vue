<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">All Posts</h3>

            <div class="card-tools">
                <button type="" class="btn btn-primary">
                    <router-link to="/add-post" style="color:#fff;text-decoration: none;">Add Post</router-link>
                </button>
            </div>

        </div>
        <!-- /.card-header -->
        <div class="card-body">
            <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">

                <div class="row">
                <div class="col-sm-12">
                    <table id="example1" class="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
                        <thead>
                            <tr role="row">
                                <th>SL</th>
                                <th>User</th>
                                <th>Category</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr role="row" v-for="(post,index) in allPost">
                                <td >{{index+1}}</td>
                                <td>{{post.user.name}}</td>
                                <td>{{post.category.cat_name}}</td>
                                <td>{{post.title}}</td>
                                <td>{{post.description  | shortLength(50,"...")}}</td>
                                <td><img :src="showImageFullPath(post.photo)"/></td>
                                <td>
                                    <router-link :to="`edit-post/${post.id}`"> edit</router-link>
                                    <a href="" @click.prevent = deletePost(post.id)> delete</a>
                                </td>

                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>

            </div>
        </div>
        <!-- /.card-body -->
    </div>
</template>


<script>
    export default {
        name: "List",
        mounted(){
            this.$store.dispatch('getAllPost');
        },

        computed:{

            allPost(){
                return this.$store.getters.getAllPosts;
            }
        },

        methods:{
            showImageFullPath(img){
                return '/uploadImage/'+img;
            },

            deletePost(id){
                axios.get('/deletPost/' + id)
                    .then(()=>{
                        this.$store.dispatch('getAllPost');
                        Toast.fire({
                            type: 'success',
                            title: 'Post deleted successfully'
                        })
                    }).catch(()=>{

                })
            }
        }
    }
</script>

<style scoped>
img{
    height: 75px;
    width: 75px;
}
</style>