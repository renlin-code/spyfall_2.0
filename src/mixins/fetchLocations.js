export const fetchLocations = () => ({
    data: () => ({
        locations: []
    }),
    methods: {
        async fetchAllLocations() {
            const url = "../../locations.json";
            const res = await fetch(url);
            this.locations = await res.json();
        }
    },
    created() {
        this.fetchAllLocations();
    },
})