const cron = require("node-cron");
const Email = require("./models/emailModel");

// Check emails that need follow-ups every day at 9 AM
cron.schedule("0 9 * * *", async () => {
  const emailsToFollowUp = await Email.find({
    followUpStatus: "pending",
    followUpDate: { $lte: new Date() },
  });

  emailsToFollowUp.forEach((email) => {
    // Send reminder email or notify
    console.log(`Reminder: Follow up with ${email.recipientEmail}`);
    // Here you can send another email or trigger a notification
  });
});
