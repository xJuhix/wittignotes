const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
var axios = require('axios');
const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

app.post('/sendmail', async (req, res) => {
	console.log(req.body);

	const msg = {
		to: req.body.yourEmail,
		from: req.body.yourEmail,
		subject: req.body.subject,
		text: req.body.content,
		replyTo: req.body.replyEmail
	}

	
	sgMail.send(msg).then(() => {
		return res.status(200).json({
			success: true,
			data: {
				message: 'Message sent.'
			}
		})
	}, (error) => {
		return res.status(400).json({
			success: false,
			data: {
				message: 'Ssomething went wrong.'
			}
		})
	})
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));

