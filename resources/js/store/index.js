export default {
    state:{
        category:[],
        posts:[],
        blogPost:[],
        singlePost:[],
        allCategories:[],
        latestPost:[]
    },
    getters:{
        getCategory(state){
            return state.category;
        },
        getAllPosts(state){
            return state.posts;
        },
        getBlogPosts(state){
            return state.blogPost;
        },
        singlePost(state){
            return state.singlePost;
        },
        allCategories(state){
            return state.allCategories;
        },
        latestPost(state){
            return state.latestPost;
        }

    },
    actions:{
        allCategory( context ){
            axios.get('/category')
                .then((response) => {
                    context.commit('categories', response.data.categories);
                })
        },

        getAllPost(context){
            axios.get('/post').then( (response)=>{
                context.commit('allPost',response.data.posts);
            });
        },
        getblogPost(context){
            axios.get('/blogpost').then( (response)=>{
                context.commit('getblogPost',response.data.posts);
            });
        },

        getPostById(context,payload){
            axios.get('/singlePost/'+ payload)
                .then( (response)=>{
                context.commit('singlePost',response.data.post);
            });
        },

        allCategoriesforBlog(context){
            axios.get('/categories')
                .then( (response)=>{
                    context.commit('allCategoriesforBlog',response.data.categories);
                });

        },

        getPostByCatId(context,payload){
            axios.get('/categorypost/'+ payload)
                .then( (response)=>{
                    //console.log(response.data.posts);
                    context.commit('getPostByCatId',response.data.posts);
                });
        },

        searchpost(context,payload){
            axios.get('/search?s='+ payload)
                .then( (response)=>{
                    //console.log(response.data.posts);
                    context.commit('getSearchPost',response.data.posts);
                });
        },

        latestPost( context ){
            axios.get('/latestPost').then( (response)=>{
                context.commit('latestPost',response.data.posts);
            });
        }
    },
    mutations:{
        categories( state, data ){
            return state.category = data;
        },

        allPost(state,data){
            return state.posts = data;
        },
        getblogPost(state,data){
            return state.blogPost = data;
        },

        singlePost(state,data){
            return state.singlePost = data;
        },
        allCategoriesforBlog(state,data){
            return state.allCategories = data;
        },
        getPostByCatId(state,data){
            return state.blogPost = data;
        },
        getSearchPost(state,data){
            return state.blogPost = data;
        },
        latestPost(state,data){
            return state.latestPost = data;
        }
    }
}