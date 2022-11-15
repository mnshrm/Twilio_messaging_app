const catchAsyncError = require("../middleware/catchAsyncError.js");
const makeClient = require("../Utils/twilioClient.js");

/**
 * @description - This function sends a text message to the specified user
 */
exports.textMessage = catchAsyncError(async (req, res) => {
  const client = new makeClient(process.env.TWILIO_SID, process.env.TWILIO_KEY);

  const message = await client.textMessage(
    req.body.text,
    req.body.from,
    req.body.to
  );

  res.status(200).json({
    message: "message sent",
    id: message.sid,
  });
});

/**
 * @description - This function sends a media message to the specified user
 */
exports.mediaMessage = catchAsyncError(async (req, res) => {
  const client = new makeClient(process.env.TWILIO_SID, process.env.TWILIO_KEY);

  const message = await client.mediaMessage(
    { ...req.body.packet },
    req.body.from,
    req.body.to
  );

  res.status(200).json({
    message: "message sent",
    id: message.sid,
  });
});

/**
 * @description - Recieves and prompts developer about received messages
 */

exports.recieveMessage = catchAsyncError(async (req, res) => {
  const result = `${req.body.From} has send ${req.body.To} a message
  message :- 
  ${req.body.Body}`;

  console.log(result);
});

/**
 * @description - Recieves and prompts developer about updates for already sent messages
 */
exports.recieveUpdates = (req, res) => {
  console.log(req.body.MessageStatus);
};
