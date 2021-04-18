export default {
    name: "TheMovieThumbnail",

    props: ["movie"],

    template: `
    
        <section class="media">
            <img @click="loadPlayer(movie)" :src='"images/" + movie.movies_cover' alt="movie thumb">
            <p>{{ movie.movies_title }}</p>
        </section>

    `,

    methods: {
        loadPlayer(movie) {
            // debugger;
        }
    }
}

            