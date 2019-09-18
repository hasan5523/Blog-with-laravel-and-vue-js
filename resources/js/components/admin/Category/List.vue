<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">All categories</h3>

            <div class="card-tools">
                <button type="" class="btn btn-primary">
                      <router-link to="/add-category" style="color:#fff;text-decoration: none;">Add Category</router-link>
                </button>
            </div>

        </div>
        <!-- /.card-header -->
        <div class="card-body">
            <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
                <div class="row"><div class="col-sm-12 col-md-6">
                    <div class="dataTables_length" id="example1_length"><label>Show
                        <select name="example1_length" aria-controls="example1" class="custom-select custom-select-sm form-control form-control-sm">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select> entries</label>
                    </div>
                </div>
                    <div class="col-sm-12 col-md-6">
                        <div id="example1_filter" class="dataTables_filter">
                            <label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="example1"></label>
                        </div></div></div><div class="row">
                <div class="col-sm-12">
                    <table id="example1" class="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
                        <thead>
                        <tr role="row">
                            <th>SL</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>

                            <tr role="row" class="odd" v-for=" category in getAllCategory">
                                <td >{{category.id}}</td>
                                <td>{{category.cat_name}}</td>
                                <td>{{category.created_at | timeFormat}}</td>
                                <td>
                                    <router-link :to="`/edit-category/${category.id}`"> edit</router-link>
                                    <a href="" @click.prevent = "deleteCategory(category.id)"> delete</a>
                                </td>

                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
                <div class="row">
                    <div class="col-sm-12 col-md-5">
                        <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                    </div>
                    <div class="col-sm-12 col-md-7">
                        <div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                            <ul class="pagination">
                                <li class="paginate_button page-item previous disabled" id="example1_previous">
                                    <a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0" class="page-link">Previous</a>
                                </li>
                                <li class="paginate_button page-item active">
                                    <a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                                </li>
                                <li class="paginate_button page-item ">
                                    <a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0" class="page-link">2</a>
                                </li>
                                <li class="paginate_button page-item ">
                                    <a href="#" aria-controls="example1" data-dt-idx="3" tabindex="0" class="page-link">3</a>
                                </li>
                                <li class="paginate_button page-item ">
                                    <a href="#" aria-controls="example1" data-dt-idx="4" tabindex="0" class="page-link">4</a>
                                </li>
                                <li class="paginate_button page-item ">
                                    <a href="#" aria-controls="example1" data-dt-idx="5" tabindex="0" class="page-link">5</a>
                                </li>
                                <li class="paginate_button page-item ">
                                    <a href="#" aria-controls="example1" data-dt-idx="6" tabindex="0" class="page-link">6</a>
                                </li>
                                <li class="paginate_button page-item next" id="example1_next">
                                    <a href="#" aria-controls="example1" data-dt-idx="7" tabindex="0" class="page-link">Next</a>
                                </li>
                            </ul>
                        </div>
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
            this.$store.dispatch("allCategory");
        },
        computed:{
            getAllCategory(){
                return this.$store.getters.getCategory;
            }
        },
        methods:{
            deleteCategory(id){
                axios.get('/category/' + id)
                    .then(({ data }) => {
                        this.$store.dispatch("allCategory");
                        Toast.fire({
                            type: 'success',
                            title: 'Category deleted successfully'
                        })
                    })
            }
        }
    }
</script>

<style scoped>

</style>