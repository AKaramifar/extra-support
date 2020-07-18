import { VolunteerConfirmationEmail } from "./emailTemplates/Volunteer.confirmation.email";
import { StudentConfirmationEmail } from "./emailTemplates/Student.confirmation.email";
import mailer from "./mailer";
export const bookingConfirmationEmail = async (data) => {
  try {
    const emailToVolunteer = {
      toEmail: data.volunteerEmail,
      subject: "New Booked Session",
      html: VolunteerConfirmationEmail(data),
      replyToEmail: data.studentEmail,
    };
    const emailToStudent = {
      toEmail: data.studentEmail,
      subject: "Booked Session Conformation",
      html: StudentConfirmationEmail(data),
      replyToEmail: data.volunteerEmail,
    };
    await mailer(emailToVolunteer);
    await mailer(emailToStudent);
  } catch (error) {
    throw new Error(error);
  }
};
