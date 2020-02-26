import CommunicationHandler from "./CommunicationHandler";
import { handleCall, handleEmail, handleSms } from "./handlers";

const emailHandler = new CommunicationHandler("email", handleEmail, null);

const smsHandler = new CommunicationHandler("sms", handleSms, emailHandler);

const callHandler = new CommunicationHandler("call", handleCall, smsHandler);

// typically the first handler would be the one most commonly used. So you can see here that we pass callHandler as the param.
// callHandler, in turn, passes data through the chain if it cannot handle the input data itself. Therefore, the chain you create is important and should link from one to the next, as required.
const handler = new CommunicationHandler(null, null, callHandler);

export default handler;
