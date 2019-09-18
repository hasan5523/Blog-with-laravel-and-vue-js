<template>
    <div class="new_cat">
        <div class="row justify-content-around">
            <div class="col-md-6">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Edit Category</h3>
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->
                    <form role="form" @submit.prevent = "updateCategory">

                        <div class="card-body">

                            <div class="form-group">
                                <label for="exampleInputEmail1"></label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter category name" v-model="form.cat_name" name="cat_name"
                                       :class="{ 'is-invalid': form.errors.has('cat_name') }">
                                <has-error :form="form" field="cat_name"></has-error>
                            </div>



                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Edit",
        mounted(){
          axios.get(`/editcategory/${this.$route.params.categoryid}`)
              .then((response)=>{
                  this.form.fill(response.data.category);
              })
        },
        data(){
            return{
                form: new Form({
                    cat_name: '',

                })
            }
        },
        methods:{
            updateCategory(){
                this.form.post(`/updatecategory/${this.$route.params.categoryid}`)
                    .then(({ data }) => {
                        this.$router.push('/categoryList');
                        Toast.fire({
                            type: 'success',
                            title: 'Category Updated successfully'
                        })
                    })
            }
        }
    }
</script>

<style scoped>

</style>