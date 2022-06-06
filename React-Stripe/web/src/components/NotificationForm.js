import React, { useRef } from 'react';


function notificationForm(){

    return (
        <div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <input type="submit" value="Send" />
        </form>
        </div>

      );
}
export default notificationForm() ;
