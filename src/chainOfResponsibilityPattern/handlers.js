export function handleEmail(email) {
  const response = `Email sent to: ${email.recipient}, message: ${email.message}`;
  console.log(response);
  return response;
}

export function handleSms(sms) {
  const response = `SMS sent to: ${sms.recipient}, message: ${sms.message}`;
  console.log(response);
  return response;
}

export function handleCall(call) {
  const response = `Call placed to: ${call.recipient}, from: ${call.ownNumber}`;
  console.log(response);
  return response;
}
