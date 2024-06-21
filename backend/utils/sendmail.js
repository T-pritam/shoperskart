const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pritamrao37@gmail.com",
    pass: "mtevhiyextgsckza",
  },
});

exports.sendMail = async(receiverEmail,resetLink,name) => {
    await transporter.sendMail({
    from: "pritamrao37@gmail.com",
    to: receiverEmail,
    subject: 'Password Reset Request',
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset</title>
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
            .reset-link {
                font-size: 18px;
                font-weight: bold;
                background-color: #f0f0f0;
                padding: 10px;
                border-radius: 5px;
                display: inline-block;
                margin: 20px 0;
                text-decoration: none;
                color: #000;
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
                <h2>Password Reset Request</h2>
                <p>Hello ${name},</p>
                <p>You requested to reset your password. Click the link below to reset it:</p>
                <a href="${resetLink}" class="reset-link">Reset Password</a>
                <p>If you didn't request this, please ignore this email.</p>
            </div>
            <div class="footer">
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
