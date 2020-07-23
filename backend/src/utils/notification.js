import { VolunteerConfirmationEmail } from "./emailTemplates/Volunteer.confirmation.email";
import { StudentConfirmationEmail } from "./emailTemplates/Student.confirmation.email";
import { cancelVolunteerBookingEmail } from "./emailTemplates/Volunteer.cancel.booking.email";
import { cancelStudentBookingEmail } from "./emailTemplates/Student.cancel.booking.email";

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

export const cancelBookingEmailFromVolunteer = async (data) => {
  try {
    const emailData = {
      toEmail: data.studentEmail,
      subject: `CYF - ${data.volunteerName} has canceled his booking with you`,
      html: cancelVolunteerBookingEmail(data),
      replyToEmail: data.volunteerEmail,
    };
    await mailer(emailData);
  } catch (error) {
    throw new Error(error);
  }
};

export const cancelBookingEmailFromStudent = async (data) => {
  try {
    const emailData = {
      toEmail: data.volunteerEmail,
      subject: `CYF - ${data.studentName} has canceled his booking with you`,
      html: cancelStudentBookingEmail(data),
      replyToEmail: data.studentEmail,
    };
    await mailer(emailData);
  } catch (error) {
    throw new Error(error);
  }
};
