"use client";
import { useState } from "react";
import styles from "@/styles/form.module.css";
import { showSwal } from "@/utils/helpers";
import { useLocale, useTranslations } from "next-intl";
import { baseUrl } from "@/utils/baseUrl";

const Form = () => {
  const c = useTranslations("Contact");
  const locale = useLocale();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const submitMessage = async (e: any) => {
    e.preventDefault();

    const items = {
      email,
      name,
      message,
      phone,
    };

    if (phone && phone.length !== 11) {
      showSwal("شماره تلفن باید 11 رقم باشد.", "error", "فهمیدم");
    }

    const res = await fetch(`${baseUrl}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    });
    if (res.status === 422) {
      showSwal("آدرس ایمیل یا شماره همراه صحیح نمی باشد.", "warning", "فهمیدم");
    } else if (res.status === 400) {
      showSwal("لطفا تمام فیلد ها را  با دقت پر نمایید.", "warning", "فهمیدم");
    } else if (res.status === 201) {
      showSwal("در اسرع وقت با شما تماس خواهیم گرفت.", "success", "فهمیدم");
      setEmail("");
      setName("");
      setMessage("");
      setPhone("");
    }
  };

  return (
    <form
      dir={locale === "en" ? "ltr" : "rtl"}
      className={`${styles.form} , w-full , px-2`}
    >
      <span className="text-sm text-gray-700">{c("contact_form")}</span>
      <p className="text-gray-800 dark:text-gray-500">{c("send")}</p>

      <div className={`${styles.groups} , flex-wrap`}>
        <div className={styles.group}>
          <label className="text-gray-800 dark:text-gray-300">
            {c("name")}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.group}>
          <label className="text-gray-800 dark:text-gray-300">
            {c("email")}
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className={`${styles.groups} , flex-wrap`}>
        <div className={styles.group}>
          <label className="text-gray-800 dark:text-gray-300">
            {c("mobile")}
          </label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.group}>
        <label className="text-gray-800 dark:text-gray-300">
          {c("message")}
        </label>
        <textarea
          name=""
          id=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button className="mb-8" onClick={submitMessage}>
        {locale === "id" ? "ارسال پیام" : "send message"}
      </button>
    </form>
  );
};

export default Form;
