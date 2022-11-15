const catchAsyncError = require("../middleware/catchAsyncError.js");
const makeClient = require("../Utils/twilioClient.js");

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

exports.recieveMessage = async (req, res) => {
  const result = `${req.body.From} has send ${req.body.To} a message
  message :- 
              ${req.body.Body}`;

  console.log(result);
};

exports.recieveUpdates = (req, res) => {
  console.log(req.body.MessageStatus);
};
