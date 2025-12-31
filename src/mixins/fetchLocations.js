export const fetchLocations = () => ({
  data: () => ({
    locations: []
  }),
  methods: {
    async fetchAllLocations() {
      const url = 'https://mocki.io/v1/c55cbcd1-3b60-46e7-adbf-d286ddf0078b'
      const res = await fetch(url)
      this.locations = await res.json()
    }
  },
  created() {
    this.fetchAllLocations()
  }
})
