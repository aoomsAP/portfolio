// https://docs.web3forms.com/how-to-guides/js-frameworks/react-js/react-js

import styles from "./ContactForm.module.css";
import { useContext, useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { SiteSettingsContext } from "../../contexts/SiteSettingsContext";
import { CustomFormData, PostResult } from "../../types";
import { ThreeDots } from 'react-loader-spinner'

function ContactForm() {
  const { theme, lexicon } = useContext(SiteSettingsContext);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<CustomFormData>({
    mode: "onTouched",
  });

  const maxName = 80;
  const maxMessage = 3000;

  const [isSuccess, setIsSuccess] = useState(false);
  const [nameCount,setNameCount] = useState(0);
  const [messageCount,setMessageCount] = useState(0);
  // success/error message currently not displayed
  const [Message, setMessage] = useState<PostResult>(); 

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: lexicon.contact_defaultname
  });

  useEffect(() => {
    setValue('subject', `${userName} ${lexicon.contact_missioncontrol}`)
  }, [userName, setValue]);

  const onSubmit = async (data: CustomFormData, e: SubmitEvent) => {

    console.log(data);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          console.log(json.message);
          setMessage(json);
          (e.target as HTMLFormElement).reset();
          reset();
        } else {
          setIsSuccess(false);
          console.log(json.message);
          setMessage(json);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        console.log(error);
      });
  };

  return (
    <>
      <section>

        {!isSubmitSuccessful && (<>
          <p>{lexicon.contact_welcome}</p>
          <form className={styles.form}
            onSubmit={handleSubmit(onSubmit)}>
            <input
              type="hidden"
              defaultValue={import.meta.env.VITE_WEB3FORMS_KEY || "web3formsaccesskey"}
              {...register("access_key")}
            />
            <input
              type="hidden"
              {...register("subject")}
            />
            <input
              type="hidden"
              defaultValue="Portfolio Website"
              {...register("from_name")}
            />
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")} />

            <div className={styles.name}>
              <label htmlFor="name">
                {lexicon.contact_name}
              </label><br />
              <input
                id="name"
                // name="name"
                type="text"
                placeholder={lexicon.contact_name}
                autoComplete="false"
                className={`${styles.input} ${errors.name ? styles.input_error : styles.input}`}
                {...register("name", {
                  required: lexicon.contact_name_reminder,
                  maxLength: {
                    value: maxName,
                    message: lexicon.contact_name_validation,
                  }
                })}
                onChange={e => setNameCount(e.target.value.length)}
              />
              <div>
                <small
                  aria-label={lexicon.character_count_alt}
                  className={nameCount < maxName ? styles.character_count : styles.character_count_error}>
                  {nameCount}/{maxName}
                  </small>
              </div>
              {errors.name && (<div>
                <small className={styles.error}>{errors.name.message}</small>
              </div>)}            
            </div>

            <div className={styles.email}>
              <label htmlFor="email_address">
                {lexicon.contact_email}
              </label><br />
              <input
                id="email_address"
                type="email"
                placeholder={lexicon.contact_email}
                // name="email"
                autoComplete="false"
                className={`${styles.input} ${errors.email ? styles.input_error : styles.input}`}
                {...register("email", {
                  required: lexicon.contact_email_reminder,
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: lexicon.contact_email_validation,
                  },
                })}
              />
              {errors.email && (<div>
                <small className={styles.error}>{errors.email.message}</small>
              </div>)}
            </div>

            <div className={styles.message}>
              <label htmlFor="message">
                {lexicon.contact_message}
              </label><br />
              <textarea
                id="message"
                // name="message"
                placeholder={lexicon.contact_message_placeholder}
                rows={10}
                className={`${styles.textarea} ${errors.message ? styles.textarea_error : styles.textarea}`}
                {...register("message", {
                  required: lexicon.contact_message_reminder,
                  maxLength: {
                    value: maxMessage,
                    message: lexicon.contact_message_validation,
                  }
                 })}
                 onChange={e => setMessageCount(e.target.value.length)}
              />
              <div>
                <small
                  aria-label={lexicon.character_count_alt}
                  className={messageCount < maxMessage ? styles.character_count : styles.character_count_error}>
                  {messageCount}/{maxMessage}
                  </small>
              </div>
              {errors.message && (<div>
                <small className={styles.error}>{errors.message.message}</small>
              </div>)}
            </div>

            <button
              type="submit"
              className={styles.submit_button}>
              {isSubmitting ? (
                <ThreeDots
                  visible={true}
                  height=".9rem"
                  width="100%"
                  color={theme == "dark" ? "#390505" : "#fffaee"}
                  radius="9"
                  ariaLabel={lexicon.loading_animation}
                  aria-hidden
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                lexicon.contact_submit_button
              )}
            </button>

          </form>
        </>)}

        {isSubmitSuccessful && isSuccess && (
          <>
            <div className={styles.success_container}>
              <i 
                aria-hidden
                className="bi bi-envelope-check">
              </i>
              <h2>{lexicon.contact_submit_success_title}</h2>
              {Message && <>
              <blockquote>
                <p><strong>{lexicon.contact_from}:</strong> {Message?.data.name} ({Message?.data.email})</p>
                <p><strong>{lexicon.contact_content}:</strong></p>
                <p>{Message?.data.message}</p>
              </blockquote></>}
              <p>{lexicon.contact_submit_success_message}</p>
              <button
                className={styles.submit_button}
                onClick={() => reset()}>
                {lexicon.contact_go_back}
              </button>
            </div>
          </>
        )}

        {isSubmitSuccessful && !isSuccess && (
          <div className={styles.error_container}>
            <i 
            aria-hidden
            className="bi bi-envelope-x">
            </i>
            <h2>{lexicon.contact_submit_error_title}</h2>
            <p>{lexicon.contact_submit_error_message}</p>
            <button
              className={styles.submit_button}
              onClick={() => reset()}>
              {lexicon.contact_try_again}
            </button>
          </div>
        )}

      </section>
    </>
  );
}

export default ContactForm