import { VolunteerConfirmationEmail } from "./emailTemplates/Volunteer.confirmation.email";
import { StudentConfirmationEmail } from "./emailTemplates/Student.confirmation.email";
import mailer from "./mailer";
export const bookingConfirmationEmail = async (data) => {
  try {
    const emailToVolunteer = {
      toEmail: data.volunteerEmail,
      subject: `CYF - New Booked Session with ${data.studentName}`,
      html: VolunteerConfirmationEmail(data),
      replyToEmail: data.studentEmail,
    };
    const emailToStudent = {
      toEmail: data.studentEmail,
      subject: `CYF - Booked Session Confirmation with ${data.volunteerName}`,
      html: StudentConfirmationEmail(data),
      replyToEmail: data.volunteerEmail,
    };
    await mailer(emailToVolunteer);
    await mailer(emailToStudent);
  } catch (error) {
    throw new Error(error);
  }
};
