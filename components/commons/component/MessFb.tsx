import { MessengerChat } from "react-messenger-chat-plugin";
//@ts-ignore
import MessengerCustomerChat from "react-messenger-customer-chat";

const MessFb = () => {
	return (
		<>
			{/* <MessengerChat
				pageId="100088136385934"
				themeColor={"#000000"}
				bottomSpacing={300}
				loggedInGreeting="loggedInGreeting"
				loggedOutGreeting="loggedOutGreeting"
				greetingDialogDisplay={"show"}
				debugMode={true}
			/> */}
			<MessengerCustomerChat
				pageId="100088136385934"
				appId="488516726488262"
				xfbml={true}
			/>
			,
		</>
	);
};

export default MessFb;
