const sendMailTemplate = `<div style="margin: auto; width: 100%;">
  <h3>Hi Shyam Ganesh,</h3>
  <p style="margin-top: 10px; margin-bottom: 10px;">
    You got new mail from {senderName},
  </p>
  <p style="margin-bottom: 10px;">{message}</p>
  <p>Thanks,</p>
  <p>{senderName}</p>
  <p>{designation}</p>
</div>
`;

export default sendMailTemplate;
