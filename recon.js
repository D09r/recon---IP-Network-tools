/**
* * Howdy!! p1ngm3 @d09r
*
* * r3con
* * Version 0.0.6
* * Author: Dinesh Kumar
* * https://www.linkedin.com/in/hack3r
* * Repository: https://github.com/d09r
*
*/


var url, domain, lookup, selectedTool, selectedToolTitle;

function alertInvalidInput() {
	$("#alertModal").modal("show");
}

function alertNotFound(domain, callee) {
	$('#alertNotFound .modal-title').empty();
	$('#alertNotFound .modal-title').text("[X] Not Found");
	$('#alertNotFound .modal-body').empty();
	switch (callee) {
		case 'gsb':
			$('#alertNotFound .modal-body').append("<p>" + domain + " wasn't found on <a href='https://transparencyreport.google.com/safe-browsing/search?url="+domain+"' target='_blank'>Google's Safe Browsing</a> list. It doesn't mean that website is benign!</p>");
			break;
		case 'webcache':
			$('#alertNotFound .modal-body').append("<p>WayBack Machine's cached version of " + domain + " wasn't found!</p>");
	}
	$('#alertNotFound').modal("show");
}

function clearWait() {
	$('#input').prop('disabled',false);
	$('#singleLookup button').text("Lookup");
	$('#singleLookup button').prop('disabled',false);
	$('#bulkLookup button').text("Bulk Lookup");
	$('#bulkLookup button').prop('disabled',false);
}

function alertAPIlimit() {
	$("#alertAPIlimit").modal("show");
	clearWait();
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

function whois(domain,selectedTool) {
	try {
        $.ajax({
            type: "GET",
            url: "http://api.hackertarget.com/whois/?q=" + domain,
            success: function(data) {
				switch (data) {
					case "API count exceeded":
						alertAPIlimit();
						break;
					case "error check your api query":
						clearWait();
						break;
					case "error check your api query.":
						clearWait();
						break;
					case "error input invalid - enter IP or Hostname":
						clearWait();
						break;
					case "input url is invalid":
						clearWait();
						break;
					default:
						$('#inputView').hide();
						$('#resultView').append("<h4>Whois Lookup result for "+domain+"</h4><pre>"+data+"</pre><br>");
						$('#resultView').show();
				}
            },
			dataType: "text",
            error: function() {
                console.log("Whois Lookup: ", err)
				clearWait();
            }
        });
    }
    
    catch(err) {
        console.log("Whois Lookup: ", err);
		clearWait();
    }
}

function dns(domain,selectedTool) {
	try {
        $.ajax({
            type: "GET",
            url: "http://api.hackertarget.com/dnslookup/?q=" + domain,
            success: function(data) {
				switch (data) {
					case "API count exceeded":
						alertAPIlimit();
						break;
					case "error check your api query":
						clearWait();
						break;
					case "error check your api query.":
						clearWait();
						break;
					case "error input invalid - enter IP or Hostname":
						clearWait();
						break;
					case "input url is invalid":
						clearWait();
						break;
					default:
						$('#inputView').hide();
						$('#resultView').append("<h4>DNS Lookup result for "+domain+"</h4><pre>"+data+"</pre><br>");
						$('#resultView').show();
				}
            },
			dataType: "text",
            error: function() {
                console.log("DNS Lookup: ", err)
				clearWait();
            }
        });
    }
    
    catch(err) {
        console.log("DNS Lookup: ", err);
		clearWait();
    }
}

function rdns(domain,selectedTool) {
	try {
        $.ajax({
            type: "GET",
            url: "http://api.hackertarget.com/reversedns/?q=" + domain,
            success: function(data) {
				switch (data) {
					case "API count exceeded":
						alertAPIlimit();
						break;
					case "error check your api query":
						clearWait();
						break;
					case "error check your api query.":
						clearWait();
						break;
					case "error input invalid - enter IP or Hostname":
						clearWait();
						break;
					case "input url is invalid":
						clearWait();
						break;
					default:
						$('#inputView').hide();
						$('#resultView').append("<h4>Reverse DNS Lookup result for "+domain+"</h4><pre>"+data+"</pre><br>");
						$('#resultView').show();
				}
            },
			dataType: "text",
            error: function() {
                console.log("Reverse DNS Lookup: ", err)
				clearWait();
            }
        });
    }
    
    catch(err) {
        console.log("Reverse DNS Lookup: ", err);
		clearWait();
    }
}

function arec(domain,selectedTool) {
	try {
        $.ajax({
            type: "GET",
            url: "http://api.hackertarget.com/hostsearch/?q=" + domain,
            success: function(data) {
				switch (data) {
					case "API count exceeded":
						alertAPIlimit();
						break;
					case "error check your api query":
						clearWait();
						break;
					case "error check your api query.":
						clearWait();
						break;
					case "error input invalid - enter IP or Hostname":
						clearWait();
						break;
					case "input url is invalid":
						clearWait();
						break;
					default:
						$('#inputView').hide();
						$('#resultView').append("<h4>DNS (A) records for "+domain+"</h4><pre>"+data+"</pre><br>");
						$('#resultView').show();
				}
            },
			dataType: "text",
            error: function() {
                console.log("(A) Records Lookup: ", err)
				clearWait();
            }
        });
    }
    
    catch(err) {
        console.log("(A) Records Lookup: ", err);
		clearWait();
    }
}

function shareddns(domain,selectedTool) {
	try {
        $.ajax({
            type: "GET",
            url: "http://api.hackertarget.com/findshareddns/?q=" + domain,
            success: function(data) {
				switch (data) {
					case "API count exceeded":
						alertAPIlimit();
						break;
					case "error check your api query":
						clearWait();
						break;
					case "error check your api query.":
						clearWait();
						break;
					case "error input invalid - enter IP or Hostname":
						clearWait();
						break;
					case "input url is invalid":
						clearWait();
						break;
					default:
						$('#inputView').hide();
						$('#resultView').append("<h4>Shared DNS Lookup result for "+domain+"</h4><pre>"+data+"</pre><br>");
						$('#resultView').show();
				}
            },
			dataType: "text",
            error: function() {
                console.log("Shared DNS Lookup: ", err)
				clearWait();
            }
        });
    }
    
    catch(err) {
        console.log("Shared DNS Lookup: ", err);
		clearWait();
    }
}

function zonet(domain,selectedTool) {
	try {
        $.ajax({
            type: "GET",
            url: "http://api.hackertarget.com/zonetransfer/?q=" + domain,
            success: function(data) {
				switch (data) {
					case "API count exceeded":
						alertAPIlimit();
						break;
					case "error check your api query":
						clearWait();
						break;
					case "error check your api query.":
						clearWait();
						break;
					case "error input invalid - enter IP or Hostname":
						clearWait();
						break;
					case "input url is invalid":
						clearWait();
						break;
					default:
						$('#inputView').hide();
						$('#resultView').append("<h4>Zone Transfer result for "+domain+"</h4><pre>"+data+"</pre><br>");
						$('#resultView').show();
				}
            },
			dataType: "text",
            error: function() {
                console.log("Zone Transfer Lookup: ", err)
				clearWait();
            }
        });
    }
    
    catch(err) {
        console.log("Zone Transfer Lookup: ", err);
		clearWait();
    }
}

function revip(domain) {
	try {
        $.ajax({
            type: "GET",
            url: "http://api.hackertarget.com/reverseiplookup/?q=" + domain,
            success: function(data) {
				switch (data) {
					case "API count exceeded":
						alertAPIlimit();
						break;
					case "error check your api query":
						clearWait();
						break;
					case "error check your api query.":
						clearWait();
						break;
					case "error input invalid - enter IP or Hostname":
						clearWait();
						break;
					case "input url is invalid":
						clearWait();
						break;
					default:
						$('#inputView').hide();
						$('#resultView').append("<h4>Reverse IP Lookup result for "+domain+"</h4><pre>"+data+"</pre><br>");
						$('#resultView').show();
				}
            },
			dataType: "text",
            error: function() {
                console.log("Reverse IP Lookup: ", err)
				clearWait();
            }
        });
    }
    
    catch(err) {
        console.log("Reverse IP Lookup: ", err);
		clearWait();
    }
}

function geoip(domain,selectedTool) {
	try {
        $.ajax({
            type: "GET",
            url: "http://api.hackertarget.com/geoip/?q=" + domain,
            success: function(data) {
				switch (data) {
					case "API count exceeded":
						alertAPIlimit();
						break;
					case "error check your api query":
						clearWait();
						break;
					case "error check your api query.":
						clearWait();
						break;
					case "error input invalid - enter IP or Hostname":
						clearWait();
						break;
					case "input url is invalid":
						clearWait();
						break;
					default:
						$('#inputView').hide();
						$('#resultView').append("<h4>Geo IP Lookup result for "+domain+"</h4><pre>"+data+"</pre><br>");
						$('#resultView').show();
				}
            },
			dataType: "text",
            error: function() {
                console.log("GeoIP Lookup: ", err)
				clearWait();
            }
        });
    }
    
    catch(err) {
        console.log("GeoIP Lookup: ", err);
		clearWait();
    }
}

function nmap(domain,selectedTool) {
	try {
        $.ajax({
            type: "GET",
            url: "http://api.hackertarget.com/nmap/?q=" + domain,
            success: function(data) {
				switch (data) {
					case "API count exceeded":
						alertAPIlimit();
						break;
					case "error check your api query":
						clearWait();
						break;
					case "error check your api query.":
						clearWait();
						break;
					case "error input invalid - enter IP or Hostname":
						clearWait();
						break;
					case "input url is invalid":
						clearWait();
						break;
					default:
						$('#inputView').hide();
						$('#resultView').append("<h4>Namap scan result for "+domain+"</h4><pre>"+data+"</pre><br>");
						$('#resultView').show();
				}
            },
			dataType: "text",
            error: function() {
                console.log("Nmap: ", err)
				clearWait();
            }
        });
    }
    
    catch(err) {
        console.log("Nmap: ", err);
		clearWait();
    }
}

function subnet(domain,selectedTool) {
	try {
        $.ajax({
            type: "GET",
            url: "http://api.hackertarget.com/subnetcalc/?q=" + domain,
            success: function(data) {
				switch (data) {
					case "API count exceeded":
						alertAPIlimit();
						break;
					case "error check your api query":
						clearWait();
						break;
					case "error check your api query.":
						clearWait();
						break;
					case "error input invalid - enter IP or Hostname":
						clearWait();
						break;
					case "input url is invalid":
						clearWait();
						break;
					default:
						$('#inputView').hide();
						$('#resultView').append("<h4>Subnet Lookup result for "+domain+"</h4><pre>"+data+"</pre><br>");
						$('#resultView').show();
				}
            },
			dataType: "text",
            error: function() {
                console.log("Subnet Lookup: ", err)
				clearWait();
            }
        });
    }
    
    catch(err) {
        console.log("Subnet Lookup: ", err);
		clearWait();
    }
}

function tracert(domain,selectedTool) {
	try {
        $.ajax({
            type: "GET",
            url: "http://api.hackertarget.com/mtr/?q=" + domain,
            success: function(data) {
				switch (data) {
					case "API count exceeded":
						alertAPIlimit();
						break;
					case "error check your api query":
						clearWait();
						break;
					case "error check your api query.":
						clearWait();
						break;
					case "error input invalid - enter IP or Hostname":
						clearWait();
						break;
					case "input url is invalid":
						clearWait();
						break;
					default:
						$('#inputView').hide();
						$('#resultView').append("<h4>Traceroute result for "+domain+"</h4><pre>"+data+"</pre><br>");
						$('#resultView').show();
				}
            },
			dataType: "text",
            error: function() {
                console.log("Traceroute: ", err)
				clearWait();
            }
        });
    }
    
    catch(err) {
        console.log("Traceroute: ", err);
		clearWait();
    }
}

function ping(domain,selectedTool) {
	try {
        $.ajax({
            type: "GET",
            url: "http://api.hackertarget.com/nping/?q=" + domain,
            success: function(data) {
				switch (data) {
					case "API count exceeded":
						alertAPIlimit();
						break;
					case "error check your api query":
						clearWait();
						break;
					case "error check your api query.":
						clearWait();
						break;
					case "error input invalid - enter IP or Hostname":
						clearWait();
						break;
					case "input url is invalid":
						clearWait();
						break;
					default:
						$('#inputView').hide();
						$('#resultView').append("<h4>Ping test result for "+domain+"</h4><pre>"+data+"</pre><br>");
						$('#resultView').show();
				}
            },
			dataType: "text",
            error: function() {
                console.log("Ping test: ", err)
				clearWait();
            }
        });
    }
    
    catch(err) {
        console.log("Ping test: ", err);
		clearWait();
    }
}

function headers(domain,selectedTool) {
	try {
        $.ajax({
            type: "GET",
            url: "http://api.hackertarget.com/httpheaders/?q=" + domain,
            success: function(data) {
				switch (data) {
					case "API count exceeded":
						alertAPIlimit();
						break;
					case "error check your api query":
						clearWait();
						break;
					case "error check your api query.":
						clearWait();
						break;
					case "error input invalid - enter IP or Hostname":
						clearWait();
						break;
					case "input url is invalid":
						clearWait();
						break;
					default:
						$('#inputView').hide();
						$('#resultView').append("<h4>HTTP Headers result for "+domain+"</h4><pre>"+data+"</pre>");
						$('#resultView').show();
				}
            },
			dataType: "text",
            error: function() {
                console.log("httpHeaders: ", err)
				clearWait();
            }
        });
    }
    
    catch(err) {
        console.log("httpHeaders: ", err);
		clearWait();
    }
}

function pagelinks(domain,selectedTool) {
	try {
        $.ajax({
            type: "GET",
            url: "http://api.hackertarget.com/pagelinks/?q=" + domain,
            success: function(data) {
				switch (data) {
					case "API count exceeded":
						alertAPIlimit();
						break;
					case "error check your api query":
						clearWait();
						break;
					case "error check your api query.":
						clearWait();
						break;
					case "error input invalid - enter IP or Hostname":
						clearWait();
						break;
					case "input url is invalid":
						clearWait();
						break;
					default:
						$('#inputView').hide();
						$('#resultView').append("<h4>Extracted Page Links result for "+domain+"</h4><pre>"+data+"</pre><br>");
						$('#resultView').show();
				}
            },
			dataType: "text",
            error: function() {
                console.log("pagelinks: ", err)
				clearWait();
            }
        });
    }
    
    catch(err) {
        console.log("pagelinks: ", err);
		clearWait();
    }
}

function screenshotsSlider(domain,scr) {
	$('#resultView').append("<h4>Historical screenshots of "+domain+"</h4><div id='scrPaneTop'></div");	
	
	if (scr.status == "success") {

				var scrPane = document.createElement('fieldset');
				var divCarousel = document.createElement('div');
				divCarousel.setAttribute('id','myCarousel');
				divCarousel.setAttribute('class','carousel slide');
				divCarousel.setAttribute('data-ride','carousel');

				var len = scr.historical.length;

				if (len > 20) {
					len = 30;
				}

				if (len != 0) {
					// Carousel Indicators (id = myCarousel)
					var ol = document.createElement('ol');
					ol.setAttribute('class','carousel-indicators');
					for (i = 0; i < len; i++) {
						var li = document.createElement('li');
						li.setAttribute('data-target','#myCarousel');
						li.setAttribute('data-slide-to', i);
						if (i == 0) {
							li.setAttribute('class', 'active');
						}
						ol.appendChild(li);
					}

					// Wrapper for slides (id = myCarousel)
					var divWrap = document.createElement('div');
					divWrap.setAttribute('class','carousel-inner');
					divWrap.setAttribute('role','listbox');

					for (i = 0; i < len; i++) {
						var divItem = document.createElement('div');
						if (i == 0) {
							divItem.setAttribute('class','item active');	
						} else {
							divItem.setAttribute('class','item');
						}
						var img = document.createElement('img');
						img.setAttribute('src', scr.historical[i].small);
						img.setAttribute('full', scr.historical[i].large);
						img.setAttribute('style', 'cursor:pointer; z-index: 1');
						img.setAttribute('title', 'click to enlarge the screenshot');
						
						var divCap = document.createElement('div');
						divCap.setAttribute('class','carousel-caption');
						var h4 = document.createElement('h4');
						h4.innerText = scr.historical[i].date;
						divCap.appendChild(h4);
						divItem.appendChild(img);
						
						divItem.appendChild(divCap);
						divWrap.appendChild(divItem);
					}
				} else {
					document.getElementById('screenshot').style.display = "none";
					document.getElementById('webScrshoot').style.display = "none";
					document.getElementById('navScr').style.display = "none";
				}

				// Left and right controls (id = myCarousel)
				var aPrev = document.createElement('a');
				aPrev.setAttribute('class','left carousel-control');
				aPrev.setAttribute('href','#myCarousel');
				aPrev.setAttribute('role','button');
				aPrev.setAttribute('data-slide','prev');

				var spanL1 = document.createElement('span');
				var spanL2 = document.createElement('span');
//				spanL1.setAttribute('class','glyphicon glyphicon-chevron-left');
				spanL1.setAttribute('aria-hidden','true');
				spanL2.setAttribute('class','sr-only');
				spanL2.innerText = "<";

				aPrev.appendChild(spanL1);
				aPrev.appendChild(spanL2);


				var aNext = document.createElement('a');
				aNext.setAttribute('class','right carousel-control');
				aNext.setAttribute('href','#myCarousel');
				aNext.setAttribute('role','button');
				aNext.setAttribute('data-slide','next');

				var spanR1 = document.createElement('span');
				var spanR2 = document.createElement('span');
//				spanR1.setAttribute('class','glyphicon glyphicon-chevron-right');
				spanR1.setAttribute('aria-hidden','true');
				spanR2.setAttribute('class','sr-only');
				spanR2.innerText = ">";

				aNext.appendChild(spanR1);
				aNext.appendChild(spanR2);

				var enlInfoIco = document.createElement('span');
				var enlInfo = document.createElement('span');
//				enlInfoIco.setAttribute('class','glyphicon glyphicon-info-sign');
				enlInfoIco.setAttribute('id','enlInfoIco');
//				enlInfo.innerText = "Click on screenshot to enlarge it";
				enlInfo.innerText = "";
				scrPane.appendChild(enlInfoIco);
				scrPane.appendChild(enlInfo);
				divCarousel.appendChild(ol);
				divCarousel.appendChild(divWrap);
				divCarousel.appendChild(aPrev);
				divCarousel.appendChild(aNext);
				scrPane.appendChild(divCarousel);
			$('#scrPaneTop').append(scrPane);

			}
	
//				var divCarousel = document.createElement('div');
//				divCarousel.setAttribute('id','scrCarousel');
//				divCarousel.setAttribute('class','carousel slide');
//				divCarousel.setAttribute('data-ride','carousel');
//
//				var len = scr.historical.length;
//				console.log(len);
//
//				if (len > 20) {
//					len = 20;
//				}
//
//				if (len != 0) {
//					// Carousel Indicators (id = myCarousel)
//					var carouselinner = document.createElement('div');
//					carouselinner.setAttribute('class','carousel-inner');
//					carouselinner.setAttribute('role','listbox');
//					for (i = 0; i < len; i++) {
//						var carouselitems = document.createElement('div');
//						if (i == 0) {
//							carouselitems.setAttribute('class','carousel-item active');	
//						} else {
//							carouselitems.setAttribute('class','carousel-item');
//						}
//						var carouselimg = document.createElement('img');
//						carouselimg.setAttribute('class','d-block w-100');
//						carouselimg.setAttribute('src', scr.historical[i].small);
//						carouselimg.setAttribute('full', scr.historical[i].large);
//						var carouselcaption = document.createElement('div');
//						carouselcaption.setAttribute('class','carousel-caption d-none d-md-block');
//						var carouselcaptionh5 = document.createElement('h5');
//						carouselcaptionh5.innerText = scr.historical[i].date;
//						
//						carouselitems.appendChild(carouselimg);
//						carouselcaption.appendChild(carouselcaptionh5);
//						carouselitems.appendChild(carouselcaption);
//						carouselinner.appendChild(carouselitems);
//					}
//					
//					var aPrev = document.createElement('a');
//					aPrev.setAttribute('class','carousel-control-prev');
//					aPrev.setAttribute('href','#scrCarousel');
//					aPrev.setAttribute('role','button');
//					aPrev.setAttribute('data-slide','prev');
//						
//					var span1Prev = document.createElement('a');
//					span1Prev.setAttribute('class','carousel-control-prev-icon');
//					span1Prev.setAttribute('aria-hidden','true');
//					var span2Prev = document.createElement('a');
//					span2Prev.setAttribute('class','sr-only');
//					span2Prev.innerText = 'Previous';
//						
//					aPrev.appendChild(span1Prev);
//					aPrev.appendChild(span2Prev);
//						
//					var aNext = document.createElement('a');
//					aNext.setAttribute('class','carousel-control-next');
//					aNext.setAttribute('href','#scrCarousel');
//					aNext.setAttribute('role','button');
//					aNext.setAttribute('data-slide','next');
//						
//					var span1Next = document.createElement('a');
//					span1Next.setAttribute('class','carousel-control-next-icon');
//					span1Next.setAttribute('aria-hidden','true');
//					var span2Next = document.createElement('a');
//					span2Next.setAttribute('class','sr-only');
//					span2Next.innerText = 'Next';
//						
//					aNext.appendChild(span1Next);
//					aNext.appendChild(span2Next);
//					
//					divCarousel.appendChild(aPrev);
//					divCarousel.appendChild(aNext);
//					divCarousel.appendChild(carouselinner);
//				}
					// Wrapper for slides (id = myCarousel)
					
//	$('#scrPaneTop').append(divCarousel);
	
	$('#inputView').hide();
	$('#resultView').show();
}

function screenshots(domain,selectedTool) {
	try {
        $.ajax({
            type: "POST",
			crossDomain: true,
            url: "http://api.screenshots.com/v1/" + domain + "/history/",
			dataType: "json",
            success: function(scr) {
				console.log(scr);
				screenshotsSlider(domain,scr);
            },
            error: function(err) {
                console.log("screenshots: ", err)
				clearWait();
				$('#alertNotFound .modal-title').empty();
				$('#alertNotFound .modal-title').text("[X] " + err.statusText);
				$('#alertNotFound .modal-body').empty();
				$('#alertNotFound .modal-body').append("<p>status: "+err.status+"<br>domain: "+err.responseJSON.domain+"<br>error_message: "+err.responseJSON.error_message+"<br></p>")
				$('#alertNotFound').modal("show");
            }
        });
    }
    
    catch(err) {
        console.log("screenshots: ", err);
		clearWait();
    }
}

function webcache(domain,selectedTool) {
	try {
        $.ajax({
            type: "GET",
            url: "http://archive.org/wayback/available?url=" + domain,
            success: function(cache) {
				console.log("webcache :", cache);
				try {
					if (cache.archived_snapshots.closest.available == true) {
						console.log(cache);
						console.log(cache.archived_snapshots.closest.timestamp);
						console.log(cache.archived_snapshots.closest.url);

						var cachePane = document.createElement('fieldset'), cacheUl1 = document.createElement('ul'), cacheUl2 = document.createElement('ul'), cacheUl3 = document.createElement('ul'), cacheFrame = document.createElement('iframe');

						cacheFrame.setAttribute('sandbox','allow-same-origin allow-scripts allow-popups allow-forms');
						cacheFrame.setAttribute('src',""+cache.archived_snapshots.closest.url+"");
						cacheFrame.setAttribute('frameborder', 3);
						cacheFrame.setAttribute('marginheight', 0);
						cacheFrame.setAttribute('marginwidth', 0);
						cacheFrame.setAttribute('scrolling', "yes");
						cacheFrame.setAttribute('allowTransparency', "true");
						cacheFrame.setAttribute('width', "100%");
						cacheFrame.setAttribute('height', "600");
						cacheFrame.setAttribute('style', 'overflow-x: hidden; overflow-y: scroll');

						cacheUl1.setAttribute('style','list-style: none');
						cacheUl2.setAttribute('style','list-style: none');
						cacheUl3.setAttribute('style','list-style: none');
						var perma1 = document.createElement('a');
						perma1.setAttribute('href', "https://web.archive.org/web/*/" + domain);
						perma1.setAttribute('target','_blank');
						perma1.innerText = "https://web.archive.org/web/*/" + domain;

						var perma2 = document.createElement('a');
						perma2.setAttribute('href', "http://webcache.googleusercontent.com/search?q=cache:" + domain);
						perma2.setAttribute('target','_blank');
						perma2.innerText = "http://webcache.googleusercontent.com/search?q=cache:" + domain;

						var cacheSpan1 = document.createElement('span');

						var linebr = document.createElement('br');
						var cacheTimeStamp = cache.archived_snapshots.closest.timestamp;
						cacheSpan1.innerText = "Archived date: " + cacheTimeStamp.slice(0, 4) + "-" + cacheTimeStamp.slice(4,6) + "-" + cacheTimeStamp.slice(6,8);
						cacheUl1.appendChild(cacheSpan1);
						cacheUl2.appendChild(perma1);
						cacheUl3.appendChild(perma2);
						cachePane.appendChild(cacheUl1);
						cachePane.appendChild(cacheUl2);
						cachePane.appendChild(cacheUl3);
						cachePane.appendChild(linebr);
						cachePane.appendChild(cacheFrame);
						
						$('#inputView').hide();
						$('#resultView').append("<h4>WayBack Machine's cached version of "+domain+"</h4>");
						$('#resultView').append(cachePane);
						$('#resultView').show();
					} else {
						clearWait();
						alertNotFound(domain,selectedTool);
					}
				}	
				catch (err) {
					clearWait();
					alertNotFound(domain,selectedTool);
				}
            },
			dataType: "json",
            error: function(err) {
                console.log("pagelinks: ", err)
				clearWait();
            }
		});
	}
    
    catch(err) {
        console.log("webcache: ", err);
		clearWait();
		alertNotFound(domain,selectedTool);
    }
}

function extractSslCheck(domain,dump) {
    var info = [];
    var $doc=$(dump);
    var mainContent = $doc.find("div.mainContent")[0];
    var qus = $(mainContent).find(".qu");

    $(qus).each(function (index, qu) {
        if (index != 10 && index != 15) {
            var key = $.trim($(qu).parent().text());
            var value = $.trim($(qu).parent().parent().text());
            value = value.replace(/\s+/g, ' ');
            value = value.replace(key, "");
            info.push({key: key, value: value});
        }
    });
	$('#resultView').append("<h4>SSL Certificate Check result for "+domain+"</h4><table class='table' id='sslTable' style='background-color: #f5f5f5'></table>");
	
    var table = $("#sslTable");
    info.forEach(function(i){
        var valueToBeAppended ='<tr><td>'+ i.key+'</td><td>'+ i.value+'</td></tr>';
        table.append($(valueToBeAppended));
    });
	$('#inputView').hide();
	$('#resultView').show();
}

function sslcheck(domain,selectedTool) {
	var SslCheckerForm = {
            "SslCheckerForm[url]": domain,
            "SslCheckerForm[port]": 443,
            "yt0": ""
    };
	try {
        $.ajax({
            type: "POST",
            url: "https://www.sslchecker.com/sslchecker",
            data: SslCheckerForm,
            success: function(data){
                var parser = new DOMParser();
                var dump = parser.parseFromString(data, "text/html");
				console.log(dump);
                extractSslCheck(domain,dump);
			},
            dataType: "html",
            error: function() {
				console.log("SSL Check: ", err);
				clearWait();
			}
        });
    }
    
    catch(err) {
        console.log("pagelinks: ", err);
		clearWait();
    }
}

function gsb(domain,selectedTool,lookup) {
	var parameters = {
		"client": {
			"clientId": "recon",
			"clientVersion": "0.0.3"
		},
		'threatInfo': {
			'threatTypes': ["MALWARE", "SOCIAL_ENGINEERING","UNWANTED_SOFTWARE","POTENTIALLY_HARMFUL_APPLICATION","THREAT_TYPE_UNSPECIFIED"],
                'platformTypes': 'ALL_PLATFORMS',
                'threatEntryTypes': ['URL'],
                'threatEntries': [
					{"url": domain}
				  ]
            }
	};
	try {
        $.ajax({
            type: "POST",
            url: "https://safebrowsing.googleapis.com/v4/threatMatches:find?key=SAFEBROWSING_API_KEY",
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify(parameters),
			dataType : "json",
            success: function(resp) {
				try {
					var gsbLen = resp.matches.length;
					if (!(gsbLen) || gsbLen == 0) {
						if (lookup == 'sl') {
							alertNotFound(domain,selectedTool);
							clearWait();
						} else {
							$('#inputView').hide();
							$('#resultView').append("<a href='https://transparencyreport.google.com/safe-browsing/search?url="+domain+"' target='_blank'>https://transparencyreport.google.com/safe-browsing/search?url="+domain+"</a><br><pre>"+ domain + " wasn't found on <a href='https://transparencyreport.google.com/safe-browsing/search?url="+domain+"' target='_blank'>Google's Safe Browsing</a> list. It doesn't mean that website is benign!</pre><br>");
							$('#resultView').show();
						}
					} else {
						console.log(resp.matches[0]);
						$('#inputView').hide();
						$('#resultView').append("<span>Google's SafeBrowsing Lookup result for "+domain+"</span>");
						var gsbObjKeys = Object.keys(resp.matches[0]);
						console.log(gsbObjKeys.length);
						var gsbObj = JSON.stringify(resp.matches[0], undefined, 4);
						$('#resultView').append("<br><a href='https://transparencyreport.google.com/safe-browsing/search?url="+domain+"' target='_blank'>https://transparencyreport.google.com/safe-browsing/search?url="+domain+"</a><br><pre>"+syntaxHighlight(gsbObj)+"</pre><br>");
						$('#resultView').show();
					}
				}
				
				catch (err) {
					if (lookup == 'sl') {
							alertNotFound(domain,selectedTool);
							clearWait();
						} else {
							$('#inputView').hide();
							$('#resultView').append("<span>Google's SafeBrowsing Lookup result for "+domain+"</span><br><a href='https://transparencyreport.google.com/safe-browsing/search?url="+domain+"' target='_blank'>https://transparencyreport.google.com/safe-browsing/search?url="+domain+"</a><br><pre>"+ domain + " wasn't found on <a href='https://transparencyreport.google.com/safe-browsing/search?url="+domain+"' target='_blank'>Google's Safe Browsing</a> list. It doesn't mean that website is benign!</pre><br>");
							$('#resultView').show();
					}
				}
            },
            error: function() {
                console.log("gsb: ", err);
				alertNotFound(domain,selectedTool);
				clearWait();
            }
        });
    }
    
    catch(err) {
        console.log("gsb: ", err);
		clearWait();
    }
}

function callTool(domain, selectedTool, lookup) {
	switch (selectedTool) {
		case 'whois':
			whois(domain,selectedTool);
			break;
		case 'dns':
			dns(domain,selectedTool);
			break;
		case 'rdns':
			rdns(domain,selectedTool);
			break;
		case 'arec':
			arec(domain,selectedTool);
			break;
		case 'shareddns':
			shareddns(domain,selectedTool);
			break;
		case 'zonet':
			zonet(domain,selectedTool);
			break;
		case 'revip':
			revip(domain,selectedTool);
			break;
		case 'geoip':
			geoip(domain,selectedTool);
			break;
		case 'nmap':
			nmap(domain,selectedTool);
			break;
		case 'subnet':
			subnet(domain,selectedTool);
			break;
		case 'tracert':
			tracert(domain,selectedTool);
			break;
		case 'ping':
			ping(domain,selectedTool);
			break;
		case 'headers':
			headers(domain,selectedTool);
			break;
		case 'pagelinks':
			pagelinks(domain,selectedTool);
			break;
		case 'screenshots':
			screenshots(domain,selectedTool);
			break;
		case 'webcache':
			webcache(domain,selectedTool);
			break;
		case 'sslcheck':
			sslcheck(domain,selectedTool);
			break;
		case 'gsb':
			gsb(domain,selectedTool,lookup);
			break;
		default:
			/* return nothing*/
	}
}

function extractURL(url, selectedTool, lookup) {
	domain = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
	callTool(domain, selectedTool, lookup);
}

function updateOnlineStatus(event) {
	var isOnline = $('#isOnline');
	var condition = navigator.onLine ? "online" : "offline";
	if (condition == 'online') {
		isOnline.removeClass('offline');
		isOnline.addClass('online');
		isOnline.text("Back " + condition.toUpperCase());
		setTimeout(function(){ 
                    $('#isOnline').css('display','none');
                }, 6000);
	} else {
		isOnline.css('display','block');
		isOnline.removeClass('online');
		isOnline.addClass('offline');
		isOnline.text(condition.toUpperCase() + "! There is no Internet connection");
	}
	console.log(condition);
}

$(document).ready(function() {
	var isOnline = document.getElementById("isOnline");
	  window.addEventListener('online',  updateOnlineStatus);
	  window.addEventListener('offline', updateOnlineStatus);
	
	selectedTool = 'whois';
	selectedToolTitle = "Whois Lookup"
	$('ul#menu li').click(function(e) {
		$('#reconTitle').remove();
		selectedTool = $(this).attr('id');
		selectedToolTitle = $(this).find('a').text();
		$('#selectedToolTitle').text(selectedToolTitle);
		console.log(selectedTool + ";" + selectedToolTitle);
		$('.nav li').removeClass('active');
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		$('.span9').fadeOut(300).fadeIn(600);
//		$('#lookup button').attr("id", "l" + selectedTool);
		clearWait();
		$('#fileUpload').hide();
		$('#bulkLookup').hide();
		$('#singleLookup').fadeIn(600);
		$('#infoBulk p').show(600);
		$('#resultView').fadeOut(300);
		$('#inputView').fadeIn(600);
		$('#resultView').empty();
		e.preventDefault();
	});
	 
	// extract the domain from the input URL
	var slookup = $('#lookup button');
	slookup.click(function(e) {
		url = $('#input').val();
		console.log(input);
		// url validation
		if (url != undefined || url != "") {
			var urlregex = new RegExp("[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*");
			var validateURL = urlregex.test(url);
			console.log("validateURL: " + validateURL);
		} else {
			alertInvalidInput();
		}
		if (validateURL == true) {
			$('#lookup').append("<span class='glyphicon glyphicon-refresh-animate'></span>");
			$('#input').prop('disabled',true);
			slookup.text("Looking up..");
			slookup.prop('disabled',true);
			extractURL(url, selectedTool, 'sl');
		} else {
			// url validation failed
			alertInvalidInput();
			$('#input').val('');
		}
	});
	
	$('#input').keypress(function(e) {
		if(e.which == 13) {
			url = $('#input').val();
			console.log(input);
			// url validation
			if (url != undefined || url != "") {
				var urlregex = new RegExp("[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*");
				var validateURL = urlregex.test(url);
				console.log("validateURL: " + validateURL);
			}
			if (validateURL == true) {
				blookup.append( "<span class='glyphicon glyphicon-refresh-animate'></span>" );
				$('#input').prop('disabled',true);
				slookup.text("Looking up..");
				slookup.prop('disabled',true);
				extractURL(url, selectedTool, 'sl');
			} else {
				// url validation failed
				alertInvalidInput();
				$('#input').val('');
			}
		}
	});
	
	// extract the domains from the input URLs (bulk lookup)
	var blookup = $('#bulkLookup button');
	blookup.click(function(e) {
		var url;
		var lines = $('#bulkinput').val().split('\n');
		for(var i = 0;i < lines.length;i++){
			console.log(lines[i]);
			url = lines[i];
			// url validation
			if (url != undefined || url != "") {
				var urlregex = new RegExp("[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*");
				var validateURL = urlregex.test(url);
				console.log("validateURL: " + validateURL);
			} else {
				alertInvalidInput();
			}
			if (validateURL == true) {
				$('#lookup').append("<span class='glyphicon glyphicon-refresh-animate'></span>");
				$('#input').prop('disabled',true);
				blookup.text("Looking up..");
				blookup.prop('disabled',true);
				extractURL(url, selectedTool, 'bl');
			} else {
				// url validation failed
				alertInvalidInput();
				$('#bulkinput').val('');
			}
		}
	});
	
	$('#updates').click(function(e) {
		$('#singleLookup').css('display','none');
		$("#bulkLookup").css('display','block');
		$('#infoBulk p').hide();
//		$('#infoBulk p').append("<a href='#' id='backtoSingle'>&lt;&lt; back to single lookup..</a>");
	});
	
	$('#fileUpload').click(function() {
		if ( ! window.FileReader ) {
			return alert( 'FileReader API is not supported by your browser.' );
		}
		var $i = $( '#file-5' ), // Put file input ID here
			input = $i[0]; // Getting the element from jQuery
		if ( input.files && input.files[0] ) {
			file = input.files[0]; // The file
			fr = new FileReader(); // FileReader instance
			fr.onload = function () {
				// Do stuff on onload, use fr.result for contents of file
				$( '#file-content' ).append( $( '<div/>' ).html( fr.result ) )
			};
			fr.readAsText( file );
//			fr.readAsDataURL( file );
			console.log(fr.result);
		} else {
			// Handle errors here
			alert( "File not selected or browser incompatible." )
		}
	});
	
//	$('#backtoSingle').click(function(e) {
//		$('#fileUpload').css('display','none');
//		$('#input').css('display','block');
//		$('#lookup').css('display','block');
//	});
	
	// alert about next updates
//	$('#updates').click(function(e) {
//		$("#alertWhatsNext").modal("show");
//	});
	
	$('#extPromoDiv').click(function() {
		$('#extPromo').modal('show');
	});
 });
