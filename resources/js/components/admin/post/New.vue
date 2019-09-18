<template>
    <div class="col-md-12">
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Add new Post</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form role="form" @submit.prevent="addNewPost()" enctype="multipart/form-data">
                <div class="card-body">
                    <div class="form-group">
                        <label for="postTitle">Title</label>
                        <input type="text" v-model="form.title" name="title" class="form-control" :class="{ 'is-invalid': form.errors.has('title') }" id="postTitle" placeholder="Enter title">
                        <has-error :form="form" field="title"></has-error>
                    </div>

                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea v-model="form.description" name="description" class="form-control" :class="{ 'is-invalid': form.errors.has('description') }" id="description" placeholder="Enter description"></textarea>
                        <has-error :form="form" field="description"></has-error>
                    </div>

                    <div class="form-group">
                        <label>Select Category</label>
                        <select class="form-control" name="category" :class="{ 'is-invalid': form.errors.has('category') }" v-model="form.cat_id">
                            <option disabled value="">Select one</option>
                            <option value="s" :value = "category.id" v-for="category in getAllCategory">{{category.cat_name}}</option>

                        </select>
                        <has-error :form="form" field="category"></has-error>
                    </div>

                    <div class="form-group" >
                        <label for="photo">Post Image</label><br>
                                <input type="file" @change="changePhoto"   id="photo" name="photo" :class="{ 'is-invalid': form.errors.has('photo') }">
                        <div class="showImage" v-if="showImage">
                            <img v-bind:src="form.photo" />
                        </div>

                        <has-error :form="form" field="photo"></has-error>
                    </div>

                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "New",

        data(){
            return{
                url: null,
                showImage:false,
                form: new Form({
                    title: '',
                    description: '',
                    cat_id:'',
                    photo: '',
                })
            }

        },

        mounted(){
            this.$store.dispatch("allCategory");
        },

        computed:{
            getAllCategory(){
                return this.$store.getters.getCategory;
            }
        },

        methods:{
            changePhoto: function(event){
                this.showImage = true;

                let file = event.target.files[0];

                if(file.size>1048576){
                    Swal.fire({
                        type: 'error',
                        text: 'File size must be less then 1M',

                    })

                }else{
                    this.url = URL.createObjectURL(file);

                    let reader = new FileReader();
                    reader.onloadend = (e)=> {
                        this.form.photo = e.target.result

                    };

                    reader.readAsDataURL(file);

                }



            },

            addNewPost(){
                this.form.post('savePost')
                    .then( (response)=>{

                        this.$router.push('/post-list');
                        Toast.fire({
                            type: 'success',
                            title: 'Post added successfully'
                        })
                    }).catch( ()=>{

                })
            }
        }
    }
</script>

<style scoped>

    .showImage img{
        width:195px;
        height: 195px;
        padding: 4px;
        border: 1px solid #e6e6e6;

    }
</style>