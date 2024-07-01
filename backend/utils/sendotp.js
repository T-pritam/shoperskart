const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

exports.sendOTP = async(receiverEmail,otp) => {
    await transporter.sendMail({
    from: process.env.EMAIL,
    to: receiverEmail,
    subject: 'OTP Verification',
    html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>OTP Verification</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    padding: 10px 0;
                }
                .header img {
                    max-width: 150px;
                }
                .content {
                    text-align: center;
                    padding: 20px;
                }
                .otp-code {
                    font-size: 24px;
                    font-weight: bold;
                    background-color: #f0f0f0;
                    padding: 10px;
                    border-radius: 5px;
                    display: inline-block;
                    margin: 20px 0;
                }
                .footer {
                    text-align: center;
                    padding: 10px;
                    font-size: 12px;
                    color: #888;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <img src="https://shopperskart.info/cdn/shop/files/ShopperKart_785_x_500_px_1200_x_500_px_1400_x_500_px_2.png?v=1668198224&width=400" alt="Company Logo">
                </div>
                <div class="content">
                    <h2>OTP Verification</h2>
                    <p>Please use the following One-Time Password (OTP) to verify your account:</p>
                    <div class="otp-code">${otp}</div>
                    <p>This OTP is valid for 10 minutes.</p>
                </div>
                <div class="footer">
                    <p>If you did not request this verification, please ignore this email.</p>
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `
},function(error, info){
    if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
  });
};