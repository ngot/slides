var speakers = [
    {
      "name": "Egg.js in Alibaba",
      "date": "2017.9",
      "conf": "Node.js Party Hangzhou",
      "website": "https://www.bagevent.com/event/751307",
      "slides": "http://slides.ngot.me/pdfs/Egg.js%20%E5%9C%A8%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4%E9%9B%86%E5%9B%A2%E7%9A%84%E7%9A%84%E5%AE%9E%E8%B7%B5%E8%BF%90%E7%94%A8.pdf"
    },
    {
      "name": "JavaScript on Fiber",
      "date": "2016.7",
      "conf": "JS Conf",
      "website": "http://2015.jsconf.cn/",
      "slides": "http://slides.ngot.me/pdfs/ShenJS_fibjs.pdf"
    },
    {
      "name": "The best practice of full stack in Baoz dev team",
      "date": "2015.4",
      "conf": "Qcon Beijing",
      "website": "https://www.infoq.com/",
      "slides": "http://www.infoq.com/cn/presentations/best-practice-of-baoz-technical-team-full-stack"
    },
    {
      "name": "Writing sync style & non-blocking JavaScript using fibjs",
      "date": "2014.12",
      "conf": "Node.js Party Shanghai",
      "website": "https://www.teambition.com/info/news/article?_id=5472c85c5beae35959ff67d4",
      "slides": "http://slides.ngot.me/pdfs/fibjs%E5%90%8C%E6%AD%A5%E5%A4%A7%E6%B3%95%E5%AE%9E%E8%B7%B5.pdf"
    },
    {
      "name": "Cross Platform Emoji",
      "date": "2014.10",
      "conf": "Nanjing LUG(Linux User Group)",
      "website": "https://www.infoq.com/",
      "slides": "http://slides.ngot.me/emoji/index.html"
    }
  ];

var speakersList = '';

for (var i = 0; i < speakers.length; i++) {
	var slidesLink = '';
	if (speakers[i].slides) {
		slidesLink = '<a href="'+speakers[i].slides+'">slides</a>';
	}
	var confLink = speakers[i].conf;
	if (speakers[i].website) {
		confLink = '<a href="'+speakers[i].website+'">' + speakers[i].conf + '</a>';
	}
	speakersList += '<li>' + 
		'<div><strong>' + speakers[i].name + '</strong>: '+ slidesLink + '</div>' +
		'<div>@ ' + confLink + ' ' + speakers[i].date + '</div></li>';
}

$(document).ready(function(){
	$('#slides-block').append(speakersList);
})
