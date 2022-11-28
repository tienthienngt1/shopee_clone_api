import { useEffect } from "react";

const MessFb = () => {
	useEffect(() => {
		const fbRoot = document.createElement("div");
		fbRoot.id = "fb-root";
		const fbChat = document.createElement("div");
		fbChat.id = "fb-customer-chat";
		fbChat.className = "fb-customerchat";
		document.body.appendChild(fbRoot);
		document.body.appendChild(fbChat);
		var chatbox = document.getElementById("fb-customer-chat");
		chatbox && chatbox.setAttribute("page_id", "111485028459651");
		chatbox && chatbox.setAttribute("attribution", "biz_inbox");
		//@ts-ignore
		window.fbAsyncInit = function () {
			//@ts-ignore
			FB.init({
				xfbml: true,
				version: "v15.0",
			});
		};

		(function (d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			//@ts-ignore
			js.src =
				"https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
			//@ts-ignore
			fjs.parentNode.insertBefore(js, fjs);
		})(document, "script", "facebook-jssdk");
	}, []);
	return <></>;
};

export default MessFb;
