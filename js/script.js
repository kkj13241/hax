var youtube_link = "https://radikal.ru/users/txcclown228";
var youtube_text = "Radical";
var email_link = "contact@hax.market";
var email_text = "E-mail";
var chat_link = "https://onlyhax.me";
var chat_text = "Forum";
var telegram_link = "https://t.me/joinchat/AAAAAETOYbUpbMowm3RMvg";
var telegram_text = "Telegram";
var discord_link = "https://discord.gg/sHGNxUDBNH";
var discord_text = "Discord";
var vk_link = "https://vk.com/hax.market";
var vk_text = "VKontakte";

var ads_string_rus = "Наш приватный магазин: <a target = \"_blank\" class = \"yellow-text\" href = \"https://darkside.market/ru/\">DARKSIDE.MARKET</a><br/><br/>Читерский форум наших партнеров: <a target = \"_blank\" class = \"red-text\" href = \"https://onlyhax.me/\">ONLYHAX.ME</a><br/><br/>Хочешь продавать на нашем сайте? Напиши сюда: <a class = \"cyan-text\" href = \"mailto:" + email_link + "\">CONTACT@HAX.MARKET</a>";
var ads_string_eng = "Our private store: <a target = \"_blank\" class = \"yellow-text\" href = \"https://darkside.market/\">DARKSIDE.MARKET</a><br/><br/>Cheat forum of our partners: <a target = \"_blank\" class = \"red-text\" href = \"https://onlyhax.me/\">ONLYHAX.ME</a><br/><br/>Do you want to sell on my site? Write here: <a class = \"cyan-text\" href = \"mailto:" + email_link + "\">CONTACT@HAX.MARKET</a>";

function UpdateLinks(language)
{
	document.getElementById("youtube_link").href = youtube_link;
	document.getElementById("youtube_text").innerHTML = youtube_text;
	document.getElementById("email_link").href = "mailto:" + email_link;
	document.getElementById("email_text").innerHTML = email_text;
	document.getElementById("chat_link").href = chat_link;
	document.getElementById("chat_text").innerHTML = chat_text;
	document.getElementById("telegram_link").href = telegram_link;
	document.getElementById("telegram_text").innerHTML = telegram_text;
	document.getElementById("discord_link").href = discord_link;
	document.getElementById("discord_text").innerHTML = discord_text;
	
	document.getElementById("ads_string").style.lineHeight = 1.25;
	
	if (language == "ru-RU")
	{		
		document.getElementById("ads_string").innerHTML = ads_string_rus;
		document.getElementById("contacts_string").innerHTML = "<span>по вопросам и предложениям пишите по электронной почте: <a target = \"_blank\" href=\"" + email_link + "\" class = \"lime-text\">" + email_link + "</a>, discord: <a target = \"_blank\" href=\"" + discord_link + "\" class = \"magenta-text\">" + discord_link + "</a>, telegram: <a target = \"_blank\" href=\"" + telegram_link + "\" class = \"cyan-text\">" + telegram_link + "</a>, vk: <a target = \"_blank\" href=\"" + vk_link + "\" class = \"lime-text\">" + vk_link +"</a></span>";
	}
	else
	{
		document.getElementById("ads_string").innerHTML = ads_string_eng;
		document.getElementById("contacts_string").innerHTML = "<span>for questions and suggestions please email: <a target = \"_blank\" href=\"" + email_link + "\" class = \"lime-text\">" + email_link + "</a>, discord: <a target = \"_blank\" href=\"" + discord_link + "\" class = \"magenta-text\">" + discord_link + "</a>, telegram: <a target = \"_blank\" href=\"" + telegram_link + "\" class = \"cyan-text\">" + telegram_link + "</a>, vk: <a target = \"_blank\" href=\"" + vk_link + "\" class = \"lime-text\">" + vk_link +"</a></span>";		
	}
}

function subscribe()
{
	alert('Sorry, this function is temporarily unavailable.');		
};

function language_div()
{   
	var language = window.navigator ? (window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage).substr(0, 2).toLowerCase() : "en";
	
	var prefix = "";
	var text = "";
	
	if (language == "ru" || navigator.languages.includes("ru") || navigator.languages.includes("ru-RU"))
	{		
		prefix = "ru/";
		text = "ПЕРЕЙТИ НА РУССКУЮ ВЕРСИЮ САЙТА";
	}
	
	if (prefix != "")
	{
		var div = document.getElementById("language_div");
		div.style.display = "block";
		var page = prefix + window.location.pathname.split("/").pop() + window.location.search;
		div.innerHTML = '<a class = "blink" href="' + page + '">' + text + '<a>';
	}
}

function getUrlVars() 
{
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue)
{
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

function SetGraphImage(product_id)
{
	var mw = document.getElementById("product-video").offsetWidth;
	var href = 'https://graph.digiseller.ru/img.ashx?id_d=' + product_id;			
	document.getElementById("product-video").innerHTML = '<div style = "text-align: center;"><a target = "_blank" href = "' + href + '"><img style = "max-width: ' + mw + 'px;" height = "500" src = "' + href + '&h=400"></img></a></div>';
}

function MakeDisclaimer(disclaimer_type, language)
{
	/*switch (disclaimer_type)
	{	
		case 1:
		{
			if (language == "ru-RU")
				document.getElementById("product-disclaimer").innerHTML = "ДИСКЛЕЙМЕР: данный товар косвенно (ресселинг) или напрямую является собственностью продавца, после приобретения данного товара права на его использование и ответственность за его дальнейшее распространение (продажа, дарение и т.д.) полностью возлагаются на лицо которое приобрело данный товар!</br></br>Если кнопка покупки не срабатывает, то попробуйте отключить расширения браузера, которые могут влиять на сайт (adguard и т.д.). Так же вы можете скопировать адрес ссылки с кнопки (правой кнопкой мыши) и вставить в строку браузера.</br></br>Если предложенные способы оплаты не работают для вас, то вы можете создать тикет в Discord для оплаты через <b>PayPal</b> или <b>BTC</b> или укажите любой телефонный номер для оплаты <b>Банковской Картой</b> (пример:  +79870000001).";
			else
				document.getElementById("product-disclaimer").innerHTML = "DISCLAIMER: this product is indirectly (reselling) or directly owned by the seller, after the purchase of this product, the right to use it and the responsibility for its further distribution (sale, gift, etc.) are fully vested in the person who purchased this product!</br></br>If the buy button does not work, then try disabling browser extensions that may affect the site (adguard, etc.). Also you can copy the link address from the button (right mouse click) and paste into the browser line.</br></br>If the proposed payment methods do not work for you then you can create a ticket in Discord to pay using <b>PayPal</b> or <b>BTC</b> or indicate phone number for <b>Bank Card</b> method (example: +79870000001).";	
		}
		break;
		default: 
		{
			if (language == "ru-RU")
				document.getElementById("product-disclaimer").innerHTML = "ДИСКЛЕЙМЕР: рекомендуется использовать данное программное обеспечение в развлекательных целях, не используя его во время турнирных, рейтинговых и прочих квалификационных игровых режимах. Злоупотребление данным программным обеспечением увеличивает риск блокирования игровой учётной записи, поэтому всю полноту ответственности за использование данного программного обеспечения несет его конечный пользователь!</br></br>Если кнопка покупки не срабатывает, то попробуйте отключить расширения браузера, которые могут влиять на сайт (adguard и т.д.). Так же вы можете скопировать адрес ссылки с кнопки (правой кнопкой мыши) и вставить в строку браузера.</br></br>Если предложанные способы оплаты не работают для вас, то вы можете создать тикет в Discord для оплаты через <b>PayPal</b> или <b>BTC</b> или укажите любой телефонный номер для оплаты <b>Банковской Картой</b> (пример:  +79870000001).";
			else
				document.getElementById("product-disclaimer").innerHTML = "DISCLAIMER: it is recommended to use this software for entertainment purposes, without using it during tournament, rating and other qualifying game modes. Overuse of this software increases the risk of blocking a game account, therefore, the end user takes all responsibility for the use of this software!</br></br>If the buy button does not work, then try disabling browser extensions that may affect the site (adguard, etc.). Also you can copy the link address from the button (right mouse click) and paste into the browser line.</br></br>If the proposed payment methods do not work for you then you can create a ticket in Discord to pay using <b>PayPal</b> or <b>BTC</b> or indicate phone number for <b>Bank Card</b> method (example: +79870000001).";	
		}
	}*/
	
	if (language == "ru-RU")
		document.getElementById("product-disclaimer").innerHTML = "Перед покупкой данного товара рекомендуется ознакомиться с данным <a target = \"_blank\" class = \"cyan-text\" href=\"user_agreement.html\">ПОЛЬЗОВАТЕЛЬСКИМ СОГЛАШЕНИЕМ.</a> Покупая данный товар пользователь подтверждает факт ознакомления с данным соглашением.</br></br>Если кнопка покупки не срабатывает, то попробуйте отключить расширения браузера, которые могут влиять на сайт (adguard и т.д.). Так же вы можете скопировать адрес ссылки с кнопки (правой кнопкой мыши) и вставить в строку браузера.</br></br>Если предложенные способы оплаты не работают для вас, то вы можете создать тикет в <a class = \"magenta-text\" target = \"_blank\" href=\"" + discord_link + "\">Discord</a> для оплаты через <span class = \"yellow-text\">Банковскую Карту</span>, <span class = \"yellow-text\">PayPal</span> или <span class = \"yellow-text\">BTC</span>.</br></br>Так же оплату <span class = \"yellow-text\">Банковской Картой</span> могут принимать следующие методы оплаты: WM Merchant, PayMaster, Robokassa, ЮКасса, Interkassa.</span>";
	else
		document.getElementById("product-disclaimer").innerHTML = "Before purchasing this product, it is recommended that you familiarize yourself with this <a target = \"_blank\" class = \"cyan-text\" href=\"user_agreement.html\">USER AGREEMENT.</a> By purchasing this product, the user confirms the fact of familiarization with this agreement.</br></br>If the buy button does not work, then try disabling browser extensions that may affect the site (adguard, etc.). Also you can copy the link address from the button (right mouse click) and paste into the browser line.</br></br>If the proposed payment methods do not work for you, then you can create a ticket in <a class = \"magenta-text\" target = \"_blank\" href=\"" + discord_link + "\">Discord</a> for payment through <span class = \"yellow-text\">Bank Card</span>, <span class = \"yellow-text\">PayPal</span> or <span class = \"yellow-text\">BTC</span>.</br></br>The following payment methods can also accept <span class = \"yellow-text\">Bank Card</span> payments: WM Merchant, PayMaster, Robokassa, YooKassa, Interkassa.</span>";
}

function ParseProductDynamic(language)
{		
	if (language == null)
		language = "en-US";	
	
	var product_title = decodeURI(getUrlParam('title', 'TITLE'));
	var video_id = getUrlParam('video_id', '0');
	var product_ids = getUrlParam('product_ids', '0').split(',');
	var disclaimer_type = parseInt(getUrlParam('dt', '0'));
	
	if (product_ids == '0')
		return false;
	
	//TITLE
	document.getElementById("product-title").innerHTML = '<h1>' + product_title + '</h1>';
	document.title = product_title + ' | hax.market';
			
	//VIDEO
	if (video_id == '0')
		SetGraphImage(product_ids[0]);
	else	
		document.getElementById("product-video").innerHTML = '<iframe width="100%" height="500" src="https://www.youtube.com/embed/' + video_id + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	
	MakeDisclaimer(disclaimer_type, language);
	
	var requestURL = 'https://api.digiseller.ru/api/products/list?ids=' + product_ids + "&lang=" + language;
	var request = new XMLHttpRequest();
	request.open('GET', requestURL, true);
	request.responseType = 'text';
	
	request.onreadystatechange = function () 
	{
		if (request.readyState === 4 && request.status === 200) 
		{
			var doc = JSON.parse(request.responseText);
		
			if (doc.length > 0)			
				for (var i = 0; i < doc.length; i++)
				{
					if (i == 0)
					{
						//DESCRIPTION
						var description = '<pre>' + doc[i].info;
						//add info
						var add_info = doc[i].add_info;
						if (add_info.length > 0)
							description += '\n\n<span class = "blink">' + add_info + '</span>';	
						description += '</pre>';	
						
						//set
						document.getElementById("product-description").innerHTML = description;
					}
					//BUTTONS
					var buy_link = '"https://www.oplata.info/asp/pay_wm.asp?id_d=' + doc[i].id + '&ai=801002"';

					if (language == "ru-RU")
						document.getElementById("product-buttons").innerHTML += '<a target = "_blank" onclick = \'return gtag_report_conversion(' + buy_link + ');\' href = ' + buy_link + ' class = "buy-btn"> КУПИТЬ ' + doc[i].name + ' ЗА ' + parseFloat(doc[i].price_rub).toFixed(2) + ' РУБ </a>';
					else
						document.getElementById("product-buttons").innerHTML +='<a target = "_blank" onclick = \'return gtag_report_conversion(' + buy_link+ ');\' href = ' + buy_link + ' class = "buy-btn"> BUY ' + doc[i].name + ' FOR ' + parseFloat(doc[i].price_usd).toFixed(2) + ' USD </a>';
				}
			else
			{
				if (language == "ru-RU")
				{
					document.getElementById("product-description").innerHTML = '<p style = "text-align: center;">Извините, данный товар временно недоступен.</p>';
					document.getElementById("product-disclaimer").innerHTML = '<p style = "text-align: center;">Извините, данный товар временно недоступен.</p>';
				}
				else
				{
					document.getElementById("product-description").innerHTML = '<p style = "text-align: center;">Sorry, this product is temporarily unavailable.</p>';
					document.getElementById("product-disclaimer").innerHTML = '<p style = "text-align: center;">Sorry, this product is temporarily unavailable.</p>';
				}
			}
		}
	}
	
	request.send(null);
}

function ParseProductStatic(product_ids, disclaimer_type, language)
{		
	if (language == null)
		language = "en-US";	
	
	if (product_ids == '0')
		return false;
	
	MakeDisclaimer(disclaimer_type, language);
	
	var requestURL = 'https://api.digiseller.ru/api/products/list?ids=' + product_ids + "&lang=" + language;
	var request = new XMLHttpRequest();
	request.open('GET', requestURL, true);
	request.responseType = 'text';
	
	request.onreadystatechange = function () 
	{
		if (request.readyState === 4 && request.status === 200) 
		{
			var doc = JSON.parse(request.responseText);
		
			if (doc.length > 0)			
				for (var i = 0; i < doc.length; i++)
				{
					//BUTTONS
					var buy_link = '"https://www.oplata.info/asp/pay_wm.asp?id_d=' + doc[i].id + '&ai=801002"';

					if (language == "ru-RU")
						document.getElementById("product-buttons").innerHTML += '<a target = "_blank" onclick = \'return gtag_report_conversion(' + buy_link + ');\' href = ' + buy_link + ' class = "buy-btn"> КУПИТЬ ' + doc[i].name + ' ЗА ' + parseFloat(doc[i].price_rub).toFixed(2) + ' РУБ </a>';
					else
						document.getElementById("product-buttons").innerHTML +='<a target = "_blank" onclick = \'return gtag_report_conversion(' + buy_link+ ');\' href = ' + buy_link + ' class = "buy-btn"> BUY ' + doc[i].name + ' FOR ' + parseFloat(doc[i].price_usd).toFixed(2) + ' USD </a>';
				}
			else
			{
				if (language == "ru-RU")
				{
					document.getElementById("product-description").innerHTML = '<p style = "text-align: center;">Извините, данный товар временно недоступен.</p>';
					document.getElementById("product-disclaimer").innerHTML = '<p style = "text-align: center;">Извините, данный товар временно недоступен.</p>';
				}
				else
				{
					document.getElementById("product-description").innerHTML = '<p style = "text-align: center;">Sorry, this product is temporarily unavailable.</p>';
					document.getElementById("product-disclaimer").innerHTML = '<p style = "text-align: center;">Sorry, this product is temporarily unavailable.</p>';
				}
			}
		}
	}
	
	request.send(null);
}