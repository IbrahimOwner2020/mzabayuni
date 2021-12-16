import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "jerrykenny110@gmail.com", // clients email address(jerrykenny110@gmail.com)
      from: "kidibra2020@gmail.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New contant</title>
            </head>
            <body>
                <div>
                    <h1 style="font-size: 24; color: #777; font-family: 'Courier New', Courier, monospace;" >${req.body.subject}</h1>
                    <p style="font-size: 14; font-family: 'Courier New', Courier, monospace;">You have received a email from ${req.body.firstName} ${req.body.lastName} who visited your portfolio, and tried to reach you with the following message:</p>
                    <p style="font-size: 14; font-family: sans-serif;">${req.body.message}</p>
                    <p>You can try to reply to him through <a href="mailto:${req.body.email}">${req.body.email}</a></p>
                </div>
            </body>
            </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return (
      res.status(200).json({ error: "Message sent successful" }));
}

export default sendEmail;
