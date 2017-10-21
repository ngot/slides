var speakers = [
  {
    "name": "Egg.js in Alibaba",
    "date": "2017.9",
    "conf": "Node.js Party Hangzhou",
    "website": "https://www.bagevent.com/event/751307",
    "slides": "http://slides.ngot.me/pdfs/eggjs_in_alibaba_ngot_2017.pdf",
    "video": "https://www.youtube.com/watch?v=dm1kYrpQTjk"
  },
  {
    "name": "JavaScript on Fiber",
    "date": "2016.7",
    "conf": "JS Conf",
    "website": "http://2015.jsconf.cn/",
    "slides": "http://slides.ngot.me/pdfs/ShenJS_fibjs.pdf",
    "video": "https://www.youtube.com/watch?v=1J2fCDS4jQU&list=PLEHsmTsBKpKX8Fhrh3BCyzGJgc2f15-KY&index=19"
  },
  {
    "name": "The best practice of full stack in Baoz dev team",
    "date": "2015.4",
    "conf": "Qcon Beijing",
    "website": "http://2015.qconbeijing.com/speakers/201779",
    "slides": "http://slides.ngot.me/pdfs/Qcon_full_stack_ngot_2015.pdf",
    "video": "http://www.infoq.com/cn/presentations/best-practice-of-baoz-technical-team-full-stack"
  },
  {
    "name": "Writing sync style & non-blocking JavaScript using fibjs",
    "date": "2014.12",
    "conf": "Node.js Party Shanghai",
    "website": "https://www.teambition.com/info/news/article?_id=5472c85c5beae35959ff67d4",
    "slides": "http://slides.ngot.me/pdfs/write_sync_js_ngot_2014.pdf"
  },
  {
    "name": "Cross Platform Emoji",
    "date": "2014.10",
    "conf": "Nanjing LUG(Linux User Group)",
    "website": "https://groups.google.com/forum/#!topic/njlug/uV74h7VDNO4",
    "slides": "http://slides.ngot.me/emoji/index.html"
  }
];

var speakersList = '';

for (var i = 0; i < speakers.length; i++) {
	var slidesLink = '';
	if (speakers[i].slides) {
		slidesLink = '<a target="_blank" href="'+speakers[i].slides+'">slides</a>';
	}
	var videoLink = '';
	if (speakers[i].video) {
		videoLink = ', <a target="_blank" href="'+speakers[i].video+'">video</a>';
	}
	var confLink = speakers[i].conf;
	if (speakers[i].website) {
		confLink = '<a target="_blank" href="'+speakers[i].website+'">' + speakers[i].conf + '</a>';
	}
	speakersList += '<li class="slide">' + 
		'<div><strong>' + speakers[i].name + '</strong>: '+ slidesLink + videoLink + '</div>' +
		'<div>@ ' + confLink + ' ' + speakers[i].date + '</div></li>';
}

document.addEventListener("DOMContentLoaded", function(event) { 
  var slideBlock = document.getElementById('slides-block');

  slideBlock.innerHTML = speakersList;
});
