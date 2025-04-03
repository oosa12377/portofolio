function Connect() {
  return (
    <div className="connect" id="connect">
      <div className="connect-title">
        <div>
          <h1>let's connect</h1>
          <p>
            Say hello at oosa12377@gmail.com for more info, here's my
            <a href="https://drive.google.com/file/d/15X5HG0-g0EGbrtKJWzmqhjEbxadjQIMM/view?usp=sharing">
              resume
            </a>
          </p>
          <div className="connect-icons"></div>
        </div>
      </div>
      <div className="connect-form">
        <form action="">
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">email</label>
          <input type="email" name="mail" id="email" />
          <label htmlFor="subject">subject</label>
          <input type="text" name="" id="subject" />
          <label htmlFor="">message</label>
          <textarea name="" id=""></textarea>

          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
export default Connect;
