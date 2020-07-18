export const VolunteerConfirmationEmail = (data) => {
  return `
<table width="100%" cellpadding="0" cellspacing="0" style="margin: 0; font-family: Arial, Helvetica, sans-serif;">
<tbody>
    <tr>
        <td>
            <table width="545" cellpadding="0" cellspacing="0">
                <tbody>
                    <tr>
                        <header>
                            <div style="display: flex;">
                                <div style="
                  height: 226px;
                  background-color: #e0101a;
                  flex-grow: 1;
                "></div>
                                <img style="
                  margin: 0 15px 0 15px;
                  width: 545px;
                  height: 226px;
                " alt="" src="https://cyf-assets-buckets.s3.eu-west-2.amazonaws.com/emailTemplate/cyf-email-05.jpg" />
                                <div style="
                  height: 226px;
                  background-color: #e0101a;
                  flex-grow: 1;
                "></div>
                            </div>
                        </header>
                        <div style="width: 545px; margin: 58px auto 50px;">
                            <p style="
                margin-top: 0;
                font-size: 14px;
                line-height: 1.2rem;
              ">
                                Dear ${data.volunteerName},
                            </p>
                            <p style="
                margin-top: 0;
                font-size: 14px;
                line-height: 1.2rem;
              ">
                                This is a special reminder to confirm your meeting with ${data.studentName} on ${data.date}.
                            </p>
                            <p style="
                margin-top: 0;
                font-size: 14px;
                line-height: 1.2rem;
              ">
                                Your meeting is scheduled to hold at ${data.location}
                            </p>
                            <p style="
                margin-top: 0;
                margin-bottom: 6px;
                font-size: 14px;
                line-height: 1.2rem;
              ">
                                This is ${data.studentName}’s email: ${data.studentEmail}
                            </p>
                            <p style="
                            margin-top: 0;
                            margin-bottom: 6px;
                            font-size: 14px;
                            line-height: 1.2rem;
                          ">
                                Please feel free to contact ${data.studentName} if you have any question.
                            </p>
                            <p style="
                            margin-top: 0;
                            margin-bottom: 6px;
                            font-size: 14px;
                            line-height: 1.2rem;
                          ">
                                Thank you and have a great meeting.
                            </p>
                            <br />
                            <p style="
                            margin-top: 0;
                            margin-bottom: 6px;
                            font-size: 14px;
                            line-height: 1.2rem;
                          ">
                                Best Regards,
                            </p>
                            </p>
                                    <p style="
                                    margin-top: 0;
                                    margin-bottom: 6px;
                                    font-size: 14px;
                                    line-height: 1.2rem;
                                  ">
                                  The CodeYourFuture Team 
                                    </p>
                            <p style="
                margin-top: 35px;
                font-size: 14px;
                line-height: 1.2rem;
              "> <br />
              <br />
              <hr />

                                <a target='_blank' rel='noopener noreferrer'
                                    href="http://codeyourfuture.io">http://codeyourfuture.io</a> - Follow us on
                                <a target='_blank' rel='noopener noreferrer'
                                    href="https://www.facebook.com/codeyourfuture.io/">Facebook</a> and
                                <a target='_blank' rel='noopener noreferrer'
                                    href="https://twitter.com/CodeYourFuture_">Twitter</a><br />
                                Read more about our project on
                                <a target='_blank' rel='noopener noreferrer'
                                    href="https://www.ft.com/content/cd3842d4-8902-11e7-afd2-74b8ecd34d3b">FT,
                                </a>
                                <a target='_blank' rel='noopener noreferrer'
                                    href="https://www.wired.co.uk/article/codeyourfuture-refugee-coding-school">Wired,
                                </a>
                                <a target='_blank' rel='noopener noreferrer'
                                    href="https://www.bbc.co.uk/programmes/p04yzrrg">BBC Tech Tent, </a>
                                <a target='_blank' rel='noopener noreferrer'
                                    href="https://www.unhcr.org/news/stories/2017/1/586e420c7/volunteers-train-refugees-to-crack-into-london-tech-industry.html">UNHCR,
                                </a>and
                                <a target='_blank' rel='noopener noreferrer'
                                    href="https://www.newsdeeply.com/refugees/articles/2016/10/19/welcome-to-londons-refugee-coding-school">
                                    NewsDeeply</a>
                            </p>
                        </div>
                        <footer>
                            <img style="
                display: block;
                margin: 0 auto;
                width: 545px;
                height: 226px;
              " alt="" src="https://cyf-assets-buckets.s3.eu-west-2.amazonaws.com/application-process-images/cyf_brand.png" />
                        </footer>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</tbody>
</table>
`;
};
