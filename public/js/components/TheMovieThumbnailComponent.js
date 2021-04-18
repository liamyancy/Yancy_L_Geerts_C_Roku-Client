export default {
    name: "TheMovieThumbnail",

    props: ["movie"],

    template: `
    <div class="movie-thumb">
        <img @click="loadPlayer(movie)" :src='"images/" + movie.movies_cover' alt="movie thumb">
        <h3>{{ movie.movies_title }}</h3>
    </div>
    `,

    methods: {
        loadPlayer(movie) {
            // debugger;
        }
    }
}

            // <div class="mediaSection movie-thumb">
            //     <section class="media">
            //         <img @click="loadPlayer(movie)" :src='"images/" + movie.movies_cover' alt="movie thumb">
            //         <p>{{ movie.movies_title }}</p>
            //     </section>
            // </div>