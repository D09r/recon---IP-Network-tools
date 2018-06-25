/**
* * Howdy!! p1ngm3 @d09r
*
* * recon
* * Version 0.0.4
* * Author: Dinesh Kumar
* * https://www.linkedin.com/in/hack3r
* * Repository: https://github.com/d09r
*
*/


var url, domain, selectedTool;

function alertInvalidInput() {
	$("#alertModal").modal("show");
}

function clearWait() {
	$('#input').prop('disabled',false);
	$('#lookup button').text("Lookup");
	$('#lookup button').prop('disabled',false);
}

function alertAPIlimit() {
	$("#alertAPIlimit").modal("show");
	clearWait();
}

function whois(domain) {
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
						$('#resultView').append("<h4>Whois Lookup result for a "+domain+"</h4><pre>"+data+"</pre>");
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

function dns(domain) {
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
						$('#resultView').append("<h4>DNS Lookup result for a "+domain+"</h4><pre>"+data+"</pre>");
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

function rdns(domain) {
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
						$('#resultView').append("<h4>Reverse DNS Lookup result for a "+domain+"</h4><pre>"+data+"</pre>");
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

function arec(domain) {
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
						$('#resultView').append("<h4>DNS (A) records for a "+domain+"</h4><pre>"+data+"</pre>");
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

function shareddns(domain) {
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
						$('#resultView').append("<h4>Shared DNS Lookup result for a "+domain+"</h4><pre>"+data+"</pre>");
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

function zonet(domain) {
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
						$('#resultView').append("<h4>Zone Transfer result for a "+domain+"</h4><pre>"+data+"</pre>");
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
						$('#resultView').append("<h4>Reverse IP Lookup result for a "+domain+"</h4><pre>"+data+"</pre>");
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

function geoip(domain) {
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
						$('#resultView').append("<h4>Geo IP Lookup result for a "+domain+"</h4><pre>"+data+"</pre>");
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

function nmap(domain) {
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
						$('#resultView').append("<h4>Namap scan result for a "+domain+"</h4><pre>"+data+"</pre>");
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

function subnet(domain) {
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
						$('#resultView').append("<h4>Subnet Lookup result for a "+domain+"</h4><pre>"+data+"</pre>");
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

function tracert(domain) {
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
						$('#resultView').append("<h4>Traceroute result for a "+domain+"</h4><pre>"+data+"</pre>");
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

function ping(domain) {
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
						$('#resultView').append("<h4>Ping test result for a "+domain+"</h4><pre>"+data+"</pre>");
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

function headers(domain) {
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
						$('#resultView').append("<h4>HTTP Headers result for a "+domain+"</h4><pre>"+data+"</pre>");
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

function pagelinks(domain) {
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
						$('#resultView').append("<h4>Extracted Page Links result for a "+domain+"</h4><pre>"+data+"</pre>");
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

function callTool(domain, selectedTool) {
	switch (selectedTool) {
		case 'whois':
			whois(domain);
			break;
		case 'dns':
			dns(domain);
			break;
		case 'rdns':
			rdns(domain);
			break;
		case 'arec':
			arec(domain);
			break;
		case 'shareddns':
			shareddns(domain);
			break;
		case 'zonet':
			zonet(domain);
			break;
		case 'revip':
			revip(domain);
			break;
		case 'geoip':
			geoip(domain);
			break;
		case 'nmap':
			nmap(domain);
			break;
		case 'subnet':
			subnet(domain);
			break;
		case 'tracert':
			tracert(domain);
			break;
		case 'ping':
			ping(domain);
			break;
		case 'headers':
			headers(domain);
			break;
		case 'pagelinks':
			pagelinks(domain);
			break;
		default:
			/* return nothing*/
	}
}

function extractURL(url, selectedTool) {
	domain = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
	console.log(domain, selectedTool);
	callTool(domain, selectedTool);
}

$(document).ready(function() {
	selectedTool = 'whois';
	$('ul#menu li').click(function(e) {
		selectedTool = $(this).attr('id');
		console.log(selectedTool);
		$('.nav li').removeClass('active');
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		$('.span9').fadeOut(300).fadeIn(600);
//		$('#lookup button').attr("id", "l" + selectedTool);
		console.log($('#lookup button').attr("id"));
		clearWait();
		$('#resultView').fadeOut(300);
		$('#inputView').fadeIn(600);
		$('#resultView').empty();
		e.preventDefault();
	});
	 
	// extract the domain from the input URL 
	var blookup = $('#lookup button');
	blookup.click(function(e) {
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
			blookup.text("Looking up..");
			blookup.prop('disabled',true);
			extractURL(url, selectedTool);
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
				blookup.text("Looking up..");
				blookup.prop('disabled',true);
				extractURL(url, selectedTool);
			} else {
				// url validation failed
				alertInvalidInput();
				$('#input').val('');
			}
		}
	});
	
	// alert about next updates
	$('#updates').click(function(e) {
		$("#alertWhatsNext").modal("show");
	});
 });