window.onload = function() {

	document.getElementById("alipay").onclick = function() {
		document.getElementById("qrcodeAli").className = "qrcode show showIn"
	};

	document.getElementById("closeBtn1").onclick = function() {
		document.getElementById("qrcodeAli").className = "qr"
	};

	document.getElementById("wechat").onclick = function() {
		document.getElementById("qrcodeWechat").className = "qrcode show showIn"
	};

	document.getElementById("closeBtn2").onclick = function() {
		document.getElementById("qrcodeWechat").className = "qr"
	};

	document.getElementById("qq").onclick = function() {
		document.getElementById("qrcodeQQ").className = "qrcode show showIn"
	};

	document.getElementById("closeBtn3").onclick = function() {
		document.getElementById("qrcodeQQ").className = "qr"
	};
	
	document.getElementById("venmo").onclick = function() {
		document.getElementById("qrcodeVenmo").className = "qrcode show showIn"
	};
	
	document.getElementById("closeBtn4").onclick = function() {
		document.getElementById("qrcodeVenmo").className = "qr"
	}
	
}

// PayPal Button  
function openbox() {

	var paypal = "https://www.paypal.me/andrewsun74";
	
	//window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
	var iWidth = 500;                         //弹出窗口的宽度;
	var iHeight = 640;                        //弹出窗口的高度;
	var iTop = (window.screen.height-30-iHeight)/2; //获得窗口的垂直位置;  
	var iLeft = (window.screen.width-10-iWidth)/2; //获得窗口的水平位置;
	
    selected = "yes";
    window.open(
      paypal,
      "_blank",
      'height='+iHeight+',innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no'
	)
  }
