const twilio = require("twilio");

class makeClient {
  /**
   * @description Construct a client using Twilio SID and Twilio authentication key
   * @param {String} userName - Twilio user SID
   * @description Construct a client using Twilio SID and Twilio authentication key
   * @param {String} authKey - Twilio user authentication key
   */
  constructor(userName, authKey) {
    this.client = twilio(userName, authKey);
  }

  /**
   * @description - Provide text to send along with 'from' user and 'to' user
   * @param {String} text - message body(text you want to send)
   * @param {String} from - 'from' phone number with country code in the form of a string
   * @param {String} to -'to' phone number with country code in the form of a string
   */
  async textMessage(text, from, to) {
    const message = this.client.messages.create({
      from: "whatsapp:" + from,
      body: text,
      to: "whatsapp:" + to,
    });
    return message;
  }

  /**
   * @description - Provide text to send along with 'from' user and 'to' user
   * @param {Object} packet - js object which contains media URLs and text body.
   * @param {String} from - 'from' phone number with country code in the form of a string
   * @param {String} to -'to' phone number with country code in the form of a string
   */
  async mediaMessage(packet, from, to) {
    const { mediaUrl, textBody } = packet;

    const message = await this.client.messages.create({
      from: "whatsapp:" + from,
      mediaUrl: mediaUrl,
      body: textBody,
      to: "whatsapp:" + to,
    });

    return message;
  }
}

module.exports = makeClient;
