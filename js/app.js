const app = new Vue({ /*vue instance*/
  el: "#app",
  data: {
    title: "Vue appliation!",
    message: "My vue template, wooooow!"
  }
});

const app2 = new Vue({ /*vue instance*/
  el: "#app2",
  data: {
    title: "Hello",
    message: "I'm so glad you're here!",
    name: "Kate",
    img: {
      src: "images/chomik_398000.jpg",
      alt: "hamster"
    }
  }
});

const book = new Vue({
    el: '#book',
    data: {
      title: 'The Sirens of Titan',
      author: 'Kurt Vonnegut',
      summary: 'This is a summary of the Sirens of Titan.',
      authorBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      showDetails: false
    },
    methods: {

    }
});


const colorsOfTheRainbow = ["red", "orange", "yelow", "green", "blue", "indigo", "violet"];

const myRainbow = new Vue({
  el: "#colors",
  data: {
    rainbow: colorsOfTheRainbow
  }
})
