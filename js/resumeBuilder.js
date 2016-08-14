var bio = {
  'name': 'Breno Polanski',
  'role': 'Front End Software Engineer',
  'contacts': {
    mobile: '+55 (83) 9 8804.0299',
    email: 'breno.polanski@gmail.com',
    github: 'brenopolanski',
    twitter: '@brenopolanski',
    location: 'Brazil'
  },
  'welcomeMessage': 'Software Engineer based in Brazil and core commiter of open source project Saiku Analytics. Mainly focused on front-end development and helping other people by giving presentations, writing articles and creating open source projects.',
  'skills': ['JavaScript', 'jQuery', 'PHP', 'CSS', 'HTML', 'MySQL', 'Windows 8 Development', 'Web Applications', 'User Interface', 'WordPress', 'Algorithms', 'Front-end Development', 'Open Source', 'Saiku UI', 'PouchDB', 'Node.js', 'Git', 'Backbone.js', 'CodeIgniter', 'Jekyll', 'Python', 'Underscore.js', 'Interface de usuário', 'React.js'],
  'biopic': 'images/me.png',
  'display': 'function taking no parameters'
};

var education = {
  schools: [
    {
      'name': 'Facisa - Faculdade de Ciências Sociais e Aplicadas',
      'location': 'Campina Grande, Paraíba, Brazil',
      'degree': 'Bachelor of Computer (BSc.), Information Systems',
      'majors': 'array of strings',
      'dates': '2009 - 2015',
      'url': 'http://www.cesed.br'
    }
  ],
  onlineCourses: [
   {
     'title': 'HTML5 - Homologado pelo W3C',
     'school': 'Microsoft Virtual Academy',
     'dates': 'April 2012',
     'url': 'https://mva.microsoft.com/pt-br/training-courses/html5-homologado-pelo-w3c-8551?l=ZbUEQe10_1804984382'
   },
   {
     'title': 'React for Beginners',
     'school': 'Wes Bos',
     'dates': 'November 2015',
     'url': 'https://reactforbeginners.com'
   }
  ],
  display: 'function taking no parameters'
};

var work = {
  'jobs': [
    {
      'employer': 'Meteorite BI',
      'title': 'Front End Software Engineer',
      'location': 'Brazil',
      'dates': 'September 2014 - Until now',
      'description': 'I work in Saiku that offers a user friendly, web based analytics solution that lets users, quickly and easily analyse corporate data and create and share reports. The solution connects to a range of OLAP Servers including Mondrian, Microsoft Analysis Services, SAP BW and Oracle Hyperion and can be deployed rapidly and cost effectively to allow users to explore data in real time.'
    },
    {
      'employer': 'NUTES (UEPB)',
      'title': 'Student Researcher',
      'location': 'Brazil',
      'dates': 'July 2014 - November 2015',
      'description': 'I worked (part-time) researcher at NUTES/UEPB, where I had the opportunity to study and develop a software of electrocardiograms (ECG) and a web app for view medical records.'
    },
    {
      'employer': 'Microsoft',
      'title': 'Microsoft Student Partner',
      'location': 'Brazil',
      'dates': 'December 2012 - October 2015',
      'description': 'Microsoft Student Partners (MSPs) are student technology leaders, empowered to build Microsoft communities on their campus and share their deep knowledge and passion for technology with their fellow classmates.'
    },
    {
      'employer': 'Indra Company',
      'title': 'Systems Analyst',
      'location': 'Brazil',
      'dates': 'June 2013 - September 2014',
      'description': 'I worked in SIGSAB (Sistema de Gestão da Informação e do Conhecimento do Semiárido Brasileiro) project, for INSA (Instituto Nacional do Semiárido). The system was developed using open source projects of Business Intelligence (Pentaho BI and Saiku Analytics).'
    },
    {
      'employer': 'SENAI',
      'title': 'Web Developer',
      'location': 'Brazil',
      'dates': 'February 2012 - May 2013',
      'description': 'I worked with the development of web system SGM (Sistema Gerenciador de Metas) to work in the strategic management of institution and a system for students view class schedules, notes and fill institutional forms.'
    }
  ],
  display: 'function taking no parameters'
};

var projects = {
  projects: [
    {
      'title': 'Notifier for Udacity Reviewer',
      'dates': 'July 2016',
      'description': 'The extension checks for new notifications every minute and displays notifications that arrived after the last check if there are any. Clicking on the notification opens it on Udacity Dashboard.',
      'images': 'array with string urls'
    },
    {
      'title': 'CSS Flexbox snippets',
      'dates': 'Dezember 2015',
      'description': 'CSS Flexbox for Sublime Text and Atom editor. With more than 3K download.',
      'images': 'array with string urls'
    },
    {
      'title': 'A Saiku REST API client for Node.js',
      'dates': 'June 2015',
      'description': 'This client is designed to make it easy for your Node.js application to request specific resources from Saiku. It uses a query builder-style syntax to let you craft the request being made to the Saiku endpoints, then returns the API server is response to your application as a JavaScript object.',
      'images': 'array with string urls'
    },
    {
      'title': 'SIGSAB - Sistema de Gestão da Informação e do Conhecimento do Semiárido Brasileiro',
      'dates': 'September 2014',
      'description': 'This projects aim is to institutionalize, consolidate and operationalize a computerized information and knowledge management system, through a databank linked to a Geographical Information System (Sistema de Informações Geográficas – SIG) to generate scientific information connected to popular knowledge, aiming at subsidizing the formulation of policies that match the regions context. Another goal is to support other strategic studies and offer relevant services to policy and decision makers.',
      'images': 'array with string urls'
    },
    {
      'title': 'Saiku UI Plugin Boilerplate',
      'dates': 'July 2014',
      'description': 'A jump-start for Saiku UI plugins development.',
      'images': 'array with string urls'
    },
    {
      'title': 'CSS Comments snippets',
      'dates': 'May 2014',
      'description': 'CSS comments snippets for Sublime Text. With more than 7K download.',
      'images': 'array with string urls'
    },
    {
      'title': 'Web App Boilerplate',
      'dates': 'August 2013',
      'description': 'Project designed to create web applications in WebView to Android.',
      'images': 'array with string urls'
    },
    {
      'title': 'Meu Drink App for Windows 8',
      'dates': 'May 2013',
      'description': 'Meu Drink application offers its users the best drink recipes. App available for download in the Windows Store Brazil.',
      'images': 'array with string urls'
    },
    {
      'title': 'Tic tac toe Paper App for Windows 8',
      'dates': 'April 2013',
      'description': 'Classic game tic tac toe for two players (not online). The player who succeeds in placing three respective marks (X and O) in a horizontal, vertical, or diagonal row wins the game.',
      'images': 'array with string urls'
    },
    {
      'title': 'Descontos na Net App for Windows 8',
      'dates': 'March 2013',
      'description': 'The Application Descontos na Net its users the best offers from 10 shops of the largest internet e-commerce in Brazil. App available for download in the Windows Store Brazil.',
      'images': 'array with string urls'
    },
    {
      'title': 'Game Hero Eros - GGJ 2013',
      'dates': 'January 2013',
      'description': 'The Global Game Jam (GGJ) is the world is largest game jam event (game creation) taking place around the world at physical locations. It is all condensed into a 48 hour development cycle. The GGJ encourages people with all kinds of backgrounds to participate and contribute to this global spread of game development and creativity.',
      'images': 'array with string urls'
    },
    {
      'title': 'SENAI Student Portal',
      'dates': 'July 2012',
      'description': 'Web system developed at SENAI-PB, for students visualize class schedules, notes and fill institutional forms.',
      'images': 'array with string urls'
    },
    {
      'title': 'SGM - Sistema Gerenciador de Metas',
      'dates': 'May 2011',
      'description': 'Web system developed at SENAI-PB to work in the strategic management of the institution.',
      'images': 'array with string urls'
    },
    {
      'title': 'Site Descontos na Net(link)',
      'dates': 'May 2010',
      'description': 'Web site that gathers coupons of the largest e-commerce stores in Brazil.',
      'images': 'array with string urls'
    }
  ],
  'display: function taking no parameters'
};
