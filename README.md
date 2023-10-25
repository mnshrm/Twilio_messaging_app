# Twilio messaging app  

*Add environment variables named as PORT, TWILIO_SID and TWILIO_KEY*

- To send a text message, send a post message to message/send/text with json object as follows   
  {  
    "from":"+14xxxxxxxx6",  
    "to":"+919xxxxxxxx9",  
    "text":"Some message"  
    }
- To send a media message, send a post message to message/send/media with json object as follows, (mediaUrl array contains list of all the URLs containing the media)   
 {  
     "from":"+14xxxxxxxx6",  
     "to":"+14xxxxxxxx6",  
     "packet":{  
             "mediaUrl" : ["https://joinindianarmy.nic.in/writereaddata/Portal/NotificationPDF/Notification_TES-48.pdf"],  
             "textBody" : "postman"  
             }  
   }  
- Application will recieve messages via route /recieve with a post request from twilio.
- Status updates of sent messages will be received by application via route /receive/updates with a post request.
