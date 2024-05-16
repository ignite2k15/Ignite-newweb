import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <h2 className="title we-do__title">
          <span>c</span>
          <span>•</span>
          <span>o</span>
          <span>•</span>
          <span>n</span>
          <span>•</span>
          <span>t</span>
          <span>•</span>
          <span>a</span>
          <span>•</span>
          <span>c</span>
          <span>•</span>
          <span>t</span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span>u</span>
          <span>•</span>
          <span>s</span>
        </h2>
        <form action="#" className="form" id="form">
          <div className="form__wrapper">
            <label htmlFor="name" className="sr-only">name</label>
            <input type="text" name="name" placeholder="name" className="form__input" />
            <label htmlFor="phone" className="sr-only">phone</label>
            <input type="phone" name="phone" placeholder="phone" className="form__input" />
            <label htmlFor="company" className="sr-only">company</label>
            <input type="text" name="company" placeholder="company" className="form__input" />
            <label htmlFor="position" className="sr-only">position</label>
            <input type="text" name="position" placeholder="position" className="form__input" />
            <label htmlFor="email" className="sr-only">email</label>
            <input type="email" name="email" placeholder="email" className="form__input" />
            <label htmlFor="textarea" className="sr-only">text</label>
            <textarea name="textarea" className="form__input form__input--textarea" placeholder="text"></textarea>
            <input type="hidden" name="footer" />
          </div>
          <button className="form__btn" type="submit" id="send">send</button>
          <div className="responce">
            <p className="responce__text">application has been sent <br />
              You will be contacted shortly</p>
            <button type="reset" className="form__btn form__btn--responce">send again</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Footer;
