import TopBack from 'components/content/topBack/TopBack'
export const backTopMixin = {
  components: {
    TopBack
  },
  data() {
    return {
      isShowTopBack: false,
    }
  },
  methods: {
    topClick() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
  }
}