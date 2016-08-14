var DATA = '%data%';

var bio = {
  name: 'Breno Polanski',
  role: 'Front End Software Engineer',
  contacts: {
    mobile: '+55 (83) 9 8804.0299',
    email: 'breno.polanski@gmail.com',
    github: 'brenopolanski',
    twitter: '@brenopolanski',
    location: 'Brazil'
  },
  welcomeMessage: 'Software Engineer based in Brazil and core commiter of open source project Saiku Analytics. Mainly focused on front-end development and helping other people by giving presentations, writing articles and creating open source projects.',
  skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Web Applications', 'User Interface', 'WordPress', 'Algorithms', 'Front-end Development', 'Open Source', 'Node.js', 'Git', 'Backbone.js', 'Underscore.js', 'React.js'],
  biopic: 'images/me.jpg',
  display: function() {
    var formattedName = HTMLheaderName.replace(DATA, bio.name);
    var formattedRole = HTMLheaderRole.replace(DATA, bio.role);

    var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace(DATA, bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);

    var formattedBioPic = HTMLbioPic.replace(DATA, bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);

    $('#header').prepend(formattedName + formattedRole);
    $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      for (var i = 0, len = bio.skills.length; i < len; i++) {
        var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);

        $('#skills').append(formattedSkills);
      }
    }
  }
};

bio.display();
