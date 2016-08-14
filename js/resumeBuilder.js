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

var work = {
  jobs: [
    {
      employer: 'Meteorite BI',
      title: 'Front End Software Engineer',
      location: 'Brazil',
      dates: 'September 2014 - Until now',
      description: 'I work in Saiku that offers a user friendly, web based analytics solution that lets users, quickly and easily analyse corporate data and create and share reports. The solution connects to a range of OLAP Servers including Mondrian, Microsoft Analysis Services, SAP BW and Oracle Hyperion and can be deployed rapidly and cost effectively to allow users to explore data in real time.'
    },
    {
      employer: 'NUTES (UEPB)',
      title: 'Student Researcher',
      location: 'Brazil',
      dates: 'July 2014 - November 2015',
      description: 'I worked (part-time) researcher at NUTES/UEPB, where I had the opportunity to study and develop a software of electrocardiograms (ECG) and a web app for view medical records.'
    },
    {
      employer: 'Microsoft',
      title: 'Microsoft Student Partner',
      location: 'Brazil',
      dates: 'December 2012 - October 2015',
      description: 'Microsoft Student Partners (MSPs) are student technology leaders, empowered to build Microsoft communities on their campus and share their deep knowledge and passion for technology with their fellow classmates.'
    },
    {
      employer: 'Indra Company',
      title: 'Systems Analyst',
      location: 'Brazil',
      dates: 'June 2013 - September 2014',
      description: 'I worked in SIGSAB (Sistema de Gestão da Informação e do Conhecimento do Semiárido Brasileiro) project, for INSA (Instituto Nacional do Semiárido). The system was developed using open source projects of Business Intelligence (Pentaho BI and Saiku Analytics).'
    },
    {
      employer: 'SENAI',
      title: 'Web Developer',
      location: 'Brazil',
      dates: 'February 2012 - May 2013',
      description: 'I worked with the development of web system SGM (Sistema Gerenciador de Metas) to work in the strategic management of institution and a system for students view class schedules, notes and fill institutional forms.'
    }
  ],
  display: function() {
    if (work.jobs.length > 0) {
      $('#workExperience').append(HTMLworkStart);

      for (var i = 0, len = work.jobs.length; i < len; i++) {
        var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace(DATA, work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('.work-entry').append(formattedEmployerTitle);
        $('.work-entry').append(formattedDates);
        $('.work-entry').append(formattedLocation);
        $('.work-entry').append(formattedDescription);
      }
    }
  }
};

bio.display();
work.display();
