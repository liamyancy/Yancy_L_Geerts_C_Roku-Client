export default {
    name: "TheMovieThumbnail",

    props: ["movie"],

    template: `
    
        <section class="media">
            <video controls>
            <source @click="loadPlayer(movie)" :src='"video/" + movie.movies_trailer' alt="movie thumb">
            </video>
            <p>{{ movie.movies_title }}</p>
        </section>

    `,

    methods: {
        loadPlayer(movie) {
            // debugger;
        }
    }
}

            