export const getColor = () => ({
    data: () => ({
        color: ""
    }),
    methods: {
        getColorFromLS() {
            const colorFromLS = JSON.parse(localStorage.getItem("color"));
            this.color = colorFromLS ? colorFromLS : "#C6FF00";
        }
    },
    created() {
        this.getColorFromLS();
    },
})