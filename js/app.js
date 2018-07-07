const media = [
    {
      title: "Who Moved My Cheese?",
      description: "A timeless business classic, Who Moved My Cheese? uses a simple parabel to reveal profound truths about dealing with change so that you can enjoy less stress and more success in your work and in your life.",
      type: "book",
      contributor: "Johnson Spencer",
      showDetail: false,
    },
    {
      title: "Think and Grow Rich",
      description: "Think and grow rich is the most important financial book ever written. Napoleon Hill researched more than forty millionaires to find out what made them the men that they were. In this book he imparts that knowledge to you. Once you've read this book you will understand what gives certain people an edge over everyone else. By following the advice laid out clearly in this book you'll be the one with an edge. It's time to stop wondering what it's like to be rich and start knowing. This book has changed countless lives and it can change yours! Unlike many of the other editions on the market today, this edition is complete and unabridged!",
      type: "book",
      contributor: "Napoleon Hill",
      showDetail: false
    },
    {
      title: "God Never Blinks. 50 Lessons for Life's Little Detours",
      description: "Already an internet phenomenon, these wise and insightful lessons by popular newspaper columnist and Pulitzer Prize finalist Regina Brett will make you see the possibilities in your life in a whole new way.",
      type: "e-book",
      contributor: "Regina Brett",
      showDetail: false
    },
    {
      title: "The Best You Magazine",
      description: "The Best You magazine is the leading personal and professional growth publication, featuring the most effective and current innovations in lifestyle-enhancement, self-improvement and personal development. The magazine offers advice from industry leaders and aspiring influencers, as well as original interviews, research, visionary brands, modern technologies and essential tips for becoming the best you.",
      type: "magazine",
      contributor: "",
      showDetail: false
    },
    {
      title: "Be The Miracle. 50 Lessons for Making the Impossible Possible",
      description: "Want to live your dreams - or even surpass them? Want the world to change for the better? Want to see a miracle? What are we waiting for? Why not be the miracle?",
      type: "book",
      contributor: "Regina Brett",
      showDetail: false
    },
    {
      title: "Awaken the Giant Within",
      description: "The ultimate program for improving the quality of every aspect of your life (personal or business, physical or emotional) Awaken the Giant Within gives you the tools you need to immediately become the master of your own fate.",
      type: "CD",
      contributor: "Anthony Robbins",
      showDetail: false
    },
    {
      title: "The Slight Edge: Turning Simple Disciplines Into Massive Success",
      description: 'Why is it that some people make dream after dream come true, while others just continue dreaming and spend their lives building dreams for someone else? One simple reason: those that are "successful" have found their SLIGHT EDGE! The Slight Edge is not just another self-help, motivation tool of methods you must learn in order to make it up the path of success. It simply shows you how to create powerful results from the simple daily activities of your life, by using tools that are already within you.',
      type: "CD",
      contributor: "Jeff Olson",
      showDetail: false
    },
    {
      title: "Loving What Is: Four Questions That Can Change Your Life",
      description: 'Out of nowhere, like a breeze in a marketplace crowded with advice, comes Byron Katie and "The Work." In the midst of a normal life, Katie became increasingly depressed, and over a ten-year period sank further into rage, despair, and thoughts of suicide. Then one morning, she woke up in a state of absolute joy, filled with the realization of how her own suffering had ended. The freedom of that realization has never left her, and now in Loving What Is you can discover the same freedom through The Work.',
      type: "e-book",
      contributor: "Byron Katie",
      showDetail: false
    },
    {
      title: "Awareness",
      description: "The heart of Anthony de Mello's bestselling spiritual message is awareness. Mixing Christian spirituality, Buddhist parables, Hindu breathing exercises, and psychological insight, de Mello's words of hope come together in Awareness in a grand synthesis. In short chapters for reading in quiet moments at home or at the office, he cajoles and challenges: We must leave this go-go-go world of illusion and become aware. And this only happens, he insists, by becoming alive to the needs and potential of others, whether at home or in the workplace. Here, then, is a masterful book of the spirit, challenging us to wake up in every aspect of our lives.",
      type: "e-book",
      contributor: "Anthony De Mello",
      showDetail: false
    },
    {
      title: "Who am I?: 16 Basic Desires that Motivate Our Actions Define Our Personalities",
      description: "Sex? Social standing? Social justice? With this breakthrough study of the motivational forces behind human behavior, and grounded in the most up-to-date psychological research available, Dr. Steven Reiss explains the 16 desires and values that shape our behavior-and shows how the ways we prioritize them determines our personality.",
      type: "book",
      contributor: "Steven Reiss",
      showDetail: false
    },
    {
      title: "Rich Dad, Poor Dad",
      description: "Personal finance author and lecturer Robert T. Kiyosaki developed his unique economic perspective from two very different influences - his two fathers. One father (Robert's real father) was a highly educated man but fiscally poor. The other father was the father of Robert's best friend - that Dad was an eighth-grade drop-out who became a self-made multi-millionaire. The lifelong monetary problems experienced by his poor dad pounded home the counterpoint communicated by his rich dad. Taking that message to heart, Kiyosaki was able to retire at 47.",
      type: "book",
      contributor: "Robert T. Kiyosaki",
      showDetail: false
    },
    {
      title: "How to Win Friends AND Influence People",
      description: "Dale Carnegie’s rock-solid, time-tested advice has carried countless people up the ladder of success in their business and personal lives. One of the most groundbreaking and timeless bestsellers of all time, How to Win Friends & Influence People will teach you: six ways to make people like you, twelve ways to win people to your way of thinking and nine ways to change people without arousing resentment.",
      type: "CD",
      contributor: "Dale Carnegie",
      showDetail: false
    },
    {
      title: "Smart woman finish rich",
      description: "Whether you’re working with a few dollars a week or a significant inheritance, Bach’s nine-step program gives you tools for spending wisely, establishing security, and aligning money with your values. Plus, in this completely revised and updated edition, David Bach includes critical new long-term investment advice, information on teaching your kids about money, Internet resources, and new ways to attract greater wealth–personal and financial–into your life.",
      type: "e-book",
      contributor: "David Bach",
      showDetail: false
    },
    {
      title: "The Personality Development",
      description: "The magazine focuses on a personal development plan starts out with identifying the areas in which you want to improve. It helps you start out by making a list of the areas in your life where you have difficulty. Then, order those areas so that you have the issue that is most pressing or needs the most improvement so you can work on that first. It is not necessary to use a personality development plan as a way to fix everything in your life all at once. Instead, you can concentrate on one item at a time. This is a more manageable way to affect change in your life and you will be able to see the results more quickly. The Personality Development magazine thus helps you achieve whatever you want by way means of identifying the weakest areas in yourself and improving it to bring out the real you within YOU!",
      type: "magazine",
      contributor: "",
      showDetail: false
    }
  ]

const app = new Vue({
  el: "#app",
  data: {
    title: "Library resources",
    mediaList: media,
    type: ""
  },
  methods: {
    toggleDetail: function(item){
      item.showDetail = !item.showDetail;
    },
    filterList: function(event){
      this.type = event.target.value;
    }
  },
  computed: {
    uniqueItemsList: function(){
      const uniqueTypesList = [];
      for (var i=0; i<this.mediaList.length; i++){
        if(uniqueTypesList.indexOf(this.mediaList[i].type) == -1){
          uniqueTypesList.push(this.mediaList[i].type);
        }
      }
      return uniqueTypesList;
    }
  }
});
