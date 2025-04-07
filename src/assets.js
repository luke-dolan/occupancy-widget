export const styles = `
    .widget__container * {
        box-sizing: border-box;
    }        
    h3, p, input {
        margin: 0;
        padding: 0;
    }
    .widget__container {
        box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
        width: 400px;
        overflow: auto;
        position: absolute;
        transition: max-height .2s ease;
        font-family: Helvetica, Arial ,sans-serif;
        background-color: #fff;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 15px;
        background-color: #fff;
    }
    .widget__icon {
        cursor: pointer;
        width: 60%;
        position: absolute;
        top: 18px;
        left: 16px;
        transition: transform .3s ease;
    }
    .widget__hidden {
        transform: scale(0);
    }
    .button__container {
        border: none;
        background-color: #0f172a;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        cursor: pointer;
    }
    .widget__container.hidden {
        max-height: 0px;
    }
    .widget__header {
        padding: 1rem 2rem 1.5rem;
        background-color: #000;
        color: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
    }
    .widget__header h3 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 8px;
    }
    form {
        padding: 2rem 1rem 1.5rem;
    }
    form .form__field {
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
    }
    .form__field label {
        margin-bottom: 8px;
        font-size: 14px;
    }
    .form__field input,
    .form__field textarea {
        border: 1px solid #000000ad;
        border-radius: 3px;
        padding: 8px 10px;
        background-color: #fff;
        color: #0f172a;
    }
    .form__field input {
        height: 48px;
    }
    .form__field textarea::placeholder {
        font-family: Helvetica, Arial ,sans-serif;
    }
    form button {
        height: 48px;
        border-radius: 6px;
        font-size: 18px;
        background-color: #0f172a;
        color: #fff;
        border: 0;
        width: 100%;
        cursor: pointer;
    }
    form button:hover {
        background-color: rgba(0, 0, 0, 95%);
    }
    
    .widget__container {
        position: relative;
    }

    .ucd-box--widget {
      color: #008acc;
      background-color: #ffffff;
    }

    @media all and (min-width: 992px) {
      .ucd-box--widget {
        padding-bottom: 20px;
        padding-top: 28px;
      }
    }

    .ucd-box--widget:hover {
      color: #008acc;
    }

    @media all and (min-width: 768px) {
      .ucd-box--widget .ucd-box__title {
        margin-top: 5px;
      }
    }

    .ucd-box--widget .ucd-box__title span:first-child {
      font-size: 18px;
      font-weight: 700;
    }

    @media all and (min-width: 1440px) {
      .ucd-box--widget .ucd-box__title span:first-child {
        font-size: 20px;
      }
    }

    .ucd-box--widget .ucd-box__title span:nth-child(2) {
      font-size: 14px;
      font-weight: 700;
      margin-top: 5px;
    }
`;