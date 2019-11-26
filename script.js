Vue.component("heros", {
  data: function() {
    return {
      count: 0,
      iscodename: false,
      class: 'codename'
    };
  },
  props: ["name", "codename", "increaseParent"],
  template: `<li @click="check" v-bind:class="{'codename' : iscodename}" ><span @click="toggleName">{{!iscodename ? name : codename}} </span><button @click="countUp"><i class="far fa-thumbs-up"></i> Like {{count}}</button></li>`,
  methods: {
    toggleName: function() {
      this.iscodename = !this.iscodename;
    },
    countUp: function() {
      this.count++;
      this.$emit("increaseparent");
    },
  
    check() {
      var that = this;
      if (this.iscodename) {
        that.code = true;
      } else {
        that.code = false;
      }
    }
  }
});

new Vue({
  el: "#app",
  data: {
    names: [
      { name: "Protagonist", codename: "Joker", code: false },
      { name: "Anne", codename: "Panther", code: false },
      { name: "Ryuji", codename: "Skull", code: false }
    ],
    masterCount: 0,
    isallcodename: ''
  }
});