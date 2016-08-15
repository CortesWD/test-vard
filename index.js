var express = require('express');
// var pug     = require('pug');
var router  = express.Router();
var app     = express();

  app.use(router);
  app.use(express.static('public'));
// module.exports = function (app) {
// };


app.listen(process.env.PORT || 5000);

app.set('view engine', 'pug');

// app.listen(3000, function () {
// 	console.log('crriendo')
// })

router.get('/', function (req, res, next) {

    var vCard = require('vcards-js');

	//create a new vCard
	vCard = vCard();

	//set basic properties shown before
	vCard.firstName = 'Cristian';
	vCard.middleName = 'Camilo';
	vCard.lastName = 'Cortés';
	vCard.organization = 'BRM S.A.';

	//link to image https://pbs.twimg.com/profile_images/2611081838/t9n2gitufgi8bf9yhg6i.jpeg
	vCard.photo.attachFromUrl('https://pbs.twimg.com/profile_images/2611081838/t9n2gitufgi8bf9yhg6i.jpeg', 'JPEG');

	//or embed image

	vCard.workPhone = '310-274-84-44';
	vCard.birthday = new Date('06-14-1992');
	vCard.title = 'FrontEnd Design Leader';
	vCard.url = 'http://corteswd.com.co';
	// vCard.workUrl = 'https://brm.com.co';
	// vCard.note = 'Notes on Eric';

	//set other vitals
	vCard.nickname = 'CortesWD';
	// vCard.namePrefix = 'Sr.';
	// vCard.nameSuffix = 'JR';
	vCard.gender = 'M';
	// vCard.anniversary = new Date('01-01-2004');
	// vCard.role = 'Software Development';

	//set other phone numbers
	// vCard.homePhone = '312-555-1313';
	vCard.cellPhone = '310-274-84-44';
	// vCard.pagerPhone = '312-555-1515';

	// set fax/ facsimile numbers
	// vCard.homeFax = '312-555-1616';
	// vCard.workFax = '312-555-1717';

	// set email addresses
	vCard.email = 'cccp.designer@gmail.com';
	vCard.workEmail = 'cristian.cortes@brm.com.co';

	//set logo of organization or personal logo (also supports embedding, see above)
	vCard.logo.attachFromUrl('https://pbs.twimg.com/profile_images/2611081838/t9n2gitufgi8bf9yhg6i.jpeg', 'JPEG');

	//set URL where the vCard can be found
	vCard.source = 'http://localhost:5000/myvcard.vcf';

	//set address information
	// vCard.homeAddress.label = 'Home Address';
	// vCard.homeAddress.street = '123 Main Street';
	// vCard.homeAddress.city = 'Chicago';
	// vCard.homeAddress.stateProvince = 'IL';
	// vCard.homeAddress.postalCode = '12345';
	// vCard.homeAddress.countryRegion = 'United States of America';

	vCard.workAddress.label = 'Trabajo';
	vCard.workAddress.street = 'Carrera 15 N. 85 - 30';
	vCard.workAddress.city = 'Bogotá';
	// vCard.workAddress.stateProvince = 'DC';
	// vCard.workAddress.postalCode = '54321';
	vCard.workAddress.countryRegion = 'Colombia';

	//set social media URLs
	vCard.socialUrls['facebook'] = 'https://www.facebook.com/cristian.camilo.cortes';
	vCard.socialUrls['linkedIn'] = 'https://co.linkedin.com/in/corteswd';
	vCard.socialUrls['twitter'] = 'https://twitter.com/cort3swd';
	// vCard.socialUrls['flickr'] = 'https://...';
	// vCard.socialUrls['custom'] = 'https://...';

	//you can also embed photos from files instead of attaching via URL
	vCard.photo.embedFromFile('./public/pic.jpeg');
	vCard.logo.embedFromFile('./public/pic.jpeg');

	vCard.version = '3.0'; //can also support 2.1 and 4.0, certain versions only support certain fields

	//save to file
	vCard.saveToFile('./public/contacto.vcf');

	//get as formatted string
	console.log(vCard.getFormattedString());
	// res.send('<pre>'+vCard.getFormattedString()+'</pre>');
	res.render('index', { title: 'Crispin VCard'});
});

router.get('/video', function () {
	res.render('video');
})
