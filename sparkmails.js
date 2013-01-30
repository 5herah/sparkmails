Sparks = new Meteor.Collection('sparks');

if (Meteor.isClient) {

  Meteor.Router.add({
    '/': 'home',
    '*/mindmaps': 'mindmaps'
  });

  Template.nav.events({
    'click .btn' : function () {
      switch (event.target.innerHTML){
        case "Home":
          Meteor.Router.to('/');
          break;
        case "MindMaps":
          Meteor.Router.to('mindmaps');
          break;
        case "Settings":
          //pop up lightbox
          alert("settings here!");
          break;
      }
    }
  });

  Template.sparkText.sparks = function(){
    return Sparks.find();
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Sparks.find().count() === 0) {
      var sparks = ["One day one of my little nephews came up to me and asked me if the equator was a real line that went around the Earth, or just an imaginary one. I had to laugh. Laugh and laugh. Because I didn't know, and I thought that maybe by laughing he would forget what he asked me.",
     "Maybe in order to understand mankind, we have to look at the word itself. Mankind. Basically, it's made up of two separate words: 'mank' and 'ind'. What do these words mean? It's a mystery, and that's why so is mankind.",
     "If you were an ancient barbarian, I bet a real embarrassing thing would be if you were sacking Rome and your cape got caught on something and you couldn't get it unhooked, and you had to ask another barbarian to unhook it for you.",
     "If you ever fall off the Sears Tower, just go real limp, because maybe you'll look like a dummy and people will try to catch you because, hey, free dummy.",
     "If a kid asks where rain comes from, I think a cute thing to tell him is 'God is crying.' And if he asks why God is crying, another cute thing to tell him is 'Probably because of something you did.'",
     "If someone told me it wasn't 'fashionable' to talk about freedom, I think I'd just have to look him square in the eye and say, 'Okay, YOU TELL ME what's 'fashionable'.' But he won't. And you know why? Because you can't ask someone what's fashionable in a smart-alecky way like that. You have to be friendly and say, 'By the way, what's fashionable?'"];
      for (var i = 0; i < sparks.length; i++)
        Sparks.insert({spark: sparks[i], date: Date()});
    }
  });
}
