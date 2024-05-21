import transporter from "@/helper/nodemailer";

export default async function handler(req, res) {
    try {
        if (req.method !== "POST") {
            return res.status(405).json({ message: "Method not allowed", success: false });
        }

        const { formData } = JSON.parse(req.body)

        if (!formData) {
            return res.status(400).json({ message: "Form data not found", success: false });
        }

        const { name, email, subject, message } = formData;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const mailOptions = {
            from: process.env.EMAIL,
            to: 'adityaburse.success@gmail.com',
            subject: subject,
            html: `
        <div>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        </div>
        `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully", success: true });

    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }

}